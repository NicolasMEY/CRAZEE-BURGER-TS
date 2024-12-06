export const refreshPage = () => window.location.reload()

type LocalStorageValue = string | number | boolean | object;

export const setLocalStorage = (key : string, value: LocalStorageValue) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage = (key: string): string | null => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null; // Retourne null si la valeur est absente
}

// null si la clé n'existe pas dans le stockage local. Cependant, la fonction JSON.parse() attend une chaîne de caractères en paramètre et ne peut pas gérer null.
