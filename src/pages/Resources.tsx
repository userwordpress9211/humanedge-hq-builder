import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Calendar, HelpCircle, BookOpen, Download, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const resources = [
  {
    icon: BookOpen,
    title: "HR Compliance Blogs",
    description: "Stay updated with the latest HR compliance trends, best practices, and regulatory changes.",
    cta: "Coming Soon",
    disabled: true,
  },
  {
    icon: FileText,
    title: "HR Checklists",
    description: "Download ready-to-use checklists for HR audits, onboarding, offboarding, and more.",
    cta: "Coming Soon",
    disabled: true,
  },
  {
    icon: Calendar,
    title: "Compliance Calendar",
    description: "Never miss a deadline with our comprehensive statutory compliance calendar.",
    cta: "Coming Soon",
    disabled: true,
  },
];

const faqs = [
  {
    question: "What is an HR Audit?",
    answer: "An HR Audit is a comprehensive review of your organization's HR policies, practices, documentation, and compliance status. It helps identify gaps, risks, and areas for improvement to ensure your HR function is aligned with legal requirements and best practices.",
  },
  {
    question: "How can HumanEdge help my startup?",
    answer: "We help startups build their HR foundation from scratch—creating essential policies, ensuring compliance, setting up processes, and providing ongoing HR support without the cost of a full-time HR team.",
  },
  {
    question: "What is HR On-Demand?",
    answer: "HR On-Demand is our flexible service model where you get expert HR support exactly when you need it. Whether it's day-to-day HR operations, employee issues, or strategic advice, we're available without the commitment of a full-time hire.",
  },
  {
    question: "What statutory compliances do you handle?",
    answer: "We handle all major statutory compliances including PF (Provident Fund), ESIC (Employee State Insurance), Professional Tax (PT), Labour Welfare Fund (LWF), and related filings and returns.",
  },
  {
    question: "Do you work with companies across India?",
    answer: "Yes! We serve clients across India. Our services are designed to work remotely and can be customized based on state-specific statutory requirements.",
  },
  {
    question: "How do I get started with HumanEdge?",
    answer: "Simply reach out to us for a free consultation. We'll understand your needs, assess your current HR status, and recommend the best solution for your organization.",
  },
];

const Resources = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold mb-4">Resources</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              HR Insights & Resources
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Access helpful resources, guides, and answers to common HR questions.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <SectionHeader
            label="Resources"
            title="Helpful Tools & Content"
            description="We're building a library of resources to help you navigate HR challenges."
          />

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="bg-card rounded-2xl p-8 shadow-card"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <resource.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{resource.title}</h3>
                <p className="text-muted-foreground mb-6">{resource.description}</p>
                <Button
                  variant={resource.disabled ? "secondary" : "accent"}
                  disabled={resource.disabled}
                >
                  {resource.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-subtle-gradient">
        <div className="section-container">
          <SectionHeader
            label="FAQs"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our services and HR practices."
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl px-6 shadow-card border-none"
                >
                  <AccordionTrigger className="text-left font-semibold text-navy hover:text-accent hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Have More Questions?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            We're happy to answer any questions you have about HR, compliance, or our services.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
