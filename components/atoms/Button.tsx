import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const filledShadow = "shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]";

/* Pill-shaped by default — the app's core button style. The md size presses
 * to 99 percent because large buttons should read as tactile rather than
 * animated; compact controls take the 96 percent press. */
export const buttonVariants = cva(
  `inline-flex select-none items-center justify-center font-medium
   transition-[transform,background-color,opacity] duration-150 ease-out
   disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        primary: `bg-ink text-canvas hover:opacity-90 dark:bg-ink dark:text-canvas ${filledShadow}`,
        secondary:
          "bg-surface text-ink shadow-btn hover:bg-inset aria-expanded:bg-hover",
        ghost: "bg-hover-2 text-ink hover:bg-line-strong",
        accent: `bg-brand-blue text-white hover:bg-brand-blue-deep ${filledShadow}`,
        outline:
          "border border-line-strong bg-transparent text-ink hover:bg-hover",
        quiet: "text-ink hover:bg-hover",
      },
      size: {
        xs: "h-7 gap-1 rounded-full px-2.5 text-[12px] font-normal leading-none active:scale-[0.96]",
        sm: "h-[27px] gap-1.5 rounded-full px-3 text-[13px] leading-none active:scale-[0.96]",
        md: "gap-2 rounded-full px-4 py-[9px] text-sm leading-none active:scale-[0.99]",
      },
    },
    defaultVariants: { variant: "secondary", size: "md" },
  },
);

export type ButtonVariant = NonNullable<
  VariantProps<typeof buttonVariants>["variant"]
>;
export type ButtonSize = NonNullable<
  VariantProps<typeof buttonVariants>["size"]
>;

export function Button({
  variant,
  size,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export function ButtonLink({
  variant,
  size,
  className,
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants> & { href: string }) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (/^https?:\/\//.test(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
        {...props}
      />
    );
  }

  return <Link href={href} className={classes} {...props} />;
}
