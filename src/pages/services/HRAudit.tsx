import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ClipboardCheck, CheckCircle2, ShieldCheck, FileSearch, AlertTriangle, ListChecks } from "lucide-react";

const deliverables = [
  {
    icon: FileSearch,
    title: "HR Compliance Audit Report",
    description: "Comprehensive documentation of findings across all HR areas.",
  },
  {
    icon: ListChecks,
    title: "Documentation & Process Review",
    description: "Detailed review of your existing HR documentation and processes.",
  },
  {
    icon: AlertTriangle,
    title: "Compliance Gap Analysis",
    description: "Clear identification of compliance gaps and areas of concern.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Heat Map & Action Plan",
    description: "Prioritized action plan with risk assessment for each item.",
  },
];

const auditAreas = [
  "Employment contracts & offer letters",
  "Leave policies & attendance records",
  "Payroll & salary structures",
  "PF, ESIC, PT compliance",
  "Employee handbook & policies",
  "Exit procedures & documentation",
  "Grievance handling processes",
  "Performance management systems",
];

const HRAudit = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                <ClipboardCheck className="h-7 w-7 text-accent" />
              </div>
              <span className="bg-accent text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                Includes FREE Initial Assessment
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              HR Audit & Compliance
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              A structured review of your HR practices to identify compliance gaps, risks, and improvement areas that could impact your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact?type=audit">
                  Get Free HR Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-accent font-semibold mb-3">What You Get</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Comprehensive Audit Deliverables
            </h2>
            <p className="text-muted-foreground">
              Our HR audit provides you with actionable insights and a clear roadmap to compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {deliverables.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <item.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Areas */}
      <section className="section-padding bg-subtle-gradient">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-semibold mb-3">Audit Coverage</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Areas We Review
              </h2>
              <p className="text-muted-foreground mb-8">
                Our comprehensive audit covers all critical HR and compliance areas to ensure nothing is missed.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {auditAreas.map((area) => (
                  <div key={area} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-3xl p-10 shadow-card">
              <h3 className="text-2xl font-bold text-navy mb-4">Free Initial Assessment</h3>
              <p className="text-muted-foreground mb-6">
                We offer a complimentary initial HR health check to help you understand where your organization stands before committing to a full audit.
              </p>
              <ul className="space-y-3 mb-8">
                {["Quick compliance snapshot", "Key risk identification", "Preliminary recommendations", "No obligation"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="accent" size="lg" className="w-full" asChild>
                <Link to="/contact?type=audit">
                  Schedule Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Ensure Compliance?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Don't wait for an audit to find compliance issues. Get ahead with our comprehensive HR audit.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact?type=audit">
              Request Your Free HR Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default HRAudit;
