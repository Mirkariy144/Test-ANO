import { Box, Card, Modal, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ModalContext } from "../../../common/context/ModalContextProvider";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { MainSpeedDial } from "../../../common/speedDial/MainSpeedDial";

export function ModalItem() {
  const context = useContext(ModalContext);

  const cardValues = context.cardValues;
  const iconStatus = (status: boolean) => {
    if (status) {
      return <CheckIcon color="success" sx={{ bottom: 0 }} />;
    } else {
      return <CloseIcon color="error" sx={{ bottom: 0 }} />;
    }
  };
  const backDropColor = () => {
    if (
      context.cardValues.examStatus.bool &&
      context.cardValues.paymentDocuments.bool &&
      context.cardValues.distributedDocuments.bool &&
      context.cardValues.scheduleData.bool &&
      context.cardValues.distributedDocuments.bool &&
      context.cardValues.scheduleData.bool &&
      context.cardValues.paid.bool
    ) {
      return "rgba(0, 128, 0, 0.3)";
    } else {
      return "rgba(255, 0, 0, 0.3)";
    }
  };
  const closeModal = () => context.setModalStatus(!context.modalStatus);
  return (
    <Modal
      open={context.modalStatus}
      onClose={closeModal}
      slotProps={{
        backdrop: { sx: { backgroundColor: `${backDropColor()}` } },
      }}
    >
      <Card
        sx={{
          width: "70vw",
          height: "95vh",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          overflowY: "auto",
          overflowX: "hidden",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        <div style={{ margin: "5px" }}>
          <Typography
            sx={{
              fontSize: "1rem",
              textAlign: "left",
              textWrap: "wrap",
              fontWeight: "bold",
              borderBottom: "1px solid rgba(0, 0, 0, 0.5)",
            }}
          >
            Заявка №{cardValues.applicationNumber} - {cardValues.fullName}
          </Typography>
          <Typography variant="h5">Сведения о заявителе</Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              textAlign: "left",
              textWrap: "wrap",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Гражданство:</Typography>
            <div>{cardValues.citizenship}</div>
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              textAlign: "left",
              textWrap: "wrap",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              Паспорт серия/номер:
            </Typography>
            <div>{cardValues.passport}</div>
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              textAlign: "left",
              textWrap: "wrap",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Пол:</Typography>
            <div>{cardValues.gender}</div>
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              textAlign: "left",
              textWrap: "wrap",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Дата рождения:</Typography>
            <div>{cardValues.birthDate}</div>
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              textAlign: "left",
              textWrap: "wrap",
              borderBottom: "1px solid rgba(0, 0, 0, 0.5)",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              Включён в состав НРС:
            </Typography>
            <div>{cardValues.includedInNPS}</div>
          </Typography>
          <Typography variant="h5">Сведения о заявке</Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              textAlign: "left",
              textWrap: "wrap",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Тип заявки:</Typography>
            <div>{cardValues.applicationType}</div>
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              textAlign: "left",
              textWrap: "wrap",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Квалификация:</Typography>
            <div>{cardValues.qualification}</div>
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              textAlign: "left",
              textWrap: "wrap",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Площадка:</Typography>
            <div>{cardValues.site}</div>
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              textAlign: "left",
              textWrap: "wrap",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Представитель:</Typography>
            <div>{cardValues.representative}</div>
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              textAlign: "left",
              textWrap: "wrap",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Статус:</Typography>
            <div>{cardValues.status}</div>
            <div>
              {cardValues.examStatus.text}{" "}
              {iconStatus(cardValues.examStatus.bool)}
            </div>
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              textAlign: "left",
              textWrap: "wrap",
              borderBottom: "1px solid rgba(0, 0, 0, 0.5)",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              Отметка готовности:
            </Typography>
            <div>
              {cardValues.paymentDocuments.text}{" "}
              {iconStatus(cardValues.paymentDocuments.bool)}
            </div>
            <div>
              {cardValues.distributedDocuments.text}{" "}
              {iconStatus(cardValues.distributedDocuments.bool)}
            </div>
            <div>
              {cardValues.scheduleData.text}{" "}
              {iconStatus(cardValues.scheduleData.bool)}
            </div>
            <div>
              {cardValues.paid.text} {iconStatus(cardValues.paid.bool)}
            </div>
          </Typography>
          <Typography variant="h5">Услуги</Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              textWrap: "wrap",
              borderBottom: "1px solid rgba(0, 0, 0, 0.5)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {cardValues.services.map((service, index) => {
                return (
                  <span key={service.serviceName}>
                    <div>
                      <div>Стоимость услуги: {service.serviceName}</div>
                      <div>{service.serviceCost} RUB</div>
                    </div>
                    {service.serviceCost && service.paidStatus ? (
                      <div>
                        <div>{service.paidName} оплачено</div>
                        <div>
                          {service.serviceCost} RUB из {service.serviceCost} RUB
                        </div>
                      </div>
                    ) : null}
                  </span>
                );
              })}
            </div>
          </Typography>
          <Typography variant="h5">Информация об экзамене</Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              textAlign: "left",
              textWrap: "wrap",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Площадка:</Typography>
            <div>{cardValues.examInfo.organization}</div>
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              textAlign: "left",
              textWrap: "wrap",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Дата экзамена:</Typography>
            <div>{cardValues.examInfo.examDate}</div>
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              textAlign: "left",
              textWrap: "wrap",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Тип записи:</Typography>
            <div>{cardValues.examInfo.registrationType}</div>
          </Typography>
        </div>
        <MainSpeedDial />
      </Card>
    </Modal>
  );
}
