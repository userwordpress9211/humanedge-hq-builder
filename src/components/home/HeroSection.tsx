import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Compliance-First Approach",
  "Trusted by SMEs & Startups",
  "Pan-India Service Coverage",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/30 to-transparent rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="section-container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse-soft" />
              <span className="text-sm font-medium text-primary-foreground/90">
                On-Demand HR Services
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Build Strong, Compliant &{" "}
              <span className="text-accent">People-Driven</span> Workplaces
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              From HR audits and compliance to on-demand HR support, we simplify people management so you can focus on growing your business.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get Free HR Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact?type=audit">Request Free HR Audit</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-primary-foreground/80"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex justify-center items-center animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center">
                      <CheckCircle2 className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-primary-foreground">
                        FREE HR Health Check
                      </p>
                      <p className="text-sm text-primary-foreground/70">
                        Understand where your organization stands
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      "HR Compliance Audit",
                      "Documentation Review",
                      "Risk Assessment",
                      "Action Plan & Recommendations",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent">
                          {index + 1}
                        </div>
                        <span className="text-sm text-primary-foreground/90">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="hero" className="w-full" size="lg" asChild>
                    <Link to="/contact?type=audit">
                      Schedule Free Audit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-accent rounded-2xl px-5 py-4 shadow-xl">
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-xs text-white/80">Compliance Focus</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 50L48 45.8C96 41.7 192 33.3 288 35.8C384 38.3 480 51.7 576 54.2C672 56.7 768 48.3 864 43.3C960 38.3 1056 36.7 1152 40.8C1248 45 1344 55 1392 60L1440 65V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
