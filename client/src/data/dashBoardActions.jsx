import {
  CameraIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentTextIcon,
  HomeIcon,
  PhotoIcon,
  TrashIcon,
  PencilSquareIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export const actions = [
  {
    title: "Create a Blog Post",
    description:
      "Unleash your creativity by drafting engaging content for your audience.",
    path: "/dashboard/new-blog-post",
    icon: PencilSquareIcon,
    iconForeground: "text-green-400/80",
    iconBackground: "bg-gray-800",
  },
  {
    title: "Create a Gallery Post",
    description:
      "Showcase your latest visuals in a post that captures eyes and hearts.",
    path: "/dashboard/new-gallery-post",
    icon: CameraIcon,
    iconForeground: "text-green-400/80",
    iconBackground: "bg-gray-800",
  },
  {
    title: "Create Contact Info",
    description:
      "Make it easy for visitors to reach out by providing your contact details.",
    path: "/dashboard/new-contact-info",
    icon: ChatBubbleBottomCenterTextIcon,
    iconForeground: "text-green-400/80",
    iconBackground: "bg-gray-800",
  },
  {
    title: "Edit Home Page",
    description:
      "Refresh your home page to keep it lively and welcoming for new visitors.",
    path: "#",
    icon: HomeIcon,
    iconForeground: "text-blue-400/80",
    iconBackground: "bg-gray-800",
  },
  {
    title: "Edit About Page",
    description: "Update your story to connect personally with your audience.",
    path: "#",
    icon: InformationCircleIcon,
    iconForeground: "text-blue-400/80",
    iconBackground: "bg-gray-800",
  },
  {
    title: "Edit Gallery Page",
    description:
      "Update the gallery page to reflect current themes or exhibitions.",
    path: "#",
    icon: PhotoIcon,
    iconForeground: "text-blue-400/80",
    iconBackground: "bg-gray-800",
  },
  {
    title: "Edit Blog Page",
    description: "Revitalize your blog page to enhance visitor engagement.",
    path: "#",
    icon: DocumentTextIcon,
    iconForeground: "text-blue-400/80",
    iconBackground: "bg-gray-800",
  },
  {
    title: "Delete a Gallery Post",
    description:
      "Tidy up your image feed by discarding outdated or less impactful visuals.",
    path: "#",
    icon: TrashIcon,
    iconForeground: "text-red-400/80",
    iconBackground: "bg-gray-800",
  },
  {
    title: "Delete a Blog Post",
    description:
      "Clean up your blog by removing posts that are no longer relevant.",
    path: "#",
    icon: TrashIcon,
    iconForeground: "text-red-400/80",
    iconBackground: "bg-gray-800",
  },
  {
    title: "Delete Contact Info",
    description:
      "Remove outdated contact information to keep your site's details accurate.",
    path: "#",
    icon: TrashIcon,
    iconForeground: "text-red-400/80",
    iconBackground: "bg-gray-800",
  },
];
