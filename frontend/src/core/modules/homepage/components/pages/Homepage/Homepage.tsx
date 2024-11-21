import Carousel from "../../../../../../domain/modules/guestbook/components/molecules/Carousel";



const Homepage = () => {
    
    return (
        <div>
            <div style={{
                height: '800px',
                width: '1000px',
            }}>
                <Carousel />
            </div>
            <div style={{
                position: "absolute",
                right: "0",
                top: "0",
                bottom: "0",
                width: "700px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div style={{width: "400px", fontSize: "1.4rem", backgroundColor: "#0c0d11", padding: "25px", borderRadius: "10px"}}>
                Willkommen auf der DrinkDomain-Webseite! Diese Plattform wurde von Jan und Sky im Rahmen der BMA entwickelt. Solltest du auf Fehler oder Probleme stossen, zögere nicht, dich direkt an uns zu wenden.
                </div>
            </div>
        </div>
    )
}

export default Homepage;