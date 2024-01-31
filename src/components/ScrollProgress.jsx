import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export const ScrollProgress = () => {
    const controls = useAnimation();

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        const scrollPercentage =
            (scrollY / (documentHeight - windowHeight)) * 100;

        controls.start({
            width: `${scrollPercentage}%`,
        });
    };

    // Attach the scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        scroller.scrollTo(sectionId, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    return (
        <motion.div
            className="fixed top-14 left-0 h-1 bg-purple-300 z-[1000]"
            animate={controls}
        />
    );
};
