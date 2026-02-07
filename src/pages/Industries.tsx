import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Building2, Factory, Monitor, Briefcase, CheckCircle2 } from "lucide-react";

const industries = [
  {
    icon: Rocket,
    name: "Startups",
    description: "Fast-growing companies need agile HR solutions that scale with them.",
    challenges: [
      "Building HR foundation from scratch",
      "Compliance with limited resources",
      "Creating company culture",
      "Efficient hiring processes",
    ],
    solutions: [
      "Scalable HR frameworks",
      "Essential compliance packages",
      "Culture-building guidance",
      "Recruitment support",
    ],
  },
  {
    icon: Building2,
    name: "SMEs",
    description: "Small and medium enterprises require cost-effective, comprehensive HR solutions.",
    challenges: [
      "Managing HR without dedicated team",
      "Statutory compliance complexity",
      "Employee retention",
      "Performance management",
    ],
    solutions: [
      "HR On-Demand services",
      "Complete compliance management",
      "Engagement strategies",
      "Performance frameworks",
    ],
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Manufacturing units face unique HR challenges with labour laws and workforce management.",
    challenges: [
      "Labour law compliance",
      "Factory Act requirements",
      "Shift management",
      "Worker welfare",
    ],
    solutions: [
      "Comprehensive compliance audits",
      "Statutory documentation",
      "HR process optimization",
      "Welfare program design",
    ],
  },
  {
    icon: Monitor,
    name: "IT & Technology",
    description: "Tech companies need modern HR practices that attract and retain top talent.",
    challenges: [
      "Competitive talent market",
      "Remote work policies",
      "Performance tracking",
      "Employee expectations",
    ],
    solutions: [
      "Employer branding",
      "Remote work frameworks",
      "KPI-based performance systems",
      "Modern HR policies",
    ],
  },
  {
    icon: Briefcase,
    name: "Service Businesses",
    description: "Service-based businesses need people-centric HR that ensures excellent client delivery.",
    challenges: [
      "High employee interaction",
      "Training & development",
      "Quality consistency",
      "Employee motivation",
    ],
    solutions: [
      "Service excellence training",
      "Development programs",
      "Quality HR processes",
      "Recognition systems",
    ],
  },
];

const Industries = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold mb-4">Industries</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We understand the unique HR challenges faced by different industries and provide tailored solutions that address specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                {/* Overview */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <industry.icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-navy mb-4">{industry.name}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{industry.description}</p>

                  <div className="bg-muted/50 rounded-xl p-6 mb-6">
                    <h3 className="font-semibold text-navy mb-4">Common Challenges:</h3>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge) => (
                        <li key={challenge} className="flex items-center gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-navy" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Solutions */}
                <div className={`bg-card rounded-3xl p-8 shadow-card ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-lg font-semibold text-navy mb-6">Our Solutions:</h3>
                  <ul className="space-y-4">
                    {industry.solutions.map((solution) => (
                      <li key={solution} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground">{solution}</span>
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
            Don't See Your Industry?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            We work with organizations across all sectors. Let's discuss how we can help your business.
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

export default Industries;
