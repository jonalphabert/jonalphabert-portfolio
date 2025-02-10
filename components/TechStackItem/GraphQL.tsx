import graphqlIcon from "@/assets/images/tech-stack/graphql.png"
import Image from "next/image"
import Tooltips from "@/components/Utils/Tooltips";

export default function NextJs(){
    return (
        <>
            <Tooltips text={"GraphQL"}>
                <Image src={graphqlIcon} width={48} height={48} alt="GraphQL" className={"select-none"}/>
            </Tooltips>
        </>
    )
}