"use client";
import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Linker = ({ href, children, className }: Props) => {
  const isExternal =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("www.");

  const finalHref = href.startsWith("http")
    ? href
    : href.startsWith("www.")
    ? `https://${href}`
    : href;

  return (
    <Link
      href={finalHref}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`
        text-primary
        font-medium
        underline
        decoration-secondary-foreground
        decoration-1
        md:underline-offset-4
        hover:decoration-primary
        transition-all duration-200
        ${className}
      `}
    >
      {children}
    </Link>
  );
};

export default Linker;
