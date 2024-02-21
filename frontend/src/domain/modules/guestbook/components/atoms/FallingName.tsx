import GuestbookEntry from "../../models/GuestbookEntry.model";
import './FallingName.css'

type FallingNameProps = {
    entry: GuestbookEntry;
}


const FallingName = ({ entry } : FallingNameProps) => {
    return (
        <div
            className="falling"
            id={entry.id}
        >
            { entry.name }
        </div>
    );
}

export default FallingName;