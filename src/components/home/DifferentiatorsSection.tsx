import { SectionHeader } from "@/components/ui/section-header";
import { Shield, Users, Clock, Award } from "lucide-react";

const differentiators = [
  {
    icon: Shield,
    title: "Compliance-First Approach",
    description:
      "Practical HR solutions with strong focus on statutory compliance and risk management.",
  },
  {
    icon: Users,
    title: "Tailored HR Solutions",
    description:
      "Customized strategies designed specifically for your business needs and company culture.",
  },
  {
    icon: Clock,
    title: "Flexible HR-On-Demand",
    description:
      "Expert HR support when you need it, without the overhead of a full-time HR department.",
  },
  {
    icon: Award,
    title: "Trusted Partner",
    description:
      "Proven track record with startups, SMEs, and growing enterprises across India.",
  },
];

export function DifferentiatorsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeader
          label="Why Choose Us"
          title="What Makes HumanEdge Different"
          description="We don't just advise—we implement, support, and strengthen your HR foundation."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <item.icon className="h-7 w-7 text-accent group-hover:text-white transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-navy mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
