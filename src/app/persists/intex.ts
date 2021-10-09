export const persistSomething = (toPersist: any) => {
  /**
   *  Handles all local persists data
   */
  localStorage.setItem("persistItem", toPersist);
};
