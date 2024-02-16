import {Rating, styled, Typography} from "@mui/material";
import LocalBarIcon from '@mui/icons-material/LocalBar';

interface AbstractCardRatingProps {
    rating : number;
}
;
const StyledRating = styled(Rating)({
    iconFilled: {
        color: 'red', // Farbe des ausgefüllten Symbols ändern
    },
    iconEmpty: {
        color: 'grey', // Farbe des leeren Symbols ändern
    },
})
const AbstractCardRating = ({ rating } : AbstractCardRatingProps) => {

    return (
        <Typography variant="h5" component="div">
            <StyledRating
                name="read-only"
                value={rating}
                readOnly
                precision={0.5}
                icon={<LocalBarIcon fontSize="inherit" />}
                emptyIcon={<LocalBarIcon fontSize="inherit" />}
            />
        </Typography>
    )
}

export default AbstractCardRating;