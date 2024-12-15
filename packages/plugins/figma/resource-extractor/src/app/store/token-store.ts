import { create } from "zustand";

interface AccessTokenState {
  accessToken: string;
  updateToken: (accessToken: string) => void;
  removeToken: () => void;
}

export const useTokenStore = create<AccessTokenState>(set => ({
  accessToken: "",
  updateToken: accessToken => set({ accessToken }),
  removeToken: () => set({ accessToken: "" }),
}));
