import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const services = [
  { name: "HR Audit & Compliance", href: "/services/hr-audit" },
  { name: "HR On-Demand Services", href: "/services/hr-on-demand" },
  { name: "HR Policies & Documentation", href: "/services/hr-policies" },
  { name: "Payroll & Statutory Compliance", href: "/services/payroll-compliance" },
  { name: "Talent & Performance Solutions", href: "/services/talent-performance" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Why HumanEdge", href: "/why-humanedge" },
  { name: "Industries We Serve", href: "/industries" },
  { name: "Resources", href: "/resources" },
  { name: "Contact Us", href: "/contact" },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Disclaimer", href: "/disclaimer" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary-foreground">HumanEdge</h3>
              <p className="text-sm font-medium text-accent mt-1 uppercase tracking-wider">
                Business Solutions
              </p>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              People. Process. Performance.
              <br /><br />
              Professional HR consultancy helping organizations build strong, compliant, and people-driven workplaces.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-foreground">Our Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-foreground">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-foreground">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+917350797442"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                >
                  <Phone className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>
                    +91-7350797442 (WhatsApp)
                    <br />
                    +91-7709428064
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@humanedgebusinesssolutions.com"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                >
                  <Mail className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>
                    info@humanedgebusinesssolutions.com
                    <br />
                    sales@humanedgebusinesssolutions.com
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Serving clients across India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} HumanEdge Business Solutions. All rights reserved.
            </p>
            <div className="flex gap-6">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
