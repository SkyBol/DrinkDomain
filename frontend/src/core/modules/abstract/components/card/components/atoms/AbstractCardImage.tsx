
interface AbstractCardImageProps {
    img : string;
}

const AbstractCardCountry = ({ img } : AbstractCardImageProps) => {
    return (
        <img src={`src/img/liquor/${img}`} alt={"picture of the bottle"} style={{ width: 160, height: 200 }}/>
    )
}

export default AbstractCardCountry;

