
type Bottle = {
    id : string;
    img: File | null;
    name : string;
    type: string,
    description ?: string;
    country ?: string;
    amount: number;
    rating: number;
}

export const defaultBottle : Bottle = {
    id: "",
    img: null,
    name: "",
    type: "",
    description: "",
    country: "",
    amount: 0,
    rating: 0,

}

export default Bottle;