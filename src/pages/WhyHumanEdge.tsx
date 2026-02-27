import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Users, Clock, Lightbulb, HeartHandshake, Zap } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Compliance-First HR Approach",
    description: "We prioritize statutory compliance and risk management in all our solutions, keeping your business protected.",
  },
  {
    icon: Users,
    title: "Transparent & Flexible Pricing",
    description: "No hidden costs. Our pricing is clear, competitive, and designed to fit businesses of all sizes.",
  },
  {
    icon: HeartHandshake,
    title: "Confidential & Ethical Practices",
    description: "Your trust is paramount. We maintain strict confidentiality and adhere to the highest ethical standards.",
  },
  {
    icon: Clock,
    title: "Quick Response & Dedicated Support",
    description: "We value your time. Expect prompt responses and dedicated support whenever you need us.",
  },
  {
    icon: Zap,
    title: "Optimized Use of Resources",
    description: "We help you maximize your HR investment with efficient processes and practical solutions.",
  },
  {
    icon: Lightbulb,
    title: "Business-Friendly Solutions",
    description: "Our solutions are designed to integrate seamlessly with your business operations.",
  },
];

const WhyHumanEdge = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold mb-4">Why Choose Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Why HumanEdge?
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We're more than just an HR consultancy—we're your strategic partner in building a compliant, efficient, and people-first organization.
            </p>
          </div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <SectionHeader
            label="Our Advantage"
            title="What Sets Us Apart"
            description="We bring a unique combination of expertise, ethics, and efficiency to every engagement."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <reason.icon className="h-7 w-7 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="section-padding bg-subtle-gradient">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Our Promise to You</h2>
            <p className="text-lg text-muted-foreground mb-10">
              When you partner with HumanEdge, you get more than just HR services—you get a dedicated team committed to your success.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Practical, actionable solutions",
                "No corporate jargon—just results",
                "Long-term partnership mindset",
              ].map((promise) => (
                <div key={promise} className="flex items-center gap-3 justify-center">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                  <span className="font-medium text-navy">{promise}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Experience the HumanEdge Difference
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Start with a free consultation and see how we can transform your HR operations.
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

export default WhyHumanEdge;
