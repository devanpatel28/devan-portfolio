import Link from "next/link";

export const Footer = () => {

  return (
    <div className="w-full flex border-t justify-center border-default-200  h-32">
      <div className="max-w-5xl w-full">
        <div className="flex flex-col">
          <h3>Quick Navigation</h3>
          <a href="#about" className="font-light text-secondary-foreground">About</a>
          <a href="#project" className="font-light text-secondary-foreground">Projects</a>
          <a href="#education" className="font-light text-secondary-foreground">Education</a>
        </div>
        © {new Date().getFullYear()} Devan Portfolio. All rights reserved.
      </div>
    </div>
  );
};
