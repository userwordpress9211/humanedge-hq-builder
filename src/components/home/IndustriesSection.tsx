import { SectionHeader } from "@/components/ui/section-header";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Building2, Factory, Monitor, Briefcase } from "lucide-react";

const industries = [
  { icon: Rocket, name: "Startups", description: "Agile HR solutions for fast-growing companies" },
  { icon: Building2, name: "SMEs", description: "Scalable HR frameworks for growing businesses" },
  { icon: Factory, name: "Manufacturing", description: "Compliance-focused HR for industrial operations" },
  { icon: Monitor, name: "IT & Technology", description: "Modern HR practices for tech companies" },
  { icon: Briefcase, name: "Service Businesses", description: "People-centric HR for service industries" },
];

export function IndustriesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeader
          label="Industries We Serve"
          title="HR Solutions Across Sectors"
          description="We understand the unique HR challenges faced by different industries and provide tailored solutions."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-xl bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                <industry.icon className="h-8 w-8 text-navy group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-semibold text-navy mb-2">{industry.name}</h3>
              <p className="text-sm text-muted-foreground">{industry.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
          >
            Learn More About Our Industry Expertise
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
