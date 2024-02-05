/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WeekdayType {
  sunday = "Sunday",
  monday = "Momday",
  tuesday = "Tuesday",
  wednesday = "Wednesday",
  thuresday = "Thuresday",
  friday = "Friday",
  suturday = "Suturday",
}

const isWeekend = (day: WeekdayType): boolean => {
  return day === WeekdayType.sunday || day === WeekdayType.suturday;
};
