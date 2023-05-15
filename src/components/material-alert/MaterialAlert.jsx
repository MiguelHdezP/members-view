import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import AlertTitle from "@mui/material/AlertTitle";
import { LinkButton } from "../linkButton/LinkButton";

export const MaterialAlert = ({
  alertTitle = "",
  alertDesc = "",
  alertLink = "#",
}) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="info">
        <AlertTitle>{alertTitle}</AlertTitle>
        {alertDesc}
        <strong>
          <LinkButton
            text="here"
            href={alertLink}
            customClass="dashboard-alert-link"
          />
        </strong>
      </Alert>
    </Stack>
  );
};
