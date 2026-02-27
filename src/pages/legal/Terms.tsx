import { Layout } from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Terms & Conditions
          </h1>
          <p className="text-primary-foreground/80">Last updated: February 2025</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using the HumanEdge Business Solutions website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Services</h2>
                <p className="text-muted-foreground">
                  HumanEdge Business Solutions provides HR consulting services including but not limited to HR audits, compliance advisory, policy documentation, payroll support, and talent management solutions. The specific scope of services will be defined in individual service agreements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content on this website, including text, graphics, logos, and software, is the property of HumanEdge Business Solutions and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Confidentiality</h2>
                <p className="text-muted-foreground">
                  We maintain strict confidentiality regarding all client information and business details shared with us during our engagements. This obligation extends to all our employees and contractors.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  HumanEdge Business Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with our services. Our total liability shall not exceed the fees paid for the specific services in question.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  For any questions regarding these Terms and Conditions, please contact us at{" "}
                  <a href="mailto:info@humanedgebusinesssolutions.com" className="text-accent hover:underline">
                    info@humanedgebusinesssolutions.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
