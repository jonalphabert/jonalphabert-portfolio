import BootstrapIcon from "@/assets/images/tech-stack/tailwind_css.png"
import Image from "next/image"
import Tooltips from "@/components/Utils/Tooltips";

export default function NextJs(){
    return (
        <>
            <Tooltips text={"Bootstrap"}>
                <Image src={BootstrapIcon} width={48} height={48} alt="Bootstrap" className={"select-none"}/>
            </Tooltips>
        </>
    )
}