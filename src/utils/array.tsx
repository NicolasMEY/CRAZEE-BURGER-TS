type Item = {
  id: string | number;
}

export const deepClone = (array: Item[]): Item => {
  return JSON.parse(JSON.stringify(array))
}

export const findObjectById = (id: string | number, array: Item[]): Item | undefined => {
  return array.find((itemInArray) => itemInArray.id === id)
}

export const findIndexById = (idWithUnknowwIndex: string | number, array: Item[]): number => {
  return array.findIndex((itemInArray) => itemInArray.id === idWithUnknowwIndex)
}

export const removeObjectById = (idOfItemToRemove: string | number, array: Item[]): Item[] => {
  return array.filter((item) => item.id !== idOfItemToRemove)
}

export const isEmpty = (array: Item[]): boolean => {
  return array.length === 0
}

// const fruits = [{ nom: "Abricot" }, { nom: "Banane" }]
// const fruitsShallowCopy = [...fruits]
// const fruitsDeepCopy = deepClone(fruits)

// //fruitsShallowCopy[1].nom = "Cerise"
// fruitsDeepCopy[1].nom = "Cerise"

// console.log("fruits: ", fruits)
// //console.log("fruitsShallowCopy: ", fruitsShallowCopy)
// console.log("fruitsDeepCopy: ", fruitsDeepCopy)

