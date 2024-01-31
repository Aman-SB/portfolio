import React, { useState, useTransition } from "react";
import TabButton from "../../components/Tabbutton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>C++</li>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>Sql</li>
                <li>Postgress</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Fullstack Academy of Code</li>
                <li>University of California, Santa Cruz</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>AWS Cloud Practitioner</li>
                <li>Google Professional Cloud Developer</li>
            </ul>
        ),
    },
];

const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white z-[100] top-6" id="about">
            <div className="md:grid md:grid-cols-2 mt-8 gap-4 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <img
                    src="/images/about-image.png"
                    width={500}
                    height={500}
                    className=" md:w-[350px] md:h-[350px] sm:w-[300px] sm:h-[300px]"
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        About Me Know Who I'M
                    </h2>
                    <p className="text-2xl lg:text-lg ">
                        Hi Everyone, I am Aman Bisht from Uttrakhand, India. I
                        have completed Bachelor of Technology in Electrical
                        Engineering at Bipin Tripathi Kumaon Institute of
                        Technology. I am a full stack web developer with a
                        passion for creating interactive and responsive web
                        applications. I am a quick learner and I am always
                        looking to expand my knowledge and skill set. I am a
                        team player and I am excited to work with others to
                        create amazing applications.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
