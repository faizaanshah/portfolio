import React from "react";

/**
 * Higher-Order Component (HOC) for creating consistent section layouts.
 * 
 * @param {React.Component} WrappedComponent - The component to be wrapped inside the section layout.
 * @param {number} sectionIndex - Use for alternating colors.
 * @returns {React.Component} A new component with the section layout applied.
 * 
 * @props {string} title - The title of the section.
 * @props {string} subtitle - The subtitle (optional).
 * @props {object} props - Additional props passed to the WrappedComponent.
 */

const withSectionLayout = (WrappedComponent, sectionIndex = 0) => {
    return ({ title, subtitle, ...props }) => {
        // Generate an ID from the title (e.g., "About Me" → "about-me")
        const sectionId = title ? title.toLowerCase().replace(/\s+/g, "-") : "";

        // Alternating background colors for different sections
        const sectionBgColor = sectionIndex % 2 === 0 ? "bg-[#121215]" : "bg-[#09090b]";
        const componentBgColor = sectionIndex % 2 === 0 ? "bg-[#09090b]" : "bg-[#121215]";

        return (
            <section id={sectionId} className={`py-16 px-6 md:px-12 lg:px-24 ${sectionBgColor} text-white scroll-mt-10`}>
                <div className="text-center mb-10">
                    {title && <h2 className="text-3xl font-bold">{title}</h2>}
                    {subtitle && <p className="text-lg text-gray-400 mt-2">{subtitle}</p>}
                </div>
                <div className={`max-w-6xl mx-auto p-8 rounded-lg shadow-lg ${componentBgColor}`}>
                    <WrappedComponent {...props} />
                </div>
            </section>
        );
    };
};

export default withSectionLayout;
