import { ListBox, Item } from "@/lib/components/core/default/list-box";

export default function Demo() {
  return (
    <ListBox aria-label="Framework" layout="grid">
      <Item>Next.js</Item>
      <Item>Remix</Item>
      <Item>Astro</Item>
      <Item>Gatsby</Item>
    </ListBox>
  );
}
