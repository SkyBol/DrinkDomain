import AbstractService from "../../../../core/modules/abstract/services/AbstractService";
import Wishlist from "../models/Wishlist.model";

const WishlistService = new AbstractService<Wishlist>("/call/bottles/");

export default WishlistService;