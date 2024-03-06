import rumVideo from "../../../../../../assets/videos/rumBg.mp4"

const CardVideoBackground = () => {

    return (

        <div>
            <video
                src={rumVideo}
                autoPlay
                loop
                muted
                style={{
                    width: "100%",
                    height: "100%",
                }}
            />
        </div>
    )

}
export default CardVideoBackground