"use client"

import {AlignJustify, Github, Instagram, Linkedin, X} from "lucide-react";
import Tooltips from "@/components/Utils/Tooltips";
import {useState} from "react";
import {SlideFromLeftComponet} from "@/components/Animation/SlideFromLeft";
import NavigationList from "@/components/ListItem/Navigation/NavigationList";
import Link from "next/link";

export default function Navbar() {
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
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <>
            <div className={`justify-between items-center px-4 py-6 md:hidden z-20 w-screen ${openMenu ? "hidden" : "flex"}`}>
                <h2 className={"font-bold text-lg"}>Jonathan</h2>

                <Tooltips text={"Menu"}>
                    <AlignJustify className={"cursor-pointer"} onClick={() => setOpenMenu(!openMenu)}/>
                </Tooltips>

            </div>

            <div className={`h-screen md:bg-transparent bg-gray-950 w-screen mx-0 ${openMenu ? "block" : "hidden"} fixed top-0 right-0 z-50`}>
                <div className="md:hidden flex-col gap-12 h-screen py-24 px-4 justify-between sticky top-0 z-10 flex">
                    <Tooltips text={"Close Menu"}>
                        <X onClick={() => setOpenMenu(!openMenu)}/>
                    </Tooltips>
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
                                        <Github color={"#f5f5f5"} size={32} aria-describedby={"Github"}/>
                                    </Tooltips>
                                </Link>
                            </SlideFromLeftComponet>
                            <SlideFromLeftComponet>
                                <Link href="https://www.linkedin.com/in/jonathan-alphabert-b58300192/">
                                    <Tooltips text={"LinkedInd"}>
                                        <Linkedin color={"#f5f5f5"} size={32} aria-describedby={"LinkedIn"}/>
                                    </Tooltips>
                                </Link>
                            </SlideFromLeftComponet>
                            <SlideFromLeftComponet>
                                <Link href={"https://www.instagram.com/john.forjc/"}>
                                    <Tooltips text={"Instagram"}>
                                        <Instagram color={"#f5f5f5"} size={32} aria-describedby={"Instagram"}/>
                                    </Tooltips>
                                </Link>
                            </SlideFromLeftComponet>
                        </div>
                    </section>
                </div>
            </div>

        </>
    )
}