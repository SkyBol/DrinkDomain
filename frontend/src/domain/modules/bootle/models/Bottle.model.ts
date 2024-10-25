
type Bottle = {
    id : string;
    img_id: string;
    name : string;
    type: string,
    description ?: string;
    tags ?:string[];
    country ?: string;
    amount: number;
    rating: number,
    alcohol: string;
}

export const defaultBottle : Bottle = {
    id: "",
    img_id: "",
    name: "",
    type: "",
    description: "",
    tags: [],
    country: "",
    amount: 0,
    rating: 0,
    alcohol: "",
}

export default Bottle;