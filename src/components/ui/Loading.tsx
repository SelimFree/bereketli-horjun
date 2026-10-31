import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import Logo from "../../assets/logo.png";

export function Loading({ className }: { className?: string }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn("relative flex min-h-[60vh] w-full flex-col items-center justify-center bg-gray-50 overflow-hidden", className)}>
      
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[24px_24px]" />
      
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_800px_at_50%_50%,transparent_0%,#f9fafb_100%)]" />

      <div className="relative z-10 flex flex-col items-center gap-8">
   
        <img 
          src={Logo} 
          alt="Bereketli Horjun" 
          className="h-16 md:h-24 w-auto object-contain transition-all duration-2500 ease-in-out"
          style={{ 
            clipPath: isMounted ? "inset(0 0 0 0)" : "inset(0 100% 0 0)" 
          }}
        />
        <div className="h-px w-48 bg-gray-200 overflow-hidden">
          <div 
            className={cn(
              "h-full w-full bg-primary-500 origin-left transition-transform duration-2500ms ease-in-out",
              isMounted ? "scale-x-100" : "scale-x-0"
            )}
          />
        </div>

      </div>
    </div>
  );
}