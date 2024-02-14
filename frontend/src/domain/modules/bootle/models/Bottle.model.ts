
type Bottle = {
    id : string;
    img: string;
    name : string;
    type: string,
    description ?: string;
    country ?: string;
    amount: number;
    rating: number;
}

export const defaultBottle : Bottle = {
    id: "",
    img: "",
    name: "",
    type: "",
    description: "",
    country: "",
    amount: 0,
    rating: 0,

}

export default Bottle;