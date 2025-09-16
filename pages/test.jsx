import PlasmicCard from "@/components/PlasmicCard";

export default function Test() {
  return (
    <PlasmicCard
      title="Hello World"
      subheader="This is a subheader"
      actions="Click Me"
      onActionClick={() => {}}
      hoverEffect={true}
    />
  );
}
