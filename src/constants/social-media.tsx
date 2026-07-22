import { MailIcon } from "lucide-react";
import {
  BsGithub as GithubIcon,
  BsLinkedin as LinkedinIcon,
  // BsInstagram as InstagramIcon,
} from "react-icons/bs";

const iconSize = 20;

export const SOCIAL_MEDIA = [
  {
    title: "Github",
    href: "https://github.com/abdurrozaqf",
    icon: <GithubIcon size={iconSize} />,
    backgroundColor: "bg-gray-800",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/abdurrozaqfakhruddin/",
    icon: <LinkedinIcon size={iconSize} />,
    backgroundColor: "bg-blue-600",
  },
  {
    title: "Email",
    href: "mailto:abdurrozaqfakhruddin@gmail.com",
    icon: <MailIcon size={iconSize} />,
    backgroundColor: "bg-green-600",
  },
  // {
  //   title: "Instagram",
  //   href: "https://instagram.com/abdurrozaqf_",
  //   icon: <InstagramIcon size={iconSize} />,
  //   backgroundColor: "bg-pink-600",
  // },
];
