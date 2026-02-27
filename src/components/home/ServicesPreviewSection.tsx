import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { ArrowRight, ClipboardCheck, Headphones, FileText, Calculator, TrendingUp } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "HR Audit & Compliance",
    description: "Structured review of your HR practices to identify compliance gaps, risks, and improvement areas.",
    href: "/services/hr-audit",
    highlight: "Free Initial Assessment",
  },
  {
    icon: Headphones,
    title: "HR On-Demand Services",
    description: "Expert HR support without the cost of a full-time HR department. Available when you need it.",
    href: "/services/hr-on-demand",
    highlight: "Flexible Support",
  },
  {
    icon: FileText,
    title: "HR Policies & Documentation",
    description: "Customized, legally compliant HR documentation aligned with your company culture.",
    href: "/services/hr-policies",
    highlight: "Legally Compliant",
  },
  {
    icon: Calculator,
    title: "Payroll & Statutory Compliance",
    description: "Reliable payroll coordination and statutory compliance support to keep your business audit-ready.",
    href: "/services/payroll-compliance",
    highlight: "Audit-Ready",
  },
  {
    icon: TrendingUp,
    title: "Talent & Performance Solutions",
    description: "People systems that drive productivity, accountability, and organizational growth.",
    href: "/services/talent-performance",
    highlight: "Performance Driven",
  },
];

export function ServicesPreviewSection() {
  return (
    <section className="section-padding bg-subtle-gradient">
      <div className="section-container">
        <SectionHeader
          label="Our Services"
          title="Comprehensive HR Solutions"
          description="From compliance audits to talent management, we cover all aspects of HR to help your organization thrive."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {service.highlight}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-navy mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Link */}
              <div className="flex items-center gap-2 mt-6 text-accent font-semibold">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="navy" size="lg" asChild>
            <Link to="/services">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
