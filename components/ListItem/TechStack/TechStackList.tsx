import Image from "next/image";

import techStack, { TechStackKey } from "@/data/tech-stack";
import Tooltips from "@/components/Utils/Tooltips";

type TechStackListProps = {
    techStackList: TechStackKey[];
    size?: number,
    priority?: boolean,
}

export default function TechStackList({ techStackList, size = 48, priority = false }: TechStackListProps) {
    return (
        <div className={"flex gap-4"}>
            {techStackList.map((item, key) => (
                <Tooltips text={techStack[item].title} key={key}>
                    <Image src={techStack[item].imgUrl} width={size} height={size} alt={techStack[item].title} className={"select-none"} priority={priority}/>
                </Tooltips>
            ))}
        </div>
    );
}