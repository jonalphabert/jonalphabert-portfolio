import ProjectItem from "@/components/Projects/ProjectItem";
import {projectType} from "@/type/type";
import {SlideFromTopComponent} from "@/components/Animation/SlideFromTop";

export default function ProjectsList({projectsListItem}: {projectsListItem: projectType[]}) {
    return (
            <div className={"grid grid-cols-2 gap-12"}>
                {projectsListItem.map((project, index: number) => (
                    <SlideFromTopComponent key={index}>
                        <ProjectItem project={project}/>
                    </SlideFromTopComponent>
                ))}
            </div>
    )
}