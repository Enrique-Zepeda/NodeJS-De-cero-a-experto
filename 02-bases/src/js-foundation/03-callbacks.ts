interface User {
  id: number;
  name: string;
}

const users: User[] = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
];

// Definimos el tipo del callback:
// Recibe un string o null (para el error) y opcionalmente el usuario.
type GetUserCallback = (err?: string | null, user?: User) => void;

export const getUserById = (id: number, callback: GetUserCallback) => {
  const user = users.find((user) => user.id === id);
  return !user
    ? setTimeout(() => {
        callback(`User not found with id: ${id}`);
      }, 2500)
    : callback(undefined, user);
};
