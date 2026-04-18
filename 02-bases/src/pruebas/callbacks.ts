import { getUserById } from "../js-foundation";

export const runCallbackTest = () => {
  const id = 1;

  getUserById(id, (error, user) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log("Usuario encontrado:", user);
  });
};
