import {workExperiences} from "@/data/work-experiences";
import WorkExperienceItem from "@/components/ListItem/Work/WorkExperienceItem";
import WorkResponsibilty from "@/components/ListItem/Work/WorkResponsibilty";
import TechStackList from "@/components/ListItem/TechStack/TechStackList";
import CertificationContent from "@/components/Certification/CertificationContent";
import Link from "next/link";
import Image from "next/image";
import {SlideFromTopComponent} from "@/components/Animation/SlideFromTop";

export default function CertificationList() {
    const certificationList = [
        {
            title: "Google UX - Certification",
            provider: "Coursera",
            year: "2024",
            content:[
                "Learn how to iterate design process that resulted an user friendly design",
                'Build low fidelity design for a website or application',
                'Build high fidelity design for a website or application using figma'
            ],
            certificateUrl: "https://coursera.org/share/3df244d96707c37818c9d77f7d88b356",
            imgCreator: "/images/certification/google-ux-design.png",
        }
    ]

    return (
        <>
            <div className={"grid grid-cols-1 gap-8"}>
                {certificationList.map((item, idx) => (
                    <SlideFromTopComponent key={idx}>
                        <div className={"border rounded-lg border-gray-200 p-8 flex gap-4 flex-col md:flex-row"}>
                            <div>
                                <Image src={item.imgCreator} alt={item.title} width={80} height={80} />
                            </div>
                            <div>
                                <h3 className={"text-2xl font-bold"}>{item.title}</h3>
                                <p className={"text-base mb-4 italic"}>{item.provider} - {item.year}</p>
                                <CertificationContent content={item.content}/>
                                <Link href={item.certificateUrl} className={"text-lg font-semibold rounded py-3 border border-gray-50 bg-gray-50 text-gray-900 hover:bg-gray-900 hover:text-gray-50 duration-300 transition-all px-4 hover:underline"}>
                                    See Certification
                                </Link>
                            </div>
                        </div>
                    </SlideFromTopComponent>

                ))}
            </div>
        </>
    )
}