export const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export const formatDate = (date: Date) =>
  `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

export const sum = (num1: number, num2: number) => num1 + num2;
