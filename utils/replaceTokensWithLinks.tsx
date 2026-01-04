import React from "react";
import Linker from "@/components/link";

export type TokenMap = Record<
  string,
  {
    label: string;
    url: string;
  }
>;

export function replaceTokensWithLinks(
  text: string,
  tokens?: TokenMap,
): React.ReactNode {
  const parts = text.split(/(\{\{.*?\}\}|\[\[.*?\]\])/g);

  return parts.map((part, index) => {
    // {{TOKEN}}
    if (part.startsWith("{{") && part.endsWith("}}")) {
      const key = part.slice(2, -2);
      const token = tokens?.[key];

      if (!token) return null;

      return (
        <Linker key={index} href={token.url}>
          {token.label}
        </Linker>
      );
    }

    // [[BOLD]]
    if (part.startsWith("[[") && part.endsWith("]]")) {
      return (
        <strong key={index} className="font-medium text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return <span key={index}>{part}</span>;
  });
}
