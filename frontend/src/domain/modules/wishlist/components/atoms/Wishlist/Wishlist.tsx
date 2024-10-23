import { useEffect, useState } from "react";
import Wishlist, { defaultWishlist } from "../../../models/Wishlist.model";
import WishlistService from "../../../services/WishlistService";
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, ListItemIcon, ListItemText, TextField } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

export interface WishlistPopupProps {
    open: boolean;
    close: () => void;
}

export const WishlistPopup = ({open, close}: WishlistPopupProps) => {
    const [wishlist, setWishlist] = useState<Wishlist>(defaultWishlist);
    const [newWishName, setNewWishName] = useState<string>("");

    useEffect(() => {
        const getWishlist = async () => {
            const wishlists: Wishlist[] = (await WishlistService.getAll()).data;

            if (wishlists.length > 0) {
                setWishlist(wishlists[0]);
            } else {
                WishlistService.save(defaultWishlist);
            }
        }

        getWishlist();
    }, []);

    const update = (newWishlist: Wishlist) => {
        WishlistService.update(newWishlist, newWishlist.id);
        setWishlist(newWishlist);
    }

    const changeWishGranted = (item) => {
        return (_e, checked) => {
            const newWishing = wishlist.wishing.map((wish) => wish.name === item.name ? {...wish, wish_granted: checked} : wish);
            update({
                ...wishlist,
                wishing: newWishing,
            });
        }
    }

    const deleteItem = (item) => {
        return () => {
            const newWishing = wishlist.wishing.filter((wish) => wish.name !== item.name);
            update({
                ...wishlist,
                wishing: newWishing,
            });
        }
    }

    const addItem = (name: string) => {
        return () => {
            const newWishing = [...wishlist.wishing, {name: name, wish_granted: false}];
            update({
                ...wishlist,
                wishing: newWishing,
            });
        }
    }

    return (
        <Dialog open={open} onClose={close}>
            <DialogTitle>List of Items</DialogTitle>
            <DialogContent>
            <List>
                {wishlist.wishing.map((item, index) => (
                <ListItem key={index}>
                    <ListItemText primary={item.name} />
                    <ListItemIcon>
                        <Checkbox
                            checked={item.wish_granted}
                            onChange={changeWishGranted(item)}
                        />
                    </ListItemIcon>
                    <ListItemIcon onClick={deleteItem(item)}>
                        <Delete/>
                    </ListItemIcon>
                </ListItem>
                ))}
                <ListItem>
                    <ListItemText>
                        <TextField
                            id="name"
                            type="name"
                            onChange={(event) => setNewWishName(event.target.value)}
                        />
                    </ListItemText>
                    <ListItemIcon onClick={addItem(newWishName)}>
                        <Add/>
                    </ListItemIcon>
                </ListItem>
            </List>
            </DialogContent>
            <DialogActions>
                <Button onClick={close} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog >
    );
}

export default WishlistPopup;