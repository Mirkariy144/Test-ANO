import { responseTypes } from "../../../common/types/responseTypes";

export const response: responseTypes[] = [
  {
    // Общая информация
    applicationNumber: 1909,
    fullName: "Иванов Иван Иванович",
    citizenship: "Российская Федерация",
    passport: "1234/123456",
    gender: "Мужской",
    birthDate: "01.01.1990",
    includedInNPS: "Нет",

    // Тип заявки
    applicationType: "Первичная сдача",
    qualification:
      "Главный инженер проекта (специалист по организации инженерных изысканий) (7 уровень квалификации)",
    site: 'Общество с ограниченной ответственностью "Площадка 1"',
    representative: "Агент 1",
    status: "Обновлено - 25.03.2025, 12:14",
    examStatus: { text: "Экзамен не пройден", bool: false },
    // Отметки готовности
    paymentDocuments: { text: "Документы на оплату готовы", bool: true },
    distributedDocuments: { text: "Документы разнесены", bool: true },
    scheduleData: { text: "Данные расписаны", bool: true },
    paid: { text: "Оплачено", bool: true },

    // Услуги
    services: [
      {
        serviceName: "Тест",
        paidName: "Обучение",
        serviceCost: 20000,
        paidStatus: true,
      },
      {
        serviceName: "Задачи",
        paidName: "Задачи",
        serviceCost: 0,
        paidStatus: true,
      },
      {
        serviceName: "Госпошлина ГИП И",
        paidName: "Пошлина",
        serviceCost: 23100,
        paidStatus: true,
      },
    ],

    // Информация об экзамене
    examInfo: {
      organization:
        "Общество с ограниченной ответственностью «ПРОФСПЕЦУПРАВЛЕНИЕ»",
      examDate: "24.03.2025, 13:00",
      registrationType: "Запись",
    },
  },
  {
    // Общая информация
    applicationNumber: 1910,
    fullName: "Иванов Иван Иванович",
    citizenship: "Российская Федерация",
    passport: "1234/123456",
    gender: "Мужской",
    birthDate: "01.01.1990",
    includedInNPS: "Нет",

    // Тип заявки
    applicationType: "Первичная сдача",
    qualification:
      "Главный инженер проекта (специалист по организации инженерных изысканий) (7 уровень квалификации)",
    site: 'Общество с ограниченной ответственностью "Площадка 1"',
    representative: "Агент 1",
    status: "Обновлено - 25.03.2025, 12:14",
    examStatus: { text: "Экзамен пройден", bool: true },
    paymentDocuments: { text: "Документы на оплату готовы", bool: true },
    distributedDocuments: { text: "Документы разнесены", bool: true },
    scheduleData: { text: "Данные расписаны", bool: true },
    paid: { text: "Оплачено", bool: true },

    // Услуги
    services: [
      {
        serviceName: "Тест",
        paidName: "Обучение",
        serviceCost: 20000,
        paidStatus: true,
      },
      {
        serviceName: "Задачи",
        paidName: "Задачи",
        serviceCost: 0,
        paidStatus: true,
      },
      {
        serviceName: "Госпошлина ГИП И",
        paidName: "Пошлина",
        serviceCost: 23100,
        paidStatus: true,
      },
    ],

    // Информация об экзамене
    examInfo: {
      organization:
        "Общество с ограниченной ответственностью «ПРОФСПЕЦУПРАВЛЕНИЕ»",
      examDate: "24.03.2025, 13:00",
      registrationType: "Запись",
    },
  },
  {
    // Общая информация
    applicationNumber: 1911,
    fullName: "Иванов Иван Иванович",
    citizenship: "Российская Федерация",
    passport: "1234/123456",
    gender: "Мужской",
    birthDate: "01.01.1990",
    includedInNPS: "Нет",

    // Тип заявки
    applicationType: "Первичная сдача",
    qualification:
      "Главный инженер проекта (специалист по организации инженерных изысканий) (7 уровень квалификации)",
    site: 'Общество с ограниченной ответственностью "Площадка 1"',
    representative: "Агент 1",
    status: "Обновлено - 25.03.2025, 12:14",
    examStatus: { text: "Экзамен пройден", bool: true },
    paymentDocuments: { text: "Документы на оплату готовы", bool: true },
    distributedDocuments: { text: "Документы разнесены", bool: true },
    scheduleData: { text: "Данные расписаны", bool: true },
    paid: { text: "Оплачено", bool: true },

    // Услуги
    services: [
      {
        serviceName: "Тест",
        paidName: "Обучение",
        serviceCost: 20000,
        paidStatus: true,
      },
      {
        serviceName: "Задачи",
        paidName: "Задачи",
        serviceCost: 0,
        paidStatus: true,
      },
      {
        serviceName: "Госпошлина ГИП И",
        paidName: "Пошлина",
        serviceCost: 23100,
        paidStatus: true,
      },
    ],

    // Информация об экзамене
    examInfo: {
      organization:
        "Общество с ограниченной ответственностью «ПРОФСПЕЦУПРАВЛЕНИЕ»",
      examDate: "24.03.2025, 13:00",
      registrationType: "Запись",
    },
  },
  {
    // Общая информация
    applicationNumber: 1912,
    fullName: "Иванов Иван Иванович",
    citizenship: "Российская Федерация",
    passport: "1234/123456",
    gender: "Мужской",
    birthDate: "01.01.1990",
    includedInNPS: "Нет",

    // Тип заявки
    applicationType: "Первичная сдача",
    qualification:
      "Главный инженер проекта (специалист по организации инженерных изысканий) (7 уровень квалификации)",
    site: 'Общество с ограниченной ответственностью "Площадка 1"',
    representative: "Агент 1",
    status: "Обновлено - 25.03.2025, 12:14",
    examStatus: { text: "Экзамен пройден", bool: true },
    paymentDocuments: { text: "Документы на оплату готовы", bool: true },
    distributedDocuments: { text: "Документы разнесены", bool: true },
    scheduleData: { text: "Данные расписаны", bool: true },
    paid: { text: "Оплачено", bool: true },

    // Услуги
    services: [
      {
        serviceName: "Тест",
        paidName: "Обучение",
        serviceCost: 20000,
        paidStatus: true,
      },
      {
        serviceName: "Задачи",
        paidName: "Задачи",
        serviceCost: 0,
        paidStatus: true,
      },
      {
        serviceName: "Госпошлина ГИП И",
        paidName: "Пошлина",
        serviceCost: 23100,
        paidStatus: true,
      },
    ],

    // Информация об экзамене
    examInfo: {
      organization:
        "Общество с ограниченной ответственностью «ПРОФСПЕЦУПРАВЛЕНИЕ»",
      examDate: "24.03.2025, 13:00",
      registrationType: "Запись",
    },
  },
];
