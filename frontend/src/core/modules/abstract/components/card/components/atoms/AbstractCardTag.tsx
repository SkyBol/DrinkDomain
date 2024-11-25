import React from "react";

interface AbstractCardTagProps {
    tags?: string[];
}

const AbstractCardTag: React.FC<AbstractCardTagProps> = ({ tags }) => {
    const tagStyle = {
        backgroundColor: "#D4AF37", // Gold background for the tags
        color: "black",
        padding: "5px 10px", 
        borderRadius: "15px", // Rounded corners
        fontSize: "12px",
        whiteSpace: "nowrap" as "nowrap", // Ensure the text doesn't break onto a new line
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Slight shadow for depth
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "15px",
        }}>
            {tags?.map((tag, index) => (
                <div key={index} style={tagStyle}>
                    {tag}
                </div>
            ))}
        </div>
    );
};

export default AbstractCardTag;
