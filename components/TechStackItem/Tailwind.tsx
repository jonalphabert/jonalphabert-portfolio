import TailwindIcon from "@/assets/images/tech-stack/tailwind_css.png"
import Image from "next/image"
import Tooltips from "@/components/Utils/Tooltips";

export default function NextJs(){
    return (
        <>
            <Tooltips text={"Tailwind CSS"}>
                <Image src={TailwindIcon} width={48} height={48} alt="Tailwind CSS" className={"select-none"}/>
            </Tooltips>
        </>
    )
}