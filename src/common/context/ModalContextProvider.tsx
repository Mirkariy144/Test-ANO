import { createContext, useState } from "react";
import { responseTypes, values } from "../types/responseTypes";

const initialValues: responseTypes = {
  applicationNumber: 0,
  fullName: "",
  citizenship: "",
  passport: "",
  gender: "",
  birthDate: "",
  includedInNPS: "",

  applicationType: "",
  qualification: "",
  site: "",
  representative: "",
  status: "",
  examStatus: { text: "", bool: false },
  paymentDocuments: { text: "", bool: false },
  distributedDocuments: { text: "", bool: false },
  scheduleData: { text: "", bool: false },
  paid: { text: "", bool: false },

  services: [
    {
      serviceName: "",
      paidName: "",
      serviceCost: 0,
      paidStatus: false,
    },
  ],

  examInfo: {
    organization: "",
    examDate: "",
    registrationType: "",
  },
};

export const ModalContext = createContext<values>({
  cardValues: initialValues,
  setCardValues: () => {},
  modalStatus: false,
  setModalStatus: () => {},
});

export function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [cardValues, setCardValues] = useState<responseTypes>(initialValues);

  let value: values = {
    cardValues: cardValues,
    setCardValues: setCardValues,
    modalStatus: modalStatus,
    setModalStatus: setModalStatus,
  };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
