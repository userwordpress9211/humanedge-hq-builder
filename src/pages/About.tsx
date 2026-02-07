import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Users, Award, Shield, Heart } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Compliance First",
    description: "We ensure your HR practices meet all statutory and legal requirements.",
  },
  {
    icon: Users,
    title: "People Centric",
    description: "We believe great organizations are built on strong people practices.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We deliver high-quality, actionable solutions that drive results.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Ethical practices and confidentiality are at the core of everything we do.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold mb-4">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Your Trusted HR Partner
            </h1>
            <p className="text-xl text-primary-foreground/80">
              HumanEdge Business Solutions is a professional HR consultancy helping organizations create structured, compliant, and high-performing workplaces.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                label="Who We Are"
                title="Building Better Workplaces"
                align="left"
              />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With hands-on expertise across HR operations, labour law compliance, and people strategy, we act as an extension of your team—ensuring your HR practices are aligned with both business goals and legal requirements.
                </p>
                <p>
                  We partner with startups, SMEs, and growing enterprises across India, providing practical HR solutions that are tailored to each organization's unique needs and culture.
                </p>
                <p>
                  At HumanEdge, we don't just advise—we implement, support, and strengthen your HR foundation.
                </p>
              </div>
              <Button variant="accent" className="mt-8" size="lg" asChild>
                <Link to="/contact">
                  Work With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-card rounded-2xl p-6 shadow-card"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-navy mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-subtle-gradient">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-card rounded-3xl p-10 shadow-card">
              <div className="w-16 h-16 rounded-2xl bg-navy flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-navy mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                At HumanEdge, we strengthen organizations by auditing HR frameworks, delivering on-demand people solutions, and ensuring statutory compliance to drive sustainable business performance.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-3xl p-10 shadow-card">
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-navy mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A future where every organization—regardless of size—operates with confidence, supported by strong and reliable HR practices that enable them to focus on growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your HR?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how HumanEdge can help your organization build a stronger HR foundation.
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

export default About;
