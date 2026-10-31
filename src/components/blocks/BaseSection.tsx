import { type ComponentProps, forwardRef } from "react";
import { cn } from "../../lib/utils";

export interface BaseSectionProps extends ComponentProps<"section"> {
  withGrid?: boolean;
  spacing?: "normal" | "large" | "none";
}

export const BaseSection = forwardRef<HTMLElement, BaseSectionProps>(
  ({ className, children, withGrid = false, spacing = "normal", ...props }, ref) => {
    
    const spacingStyles = {
      none: "py-0",
      normal: "py-24 md:py-32",
      large: "py-32 md:py-48",
    };

    return (
      <section
        ref={ref}
        className={cn(
          "relative flex flex-col w-full px-6 md:px-12 lg:px-24 overflow-hidden bg-white",
          spacingStyles[spacing],
          className
        )}
        {...props}
      >
        {withGrid && (
          <>
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[24px_24px]" />
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_900px_at_50%_50%,transparent_0%,#ffffff_100%)]" />
          </>
        )}

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col">
          {children}
        </div>
      </section>
    );
  }
);

BaseSection.displayName = "Section";