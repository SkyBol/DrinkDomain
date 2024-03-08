import { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Bottle from "../../../models/Bottle.model.ts";
import BottleService from "../../../services/BottleService.ts";
import AbstractCard
    from "../../../../../../core/modules/abstract/components/card/components/molecules/AbstractCard.tsx";



const BottleDetailPage = () => {
    const [loading, setLoading] = useState(true);
    const { bottleId } = useParams();
    const navigate = useNavigate();
    const [bottle, setBottle] = useState<Bottle | null>(null);

    // Simulate fetching bottle details from an API
    useEffect(() => {
            if (bottleId) {
                BottleService.get(bottleId).then((res) => {
                    setBottle(res.data);
                    setLoading(false);
                }).catch(error => {
                    console.error('Error fetching bottle details:', error);
                    setLoading(false);
                });
            }
        }, [bottleId]);

    const handleEdit = (id: string) => {
        navigate('/bottles/' + id);
    };
    const handleDelete = (id: string) => {
        BottleService.delete(id).then(()=>{navigate("/bottles/")});
    };

    return (
        <div>

            {loading ? (
                <Typography variant="body1">Loading...</Typography>
            ) : bottle ? (
        <div>
            <AbstractCard handleDelete={handleDelete} handleEdit={handleEdit} id={bottle.id} bottle={bottle} />

        </div>
            ) : (
                <Typography variant="body1">No bottle found with ID {bottleId}</Typography>
            )}
        </div>
    );
};

export default BottleDetailPage;
