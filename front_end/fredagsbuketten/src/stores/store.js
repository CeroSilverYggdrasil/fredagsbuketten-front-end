import { create } from "zustand"

const useAuthStore = create((set, get) => ({
    token: null,
    setToken: (token) => set({ token }),
}))

export default useAuthStore;