const WEBSITE_URL = "https://www.bereketli-horjun.com";
const COMPANY_NAME = "Bereketli Horjun";
const LOGO_URL = "https://www.bereketli-horjun.com/android-chrome-192x192.png";
const CONTACT_EMAIL = "info@bereketli-horjun.com";

interface AutoReplyTranslation {
  subject: string;
  title: string;
  greeting: string;
  body1: string;
  body2: string;
  regards: string;
  contactTitle: string;
  linksTitle: string;
  legalTitle: string;
  links: {
    about: string;
    products: string;
    contact: string;
  };
  legal: {
    privacy: string;
    terms: string;
    cookie: string;
  };
  rightsReserved: string;
}

export const autoReplyTranslations: Record<string, AutoReplyTranslation> = {
  en: {
    subject: "Transmission Logged - Bereketli Horjun",
    title: "Data Received",
    greeting: "Attention:",
    body1:
      "Your operational parameters have been securely logged by the Bereketli Horjun network.",
    body2:
      "Our engineering and logistics divisions will review your requirements. You can expect direct communication from an authorized representative within standard 24-hour cycles.",
    regards: "Global Dispatch",
    contactTitle: "Primary Node",
    linksTitle: "Capabilities",
    legalTitle: "Technical Registry",
    links: {
      about: "About Us",
      products: "Services",
      contact: "Initiate Connection",
    },
    legal: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookie: "Cookie Policy",
    },
    rightsReserved: "All rights reserved.",
  }
};

export const getOwnerEmailHtml = (
  fullName: string,
  company: string,
  email: string,
  department: string,
  message: string,
) => `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin: 0; padding: 0; background-color: #030712; font-family: Arial, Helvetica, sans-serif;">
  <div style="max-width: 600px; margin: 40px auto; background-color: #111827; border: 1px solid #374151;">
    
    <!-- Header -->
    <div style="padding: 32px 40px; border-bottom: 2px solid #f97316;">
      <p style="margin: 0 0 8px 0; color: #9ca3af; font-size: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">Внутреннее системное оповещение</p>
      <h2 style="margin: 0; color: #f9fafb; font-size: 18px; text-transform: uppercase; letter-spacing: 1px;">
        Входящие параметры проекта
      </h2>
    </div>

    <!-- Data Grid -->
    <div style="padding: 40px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px; border-collapse: collapse;">
        <tr>
          <td width="50%" style="padding: 20px; border: 1px solid #374151; background-color: #1f2937;">
            <p style="margin: 0; font-size: 10px; font-weight: bold; color: #9ca3af; text-transform: uppercase; letter-spacing: 2px;">Корпоративная единица</p>
            <p style="margin: 8px 0 0 0; font-size: 14px; color: #f9fafb; font-weight: bold;">${company || "Не указано"}</p>
          </td>
          <td width="50%" style="padding: 20px; border: 1px solid #374151; background-color: #111827;">
            <p style="margin: 0; font-size: 10px; font-weight: bold; color: #9ca3af; text-transform: uppercase; letter-spacing: 2px;">Оперативник</p>
            <p style="margin: 8px 0 0 0; font-size: 14px; color: #f9fafb; font-weight: bold;">${fullName}</p>
          </td>
        </tr>
        <tr>
          <td width="50%" style="padding: 20px; border: 1px solid #374151; background-color: #111827;">
            <p style="margin: 0; font-size: 10px; font-weight: bold; color: #9ca3af; text-transform: uppercase; letter-spacing: 2px;">Адрес передачи</p>
            <p style="margin: 8px 0 0 0; font-size: 14px;">
              <a href="mailto:${email}" style="color: #f97316; text-decoration: none; font-weight: bold;">${email}</a>
            </p>
          </td>
          <td width="50%" style="padding: 20px; border: 1px solid #374151; background-color: #1f2937;">
            <p style="margin: 0; font-size: 10px; font-weight: bold; color: #9ca3af; text-transform: uppercase; letter-spacing: 2px;">Целевой сектор</p>
            <p style="margin: 8px 0 0 0; font-size: 14px; color: #f9fafb; text-transform: uppercase; font-weight: bold;">${department || "Общий"}</p>
          </td>
        </tr>
      </table>

      <!-- Message Block -->
      <div style="background-color: #1f2937; border-left: 3px solid #f97316; padding: 24px;">
        <p style="margin: 0 0 12px 0; font-size: 10px; font-weight: bold; color: #9ca3af; text-transform: uppercase; letter-spacing: 2px;">Детали запроса</p>
        <p style="margin: 0; color: #f9fafb; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
      </div>
    </div>

  </div>
</body>
</html>
`;

export const getAutoReplyHtml = (firstName: string, lang: string = "en") => {
  const baseLang = lang.split("-")[0];
  const t = autoReplyTranslations[baseLang] || autoReplyTranslations["en"];
  const currentYear = new Date().getFullYear();

  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin: 0; padding: 0; background-color: #030712; font-family: Arial, Helvetica, sans-serif;">
  <div style="max-width: 600px; margin: 40px auto; background-color: #111827; border: 1px solid #374151;">
    
    <!-- Header with Logo -->
    <div style="padding: 32px 40px; border-bottom: 1px solid #374151; text-align: left;">
      <img src="${LOGO_URL}" alt="${COMPANY_NAME}" style="display: block; max-width: 140px; height: auto; border: none; outline: none;" />
    </div>

    <!-- Body -->
    <div style="padding: 40px; border-bottom: 1px solid #374151;">
      <h2 style="margin: 0 0 24px 0; color: #f9fafb; font-size: 18px; font-weight: black; text-transform: uppercase; letter-spacing: 1px;">
        ${t.title}
      </h2>
      
      <p style="margin: 0 0 16px 0; color: #f97316; font-size: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">
        ${t.greeting} ${firstName}
      </p>
      
      <p style="margin: 0 0 16px 0; color: #d1d5db; font-size: 14px; line-height: 1.7;">
        ${t.body1}
      </p>
      <p style="margin: 0 0 32px 0; color: #d1d5db; font-size: 14px; line-height: 1.7;">
        ${t.body2}
      </p>
      
      <p style="margin: 0; color: #9ca3af; font-size: 10px; font-weight: bold; line-height: 1.6; text-transform: uppercase; letter-spacing: 2px;">
        ${t.regards}<br/>
        <strong style="color: #f9fafb;">${COMPANY_NAME}</strong>
      </p>
    </div>

    <div style="padding: 40px;">
      
      <!-- Top Info -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
        <tr>
          <td valign="top">
            <p style="margin: 0 0 12px 0; font-size: 10px; font-weight: bold; color: #9ca3af; text-transform: uppercase; letter-spacing: 2px;">${t.contactTitle}</p>
            <p style="margin: 0; font-size: 12px; font-weight: bold;">
              <a href="mailto:${CONTACT_EMAIL}" style="color: #f9fafb; text-decoration: none;">${CONTACT_EMAIL}</a>
            </p>
          </td>
        </tr>
      </table>

      <!-- Links Grid -->
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td valign="top" width="50%">
            <p style="margin: 0 0 16px 0; font-size: 10px; font-weight: bold; color: #9ca3af; text-transform: uppercase; letter-spacing: 2px;">${t.linksTitle}</p>
            <a href="${WEBSITE_URL}/about" style="display: block; color: #d1d5db; text-decoration: none; font-size: 12px; margin-bottom: 12px; font-weight: bold;">${t.links.about}</a>
            <a href="${WEBSITE_URL}/services" style="display: block; color: #d1d5db; text-decoration: none; font-size: 12px; margin-bottom: 12px; font-weight: bold;">${t.links.products}</a>
            <a href="${WEBSITE_URL}/contact" style="display: block; color: #d1d5db; text-decoration: none; font-size: 12px; margin-bottom: 12px; font-weight: bold;">${t.links.contact}</a>
          </td>
          <td valign="top" width="50%">
            <p style="margin: 0 0 16px 0; font-size: 10px; font-weight: bold; color: #9ca3af; text-transform: uppercase; letter-spacing: 2px;">${t.legalTitle}</p>
            <a href="${WEBSITE_URL}/privacy" style="display: block; color: #d1d5db; text-decoration: none; font-size: 12px; margin-bottom: 12px; font-weight: bold;">${t.legal.privacy}</a>
            <a href="${WEBSITE_URL}/terms" style="display: block; color: #d1d5db; text-decoration: none; font-size: 12px; margin-bottom: 12px; font-weight: bold;">${t.legal.terms}</a>
            <a href="${WEBSITE_URL}/cookies" style="display: block; color: #d1d5db; text-decoration: none; font-size: 12px; margin-bottom: 12px; font-weight: bold;">${t.legal.cookie}</a>
          </td>
        </tr>
      </table>

      <!-- Copyright -->
      <div style="margin-top: 32px; border-top: 1px solid #374151; padding-top: 24px; text-align: left;">
        <p style="margin: 0; color: #9ca3af; font-size: 10px; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">
          &copy; ${currentYear} ${COMPANY_NAME}. ${t.rightsReserved}
        </p>
      </div>
    </div>

  </div>
</body>
</html>
`;
};