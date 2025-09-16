import * as React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

export default function PlasmicCard(props) {
  const {
    title,
    subheader,
    children,
    actions,
    onActionClick,
    hoverEffect,
    ...rest
  } = props;

  return (
    <Card
      {...rest}
      sx={{
        transition: "transform 0.2s, box-shadow 0.2s",
        ...(hoverEffect && {
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: 6,
          },
        }),
      }}
    >
      <CardHeader title={title} subheader={subheader} />
      <CardContent>{children}</CardContent>
      {actions && (
        <CardActions>
          <Button onClick={onActionClick}>{actions}</Button>
        </CardActions>
      )}
    </Card>
  );
}
