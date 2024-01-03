
import { FaHome, FaClipboardList } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { SlArrowRight } from "react-icons/sl";
import { FaLaptopCode } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";

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
        name: 'Copy Write',
        icon: <FaRegCopy />,
        desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio sed officiis possimus sit adipisci,',
    },
]

export {
    MenuLinks,
    MySkills,
    MyServices,
    Learn
};