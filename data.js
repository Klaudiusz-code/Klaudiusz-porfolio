
import { FaHome, FaClipboardList,FaShoppingCart  } from "react-icons/fa";
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
        name: 'S.Główna'
    },
    {
        icon: <GrProjects />,
        link: "/projects",
        name: 'Projekty',
    },
    {
        icon: <MdDesignServices />,
        link: "/services",
        name: 'Usługi',
    },
    {
        icon: <HiOutlineMail />,
        link: "/contact",
        name: 'Kontakt',
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
        name: 'Strony Internetowe',
        icon: <FaLaptopCode />,
        desc:'Tworzę strony z istotnymi treściami, zwiększając zaangażowanie użytkownika.'
    },
    {
        name: 'Sklepy Internetowe',
        icon: <FaShoppingCart  />,
        desc:'Tworzę dynamiczne sklepy internetowe, zapewniając użytkownikom atrakcyjne doświadczenia zakupowe.'
    },
    {
        name: 'SEO',
        icon: <FaChartBar />,
        desc:'Optymalizuję witryny pod kątem wyszukiwarek, wykorzystując analizę rynku i słów kluczowych.'
    },
]

const ContactIcon = [
    {
      icon: <IoMdMail />,
      desc: 'adamaszek404@gmail.com',
      link: 'mailto:adamaszek404@gmail.com',
    },
    {
      icon: <FaPhone />,
      desc: '519-668-439',
      link: 'tel:+48519668439',
    },
  ]
const SocialIcons = [
    {
        icon: <FaFacebookMessenger/>,
        link: 'https://m.me/Mumin.010',
    },
    {
        icon: <FaLinkedin/>,
        link: 'https://www.linkedin.com/in/klaudiusz-adamaszek-a81582241/',
    },
    {
        icon: <FaDiscord/>,
        link: 'https://discord.com/users/1025762843800379442'
    },
    {
        icon: <FaGithub/>,
        link: 'https://github.com/Klaudiusz-code',
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