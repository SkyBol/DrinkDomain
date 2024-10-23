
type SingleWishlist = {
    name: string;
    wish_granted: boolean;
}

type Wishlist = {
    id: string;
    wishing: SingleWishlist[]
}


export const defaultWishlist: Wishlist = {
    id: "",
    wishing: [],
}

export default Wishlist;