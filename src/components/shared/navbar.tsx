import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link href="/" className="font-bold text-lg tracking-tight">
            Niraj<span className="text-primary">.dev</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4">
            <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Skills
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <ModeToggle />

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <Link href="#contact" className={buttonVariants({ variant: "default" })}>
              Contact Me
            </Link>
          </div>

          {/* Mobile Navigation (Hamburger Menu) */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger render={<Button variant="ghost" size="icon" />}>
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle mobile menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="!h-fit !bottom-auto pb-8 rounded-bl-2xl">
                <SheetHeader>
                  <SheetTitle className="text-center">Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col items-center gap-6 mt-8">
                  <Link href="#about" className="text-lg font-medium hover:text-primary transition-colors">
                    About
                  </Link>
                  <Link href="#experience" className="text-lg font-medium hover:text-primary transition-colors">
                    Experience
                  </Link>
                  <Link href="#projects" className="text-lg font-medium hover:text-primary transition-colors">
                    Projects
                  </Link>
                  <Link href="#skills" className="text-lg font-medium hover:text-primary transition-colors">
                    Skills
                  </Link>
                  <Link href="#contact" className={`mt-4 w-3/4 max-w-[200px] text-center ${buttonVariants({ variant: "default" })}`}>
                    Contact Me
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
}
