import Image from "next/image";
import TechStackList from "@/components/ListItem/TechStack/TechStackList";
import Link from "next/link";
import {projectType} from "@/type/type";

export default function ProjectItem({project}: {project: projectType}) {
    return (
        <>
            <div className={"border border-gray-50 rounded-2xl overflow-hidden"}>
                <Image src={project.projectImgCover} alt={"Digital Invitation Service - Project Jonathan Alphabert"} width={640} height={360} loading="lazy" quality="90" />
                <section id={"project-detail"} className={"p-4"}>
                    <h3 className={"font-semibold text-2xl mb-2"}>{project.projectName}</h3>
                    <p className={"text-lg mb-4"}>{project.projectDescription}</p>
                    <div className={"mb-4"}>
                        <TechStackList techStackList={project.technologies} size={32} priority={true}/>
                    </div>
                    <div className={"grid grid-cols-2 gap-6"}>
                        <Link href={`/project/${project.projectSlug}`} className={"text-center font-semibold py-3 border border-gray-50 rounded-lg text-gray-50 bg-transparent hover:underline transition-all duration-300"}>
                            Project Details
                        </Link>
                        <Link href={project.projectUrl} className={"text-center font-semibold py-3 border border-gray-50 rounded-lg bg-gray-50 text-gray-900 hover:text-gray-50 hover:bg-transparent hover:underline transition-all duration-300"}>
                            Visit Project
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}