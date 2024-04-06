import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const navLinks = [
  { name: "Home", path: "/", icon: HomeIcon, current: true },
  { name: "About", path: "/about", icon: UsersIcon, current: false },
  { name: "Gallery", path: "/gallery", icon: FolderIcon, current: false },
  { name: "Blog", path: "/blog", icon: CalendarIcon, current: false },
  {
    name: "Contact",
    path: "/contact",
    icon: DocumentDuplicateIcon,
    current: false,
  },
];
