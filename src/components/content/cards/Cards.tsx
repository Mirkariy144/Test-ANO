import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { responseTypes } from "../../../common/types/responseTypes";
import { ModalContext } from "../../../common/context/ModalContextProvider";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

export function Cards({ response }: { response: responseTypes }) {
  const context = React.useContext(ModalContext);

  const iconStatus = (status: boolean) => {
    if (status) {
      return <CheckIcon color="success" sx={{ bottom: 0 }} />;
    } else {
      return <CloseIcon color="error" sx={{ bottom: 0 }} />;
    }
  };

  const color = () => {
    if (
      response.examStatus.bool &&
      response.paymentDocuments.bool &&
      response.distributedDocuments.bool &&
      response.scheduleData.bool &&
      response.distributedDocuments.bool &&
      response.scheduleData.bool &&
      response.paid.bool
    ) {
      return "rgba(0, 128, 0, 0.5)";
    } else {
      return "rgba(255, 0, 0, 0.5)";
    }
  };

  const card = (
    <CardContent>
      <Typography
        fontFamily={"sans-serif"}
        sx={{ fontSize: "1rem", textAlign: "left", textWrap: "wrap" }}
        color="textPrimary"
      >
        <span
          style={{ fontWeight: "bold" }}
        >{`Заявка №${response.applicationNumber}`}</span>
        <span>{`- ${response.fullName}`}</span>
      </Typography>
      <Typography
        sx={{ fontSize: "1rem", textAlign: "left", textWrap: "wrap" }}
      >
        <span style={{ fontWeight: "bold" }}>Тип заявки:</span>
        {response.applicationType}
      </Typography>
      <Typography
        sx={{ fontSize: "1rem", textAlign: "left", textWrap: "wrap" }}
      >
        <span style={{ fontWeight: "bold" }}>Квалификация:</span>
        {response.qualification}
      </Typography>
      <Typography
        sx={{ fontSize: "1rem", textAlign: "left", textWrap: "wrap" }}
      >
        <span style={{ fontWeight: "bold" }}>Статус заявки:</span>
        <Typography>
          <span>
            <Typography>
              {response.examStatus.text} {iconStatus(response.examStatus.bool)}
            </Typography>
            <Typography>
              {response.paymentDocuments.text}
              {iconStatus(response.paymentDocuments.bool)}
            </Typography>
          </span>
          <span>
            <Typography>
              {response.distributedDocuments.text}
              {iconStatus(response.distributedDocuments.bool)}
            </Typography>
            <Typography>
              {response.scheduleData.text}
              {iconStatus(response.scheduleData.bool)}
            </Typography>
            <Typography>
              {response.paid.text} {iconStatus(response.paid.bool)}
            </Typography>
          </span>
        </Typography>
      </Typography>
    </CardContent>
  );
  return (
    <Box
      sx={{ marginLeft: "5px", marginTop: "5px", marginRight: "5px" }}
      key={response.applicationNumber}
    >
      <Card
        variant="outlined"
        sx={{
          minHeight: 200,
          width: "100%",
          backgroundColor: `${color()}`,
        }}
        onClick={() => (
          context.setModalStatus(!context.modalStatus),
          context.setCardValues(response)
        )}
      >
        {card}
      </Card>
    </Box>
  );
}
