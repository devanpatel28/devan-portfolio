import { icons } from "@/config/icons";

export const project_info:{
    project_name: string;
    project_image:string;
    time:string;
    description: string;
    links?: {
        icon: string;
        name: string;
        url: string;
    }[];
}[] = [
    {
        project_name: "Template for This Website",
        project_image:"/projects/portfolio_project.png",
        time:"Jan. 2026",
        description: "The template for this website, named Nextjs-Portfolio-Blog. Built with Next.js, Tailwind CSS, Vercel, and more.",
        links: [
            {
                icon: icons.github,
                name: "GitHub",
                url: "https://github.com/devanpatel28/devan-portfolio"
            },
        ]
    },
   


];