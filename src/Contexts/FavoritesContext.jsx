import { createContext, useContext, useState } from "react"

export const FavoritesContext = createContext()
FavoritesContext.displayName = 'Favorites'

export default function FavoritesProvider({ children }) {
    const [favorite, setFavorite] = useState([])

    return (
        <FavoritesContext.Provider value={{ favorite, setFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavoritesContext() {
    const { favorite, setFavorite } = useContext(FavoritesContext)

    function addFavorite(newFav) {
        const favRepeated = favorite.some(item => item.id === newFav.id)

        let newList = [...favorite]

        if(!favRepeated) {
            newList.push(newFav)
            return setFavorite(newList)
        }
        
        return setFavorite(newList.filter(item => item.id !== newFav.id))
    }

    return {
        favorite,
        addFavorite
    }
} 