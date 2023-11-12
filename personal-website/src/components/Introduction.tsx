import React from 'react';

interface Projects {
    name: string;
    link: string;
    description: string;
};

const Introduction: React.FC = () => {
    const personalProjects: Projects[] = [
        {
            name: "Probabilistic",
            link: "https://github.com/jmholzer/probabilistic",
            description: "probability curves for the future price of securities using options data.",
        },
        {
            name: "Daily Phrase",
            link: "https://github.com/jmholzer/daily-phrase",
            description: "automated short-form video content for langauge learning."
        }
    ]
    return (
        <div className="w-6/12 mt-4 items-center">
            <p className="text-white text-left mb-4">
                Hey, I'm Jannic. For the past four years, I've been using technology to solve problems.
                I care a lot about making life easier using software. I use this site to share intuitive
                explanations of the things I've learned.
            </p>
            <p className="text-white text-left mb-4">
                I'm mainly interested in tooling for data engineering and machine learning. I was a maintainer
                on Kedro for a year, where I mainly worked on improving the developer experience on Databricks.
                Apart from that, I love working on on my own projects:
            </p>
            <ul className="list-disc text-white text-left mb-4 list-inside">
                {
                    personalProjects.map(
                        project => (
                            <div className="mb-2">
                                <li key={project.name}>
                                    <a
                                        href={project.link}
                                        className="
                                            text-white
                                            italic
                                            underline
                                            hover:text-blue-500
                                            hover:underline
                                            transition
                                            duration-300
                                            ease-in-out
                                    ">
                                        {project.name}
                                    </a>
                                    : {project.description}
                                </li>
                            </div>
                        )
                    )
                }
            </ul>
        </div >
    )
}

export default Introduction;