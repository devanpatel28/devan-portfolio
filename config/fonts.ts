import { Fira_Code as FontMono, Inter as FontSans,Lexend as FontLexend,Gabarito as FontGabarito } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontLexend = FontLexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export const fontGabarito = FontGabarito({
  subsets: ["latin"],
  variable: "--font-gabarito",
});