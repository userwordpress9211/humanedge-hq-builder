import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = [
  { name: "HR Audit & Compliance", href: "/services/hr-audit" },
  { name: "HR On-Demand Services", href: "/services/hr-on-demand" },
  { name: "HR Policies & Documentation", href: "/services/hr-policies" },
  { name: "Payroll & Statutory Compliance", href: "/services/payroll-compliance" },
  { name: "Talent & Performance Solutions", href: "/services/talent-performance" },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services", dropdown: services },
  { name: "Why HumanEdge", href: "/why-humanedge" },
  { name: "Industries", href: "/industries" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
         <Link to="/" className="flex items-center">
            <img
              src={
                isScrolled
                  ? "/images/logo-black.png"
                  : "/images/logo-white.png"
              }
              alt="HumanEdge"
              className={`
                transition-all duration-300
                header-logo
              `}
            />
          </Link>



          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.dropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                        isActive(item.href)
                          ? isScrolled
                            ? "text-accent bg-accent/10"
                            : "text-accent bg-accent/20"
                          : isScrolled
                          ? "text-foreground hover:text-accent hover:bg-accent/5"
                          : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-white/10"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-64">
                    {item.dropdown.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link
                          to={subItem.href}
                          className="w-full cursor-pointer"
                        >
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    isActive(item.href)
                      ? isScrolled
                        ? "text-accent bg-accent/10"
                        : "text-accent bg-accent/20"
                      : isScrolled
                      ? "text-foreground hover:text-accent hover:bg-accent/5"
                      : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+917350797442"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-foreground hover:text-accent"
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">+91-7350797442</span>
            </a>
            <Button
              variant={isScrolled ? "accent" : "hero"}
              size="sm"
              asChild
            >
              <Link to="/contact">Free HR Audit</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={isScrolled ? "text-foreground" : "text-primary-foreground"}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xl font-bold text-navy">HumanEdge</span>
                      <span className="text-xs font-medium text-accent uppercase tracking-wider">
                        Business Solutions
                      </span>
                    </div>
                  </div>
                </div>
                <nav className="flex-1 p-6 space-y-1">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                          isActive(item.href)
                            ? "text-accent bg-accent/10"
                            : "text-foreground hover:text-accent hover:bg-accent/5"
                        }`}
                      >
                        {item.name}
                      </Link>
                      {item.dropdown && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="p-6 border-t bg-muted/30">
                  <Button variant="accent" className="w-full" size="lg" asChild>
                    <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Get Free HR Audit
                    </Link>
                  </Button>
                  <a
                    href="tel:+917350797442"
                    className="flex items-center justify-center gap-2 mt-4 text-sm font-medium text-foreground"
                  >
                    <Phone className="h-4 w-4" />
                    +91-7350797442
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
