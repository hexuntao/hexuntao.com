import { FadeIn } from "../home-shared/FadeIn";
import Item, { ItemProps } from "./Item";

export default function Warp({ data }: { data: ItemProps[] }) {
  return (
    <FadeIn delay={0.2}>
      <div className="grid grid-cols-1 mt-4 gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {data?.map((item) => (
          <Item
            key={item.title}
            title={item.title}
            logo={item.logo}
            desc={item.desc}
            link={item.link}
          />
        ))}
      </div>
    </FadeIn>
  );
}
