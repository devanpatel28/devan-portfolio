import Link from "next/link";

export const Footer = () => {

  return (
    <footer className="w-full border-t border-default-200">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
    {/* Main Footer Content */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      {/* Quick Navigation */}
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-lg mb-2">Quick Navigation</h3>
        <a 
          href="#about" 
          className="font-light text-secondary-foreground hover:text-foreground transition-colors"
        >
          About
        </a>
        <a 
          href="#project" 
          className="font-light text-secondary-foreground hover:text-foreground transition-colors"
        >
          Projects
        </a>
        <a 
          href="#education" 
          className="font-light text-secondary-foreground hover:text-foreground transition-colors"
        >
          Education
        </a>
      </div>

      {/* Contact/Social - Optional */}
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-lg mb-2">Connect</h3>
        <a 
          href="https://github.com/yourusername" 
          target="_blank"
          rel="noopener noreferrer"
          className="font-light text-secondary-foreground hover:text-foreground transition-colors"
        >
          GitHub
        </a>
        <a 
          href="https://linkedin.com/in/yourusername" 
          target="_blank"
          rel="noopener noreferrer"
          className="font-light text-secondary-foreground hover:text-foreground transition-colors"
        >
          LinkedIn
        </a>
        <a 
          href="mailto:your@email.com" 
          className="font-light text-secondary-foreground hover:text-foreground transition-colors"
        >
          Email
        </a>
      </div>

      {/* Additional Column - Optional */}
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-lg mb-2">Resources</h3>
        <a 
          href="#skills" 
          className="font-light text-secondary-foreground hover:text-foreground transition-colors"
        >
          Skills
        </a>
        <a 
          href="#experience" 
          className="font-light text-secondary-foreground hover:text-foreground transition-colors"
        >
          Experience
        </a>
        <a 
          href="#contact" 
          className="font-light text-secondary-foreground hover:text-foreground transition-colors"
        >
          Contact
        </a>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="pt-6 border-t border-default-200">
      <p className="text-sm text-secondary-foreground text-center">
        © {new Date().getFullYear()} Devan Portfolio. All rights reserved.
      </p>
    </div>
  </div>
</footer>

  );
};
