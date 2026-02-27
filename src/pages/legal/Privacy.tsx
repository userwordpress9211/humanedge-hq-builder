import { Layout } from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-primary-foreground/80">Last updated: February 2025</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto prose prose-slate">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Introduction</h2>
                <p className="text-muted-foreground">
                  HumanEdge Business Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Information We Collect</h2>
                <p className="text-muted-foreground mb-4">We collect information that you voluntarily provide to us, including:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Company name and job title</li>
                  <li>Information about your HR requirements</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Deliver our HR consulting services</li>
                  <li>Send you relevant information about our services</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Information Sharing</h2>
                <p className="text-muted-foreground">
                  We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our website or conducting our business, provided they agree to keep your information confidential.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
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

export default Privacy;
