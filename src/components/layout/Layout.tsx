import { type ComponentProps, forwardRef } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { cn } from "../../lib/utils";
import { BackToTop } from "../ui/BackToTop";
import { CookieBanner } from "../ui/CookieBanner";
import Logo from "../../assets/logo.png";

export type NavLinkItem = {
  label: string;
  href: string;
};

const globalNavLinks: NavLinkItem[] = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "services", href: "/services" },
  { label: "contact", href: "/contact" },
];

const shutterEasing: [number, number, number, number] = [0.22, 1, 0.36, 1];

const topShutterVariants: Variants = {
  initial: { y: "0%" },
  animate: { 
    y: "-100%", 
    transition: { duration: 0.8, ease: shutterEasing, delay: 0.2 } 
  },
  exit: { 
    y: "0%", 
    transition: { duration: 0.5, ease: shutterEasing } 
  },
};

const bottomShutterVariants: Variants = {
  initial: { y: "0%" },
  animate: { 
    y: "100%", 
    transition: { duration: 0.8, ease: shutterEasing, delay: 0.2 } 
  },
  exit: { 
    y: "0%", 
    transition: { duration: 0.5, ease: shutterEasing } 
  },
};

export const Layout = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    const location = useLocation();
    const element = useOutlet();

    return (
      <div
        ref={ref}
        className={cn("flex min-h-screen flex-col bg-white text-gray-900 font-sans", className)}
        {...props}
      >
        <Navbar links={globalNavLinks} />

        <main className="grow relative flex flex-col w-full">
          <AnimatePresence
            mode="wait"
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <motion.div
              key={location.pathname}
              className="flex flex-col grow w-full"
            >
              
              {element}

              <motion.div
                className="fixed top-0 left-0 right-0 z-9999 h-[50vh] bg-white overflow-hidden pointer-events-none"
                variants={topShutterVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[24px_24px]" />
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_800px_at_50%_100%,transparent_0%,#ffffff_100%)]" />
                
                <div className="absolute bottom-0 left-0 h-0.5 bg-primary-500 w-[calc(50%-80px)] md:w-[calc(50%-120px)] z-10" />
                <div className="absolute bottom-0 right-0 h-0.5 bg-primary-500 w-[calc(50%-80px)] md:w-[calc(50%-120px)] z-10" />
                
                <img 
                  src={Logo} 
                  alt="Bereketli Horjun" 
                  className="absolute bottom-0 left-1/2 h-16 md:h-20 w-auto -translate-x-1/2 translate-y-1/2 object-contain z-20" 
                />
              </motion.div>

              <motion.div
                className="fixed bottom-0 left-0 right-0 z-9999 h-[50vh] bg-white overflow-hidden pointer-events-none"
                variants={bottomShutterVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[24px_24px]" />
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_800px_at_50%_0%,transparent_0%,#ffffff_100%)]" />

                <div className="absolute top-0 left-0 h-0.5 bg-primary-500 w-[calc(50%-80px)] md:w-[calc(50%-120px)] z-10" />
                <div className="absolute top-0 right-0 h-0.5 bg-primary-500 w-[calc(50%-80px)] md:w-[calc(50%-120px)] z-10" />
                
                <img 
                  src={Logo} 
                  alt="" 
                  className="absolute top-0 left-1/2 h-16 md:h-20 w-auto -translate-x-1/2 -translate-y-1/2 object-contain z-20" 
                />
              </motion.div>

            </motion.div>
          </AnimatePresence>
        </main>

        <BackToTop />
        <CookieBanner />
        <Footer links={globalNavLinks} />
      </div>
    );
  }
);

Layout.displayName = "Layout";