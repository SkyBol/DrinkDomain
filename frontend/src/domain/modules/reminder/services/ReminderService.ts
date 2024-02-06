import AbstractService from "../../../../core/modules/abstract/services/AbstractService";
import Reminder from "../models/Reminder.model";

const ReminderService = new AbstractService<Reminder>("/call/reminders/");

export default ReminderService;