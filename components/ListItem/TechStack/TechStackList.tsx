import Next from "@/components/TechStackItem/Next";
import Nuxt from "@/components/TechStackItem/Nuxt";
import Tailwind from "@/components/TechStackItem/Tailwind";
import REST from "@/components/TechStackItem/REST";
import GraphQL from "@/components/TechStackItem/GraphQL";

export default function TechStackList() {
    return (
        <>
            <div className={"flex gap-4"}>
                <Next />
                <Nuxt />
                <Tailwind />
                <REST />
                <GraphQL />
            </div>
        </>
    )
}