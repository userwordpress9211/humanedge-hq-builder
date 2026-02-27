import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Headphones, CheckCircle2, Users, Clock, MessageSquare, UserPlus, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Employee Lifecycle Management",
    description: "From onboarding to offboarding, we handle all HR touchpoints.",
  },
  {
    icon: Clock,
    title: "Day-to-Day HR Operations",
    description: "Attendance, leave management, and routine HR tasks handled efficiently.",
  },
  {
    icon: MessageSquare,
    title: "Manager & Leadership Advisory",
    description: "Expert guidance for your leadership team on people matters.",
  },
  {
    icon: HeartHandshake,
    title: "Employee Relations Support",
    description: "Handle grievances, conflicts, and employee concerns professionally.",
  },
  {
    icon: UserPlus,
    title: "Recruitment Assistance",
    description: "Support for your hiring needs from job posting to offer rollout.",
  },
];

const benefits = [
  "No overhead of full-time HR hire",
  "Flexible engagement models",
  "Expert HR professionals",
  "Scalable support as you grow",
  "Quick response times",
  "Confidential handling",
];

const HROnDemand = () => {
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
                <Headphones className="h-7 w-7 text-accent" />
              </div>
              <span className="bg-accent text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                Flexible Support Model
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              HR On-Demand Services
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Expert HR support without the cost of a full-time HR department. Get professional HR guidance exactly when you need it.
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
              Comprehensive HR Support
            </h2>
            <p className="text-muted-foreground">
              We cover all aspects of day-to-day HR operations so you can focus on your core business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
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
              <p className="text-accent font-semibold mb-3">Why HR On-Demand?</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Benefits of Flexible HR Support
              </h2>
              <p className="text-muted-foreground mb-8">
                Get the expertise of an experienced HR team without the commitment and overhead of full-time hires.
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
              <h3 className="text-2xl font-bold text-navy mb-4">How It Works</h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Initial Consultation", desc: "We understand your HR needs and challenges." },
                  { step: "2", title: "Custom Plan", desc: "We create a tailored support plan for your organization." },
                  { step: "3", title: "Ongoing Support", desc: "Access expert HR support whenever you need it." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-semibold text-navy">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="accent" size="lg" className="w-full mt-8" asChild>
                <Link to="/contact">
                  Start Today
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
            Ready for Hassle-Free HR?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let us handle your HR operations while you focus on growing your business.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default HROnDemand;
