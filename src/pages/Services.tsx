import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ClipboardCheck, Headphones, FileText, Calculator, TrendingUp, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "hr-audit",
    icon: ClipboardCheck,
    title: "HR Audit & Compliance",
    description: "A structured review of your HR practices to identify compliance gaps, risks, and improvement areas.",
    highlight: "Includes FREE Initial Assessment",
    deliverables: [
      "HR compliance audit report",
      "Documentation & process review",
      "Compliance gap analysis",
      "Risk heat map & action plan",
    ],
    href: "/services/hr-audit",
  },
  {
    id: "hr-on-demand",
    icon: Headphones,
    title: "HR On-Demand Services",
    description: "Expert HR support without the cost of a full-time HR department. Available when you need it.",
    highlight: "Flexible Support Model",
    deliverables: [
      "Employee lifecycle management",
      "HR operations & day-to-day support",
      "Manager & leadership advisory",
      "Employee relations support",
      "Recruitment assistance",
    ],
    href: "/services/hr-on-demand",
  },
  {
    id: "hr-policies",
    icon: FileText,
    title: "HR Policies & Documentation",
    description: "Customized, legally compliant HR documentation aligned with your company culture.",
    highlight: "Legally Compliant",
    deliverables: [
      "HR policy manual",
      "Employee handbook",
      "Offer letters & employment contracts",
      "SOPs & HR templates",
    ],
    href: "/services/hr-policies",
  },
  {
    id: "payroll-compliance",
    icon: Calculator,
    title: "Payroll & Statutory Compliance",
    description: "Reliable payroll coordination and statutory compliance support to keep your business audit-ready.",
    highlight: "Audit-Ready Solutions",
    deliverables: [
      "Payroll support & coordination",
      "PF, ESIC, PT, LWF compliance",
      "Statutory filings & returns",
      "Compliance calendar & reminders",
    ],
    href: "/services/payroll-compliance",
  },
  {
    id: "talent-performance",
    icon: TrendingUp,
    title: "Talent & Performance Solutions",
    description: "People systems that drive productivity, accountability, and organizational growth.",
    highlight: "Performance Driven",
    deliverables: [
      "Recruitment & hiring support",
      "Performance management frameworks",
      "KPI & role clarity setup",
      "HR process optimization",
    ],
    href: "/services/talent-performance",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold mb-4">Our Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Comprehensive HR Solutions
            </h1>
            <p className="text-xl text-primary-foreground/80">
              From compliance audits to talent management, we provide end-to-end HR solutions tailored to your organization's needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-accent" />
                    </div>
                    <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {service.highlight}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-navy mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  <Button variant="accent" asChild>
                    <Link to={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                {/* Deliverables Card */}
                <div className={`bg-card rounded-3xl p-8 shadow-card ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-lg font-semibold text-navy mb-6">What's Included:</h3>
                  <ul className="space-y-4">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Need Help Choosing the Right Service?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our experts will assess your needs and recommend the best solution for your organization.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
