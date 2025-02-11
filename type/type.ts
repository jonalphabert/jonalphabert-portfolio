import {TechStackKey} from "@/data/tech-stack";

export type workExperience = {
    companyName: string,
    workYear: string,
    responsibilities: string[],
    technologies: TechStackKey[],
}

export type projectType = {
    projectName: string,
    projectImgCover: string,
    projectSlug: string,
    projectYear: string,
    projectDescription:string,
    projectProblems: {
        titleProblem: string,
        descriptionProblem:string,
        imageUrlProblems?: string
    }[],
    projectGoals: {
        titleGoals: string,
        descriptionGoals:string,
        imageUrlGoals?: string
    }[],
    projectStep: {
        titleStep: string,
        descriptionStep:string,
        imageUrlStep?: string
    }[],
    projectOutcome: {
        titleOutcome: string,
        descriptionOutcome:string,
        imageUrlOutcome?: string
    }[],
    technologies: TechStackKey[],
    isFeatured: boolean,
    projectUrl: string,
}