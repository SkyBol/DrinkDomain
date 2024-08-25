
export type Review = {
    bottle_id: string;
    bottle_review: number;
}

export const defaultReview: Review = {
    bottle_id: "",
    bottle_review: 0,
}


export default Review;