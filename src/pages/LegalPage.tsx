import type { ReactNode } from "react";
import { FadeIn } from "../components/utils/FadeIn";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";

interface LegalPageProps {
  title: string;
  lastUpdated?: string;
  content: ReactNode;
}

export default function LegalPage({ title, lastUpdated, content }: LegalPageProps) {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">

      <header className="w-full bg-gray-50 pt-28 pb-12 md:pt-36 md:pb-16 border-b border-gray-200">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" delay={0}>
            <Breadcrumbs className="mb-6 py-0" />
            <Heading className="text-3xl font-black uppercase tracking-tight text-gray-900 md:text-5xl mb-4">
              {title}
            </Heading>
            {lastUpdated && (
              <Text className="text-sm font-medium text-gray-500">
                Last Updated: {lastUpdated}
              </Text>
            )}
          </FadeIn>
        </div>
      </header>

      <main className="w-full grow py-12 md:py-20">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" delay={150}>
            <div className="prose prose-gray max-w-none prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-wide prose-a:text-primary-500 hover:prose-a:text-primary-600">
              {content}
            </div>
          </FadeIn>
        </div>
      </main>

    </div>
  );
}