export const refreshPage = () => window.location.reload()

// type LocalStorageValue = string | number | boolean | object;

// export const setLocalStorage = (key : string, value: LocalStorageValue) => {
//   localStorage.setItem(key, JSON.stringify(value))
// }


// <T,> Rajoute une sécurité contraitement à unknown, quand on ne sait pas ce que l'on va recevoir, si on ne connait pas la valeur on bouge vers un type générique , puis unknown, puis any...
export const setLocalStorage = <T,> (key : string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage =  (key: string): unknown | null => {
  const item = localStorage.getItem(key)
  return item ? JSON.parse(item) : null
}

// **** Equivalent
// export const getLocalStorage =  (key: string): unknown => {
//   const item = localStorage.getItem(key);
//   if (item)
//   return JSON.parse(item) 
// }

// **** Equivalent
// export const getLocalStorage = <T,> (key: string) => {
//   const item = localStorage.getItem(key);
//   if (item)
//   return JSON.parse(item) as T 
// }
// CASTING : Typage à la volée, typer au moment ou la fonction va s'exécuter, récupérer ds informations, grace à as T (réassignation de type)
// T et as T rajoute une couche de sécurité

