import { FadeIn } from "../home-shared/FadeIn";
import { SectionHeader } from "../home-shared/Headings";

export default function ColumnBox({
  header,
  children,
}: {
  header: string;
  children: React.ReactNode;
}) {
  return (
    <FadeIn className="py-16 md:py-24 lg:py-32">
      <section className="relative flex flex-col items-center px-6 pb-16 font-sans md:pb-24 lg:pb-32 gap-9 lg:gap-14">
        <FadeIn className="flex flex-col items-center gap-5 md:gap-6">
          <SectionHeader>{header}</SectionHeader>
          <div className="mt-6"></div>
          {children}
        </FadeIn>
      </section>
    </FadeIn>
  );
}
