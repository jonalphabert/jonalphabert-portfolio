import Image from "next/image";
import darkBackground from "@/assets/images/dark-background.png";
import NavigationList from "@/components/ListItem/Navigation/NavigationList";
import {Github, Instagram, Linkedin} from "lucide-react";
import TechStackList from "@/components/ListItem/TechStack/TechStackList";
import WorkExperienceList from "@/components/ListItem/Work/WorkExperienceList";
import Link from "next/link";
import ProjectItem from "@/components/Projects/ProjectItem";

export default function Home() {
    const navigationList = [
        {
            label: "About",
            url: "#about"
        },
        {
            label: "Work Experience",
            url: "#work"
        },
        {
            label: "Projects",
            url: "#projects"
        },
        {
            label: "Certification",
            url: "#certification"
        }

    ]
  return (
    <>
        <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center z-0">
            <Image src={darkBackground} alt={"background"} fill quality="100" priority={true} className={"select-none"}/>
        </div>
        <div className="relative container mx-auto z-10 grid grid-cols-3 gap-x-12  h-full">

        </div>
    </>
  );
}
