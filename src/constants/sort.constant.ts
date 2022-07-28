import SortNewestIcon from "../assets/svg/sortNewestIcon.svg";
import SortOldestIcon from "../assets/svg/sortOldestIcon.svg";
import SortUnfinishedIcon from "../assets/svg/sortUnfinishedIcon.svg";
import AToZIcon from "../assets/svg/aToZIcon.svg";
import ZToAIcon from "../assets/svg/zToAIcon.svg";

export type SortType =
  | "Terbaru"
  | "Terlama"
  | "A to Z"
  | "Z to A"
  | "Belum Selesai";

export const SORT_TYPE: { value: SortType; label: string; img: string }[] = [
  {
    value: "Terbaru",
    label: "Terbaru",
    img: SortNewestIcon,
  },
  {
    value: "Terlama",
    label: "Terlama",
    img: SortOldestIcon,
  },
  {
    value: "A to Z",
    label: "A to Z",
    img: AToZIcon,
  },
  {
    value: "Z to A",
    label: "Z to A",
    img: ZToAIcon,
  },
  {
    value: "Belum Selesai",
    label: "Belum Selesai",
    img: SortUnfinishedIcon,
  },
];
