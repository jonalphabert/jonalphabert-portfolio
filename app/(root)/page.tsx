import Image from "next/image";
import darkBackground from "@/assets/images/dark-background.png";
import NavigationList from "@/components/ListItem/Navigation/NavigationList";
import {Github, Instagram, Linkedin} from "lucide-react";
import TechStackList from "@/components/ListItem/TechStack/TechStackList";
import WorkExperienceList from "@/components/ListItem/Work/WorkExperienceList";

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
        }

    ]
  return (
    <>
        <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center z-0">
            <Image src={darkBackground} alt={"background"} fill quality="100" priority={true} className={"select-none"}/>
        </div>
        <div className="relative container mx-auto z-10 grid grid-cols-3 gap-x-12  h-full">
            <div className="relative top-0 left-0 h-full">
                <div className="flex flex-col gap-12 h-screen py-24 px-4 justify-between sticky top-0 z-10">
                    <section id={"introduction"}>
                        <p className={"text-2xl text-white mb-2"}>Hi, I'm</p>
                        <h1 className={"text-4xl font-bold mb-2"}>Jonathan Alphabert Sutanto</h1>
                        <p className={"text-2xl text-white mb-2"}>Fullstack Developer</p>
                    </section>

                    <section id={"navigation"}>
                        <NavigationList listItem={navigationList}></NavigationList>
                    </section>

                    <section id={"social-media"}>
                        <div className="flex gap-4">
                            <Github color={"#f5f5f5"} size={32}/>
                            <Linkedin color={"#f5f5f5"} size={32}/>
                            <Instagram color={"#f5f5f5"} size={32}/>
                        </div>
                    </section>

                </div>
            </div>

            <main className="grid grid-cols-1 gap-12 py-24 px-4 justify-between col-span-2 h-max">
                <section id={"about"}>
                    <h2 className={"text-4xl font-bold mb-8"}>About</h2>
                    <p className={"text-xl mb-4 tracking-wide"}>A passionate and detail-oriented web developer with over
                        2 years of experience in creating efficient, scalable, and user-friendly websites.</p>
                    <p className={"text-xl mb-4 tracking-wide"}>I am Frontend Developer on <b>ezSign</b>, I crafting
                        good user experience for the user. While developing this application, I maintain and refactor
                        code to achieve clean code.</p>
                    <p className={"text-xl mb-4 tracking-wide"}>With a strong focus on <b>performance optimization</b>,
                        I ensure that every website I develop not only looks great but also runs smoothly and
                        efficiently.</p>
                    <p className={"text-xl mb-4 tracking-wide"}>In my spare time, you can find me exploring the latest
                        tech trends or enjoying a good cup of coffee while brainstorming new ideas. I’m driven by a
                        passion for continuous learning and a desire to create meaningful digital experiences.</p>
                    <TechStackList/>
                </section>
                <section id={"work"}>
                    <h2 className={"text-4xl font-bold mb-8"}>Work</h2>
                    <WorkExperienceList />
                </section>
                <section id={"projects"}>
                    <h2 className={"text-4xl font-bold mb-8"}>Projects</h2>
                    <p className={"text-xl mb-4 tracking-wide"}>A passionate and detail-oriented web developer with over
                        2 years of experience in creating efficient, scalable, and user-friendly websites.</p>
                    <p className={"text-xl mb-4 tracking-wide"}>I am Frontend Developer on <b>ezSign</b>, I crafting
                        good user experience for the user. While developing this application, I maintain and refactor
                        code to achieve clean code.</p>
                    <p className={"text-xl mb-4 tracking-wide"}>With a strong focus on <b>performance optimization</b>,
                        I ensure that every website I develop not only looks great but also runs smoothly and
                        efficiently.</p>
                    <p className={"text-xl mb-4 tracking-wide"}>In my spare time, you can find me exploring the latest
                        tech trends or enjoying a good cup of coffee while brainstorming new ideas. I’m driven by a
                        passion for continuous learning and a desire to create meaningful digital experiences.</p>
                    <TechStackList/>
                </section>
            </main>
        </div>
    </>
  );
}
