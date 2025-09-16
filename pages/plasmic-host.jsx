import * as React from "react";
import {
  PlasmicCanvasHost,
  registerComponent,
} from "@plasmicapp/react-web/lib/host";
import PlasmicCard from "../components/PlasmicCard";

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}

registerComponent(PlasmicCard, {
  name: "PlasmicCard",
  importPath: "../components/PlasmicCard",
  props: {
    title: { type: "string", defaultValue: "Card Title" },
    subheader: { type: "string", defaultValue: "Subtitle" },
    children: {
      type: "slot",
      defaultValue: "This is the card content.",
    },
    actions: { type: "string", defaultValue: "Ok" },
    onActionClick: { type: "eventHandler", argTypes: [] },
    hoverEffect: {
      type: "boolean",
      defaultValue: true,
      description: "Enable lift and shadow on hover",
    },
  },
});
