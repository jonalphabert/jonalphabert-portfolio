import Nuxt from "@/components/TechStackItem/Nuxt";
import Bootstrap from "@/components/TechStackItem/Bootstrap";
import REST from "@/components/TechStackItem/REST";
import WorkResponsibilty from "@/components/ListItem/Work/WorkResponsibilty";
import {workExperience} from "@/type/type";

export default function WorkExperienceItem({workExperience}: {workExperience: workExperience}) {
    return (
        <div className={"border rounded-lg border-gray-200 p-8"}>
            <h3 className={"text-2xl font-bold"}>{workExperience.companyName}</h3>
            <p className={"text-base mb-4 italic"}>{workExperience.workYear}</p>
            <WorkResponsibilty workResponsibility={workExperience.responsibilities} />
            <div className="flex gap-4 w-full">
                <Nuxt/>
                <Bootstrap/>
                <REST/>
            </div>
        </div>
    )
}