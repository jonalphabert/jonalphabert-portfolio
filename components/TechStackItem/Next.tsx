import NextIcon from "@/assets/images/tech-stack/next_js.png"
import Image from "next/image"
import Tooltips from "@/components/Utils/Tooltips";

export default function NextJs(){
    return (
        <>
            <Tooltips text={"Next Js"}>
                <Image src={NextIcon} width={48} height={48} alt="NextJS" className={"select-none"}/>
            </Tooltips>
        </>
    )
}