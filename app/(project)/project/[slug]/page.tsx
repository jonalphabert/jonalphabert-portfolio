import PROJECT from '@/data/projects'
import Image from "next/image";
import {notFound} from "next/navigation";
import {projectType} from "@/type/type";

export default async function ProjectDetailPage({ params }:{params: any}) {
    const { slug } = await params;

    const projectDetail:projectType | undefined = PROJECT.find(item => item.projectSlug === slug);

    if(!projectDetail) {
        notFound();
    }

    return (
        <>
            <main className={"container mx-auto px-4 py-16"}>
                <div className={"max-w-[1080px] md:w-3/4 mx-auto"}>
                    <Image src={projectDetail.projectImgCover} alt={projectDetail.projectName} width={1080} height={384}
                           className={"w-full h-96 object-cover mb-4"} quality="100" priority={true}/>
                    <h1 className={"text-4xl font-bold mb-4"}>{projectDetail.projectName}</h1>
                    <p className={"text-lg mb-8"}>{projectDetail.projectDescription}</p>

                    <section id={"project-goals"} className={"mb-16"}>
                        <h2 className={"text-3xl font-bold mb-4"}>The Problems</h2>
                        <ol className={"ml-8"}>
                            {projectDetail.projectProblems.map((goal, idx) => (

                                <li key={idx} className={"list-decimal text-2xl font-semibold"}>{goal.titleProblem}
                                    <p className={"text-lg mb-8 mt-4 font-medium"}>{goal.descriptionProblem}</p>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section id={"project-goals"} className={"mb-16"}>
                        <h2 className={"text-3xl font-bold mb-4"}>Project's Goal</h2>
                        <ol className={"ml-8"}>
                            {projectDetail.projectGoals.map((goal, idx) => (

                                <li key={idx} className={"list-decimal text-2xl font-semibold"}>{goal.titleGoals}
                                    <p className={"text-lg mb-8 mt-4 font-medium"}>{goal.descriptionGoals}</p>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section id={"project-step"} className={"mb-16"}>
                        <h2 className={"text-3xl font-bold mb-4"}>Here's How I Achieve Goals</h2>
                        <ol className={"ml-8"}>
                            {projectDetail.projectStep.map((goal, idx) => (

                                <li key={idx} className={"list-decimal text-2xl font-semibold"}>{goal.titleStep}
                                    <p className={"text-lg mb-8 mt-4 font-medium"}>{goal.descriptionStep}</p>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section id={"project-result"} className={"mb-16"}>
                        <h2 className={"text-3xl font-bold mb-4"}>Here's the Result</h2>
                        <ol className={"ml-8"}>
                            {projectDetail.projectOutcome.map((goal, idx) => (
                                <li key={idx} className={"list-decimal text-2xl font-semibold"}>{goal.titleOutcome}
                                    <p className={"text-lg mb-8 mt-4 font-medium"}>{goal.descriptionOutcome}</p>
                                </li>
                            ))}
                        </ol>
                    </section>
                </div>

            </main>
        </>
    )
}