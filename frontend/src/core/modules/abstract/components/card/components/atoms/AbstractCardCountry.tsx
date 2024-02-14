
interface AbstractCardCountryProps {
    country ?: string;
}

const AbstractCardCountry = ({ country } : AbstractCardCountryProps) => {
    return (
            <img src={`https://www.worldometers.info/img/flags/${country}-flag.gif`} alt={"picture of the bottle"} style={{ width: 20, height: 20 }}/>
    )
}

export default AbstractCardCountry;

