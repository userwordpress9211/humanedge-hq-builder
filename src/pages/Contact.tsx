import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const services = [
  { value: "hr-audit", label: "HR Audit & Compliance" },
  { value: "hr-on-demand", label: "HR On-Demand Services" },
  { value: "hr-policies", label: "HR Policies & Documentation" },
  { value: "payroll-compliance", label: "Payroll & Statutory Compliance" },
  { value: "talent-performance", label: "Talent & Performance Solutions" },
  { value: "other", label: "Other / General Inquiry" },
];

const Contact = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: searchParams.get("type") === "audit" ? "hr-audit" : "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbwL3N3aThsBhwIjk3XMH6OzqyEJZdBiKrPmsS7u2ibfCE_hRrlEh6a9bPQBdPAvFWTFPw/exec",
      {
        method: "POST",
        mode: "no-cors", // ✅ REQUIRED
        body: JSON.stringify(formData),
      }
    );

    alert("Form submitted successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  } catch (error) {
    alert("Error submitting form");
  } finally {
    setIsSubmitting(false);
  }
};



  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold mb-4">Contact Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Let's Build Better HR Together
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Whether you need a one-time HR audit or ongoing HR support, HumanEdge is here to partner with you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have a question or ready to get started? Reach out to us through any of the channels below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy mb-1">Phone</p>
                    <a href="tel:+917350797442" className="text-muted-foreground hover:text-accent transition-colors">
                      +91-7350797442 (WhatsApp)
                    </a>
                    <br />
                    <a href="tel:+917709428064" className="text-muted-foreground hover:text-accent transition-colors">
                      +91-7709428064
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy mb-1">Email</p>
                    <a href="mailto:info@humanedgebusinesssolutions.com" className="text-muted-foreground hover:text-accent transition-colors break-all">
                      info@humanedgebusinesssolutions.com
                    </a>
                    <br />
                    <a href="mailto:sales@humanedgebusinesssolutions.com" className="text-muted-foreground hover:text-accent transition-colors break-all">
                      sales@humanedgebusinesssolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy mb-1">Service Area</p>
                    <p className="text-muted-foreground">Serving clients across India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy mb-1">Response Time</p>
                    <p className="text-muted-foreground">We respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-10 p-6 bg-[#25D366]/10 rounded-2xl border border-[#25D366]/20">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="h-6 w-6 text-[#25D366]" />
                  <p className="font-semibold text-navy">Quick Connect via WhatsApp</p>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  For faster responses, connect with us on WhatsApp.
                </p>
                <a
                  href="https://wa.me/917350797442?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20HumanEdge%20Business%20Solutions%27%20HR%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#128C7E] transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card">
                <h2 className="text-2xl font-bold text-navy mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91-XXXXXXXXXX"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your HR needs or questions..."
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this form, you agree to our{" "}
                    <a href="/privacy" className="text-accent hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Audit CTA */}
      <section className="py-20 bg-subtle-gradient">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full mb-6">
              <CheckCircle2 className="h-5 w-5" />
              Free Service
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Request a Free HR Audit
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a comprehensive assessment of your HR practices, compliance status, and receive actionable recommendations—absolutely free.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Compliance Review</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Risk Assessment</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Actionable Recommendations</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
