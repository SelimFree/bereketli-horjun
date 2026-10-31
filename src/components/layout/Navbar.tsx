import { forwardRef, type ComponentProps, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";
import type { NavLinkItem } from "./Layout";
import { Image } from "../ui/Image";
import { useTranslation } from "react-i18next";

import Logo from "../../assets/logo.png";

export interface NavbarProps extends ComponentProps<"header"> {
  links: NavLinkItem[];
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ links, className, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { t } = useTranslation("common");

    useEffect(() => {
      const handleScroll = () => setIsScrolled(window.scrollY > 20);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItemClasses = ({ isActive }: { isActive: boolean }) =>
      cn(
        "group relative py-2 text-sm font-semibold tracking-wide uppercase transition-colors duration-300",
        isActive ? "text-primary-600" : "text-gray-900 hover:text-primary-500"
      );

    const mobileNavItemClasses = ({ isActive }: { isActive: boolean }) =>
      cn(
        "block w-full px-4 py-3 text-sm font-semibold tracking-wide uppercase transition-all duration-300",
        isActive
          ? "bg-primary-50 text-primary-700 border-l-4 border-primary-500"
          : "text-gray-700 border-l-4 border-transparent hover:bg-gray-50 hover:text-primary-600"
      );

    return (
      <header
        ref={ref}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm h-20 md:h-24"
            : "bg-transparent h-24 md:h-28 pt-2 md:pt-4",
          className
        )}
        {...props}
      >
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          <div className="relative flex h-full items-center py-2">
            <Link
              to="/"
              className="relative z-10 flex h-full items-center outline-none group"
            >
              <div className="shrink-0 transition-opacity duration-300 group-hover:opacity-80 flex items-center h-full">
                {/* Unified Logo Image */}
                <Image
                  src={Logo}
                  aspectRatio="auto"
                  alt={"Bereketli Horjun Logo"}
                  className={cn(
                    "object-contain w-auto transition-all duration-300",
                    isScrolled ? "h-14 md:h-16" : "h-16 md:h-20"
                  )}
                  containerClassName="bg-transparent flex items-center justify-center h-full"
                />
              </div>
            </Link>
          </div>

          <nav className="hidden flex-1 items-center justify-center gap-8 px-8 lg:flex">
            {links.map((link) => (
              <NavLink key={link.href} to={link.href} className={navItemClasses}>
                {({ isActive }) => (
                  <>
                    {t(`navbar.${link.label}`)}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-0.5 bg-primary-500 transition-all duration-300 origin-center",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex h-full items-center lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="relative flex h-10 w-10 items-center justify-center overflow-hidden bg-white/20 p-0 text-gray-900 backdrop-blur-sm transition-colors hover:bg-white/50 hover:text-primary-600"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <div className="relative flex h-6 w-6 items-center justify-center">
                <Menu
                  className={cn(
                    "absolute h-6 w-6 transform transition-all duration-300 ease-in-out",
                    isOpen ? "scale-50 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
                  )}
                />
                <X
                  className={cn(
                    "absolute h-6 w-6 transform transition-all duration-300 ease-in-out",
                    isOpen ? "scale-100 rotate-0 opacity-100" : "scale-50 -rotate-90 opacity-0"
                  )}
                />
              </div>
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "absolute top-[calc(100%+0.5rem)] left-4 right-4 z-999 grid bg-white transition-all duration-300 ease-in-out lg:hidden shadow-xl border border-gray-200 overflow-hidden",
            isOpen ? "grid-rows-[1fr] opacity-100 scale-100" : "grid-rows-[0fr] opacity-0 scale-95 pointer-events-none"
          )}
        >
          <div className="overflow-hidden">
            <nav className="flex flex-col space-y-1 p-2">
              {links.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={mobileNavItemClasses}
                >
                  {t(`navbar.${link.label}`)}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 z-99 h-screen w-screen cursor-default bg-black/10 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </header>
    );
  }
);

Navbar.displayName = "Navbar";