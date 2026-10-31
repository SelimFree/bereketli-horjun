import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";
import { useTranslation } from "react-i18next";

export default function NotFoundPage() {
  const { t } = useTranslation("common");

  return (
    <div className="relative flex min-h-[80vh] flex-col items-center justify-center py-24 px-6 text-center overflow-hidden bg-white">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none flex items-center justify-center">
        <span className="text-[15rem] sm:text-[25rem] md:text-[35rem] font-black text-gray-900/5 leading-none">
          404
        </span>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto mt-12 md:mt-0">
        
        <div className="h-1 w-16 bg-primary-500 mb-8" />
        
        <Heading level={1} className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-gray-900 mb-4">
          {t("notFoundPage.title")}
        </Heading>
        
        <Heading level={3} className="text-xs md:text-sm font-bold tracking-[0.2em] text-primary-500 uppercase mb-6">
          {t("notFoundPage.subtitle")}
        </Heading>
        
        <Text className="whitespace-pre-line text-gray-600 leading-relaxed max-w-md mx-auto mb-12">
          {t("notFoundPage.body")}
        </Text>

        <Link to="/">
          <Button 
            className="flex items-center gap-3 rounded-none bg-gray-900 text-white hover:bg-primary-500 border border-gray-900 hover:border-primary-500 transition-colors duration-300 font-bold uppercase tracking-widest text-xs px-8 h-14"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("notFoundPage.returnBtn")}
          </Button>
        </Link>
      </div>
    </div>
  );
}