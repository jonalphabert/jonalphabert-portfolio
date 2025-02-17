import Image from "next/image";
import darkBackground from "@/assets/images/dark-background.png";
import NavigationList from "@/components/ListItem/Navigation/NavigationList";
import { Github, Instagram, Linkedin } from "lucide-react";
import TechStackList from "@/components/ListItem/TechStack/TechStackList";
import WorkExperienceList from "@/components/ListItem/Work/WorkExperienceList";
import Link from "next/link";
import { TechStackKey } from "@/data/tech-stack";
import ProjectsList from "@/components/Projects/ProjectList";
import projects from "@/data/projects";
import CertificationList from "@/components/Certification/CertificationList";
import Tooltips from "@/components/Utils/Tooltips";
import { SlideFromLeftComponet } from "@/components/Animation/SlideFromLeft";
import {SlideFromTopComponent} from "@/components/Animation/SlideFromTop";

export default function Home() {
  const navigationList = [
    {
      label: "About",
      url: "#about",
    },
    {
      label: "Work Experience",
      url: "#work",
    },
    {
      label: "Projects",
      url: "#projects",
    },
    {
      label: "Certification",
      url: "#certification",
    },
  ];

  const techStackGeneral: TechStackKey[] = ["nextjs", "nuxtjs", "tailwindcss", "graphql", "rest"];

  const projectListFeatured = projects.filter((item) => item.isFeatured === true);
  return (
      <>
        <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center z-0">
          <Image src={darkBackground} alt={"background"} fill quality="100" priority={true} className={"select-none object-cover"} />
        </div>
        <div className="relative container mx-auto z-10 grid grid-cols-3 gap-x-12  h-full">
          <div className="relative top-0 left-0 h-full">
            <div className="flex flex-col gap-12 h-screen py-24 px-4 justify-between sticky top-0 z-10">
              <section id={"introduction"}>
                <SlideFromLeftComponet>
                  <p className={"text-2xl text-white mb-2"}>Hi, I'm</p>
                </SlideFromLeftComponet>
                <SlideFromLeftComponet>
                  <h1 className={"text-4xl font-bold mb-2"}>Jonathan Alphabert Sutanto</h1>
                </SlideFromLeftComponet>
                <SlideFromLeftComponet>
                  <p className={"text-2xl text-white mb-2"}>Fullstack Developer</p>
                </SlideFromLeftComponet>
              </section>

              <section id={"navigation"}>
                <SlideFromLeftComponet>
                  <NavigationList listItem={navigationList}></NavigationList>
                </SlideFromLeftComponet>
              </section>

              <section id={"social-media"}>
                <div className="flex gap-4">
                  <SlideFromLeftComponet>
                    <Link href="https://github.com/jonalphabert">
                      <Tooltips text={"GitHub"}>
                        <Github color={"#f5f5f5"} size={32} aria-describedby={"Github"} />
                      </Tooltips>
                    </Link>
                  </SlideFromLeftComponet>
                  <SlideFromLeftComponet>
                    <Link href="https://www.linkedin.com/in/jonathan-alphabert-b58300192/">
                      <Tooltips text={"LinkedInd"}>
                        <Linkedin color={"#f5f5f5"} size={32} aria-describedby={"LinkedIn"} />
                      </Tooltips>
                    </Link>
                  </SlideFromLeftComponet>
                  <SlideFromLeftComponet>
                    <Link href={"https://www.instagram.com/john.forjc/"}>
                      <Tooltips text={"Instagram"}>
                        <Instagram color={"#f5f5f5"} size={32} aria-describedby={"Instagram"} />
                      </Tooltips>
                    </Link>
                  </SlideFromLeftComponet>
                </div>
              </section>
            </div>
          </div>

          <main className="grid grid-cols-1 gap-12 py-24 px-4 justify-between col-span-2 h-max">
            <section id={"about"}>
              <SlideFromTopComponent>
                <h2 className={"text-4xl font-bold mb-8"}>About</h2>
              </SlideFromTopComponent>
              <SlideFromTopComponent>
                <p className={"text-xl mb-4 tracking-wide"}>A passionate and detail-oriented web developer with over 2 years of experience in creating efficient, scalable, and user-friendly websites.</p>
              </SlideFromTopComponent>
              <SlideFromTopComponent>
                <p className={"text-xl mb-4 tracking-wide"}>
                  I am Frontend Developer on <b>ezSign</b>, I crafting good user experience for the user. While developing this application, I maintain and refactor code to achieve clean code.
                </p>
              </SlideFromTopComponent>
              <SlideFromTopComponent>
                <p className={"text-xl mb-4 tracking-wide"}>
                  With a strong focus on <b>performance optimization</b>, I ensure that every website I develop not only looks great but also runs smoothly and efficiently.
                </p>
              </SlideFromTopComponent>
              <SlideFromTopComponent>
                <p className={"text-xl mb-4 tracking-wide"}>
                  In my spare time, you can find me exploring the latest tech trends or enjoying a good cup of coffee while brainstorming new ideas. I’m driven by a passion for continuous learning and a desire to create meaningful digital
                  experiences.
                </p>
              </SlideFromTopComponent>
              <TechStackList techStackList={techStackGeneral} size={48} priority={true} />
            </section>
            <section id={"work"}>
              <SlideFromTopComponent>
                <h2 className={"text-4xl font-bold mb-8"}>Work</h2>
              </SlideFromTopComponent>
              <WorkExperienceList />
            </section>
            <section id={"projects"}>
              <SlideFromTopComponent>
                <h2 className={"text-4xl font-bold mb-8"}>Projects</h2>
              </SlideFromTopComponent>
              <ProjectsList projectsListItem={projectListFeatured} />
            </section>
            <section id={"certification"}>
              <SlideFromTopComponent>
                <h2 className={"text-4xl font-bold mb-8"}>Certification</h2>
              </SlideFromTopComponent>
              <CertificationList />
            </section>
          </main>
        </div>
      </>
  );
}
