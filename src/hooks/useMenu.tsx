import { useState } from "react"
import { fakeMenu } from "../fakeData/fakeMenu"
import { deepClone } from "../utils/array"
import { syncBothMenus } from "../api/product"

// Définition d'un type useMenuHooks pour les produits du menu
type useMenuHooks = {
  id: string
  imageSource: string
  title: string
  price: number
  quantity: number
  isAvailable: boolean
  isPublicised: boolean
}

export const useMenu = () => {
  const [menu, setMenu] = useState<useMenuHooks[] | undefined>([])

  // Ajouter un produit
  const handleAdd = (newProduct: useMenuHooks, username: string) => {
    const menuCopy: useMenuHooks[] = menu ? deepClone(menu) : []
    const menuUpdated = [newProduct, ...menuCopy]
    setMenu(menuUpdated)
    syncBothMenus(username, menuUpdated)
  }

  // Supprimer un produit
  const handleDelete = (idOfProductToDelete: string, username: string) => {
    if (!menu) return
    const menuCopy: useMenuHooks[] = deepClone(menu)
    const menuUpdated = menuCopy.filter((product: useMenuHooks) => product.id !== idOfProductToDelete)
    setMenu(menuUpdated)
    syncBothMenus(username, menuUpdated)
  }

  // Modifier un produit
  const handleEdit = (productBeingEdited: useMenuHooks, username: string) => {
    if (!menu) return
    const menuCopy = deepClone(menu)
    const indexOfProductToEdit = menu.findIndex(
      (menuProduct) => menuProduct.id === productBeingEdited.id
    )
    if (indexOfProductToEdit >= 0) {
      menuCopy[indexOfProductToEdit] = productBeingEdited
      setMenu(menuCopy)
      syncBothMenus(username, menuCopy)
    }
  }

  const resetMenu = (username: string) => {
    setMenu(fakeMenu.LARGE)
    syncBothMenus(username, fakeMenu.LARGE)
  }

  return { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu }
}
