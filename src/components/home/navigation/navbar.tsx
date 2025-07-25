import Container from "@/components/global/container";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Github, Twitter } from "lucide-react";

const Navbar = async () => {
  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
      <Container reverse>
        <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
          {/* Left: Logo */}
          <div className="flex items-start">
            <Link href="/logo.svg" className="flex items-center gap-2">
              {/* ✅ Replace with your logo */}
              <Image
                src="/logo.svg" // put your SVG in public/logo.svg
                alt="Deployi Logo"
                width={32}  // adjust size as needed
                height={32}
                className="w-auto h-8" // control size with Tailwind
                priority
              />
              <span className="text-lg font-medium">Deployi</span>
            </Link>
          </div>

          {/* Center: Nav Links */}
          <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ul className="flex items-center justify-center gap-8">
              <Link
                href="https://docs.deployi.me"
                className="hover:text-foreground/80 text-sm"
              >
                Docs
              </Link>
              <Link
                href="https://blueprint.deployi.me"
                className="hover:text-foreground/80 text-sm"
              >
                Features
              </Link>
              <Link href="#faq" className="hover:text-foreground/80 text-sm">
                FAQ
              </Link>
              <Link href="#" className="hover:text-foreground/80 text-sm">
                Price
              </Link>
            </ul>
          </nav>

          {/* Right: Social Icons and Buttons */}
          <div className="flex items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/ezeslucky/deployi.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-foreground/70"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://x.com/ezeslucky"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-foreground/70"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <Link
                href="https://app.deployi.me/"
                className={buttonVariants({ size: "sm", variant: "ghost" })}
              >
                Login
              </Link>
              <Link
                href="https://app.deployi.me/register"
                className={buttonVariants({
                  size: "sm",
                  className: "hidden md:flex",
                })}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
