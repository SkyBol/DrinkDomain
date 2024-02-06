import { useEffect, useState } from "react";
import Reminder from "../../../models/Reminder.model";
import ReminderService from "../../../services/ReminderService";


const ReminderTable = () => {
    const [reminders, setReminders] = useState<Reminder[]>([])

    useEffect(() => {
        ReminderService.getAll().then((res) => {
            setReminders(res.data);
        });
    }, []);

    return (
        <div>
            
        </div>
    )
}

export default ReminderTable;