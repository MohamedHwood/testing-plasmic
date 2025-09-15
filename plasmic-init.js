import { Button, TextField } from "@mui/material";
import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "oWwvoKuXjHMyiEVNYgMWEB",
      token:
        "Zep27nGtdgWv6Kb5zPQdgDqe3tysZ2L1OYJQTkykoENVZ1n5llgUoXQK65B6CesJpScEEfwcdINJWS2eeKw",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);

// Register MUI Button
PLASMIC.registerComponent(Button, {
  name: "MuiButton",
  importPath: "@mui/material",
  props: {
    children: "slot",
    variant: {
      type: "choice",
      options: ["text", "outlined", "contained"],
    },
    color: {
      type: "choice",
      options: ["primary", "secondary", "success", "error", "info", "warning"],
    },
    onClick: "function",
  },
});

// Register MUI TextField
PLASMIC.registerComponent(TextField, {
  name: "MuiTextField",
  importPath: "@mui/material",
  props: {
    label: "string",
    variant: {
      type: "choice",
      options: ["outlined", "filled", "standard"],
    },
    fullWidth: "boolean",
    onChange: "function",
  },
});
