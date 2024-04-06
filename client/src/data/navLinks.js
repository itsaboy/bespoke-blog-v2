import {
  ChatBubbleBottomCenterTextIcon,
  DocumentTextIcon,
  HomeIcon,
  PhotoIcon,
  TrashIcon,
  PencilSquareIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export const navLinks = [
  { name: "Home", path: "/", icon: HomeIcon },
  { name: "About", path: "/about", icon: InformationCircleIcon },
  { name: "Gallery", path: "/gallery", icon: PhotoIcon },
  { name: "Blog", path: "/blog", icon: PencilSquareIcon },
  {
    name: "Contact",
    path: "/contact",
    icon: ChatBubbleBottomCenterTextIcon,
  },
];
