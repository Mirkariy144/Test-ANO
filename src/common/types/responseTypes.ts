interface servicesTypes {
  serviceName: string;
  paidName: string;
  serviceCost: number;
  paidStatus: boolean;
}
export interface responseTypes {
  applicationNumber: number;
  fullName: string;
  citizenship: string;
  passport: string;
  gender: string;
  birthDate: string;
  includedInNPS: string;
  applicationType: string;
  qualification: string;
  site: string;
  representative: string;
  status: string;
  examStatus: { text: string; bool: boolean };
  paymentDocuments: { text: string; bool: boolean };
  distributedDocuments: { text: string; bool: boolean };
  scheduleData: { text: string; bool: boolean };
  paid: { text: string; bool: boolean };

  services: servicesTypes[];

  examInfo: {
    organization: string;
    examDate: string;
    registrationType: string;
  };
}

export interface values {
  cardValues: responseTypes;
  setCardValues: React.Dispatch<React.SetStateAction<responseTypes>>;
  modalStatus: boolean;
  setModalStatus: React.Dispatch<React.SetStateAction<boolean>>;
}
