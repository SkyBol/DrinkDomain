
type Bottle = {
    id : string;
    img_id: string;
    name : string;
    type: string,
    description ?: string;
    country ?: string;
    amount: number;
    rating: number;
}

export const defaultBottle : Bottle = {
    id: "",
    img_id: "",
    name: "",
    type: "",
    description: "",
    country: "",
    amount: 0,
    rating: 0,

}

export default Bottle;