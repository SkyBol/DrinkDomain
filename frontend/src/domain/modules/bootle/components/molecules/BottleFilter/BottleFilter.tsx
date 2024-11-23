import { useEffect, useState } from "react";
import Bottle from "../../../models/Bottle.model";
import { Autocomplete, TextField } from "@mui/material";
import BottleType from "../../../models/BottleTypes.model";

export interface BottleFilter {
  name: string;
  type: string;
  alcohol_included: boolean;
}

export const startBottleFilter: BottleFilter = {
  name: "",
  type: "",
  alcohol_included: true,
}

interface BottleFilterProps {
  bottles: Bottle[];
  setFilteredBottles: (filtered: Bottle[]) => void;
}

const BottleFilter: React.FC<BottleFilterProps> = ({bottles, setFilteredBottles}) => {
  const [filter, setFilter] = useState<BottleFilter>(startBottleFilter);

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
            .filter((bottle) => {
                if (filter.alcohol_included) {
                }
                return true;
            })
    )
  }, [filter, bottles]);

  return (
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
  );
}

export default BottleFilter;
