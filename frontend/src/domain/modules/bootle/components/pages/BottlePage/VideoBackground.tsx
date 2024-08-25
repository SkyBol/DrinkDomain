import rumVideo from "../../../../../../assets/videos/rumBg.mp4";

const CardVideoBackground = () => {
    return (
        <div
            style={{
                position: "relative",
                overflow: "hidden",
                width: "100vw",
                height: "100vh",
            }}
        >
            <video
                src={rumVideo}
                autoPlay
                loop
                muted
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "100vh",
                    width: "auto",
                }}
            />
        </div>
    );
};

export default CardVideoBackground;
