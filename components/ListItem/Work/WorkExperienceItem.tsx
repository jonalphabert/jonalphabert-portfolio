import WorkResponsibilty from "@/components/ListItem/Work/WorkResponsibilty";
import {workExperience} from "@/type/type";
import TechStackList from "@/components/ListItem/TechStack/TechStackList";

export default function WorkExperienceItem({workExperience}: {workExperience: workExperience}) {
    return (
        <div className={"border rounded-lg border-gray-200 p-8"}>
            <h3 className={"text-2xl font-bold"}>{workExperience.companyName}</h3>
            <p className={"text-base mb-4 italic"}>{workExperience.workYear}</p>
            <WorkResponsibilty workResponsibility={workExperience.responsibilities} />
            <div className="flex gap-4 w-full">
                <TechStackList techStackList={workExperience.technologies} size={32} priority={true}/>
            </div>
        </div>
    )
}