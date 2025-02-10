import WorkExperienceItem from "@/components/ListItem/Work/WorkExperienceItem";
import { workExperiences } from "@/data/work-experiences";
import {workExperience} from "@/type/type";

export default function WorkExperienceList() {
    return (
        <div className={"grid grid-cols-1 gap-8"}>
            {workExperiences.map((workExperience:workExperience, idx) => (
                <WorkExperienceItem key={idx} workExperience={workExperience} />

            ))}
        </div>
    )
}