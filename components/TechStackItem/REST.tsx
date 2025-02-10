import RESTIcon from "@/assets/images/tech-stack/rest.png"
import Image from "next/image"
import Tooltips from "@/components/Utils/Tooltips";

export default function NextJs(){
    return (
        <>
            <Tooltips text={"REST API"}>
                <Image src={RESTIcon} width={48} height={48} alt="REST API" className={"select-none"}/>
            </Tooltips>
        </>
    )
}