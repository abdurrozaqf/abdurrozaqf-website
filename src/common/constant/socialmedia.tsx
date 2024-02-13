import {
  BsGithub as GithubIcon,
  BsLinkedin as LinkedinIcon,
  BsInstagram as InstagramIcon,
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

    eventName: "Social: Linkedin",
    backgroundColor: "bg-blue-600",
  },
  {
    title: "Instagram",
    href: "https://instagram.com/abdurrozaqf_",
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Instagram",
    backgroundColor: "bg-pink-600",
  },
];
