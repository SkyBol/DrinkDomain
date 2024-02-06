import AbstractCardBody from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardBody";
import AbstractCardTitle from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardTitle";
import AbstractCard from "../../../../../../core/modules/abstract/components/card/components/molecules/AbstractCard";
import Reminder from "../../../models/Reminder.model";

interface ReminderCardProps {
    reminder : Reminder;
    handleEdit : (val : string) => void;
    handleDelete : (val : string) => void;
}

const ReminderCard = ({ reminder, handleEdit, handleDelete } : ReminderCardProps) => {
    return (
        <div key={reminder.id}>
            <AbstractCard
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                id={reminder.id}
            >
                <AbstractCardTitle>{reminder.title}</AbstractCardTitle>
                <AbstractCardBody>{reminder.description}</AbstractCardBody>
            </AbstractCard>
        </div>
    );
}

export default ReminderCard;