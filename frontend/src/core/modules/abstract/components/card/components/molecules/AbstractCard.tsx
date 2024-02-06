import { Card as MuiCard, CardContent, CardActions, Button } from "@mui/material";

interface AbstractCardProps {
    handleEdit : (id: string) => void;
    handleDelete : (id: string) => void;
    id : string;
    children : React.ReactNode | React.ReactNode[];
}

const AbstractCard = ({ handleEdit, handleDelete, id, children } : AbstractCardProps) => {
    return (
        <MuiCard sx={{ minWidth: 275 }}>
            <CardContent>
                { children }
                <CardActions>
                    <Button
                        size='small'
                        color='primary'
                        variant='contained'
                        onClick={() => handleEdit(id)}
                    >
                        Edit
                    </Button>
                    <Button
                        size='small'
                        color='error'
                        variant='contained'
                        onClick={() => handleDelete(id)}
                    >
                        Delete
                    </Button>
                </CardActions>
            </CardContent>
        </MuiCard>
    )
}

export default AbstractCard;