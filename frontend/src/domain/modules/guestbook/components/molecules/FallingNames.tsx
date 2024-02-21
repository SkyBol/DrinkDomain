import FallingName from "../atoms/FallingName";

type FallingNamesProps = {}

const FallingNames = () => {
    return (
        <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            pointerEvents: 'none',
        }}>
            <FallingName
                entry={{
                    id: "test",
                    name: "test",
                }}
            />
        </div>
    );
}

export default FallingNames;
