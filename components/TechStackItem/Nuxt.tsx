import NuxtIcon from "@/assets/images/tech-stack/nuxt_js.png"
import Image from "next/image"
import Tooltips from "@/components/Utils/Tooltips";

export default function NextJs(){
    return (
        <>
            <Tooltips text={"Nuxt Js"}>
                <Image src={NuxtIcon} width={48} height={48} alt="Nuxt Js" className={"select-none"}/>
            </Tooltips>
        </>
    )
}