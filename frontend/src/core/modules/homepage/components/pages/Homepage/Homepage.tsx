import FallingNames from "../../../../../../domain/modules/guestbook/components/molecules/FallingNames";


const Homepage = () => {
    
    return (
        <div>
            <h1>Drink Domain</h1>
            <div style={{
                height: '800px',
                width: '1000px',
            }}>
                <FallingNames />
            </div>
        </div>
    )
}

export default Homepage;