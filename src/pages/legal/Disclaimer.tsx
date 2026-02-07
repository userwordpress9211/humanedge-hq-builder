import { Layout } from "@/components/layout/Layout";

const Disclaimer = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Disclaimer
          </h1>
          <p className="text-primary-foreground/80">Last updated: February 2025</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">General Information</h2>
                <p className="text-muted-foreground">
                  The information provided on the HumanEdge Business Solutions website is for general informational purposes only. While we strive to keep the information up-to-date and accurate, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or availability of the information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Professional Advice</h2>
                <p className="text-muted-foreground">
                  The content on this website does not constitute professional HR, legal, or business advice. Every organization's situation is unique, and specific advice should be sought for individual circumstances. We recommend consulting with our team or other qualified professionals before making decisions based on the information provided.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">External Links</h2>
                <p className="text-muted-foreground">
                  Our website may contain links to external websites. These links are provided for convenience and do not signify endorsement. We have no control over the content, privacy policies, or practices of external sites and accept no responsibility for them.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  To the fullest extent permitted by law, HumanEdge Business Solutions excludes all liability for any loss or damage arising from the use of this website or reliance on any information provided. This includes, but is not limited to, indirect or consequential losses.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Disclaimer, please contact us at{" "}
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

export default Disclaimer;
