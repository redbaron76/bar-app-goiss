import create from "zustand";

const useUser = create((set, get) => ({
  user: null,
  loginUser: (user) => {
    set({
      user: {
        id: new Date().getTime(),
        email: user.login
      }
    });
  }
}));

export default useUser;
