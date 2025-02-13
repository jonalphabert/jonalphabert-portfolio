import Image from "next/image";
import Link from "next/link";

import darkBackground from "@/assets/images/dark-background.png";

import PROJECT from "@/data/projects"

import TechStack from "@/components/ListItem/TechStack/TechStackList";

export default function Home() {

  return (
    <>
        <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center z-0">
            <Image src={darkBackground} alt={"background"} fill quality="100" priority={true} className={"select-none object-cover"}/>
        </div>
        <div className="relative container mx-auto z-10 h-full py-24 md:px-12 px-4">
            <p className={"text-center text-base text-gray-50 mb-2 italic"}>
                A Collection of Projects That Define Me
            </p>
            <h1 className={"text-center text-4xl text-gray-50 mb-8 font-bold tracking-wide"}>
                🚀 Explore My Creative Journey
            </h1>
            <p className={"text-xl w-full md:w-7/12 mb-8"}>
                I’m thrilled to have you here on my project page, where creativity meets innovation! Each project you’ll discover is a chapter in my story, filled with challenges, triumphs, and a sprinkle of fun. So, grab a cup of coffee ☕, sit back, and let’s dive into the exciting world of my work!
            </p>

            <div className={"grid grid-cols-1 md:grid-cols-2 gap-12"}>
                {PROJECT && PROJECT.map((item: any, index: number) =>
                    <div key={index} className={"flex items-center flex-col bg-gray-950 rounded-2xl overflow-hidden"}>
                        <Image  src={item.projectImgCover} alt={item.projectName} width={640} height={480} priority={index < 2} className={"w-full object-cover"} />
                        <div className={"p-4 md:p-12"}>
                            <h2 className={"text-3xl font-bold mb-4"}>{item.projectName}</h2>
                            <p className={"text-xl mb-8 font-thin"}>{item.projectDescription}</p>
                            <div className={"mb-8"}>
                                <TechStack techStackList={item.technologies} size={48} priority={index < 2} />
                            </div>
                            <Link href={`/project/${item.projectSlug}`} className={"text-gray-950 bg-gray-50 text-center py-3 px-6 rounded text-lg"}>Project Detail</Link>
                        </div>
                    </div>

                )}
            </div>
        </div>
    </>
  );
}
