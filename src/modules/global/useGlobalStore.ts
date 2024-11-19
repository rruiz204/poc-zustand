import { create } from "zustand";

type State = {
  randomText: string;
};

type Action = {
  setRandomText: (text: string) => void;
};

const useGlobalStore = create<State & Action>((set) => ({
  randomText: "some random text",
  setRandomText: (text: string) => set((state) => ({ ...state, randomText: text })), // Inmutability
}));

export default useGlobalStore;