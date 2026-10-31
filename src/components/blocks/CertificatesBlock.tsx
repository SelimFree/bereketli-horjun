import { useTranslation } from "react-i18next";
import { ArrowDownToLine } from "lucide-react";
import { BaseSection } from "./BaseSection";
import { FadeIn } from "../utils/FadeIn";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Image } from "../ui/Image"; // Using your custom image component

export function CertificatesBlock() {
  const { t } = useTranslation("about");

  // Notice we added 'file' and 'preview' paths here.
  // These should map to the actual files in your public/ directory.
  const certificates = [
    {
      id: "ISO-9001:2015",
      title: t("CertificatesBlock.items.0.title"),
      scope: t("CertificatesBlock.items.0.scope"),
      year: "2026",
      size: "2.1 MB",
      file: "/certificates/iso-9001.pdf",
      preview: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=200", // Replace with your actual certificate PNG
    },
    {
      id: "EN-1090-2",
      title: t("CertificatesBlock.items.1.title"),
      scope: t("CertificatesBlock.items.1.scope"),
      year: "2025",
      size: "4.8 MB",
      file: "/certificates/en-1090.pdf",
      preview: "https://images.unsplash.com/photo-15842edac4f67-850fdb3db2df?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: "OHSAS-18001",
      title: t("CertificatesBlock.items.2.title"),
      scope: t("CertificatesBlock.items.2.scope"),
      year: "2024",
      size: "1.4 MB",
      file: "/certificates/ohsas-18001.pdf",
      preview: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=200",
    },
  ];

  return (
    <BaseSection withGrid spacing="large" className="bg-white border-b border-gray-200">
      <div className="w-full max-w-[100rem] mx-auto">
        
        {/* Section Header */}
        <FadeIn className="flex flex-col mb-16 md:mb-24">
          <Text className="text-[10px] font-bold tracking-[0.4em] text-primary-500 uppercase mb-6">
            {t("CertificatesBlock.subtitle")}
          </Text>
          <Heading 
            level={2} 
            className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight text-gray-900 leading-[0.9]"
          >
            {t("CertificatesBlock.title1")}<br />
            {t("CertificatesBlock.title2")}
          </Heading>
        </FadeIn>

        {/* The Technical Registry */}
        <div className="flex flex-col border-t border-gray-900">
          
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-8 py-4 px-6 bg-gray-50 border-b border-gray-200">
            <div className="col-span-2">
              <Text className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Document ID</Text>
            </div>
            <div className="col-span-1">
              <Text className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase text-center">Visual</Text>
            </div>
            <div className="col-span-6">
              <Text className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Standard & Scope</Text>
            </div>
            <div className="col-span-3 text-right">
              <Text className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Action</Text>
            </div>
          </div>

          {/* Table Rows */}
          {certificates.map((cert, idx) => (
            <FadeIn 
              key={idx} 
              delay={idx * 100}
              className="group"
            >
              <a 
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start md:items-center py-8 px-0 md:px-6 border-b border-gray-200 transition-colors duration-300 hover:bg-gray-900 w-full"
              >
                
                {/* Column 1: Certificate ID */}
                <div className="col-span-2 flex items-center md:items-start">
                  <Text className="text-xs md:text-sm font-bold tracking-[0.2em] text-primary-500 uppercase transition-colors duration-300">
                    {cert.id}
                  </Text>
                </div>

                {/* Column 2: The Physical Preview Thumbnail */}
                <div className="col-span-1 items-center justify-start md:justify-center hidden md:flex">
                  <Image 
                    src={cert.preview} 
                    alt={cert.id}
                    aspectRatio="square"
                    containerClassName="w-12 h-12 md:w-16 md:h-16 border border-gray-300 group-hover:border-gray-700 transition-colors duration-300 shadow-sm"
                    className="transition-all duration-300"
                  />
                </div>

                {/* Column 3: Title & Scope */}
                <div className="col-span-6 flex flex-col">
                  {/* Mobile-only thumbnail inline with title */}
                  <div className="flex md:hidden items-center gap-4 mb-4">
                    <Image 
                      src={cert.preview} 
                      alt={cert.id}
                      aspectRatio="square"
                      containerClassName="w-12 h-12 border border-gray-300 group-hover:border-gray-700"
                      className="transition-all duration-300"
                    />
                    <Heading level={3} className="text-xl font-black uppercase tracking-tight text-gray-900 group-hover:text-white transition-colors duration-300">
                      {cert.title}
                    </Heading>
                  </div>
                  
                  {/* Desktop title */}
                  <Heading level={3} className="hidden md:block text-2xl font-black uppercase tracking-tight text-gray-900 group-hover:text-white transition-colors duration-300 mb-2">
                    {cert.title}
                  </Heading>
                  
                  <Text className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                    {cert.scope}
                  </Text>
                </div>

                {/* Column 4: Meta & Download Action */}
                <div className="col-span-6 md:col-span-3 flex items-center justify-between md:justify-end mt-2 md:mt-0 w-full">
                  <div className="flex flex-col text-left md:text-right md:mr-8">
                    <Text className="text-[10px] font-bold tracking-widest text-gray-400 group-hover:text-gray-500 uppercase mb-1">
                      Issued {cert.year}
                    </Text>
                    <Text className="text-[10px] font-bold tracking-widest text-gray-300 group-hover:text-gray-600 uppercase">
                      PDF • {cert.size}
                    </Text>
                  </div>
                  
                  <div className="w-12 h-12 bg-gray-100 group-hover:bg-primary-500 flex items-center justify-center transition-colors duration-300 shrink-0">
                    <ArrowDownToLine className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

              </a>
            </FadeIn>
          ))}
        </div>

      </div>
    </BaseSection>
  );
}