import WorkExperienceItem from "@/components/ListItem/Work/WorkExperienceItem";
import { workExperiences } from "@/data/work-experiences";
import {workExperience} from "@/type/type";
import {SlideFromTopComponent} from "@/components/Animation/SlideFromTop";

export default function WorkExperienceList() {
    return (
        <div className={"grid grid-cols-1 gap-8"}>
            {workExperiences.map((workExperience:workExperience, idx) => (
                <SlideFromTopComponent key={idx}>
                    <WorkExperienceItem workExperience={workExperience} />
                </SlideFromTopComponent>
            ))}
        </div>
    )
}