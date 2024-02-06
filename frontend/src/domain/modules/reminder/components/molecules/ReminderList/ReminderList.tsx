import ReminderCard from "../../atoms/ReminderCard/ReminderCard";

interface ReminderListProps {
    reminders : [];
    handleDelete : (id : string) => void;
    handleEdit : (id: string) => void;
}

const ReminderList = ({ reminders, handleDelete, handleEdit } : ReminderListProps) => {
    return (
        <div>
            {
                reminders.map((reminder) => {
                    return (
                        <ReminderCard
                            reminder={reminder}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                        />
                    )
                })
            }
        </div>
    )
}

export default ReminderList;