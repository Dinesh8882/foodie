import { useDispatch, useSelector } from "react-redux";
import { addToFavo, removeToFavo } from "../slicer/favoSlicer";


export const useFavorite = () => {
    const dispatch = useDispatch()
    const favoriteItems = useSelector((state) => state.favorite.favoriteItem)

    const addFavoItem = (id) => {
        dispatch(addToFavo(id))

    }

    const removeFavoItem = (id) => {
        dispatch(removeToFavo(id))
    }
    return {
        addFavoItem,
        favoriteItems,
        removeFavoItem
    }
}