import Nuxt from "@/components/TechStackItem/Nuxt";
import Bootstrap from "@/components/TechStackItem/Bootstrap";
import REST from "@/components/TechStackItem/REST";
import WorkResponsibilty from "@/components/ListItem/Work/WorkResponsibilty";

export default function WorkExperienceItem() {
    return (
        <div className={"border rounded-lg border-gray-200 p-8"}>
            <h3 className={"text-2xl font-bold"}>ezSign - Digital Signing Platform</h3>
            <p className={"text-base mb-4 italic"}>2024 - Present</p>
            <WorkResponsibilty />
            <div className="flex gap-4 w-full">
                <Nuxt/>
                <Bootstrap/>
                <REST/>
            </div>
        </div>
    )
}