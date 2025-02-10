import WorkExperienceItem from "@/components/ListItem/Work/WorkExperienceItem";

export default function WorkExperienceList() {
    return (
        <div className={"grid grid-cols-1 gap-8"}>
            <WorkExperienceItem />
            <WorkExperienceItem />
        </div>
    )
}