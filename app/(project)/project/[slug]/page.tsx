import PROJECT from "@/data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projectType } from "@/type/type";
import TechStackList from "@/components/ListItem/TechStack/TechStackList";
import { RotateScaleUpEntraceComponent } from "@/components/Animation/RotateScaleUpEntrace";
import { SlideFromTopComponent } from "@/components/Animation/SlideFromTop";
import {Metadata, ResolvingMetadata} from "next";

export async function generateMetadata(
    { params }: {params: any}
): Promise<Metadata> {
  const { slug } = await params;

  const projectDetail: projectType | undefined = PROJECT.find((item) => item.projectSlug === slug);

  if (!projectDetail) {
    return {
      title: "Page Not Found",
      description: "Page Not Found",
    }
  }

  return {
    title: projectDetail.projectName,
    openGraph: {
      images: [projectDetail.projectImgCover],
    },
  }
}

export default async function ProjectDetailPage({ params }: { params: any }) {
  const { slug } = await params;

  const projectDetail: projectType | undefined = PROJECT.find((item) => item.projectSlug === slug);

  if (!projectDetail) {
    notFound();
  }

  return (
    <>

        <div className={"max-w-[1080px] mx-auto"}>
          <div className={"mb-4 overflow-hidden aspect-video relative w-full"}>
            <RotateScaleUpEntraceComponent>
              <Image src={projectDetail.projectImgCover} alt={projectDetail.projectName} width={1080} height={560} className={"w-full h-full object-cover object-center z-10"} quality="100" priority={true} />
            </RotateScaleUpEntraceComponent>
          </div>
          <SlideFromTopComponent>
            <h1 className={"text-4xl font-bold mb-4"}>{projectDetail.projectName}</h1>
          </SlideFromTopComponent>
          <SlideFromTopComponent>
            <p className={"text-lg mb-4"}>{projectDetail.projectDescription}</p>
          </SlideFromTopComponent>

          <div className={"mb-8"}>
            <TechStackList techStackList={projectDetail.technologies} size={48} priority={true} />
          </div>

          <section id={"project-goals"} className={"mb-16"}>
            <SlideFromTopComponent>
              <h2 className={"text-3xl font-bold mb-4"}>The Problems</h2>
            </SlideFromTopComponent>
            <ol className={"ml-8"}>
              {projectDetail.projectProblems.map((goal, idx) => (
                <SlideFromTopComponent key={`project-detail-${idx}`}>
                  <li className={"list-decimal text-2xl font-semibold"}>
                    {goal.titleProblem}
                    <p className={"text-lg mb-8 mt-4 font-medium"}>{goal.descriptionProblem}</p>
                  </li>
                </SlideFromTopComponent>
              ))}
            </ol>
          </section>

          <section id={"project-goals"} className={"mb-16"}>
            <SlideFromTopComponent>
              <h2 className={"text-3xl font-bold mb-4"}>Project's Goal</h2>
            </SlideFromTopComponent>
            <ol className={"ml-8"}>
              {projectDetail.projectGoals.map((goal, idx) => (
                <SlideFromTopComponent key={`project-goal-${idx}`}>
                  <li className={"list-decimal text-2xl font-semibold"}>
                    {goal.titleGoals}
                    <p className={"text-lg mb-8 mt-4 font-medium"}>{goal.descriptionGoals}</p>
                  </li>
                </SlideFromTopComponent>
              ))}
            </ol>
          </section>

          <section id={"project-step"} className={"mb-16"}>
            <SlideFromTopComponent>
              <h2 className={"text-3xl font-bold mb-4"}>Here's How I Achieve Goals</h2>
            </SlideFromTopComponent>
            <ol className={"ml-8"}>
              {projectDetail.projectStep.map((goal, idx) => (
                <SlideFromTopComponent key={`project-step-${idx}`}>
                  <li className={"list-decimal text-2xl font-semibold"}>
                    {goal.titleStep}
                    <p className={"text-lg mb-8 mt-4 font-medium"}>{goal.descriptionStep}</p>
                  </li>
                </SlideFromTopComponent>
              ))}
            </ol>
          </section>

          <section id={"project-result"} className={"mb-16"}>
            <SlideFromTopComponent>
              <h2 className={"text-3xl font-bold mb-4"}>Here's the Result</h2>
            </SlideFromTopComponent>
            <ol className={"ml-8"}>
              {projectDetail.projectOutcome.map((goal, idx) => (
                <SlideFromTopComponent key={`project-result-${idx}`}>
                  <li className={"list-decimal text-2xl font-semibold"}>
                    {goal.titleOutcome}
                    <p className={"text-lg mb-8 mt-4 font-medium"}>{goal.descriptionOutcome}</p>
                  </li>
                </SlideFromTopComponent>
              ))}
            </ol>
          </section>
        </div>
    </>
  );
}
