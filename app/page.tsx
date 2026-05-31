import CTASection from "@/components/CTASection";
import EditorialStatement from "@/components/EditorialStatement";
import FragranceNotes from "@/components/FragranceNotes";
import SilvanusCanvas from "@/components/SilvanusCanvas";

export default function Home() {
  return (
    <main className="noise min-h-[100dvh] bg-void">
      <SilvanusCanvas />
      <FragranceNotes />
      <EditorialStatement />
      <CTASection />
    </main>
  );
}
