import AbstractService from "../../../../core/modules/abstract/services/AbstractService";
import Review from "../models/ReviewEntry.model";

const GuestbookService = new AbstractService<Review>("/call/guestbook/");

export default GuestbookService;