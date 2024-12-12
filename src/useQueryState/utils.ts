
// Retorna true si un Array o un Obj se encuentra como "[]" o "{}"
export const isNotEmpty = (args: any) => JSON.stringify(args).length > 2

// Método para simular un delay en las consultas
export const sleep = (time: any) =>
  new Promise(resolve => setTimeout(resolve, time));  