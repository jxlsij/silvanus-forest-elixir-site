import CTASection from "@/components/CTASection";
import EditorialStatement from "@/components/EditorialStatement";
import FragranceNotes from "@/components/FragranceNotes";
import ScentNavigation from "@/components/ScentNavigation";
import SilvanusCanvas from "@/components/SilvanusCanvas";
import ScrollChoreography from "@/components/ScrollChoreography";

export default function Home() {
  return (
    <main className="noise min-h-[100dvh] bg-void font-feature-editorial">
      <ScrollChoreography />
      <ScentNavigation />
      <SilvanusCanvas />
      <FragranceNotes />
      <EditorialStatement />
      <CTASection />
    </main>
  );
}
