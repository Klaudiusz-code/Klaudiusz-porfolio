
import { FaHome, FaClipboardList } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { IoMdHome } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { GrProjects } from "react-icons/gr";


const MenuLinks = [
    {
        icon: <IoMdHome />,
        link: "/",
        name:'Home'
    },
    {
        icon: <GrProjects />,
        link: "/my-project",
        name: 'Project'
    },
    {
        icon: <GrServices />,
        link: "/services",
        name: 'Services'
    },
    {
        icon: <IoIosContact />,
        link: "/contact",
        name: 'Contact'
    },
];

export default MenuLinks