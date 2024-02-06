import User from "../../../../core/modules/user/models/User.model";


type Reminder = {
    id : string;
    organisator : User;
    title : string;
    description ?: string;
    place ?: string;
    times : Date[]
}

export const emptyReminder : Reminder = {
    id: "",
    organisator: {
        id: "",
        email: "",
        firstName: "",
        lastName: "",
        roles: []
    },
    title: "",
    description: "",
    place: "",
    times: []
}

export default Reminder;