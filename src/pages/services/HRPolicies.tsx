import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, CheckCircle2, BookOpen, FileSignature, ScrollText, FolderOpen } from "lucide-react";

const documents = [
  {
    icon: BookOpen,
    title: "HR Policy Manual",
    description: "Comprehensive policy documentation covering all HR aspects.",
  },
  {
    icon: ScrollText,
    title: "Employee Handbook",
    description: "Clear, accessible guide for employees on company policies and culture.",
  },
  {
    icon: FileSignature,
    title: "Offer Letters & Contracts",
    description: "Legally compliant employment agreements and offer letters.",
  },
  {
    icon: FolderOpen,
    title: "SOPs & HR Templates",
    description: "Ready-to-use templates and standard operating procedures.",
  },
];

const policies = [
  "Leave & Attendance Policy",
  "Code of Conduct",
  "Anti-Harassment Policy",
  "Disciplinary Policy",
  "Grievance Redressal Policy",
  "Travel & Expense Policy",
  "Confidentiality Policy",
  "Work From Home Policy",
];

const HRPolicies = () => {
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
                <FileText className="h-7 w-7 text-accent" />
              </div>
              <span className="bg-accent text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                Legally Compliant
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              HR Policies & Documentation
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Customized, legally compliant HR documentation aligned with your company culture and statutory requirements.
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

      {/* Documents */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-accent font-semibold mb-3">What We Create</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Comprehensive Documentation
            </h2>
            <p className="text-muted-foreground">
              We create all the essential HR documents your organization needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {documents.map((doc) => (
              <div
                key={doc.title}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <doc.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{doc.title}</h3>
                <p className="text-muted-foreground">{doc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies List */}
      <section className="section-padding bg-subtle-gradient">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-semibold mb-3">Policy Coverage</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Policies We Draft
              </h2>
              <p className="text-muted-foreground mb-8">
                We create comprehensive policies covering all aspects of employee management and workplace governance.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {policies.map((policy) => (
                  <div key={policy} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-foreground">{policy}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-3xl p-10 shadow-card">
              <h3 className="text-2xl font-bold text-navy mb-4">Our Approach</h3>
              <p className="text-muted-foreground mb-6">
                We don't believe in one-size-fits-all. Every document is tailored to your organization's culture, size, and industry.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Customized to your company culture",
                  "Legally compliant with current laws",
                  "Easy to understand & implement",
                  "Regular updates as laws change",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="accent" size="lg" className="w-full" asChild>
                <Link to="/contact">
                  Request a Quote
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
            Need HR Documentation?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let us create professional, compliant HR documents tailored to your organization.
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

export default HRPolicies;
