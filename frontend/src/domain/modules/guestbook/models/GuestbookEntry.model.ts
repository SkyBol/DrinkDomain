import { defaultReview, Review } from "../../review/models/ReviewEntry.model";

export type GuestbookEntry = {
    id: string;
    name: string;
    description: string;
    bottle_id: string;
    picture_id: string;
}

export type GuestbookEntryForm = GuestbookEntry & Review;


export const defaultGuestbookEntry: GuestbookEntry = {
    id: "",
    name: "",
    description: "",
    bottle_id: "",
    picture_id: "",
}

export const defaulGuestbookEntryForm: GuestbookEntryForm = {
    ...defaultGuestbookEntry,
    ...defaultReview,
}

export default GuestbookEntry;