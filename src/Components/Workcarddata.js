import pro1 from "../assets/img3.jpg";
import pro2 from "../assets/libimg.jpg";
import pro3 from "../assets/schimg.jpg";
import { Link } from "react-router-dom";
import UnderConstruction from "./UnderConstruction";

const ProjectCardData = [
    {
        imgsrc: pro1,
        title: "Hospital Management System",
        text: "A Java-based hospital management system under development, aimed at streamlining administrative tasks, patient records, and resource allocation within healthcare facilities",
        view: "/underconstruction"
    },
    {
        imgsrc: pro2,
        title: "Library Management Systen",
        text: "A library management system design in progress, focusing on efficient cataloging, borrowing, and tracking of library resources for enhanced user accessibility and organization",
        view: "/underconstruction"
    },
    
    {
        imgsrc: pro3,
        title: "School Management System",
        text: "A school management system design in development, aimed at facilitating administrative tasks, student enrollment, attendance tracking,and academic performance monitoring to streamline operations within educational institutions",
        view: "/underconstruction"
    },
    
];

export default ProjectCardData;
