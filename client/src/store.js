import { create } from 'zustand'

const useStore = create((set) => ({
    loggedIn: false,
  login: () => set ({ loggedIn: true }),
  logout: () => set({ loggedIn: false }),
}))

export default useStore;