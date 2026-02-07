import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { DifferentiatorsSection } from "@/components/home/DifferentiatorsSection";
import { ServicesPreviewSection } from "@/components/home/ServicesPreviewSection";
import { CTASection } from "@/components/home/CTASection";
import { IndustriesSection } from "@/components/home/IndustriesSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <DifferentiatorsSection />
      <ServicesPreviewSection />
      <IndustriesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
