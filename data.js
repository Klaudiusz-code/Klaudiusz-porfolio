
import { FaHome, FaClipboardList } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { IoMdHome, IoMdMail } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { SlArrowRight } from "react-icons/sl";
import { FaLaptopCode } from "react-icons/fa";
import { FaRegCopy,  FaPhone } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";


//social icons
import { FaFacebookMessenger, FaDiscord, FaSlack, FaLinkedin, FaGithub } from "react-icons/fa";

const MenuLinks = [
    {
        icon: <IoMdHome />,
        link: "/",
        name: 'Home'
    },
    {
        icon: <GrProjects />,
        link: "/projects",
        name: 'Project',
    },
    {
        icon: <MdDesignServices />,
        link: "/services",
        name: 'Services',
    },
    {
        icon: <HiOutlineMail />,
        link: "/contact",
        name: 'Contact',
    },
];


const MySkills = [
    {
        name: 'HTML',
        icon: <SlArrowRight />
    },
    {
        name: 'SCSS',
        icon: <SlArrowRight />
    },
    {
        name: 'TAILWIND',
        icon: <SlArrowRight />
    },
    {
        name: 'JavaScript',
        icon: <SlArrowRight />
    },
    {
        name: 'React',
        icon: <SlArrowRight />
    },
    {
        name: 'NodeJS',
        icon: <SlArrowRight />
    },
    {
        name: 'ExpressJS',
        icon: <SlArrowRight />
    },
    {
        name: 'Strapi',
        icon: <SlArrowRight />
    },
    {
        name: 'MongoDB',
        icon: <SlArrowRight />
    },
    {
        name: 'Figma',
        icon: <SlArrowRight />
    },
]
const Learn = [
    
    {
       name: 'TypeScript',
       icon: <SlArrowRight />
    },
    {
       name: 'NextJS',
       icon: <SlArrowRight />
    },
   
]
const MyServices = [
    {
        name: 'Development',
        icon: <FaLaptopCode />,
        desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio sed officiis possimus sit adipisci,',
    },
    {
        name: 'SEO',
        icon: <FaChartBar />,
        desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio sed officiis possimus sit adipisci,',
    },
    {
        name: 'CopyWrite',
        icon: <FaRegCopy />,
        desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio sed officiis possimus sit adipisci',
    },
]

const ContactIcon = [
    {
        icon: <IoMdMail />,
        desc: 'adamaszek404@gmail.com'
    },
    {
        icon: <FaPhone />,
        desc:'519-668-439'
    }
]
const SocialIcons = [
    {
        icon: <FaFacebookMessenger/>
    },
    {
        icon: <FaLinkedin/>
    },
    {
        icon: <FaDiscord/>
    },
    {
        icon: <FaSlack/>
    },
    {
        icon: <FaGithub/>
    }
]

const ProjectsData = [
    {
        name: 'Enigma-Dashboard',
        tit: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit Temporibus, voluptate, delectus tempora consectetur eaque iureveritatis',
        service: ['React', 'Tailwind', 'ExpressJS', 'MongoDB']
    },
    {
        name: 'Portfolio',
        tit: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit Temporibus, voluptate, delectus tempora consectetur eaque iureveritatis',
        service: ['NextJS', 'Tailwind', 'Strapi']
    }
]
export {
    MenuLinks,
    MySkills,
    MyServices,
    Learn,
    ContactIcon,
    SocialIcons,
    ProjectsData
};