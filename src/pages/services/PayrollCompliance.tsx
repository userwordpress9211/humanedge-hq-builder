import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calculator, CheckCircle2, Wallet, CalendarClock, FileCheck, Bell } from "lucide-react";

const services = [
  {
    icon: Wallet,
    title: "Payroll Support & Coordination",
    description: "End-to-end payroll processing support and coordination.",
  },
  {
    icon: FileCheck,
    title: "PF, ESIC, PT, LWF Compliance",
    description: "Complete management of all statutory compliance requirements.",
  },
  {
    icon: CalendarClock,
    title: "Statutory Filings & Returns",
    description: "Timely filing of all required statutory returns and documents.",
  },
  {
    icon: Bell,
    title: "Compliance Calendar & Reminders",
    description: "Never miss a deadline with our proactive reminder system.",
  },
];

const complianceAreas = [
  "Provident Fund (PF) management",
  "ESIC registration & returns",
  "Professional Tax compliance",
  "Labour Welfare Fund",
  "Gratuity calculations",
  "Bonus calculations",
  "Minimum wages compliance",
  "Shop & Establishment Act",
];

const PayrollCompliance = () => {
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
                <Calculator className="h-7 w-7 text-accent" />
              </div>
              <span className="bg-accent text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                Audit-Ready Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Payroll & Statutory Compliance
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Reliable payroll coordination and statutory compliance support to keep your business audit-ready and penalty-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get Started
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

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-accent font-semibold mb-3">What's Included</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Complete Payroll & Compliance Support
            </h2>
            <p className="text-muted-foreground">
              We handle all aspects of payroll processing and statutory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="section-padding bg-subtle-gradient">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-semibold mb-3">Compliance Coverage</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Statutory Areas We Cover
              </h2>
              <p className="text-muted-foreground mb-8">
                We ensure your organization is compliant with all applicable labour laws and statutory requirements.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {complianceAreas.map((area) => (
                  <div key={area} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-3xl p-10 shadow-card">
              <h3 className="text-2xl font-bold text-navy mb-4">Stay Audit-Ready</h3>
              <p className="text-muted-foreground mb-6">
                Don't let compliance issues catch you off guard. Our proactive approach ensures you're always prepared.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Proactive compliance monitoring",
                  "Timely deadline reminders",
                  "Complete documentation",
                  "Penalty avoidance",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="accent" size="lg" className="w-full" asChild>
                <Link to="/contact">
                  Get Compliance Support
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
            Ensure Complete Statutory Compliance
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let us handle your payroll and compliance so you can focus on your business.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default PayrollCompliance;
