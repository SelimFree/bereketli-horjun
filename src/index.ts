import {
  getOwnerEmailHtml,
  getAutoReplyHtml,
  autoReplyTranslations,
} from "./templates";

export interface Env {
  RESEND_API_KEY: string;
  RESEND_OWNER_EMAIL: string;
  ASSETS: any;
}

interface InquiryPayload {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  department: string;
  message: string;
  user_lang: string;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (url.pathname === "/api/send" && request.method === "POST") {
      try {
        const body = (await request.json()) as InquiryPayload;
        const {
          firstName,
          lastName,
          company,
          email,
          department,
          message,
          user_lang,
        } = body;

        const resendHeaders = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
        };

        const localizedSubject =
          autoReplyTranslations[user_lang]?.subject ||
          autoReplyTranslations["en"].subject;
        const fullName = `${firstName} ${lastName}`;

        const ownerEmailPayload = fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: resendHeaders,
          body: JSON.stringify({
            from: `<${env.RESEND_OWNER_EMAIL}>`,
            to: [env.RESEND_OWNER_EMAIL],
            reply_to: email,
            subject: `Запрос: ${company} (${department})`,
            html: getOwnerEmailHtml(
              fullName,
              company,
              email,
              department,
              message,
            ),
          }),
        });

        const autoReplyPayload = fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: resendHeaders,
          body: JSON.stringify({
            from: `Bereketli Horjun <${env.RESEND_OWNER_EMAIL}>`,
            to: [email],
            subject: localizedSubject,
            html: getAutoReplyHtml(firstName, user_lang),
          }),
        });

        const [ownerRes, autoReplyRes] = await Promise.all([
          ownerEmailPayload,
          autoReplyPayload,
        ]);

        if (ownerRes.ok && autoReplyRes.ok) {
          return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          });
        } else {
          const ownerErr = !ownerRes.ok ? await ownerRes.text() : "OK";
          const autoErr = !autoReplyRes.ok ? await autoReplyRes.text() : "OK";

          console.error("Resend API Errors:", {
            owner: ownerErr,
            autoReply: autoErr,
          });
          throw new Error(
            "Transmission failure: One or more routing protocols failed.",
          );
        }
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error ? error.message : "Server error";

        return new Response(
          JSON.stringify({ success: false, error: errorMessage }),
          {
            status: 500,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          },
        );
      }
    }

    try {
      let response = await env.ASSETS.fetch(request);
      if (response.status === 404) {
        const indexRequest = new Request(new URL("/", request.url), request);
        response = await env.ASSETS.fetch(indexRequest);
      }
      return response;
    } catch (e) {
      return new Response(`Not Found: ${e}`, { status: 404 });
    }
  },
};