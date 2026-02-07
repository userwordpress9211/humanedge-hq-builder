import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, CheckCircle2, UserPlus, Target, Gauge, Settings } from "lucide-react";

const services = [
  {
    icon: UserPlus,
    title: "Recruitment & Hiring Support",
    description: "End-to-end recruitment assistance from job posting to offer rollout.",
  },
  {
    icon: Target,
    title: "Performance Management Frameworks",
    description: "Design and implement effective performance review systems.",
  },
  {
    icon: Gauge,
    title: "KPI & Role Clarity Setup",
    description: "Define clear KPIs and role expectations for every position.",
  },
  {
    icon: Settings,
    title: "HR Process Optimization",
    description: "Streamline and optimize your existing HR processes.",
  },
];

const benefits = [
  "Attract top talent effectively",
  "Improve employee productivity",
  "Drive accountability at all levels",
  "Align individual goals with business objectives",
  "Reduce employee turnover",
  "Build high-performing teams",
];

const TalentPerformance = () => {
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
                <TrendingUp className="h-7 w-7 text-accent" />
              </div>
              <span className="bg-accent text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                Performance Driven
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Talent & Performance Solutions
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              People systems that drive productivity, accountability, and sustainable organizational growth.
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
              Comprehensive Talent Solutions
            </h2>
            <p className="text-muted-foreground">
              From hiring the right people to managing their performance, we've got you covered.
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

      {/* Benefits */}
      <section className="section-padding bg-subtle-gradient">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-semibold mb-3">Benefits</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Drive Organizational Success
              </h2>
              <p className="text-muted-foreground mb-8">
                Our talent and performance solutions help you build a high-performing organization that achieves its goals.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-3xl p-10 shadow-card">
              <h3 className="text-2xl font-bold text-navy mb-4">Our Approach</h3>
              <p className="text-muted-foreground mb-6">
                We work closely with you to understand your business goals and create talent solutions that drive results.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Aligned with business objectives",
                  "Data-driven recommendations",
                  "Practical implementation support",
                  "Ongoing optimization",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="accent" size="lg" className="w-full" asChild>
                <Link to="/contact">
                  Build High-Performing Teams
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
            Ready to Optimize Your Talent Strategy?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let us help you build the team and systems that drive business success.
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

export default TalentPerformance;
