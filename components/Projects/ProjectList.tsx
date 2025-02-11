import ProjectItem from "@/components/Projects/ProjectItem";
import {projectType} from "@/type/type";

export default function ProjectsList({projectsListItem}: {projectsListItem: projectType[]}) {
    return (
            <div className={"grid grid-cols-2 gap-12"}>
                {projectsListItem.map((project, index: number) => (
                    <ProjectItem key={index} project={project}/>
                ))}
            </div>
    )
}