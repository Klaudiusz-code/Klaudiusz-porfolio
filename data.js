
import { FaHome, FaClipboardList,FaShoppingCart  } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { IoMdHome, IoMdMail } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { SlArrowRight } from "react-icons/sl";
import { FaLaptopCode } from "react-icons/fa";
import { FaRegCopy,  FaPhone } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";


//my-services

import { IoSettingsOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";

//social icons
import { FaFacebookMessenger, FaDiscord, FaSlack, FaLinkedin, FaGithub } from "react-icons/fa";

//Bnefits icon
import { FaEye } from "react-icons/fa";
import { FaBlackTie } from "react-icons/fa";
import { GiOpenGate } from "react-icons/gi";

//offertswebsite 

import { FaCalendarCheck } from "react-icons/fa";
import { BiSolidNotepad } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";


//online-stores

import { FaClockRotateLeft } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { FaChartLine } from "react-icons/fa";

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

const offertsLinks = [
    {
        title: 'STRONA INTERNETOWA',
        link:'/websites'
    },
    {
        title: 'SKLEP INTERNETOWY',
        link: '/online-stores'
    }
    
];

const MySkills = [
    {
        name: 'HTML',
        icon: <SlArrowRight />,
        width: '90%'
    },
    {
        name: 'SCSS',
        icon: <SlArrowRight />,
        width: '85%'
    },
    {
        name: 'TAILWIND',
        icon: <SlArrowRight />,
        width: '90%'
    },
    {
        name: 'JavaScript',
        width: '85%'
    },
    {
        name: 'ExpressJS',
        width: '80%'
 
    },
    {
        name: 'NodeJS',
        width: '85%'
    },
    {
        name: 'React',
        width: '75%'
    },
    {
        name: 'Strapi',
        width: '80%'
    },
    {
        name: 'MongoDB',
        width: '80%'
    },
    {
        name: 'Figma',
        width: '65%'
        
    },
    {
        name: 'TypeScript',
        width: '75%'
     },
     {
        name: 'NextJS',
        width: '65%'

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
    {
        name: 'Copywriting',
        icon: <TfiWrite />,
        desc:'Twój biznes zasługuje na teksty, które wyróżnią go w internecie. Mój copywriting to klucz do sukcesu online'
    },
    {
        name: 'Administracja strony',
        icon: <IoMdCheckmarkCircleOutline />,
        desc:'Oferuję kompleksową opiekę nad stronami internetowymi, włącznie z regularnymi kopiami zapasowymi, administracją i aktualizacjami.'
    },
    {
        name: 'Modernizacja strony',
        icon: <IoSettingsOutline />,
        desc:'Zajmuję się modernizacją strony, wprowadzając poprawki i dodając nowe funkcje'
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
    },{
        name: 'Portfolio',
        tit: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit Temporibus, voluptate, delectus tempora consectetur eaque iureveritatis',
        service: ['NextJS', 'Tailwind', 'Strapi']
    },
    {
        name: 'Portfolio',
        tit: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit Temporibus, voluptate, delectus tempora consectetur eaque iureveritatis',
        service: ['NextJS', 'Tailwind', 'Strapi']
    },
    {
        name: 'Portfolio',
        tit: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit Temporibus, voluptate, delectus tempora consectetur eaque iureveritatis',
        service: ['NextJS', 'Tailwind', 'Strapi']
    },
    {
        name: 'Portfolio',
        tit: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit Temporibus, voluptate, delectus tempora consectetur eaque iureveritatis',
        service: ['NextJS', 'Tailwind', 'Strapi']
    },

]
const BenefitsWeb = [
    {
        icon: <FaEye />,
        title: 'Globalna Widoczność ',
        description: 'Dzięki stronie internetowej firma staje się dostępna dla klientów na całym świecie, co pozwala na zwiększenie zasięgu i zdobycie nowych rynków. '
    },
    {
        icon: <GiOpenGate />,
        title: 'Łatwy Dostęp do Informacji',
        description: 'Klienci mogą szybko i łatwo uzyskać informacje o produktach, usługach, godzinach otwarcia i innych kluczowych aspektach firmy'
    },
    {
        icon: <FaBlackTie />,
        title: 'Profesjonalny Wizerunek',
        description: 'Strona internetowa jest wizytówką firmy w świecie online. Profesjonalny i atrakcyjny design strony buduje zaufanie klientów oraz podkreśla profesjonalizm firmy'
    },
]

const ServicesWebsite = [
    {
      icon: <FaCalendarCheck />,
      title: 'Terminowość',
      description: 'Realizuje projekty zgodnie z ustalonym harmonogramem, zawsze szanując Twoją czasową strategię biznesową. ',
    },
    {
      icon: <BiSolidNotepad />,
      title: 'Długotrwała Współpraca',
      description: 'Stworzyliśmy Razem Twoją Stronę - Teraz Razem Błyszczmy Online! Z SEO i Skutecznym Marketingiem Osiągniesz Wielki Sukces!',
    },
    {
      icon: <FaWallet />,
      title: 'Konkurencyjne Ceny',
      description: 'Twój sukces jest dla mnie ważny, i chce go osiągnąć razem, bez nadmiernego obciążania budżetu.',
    }
  ];

  const BenefitsStores = [
    {
        icon: <FaClockRotateLeft />,
        title: 'Dostępność Bez Granic Czasowych',
        description: 'Nasze sklepy internetowe są dostępne 24/7, co umożliwia klientom zakupy o dowolnej porze, idealne dla osób o zmieniających się grafikach pracy.',
      },
      {
        icon: <CiShoppingCart />,
        title: 'Globalne Rozwinięcie Biznesu',
        description: 'Sklep internetowy usuwa ograniczenia lokalne, umożliwiając firmie dotarcie do klientów na całym świecie.',
      },
      {
        icon: <FaChartLine />,
        title: 'Zakupy Bez Granic Wygody',
        description: 'Wygoda klientów w naszym sklepie to kluczowe doświadczenie: porównuj, czytaj, kupuj online.'
      }
  ]

export {
    MenuLinks,
    MySkills,
    MyServices,
    ContactIcon,
    SocialIcons,
    ProjectsData,
    offertsLinks,
    BenefitsWeb,
    ServicesWebsite,
    BenefitsStores,
};