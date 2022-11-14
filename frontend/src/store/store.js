import create from 'zustand'

const useStore = create((set) => ({
    token: null,
    setToken: (newToken) => set((state) => ({ token: newToken })),
    removeToken: () => set((state) => ({token: null}))
}))


export default useStore;