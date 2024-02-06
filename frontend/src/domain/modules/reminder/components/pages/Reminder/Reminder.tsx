import ReminderCard from "../../atoms/ReminderCard/ReminderCard";


const Reminder = () => {
    return (
        <div>
            <ReminderCard
                reminder={{
                    id: "",
                    organisator: {
                        id: "",
                        email: "",
                        firstName: "",
                        lastName: "",
                        roles: []
                    },
                    title: "asdfgh",
                    description: "asdawdasd",
                    times: []
                }}
                handleEdit={() => {}}
                handleDelete={() => {}}
                />
        </div>
    )
}

export default Reminder;