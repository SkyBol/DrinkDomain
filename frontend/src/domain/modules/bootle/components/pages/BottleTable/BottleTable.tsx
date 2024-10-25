import { useEffect, useState } from "react";
import Bottle from "../../../models/Bottle.model.ts";
import BottleService from "../../../services/BottleService.ts";
import BottleList from "../../molecules/BottleList/BottleList.tsx";
import ReviewService from "../../../../review/services/ReviewService.ts";
import Review from "../../../../review/models/ReviewEntry.model.ts";
import WishlistPopup from "../../../../wishlist/components/atoms/Wishlist/Wishlist.tsx";
import { FactCheck } from "@mui/icons-material";
import { Autocomplete, TextField } from "@mui/material";
import BottleType from "../../../models/BottleTypes.model.ts";

interface Filter {
    name: string;
    type: string;
}

const startFilter: Filter = {
    name: "",
    type: "",
}

const BottleTable = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [bottles, setBottles] = useState<Bottle[]>([]);
    const [filter, setFilter] = useState<Filter>(startFilter);
    const [filteredBottles, setFilteredBottles] = useState<Bottle[]>([]);

    useEffect(() => {
        const getBottles = async () => {
            const bottles: Bottle[] = (await BottleService.getAll()).data;
            const reviews: Review[] = (await ReviewService.getAll()).data;

            const reviewedBottles = bottles.map((bottle) => {
                const reviewForBottle = reviews.find((review) => review.bottle_id === bottle.id);

                if (!reviewForBottle) {
                    return bottle;
                }

                bottle.rating = reviewForBottle.bottle_review.reduce((a, b) => Number(a) + Number(b), 0) / reviewForBottle.bottle_review.length;
                return bottle;
            });

            setBottles(reviewedBottles);
        }

        getBottles();
    }, []);

    useEffect(() => {
        console.log(bottles.length, filter)
        setFilteredBottles(
            bottles
                .filter((bottle) => {
                    if (filter.name && filter.name.length > 0) {
                        return bottle.name.toLocaleLowerCase().includes(filter.name.toLocaleLowerCase());
                    }
                    return true;
                })
                .filter((bottle) => {
                    if (filter.type && filter.type.length > 0) {
                        return bottle.type === filter.type;
                    }
                    return true;
                })
        )
    }, [filter, bottles]);


    return (
        <div style={{ padding:15 }}>
            <div
                onClick={() => setOpen(true)}
                style={{
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    cursor: "pointer",
                    paddingLeft: "16px",
                }}
            >
                <FactCheck/>
                <p style={{paddingLeft: "5px"}}>
                    Wunschliste
                </p>
            </div>
            <div>
                <TextField
                    onChange={(event) =>
                        setFilter({
                            ...filter,
                            name: event.target.value,
                        })
                    }
                />
                <Autocomplete
                    renderInput={(params) => <TextField {...params} label="Type" />}
                    options={Object.values(BottleType)}
                    onChange={(_e, value) => 
                        setFilter({
                            ...filter,
                            type: value,
                        })
                    }
                />
            </div>
            <WishlistPopup open={open} close={() => setOpen(false)} />
            <div style={{ margin: "16px" }}>
                <BottleList
                    bottles={filteredBottles}
                />
            </div>
        </div>
    )
}

export default BottleTable;