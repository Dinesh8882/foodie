import { useDispatch, useSelector } from "react-redux";
import { addToFavo, removeToFavo } from "../slicer/favoSlicer";
import { toast } from "sonner";


export const useFavorite = () => {
    const dispatch = useDispatch()
    const favoriteItems = useSelector((state) => state.favorite.favoriteItem)

    const addFavoItem = (id) => {
        dispatch(addToFavo(id))
        toast.success('Added in favorite list!');
    }

    const removeFavoItem = (id) => {
        dispatch(removeToFavo(id))
        toast.success('removed from favorite list!');
    }
    return {
        addFavoItem,
        favoriteItems,
        removeFavoItem
    }
}