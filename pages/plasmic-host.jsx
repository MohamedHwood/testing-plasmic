import * as React from "react";
import {
  PlasmicCanvasHost,
  registerComponent,
} from "@plasmicapp/react-web/lib/host";
import * as MUI from "@mui/material";

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// registerComponent(...)

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}

// Define the components to register
const components = [
  {
    component: MUI.Button,
    name: "MUI Button",
    props: {
      children: { type: "slot", defaultValue: "Click Me" },
      variant: {
        type: "choice",
        options: ["text", "outlined", "contained"],
        defaultValue: "contained",
      },
      color: {
        type: "choice",
        options: [
          "inherit",
          "primary",
          "secondary",
          "success",
          "error",
          "info",
          "warning",
        ],
        defaultValue: "primary",
      },
      size: {
        type: "choice",
        options: ["small", "medium", "large"],
        defaultValue: "medium",
      },
      disabled: { type: "boolean", defaultValue: false },
      fullWidth: { type: "boolean", defaultValue: false },
      href: { type: "string", defaultValue: "" },
      startIcon: { type: "slot" },
      endIcon: { type: "slot" },
      onClick: { type: "eventHandler", argTypes: [] },
    },
  },
  {
    component: MUI.TextField,
    name: "MUI TextField",
    props: {
      label: { type: "string", defaultValue: "Label" },
      variant: {
        type: "choice",
        options: ["standard", "filled", "outlined"],
        defaultValue: "outlined",
      },
      color: {
        type: "choice",
        options: ["primary", "secondary"],
        defaultValue: "primary",
      },
      size: {
        type: "choice",
        options: ["small", "medium"],
        defaultValue: "medium",
      },
      placeholder: { type: "string", defaultValue: "" },
      disabled: { type: "boolean", defaultValue: false },
      fullWidth: { type: "boolean", defaultValue: false },
      onChange: {
        type: "eventHandler",
        argTypes: [{ name: "value", type: "string" }],
      },
    },
  },
  // Add more MUI components here...
];

// Register all components automatically
components.forEach(({ component, name, props }) => {
  registerComponent(component, {
    name,
    importPath: "@mui/material",
    props,
  });
});
