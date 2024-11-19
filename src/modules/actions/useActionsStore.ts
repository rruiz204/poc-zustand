import { create } from "zustand";

type State = {
  count: number;
};

const useActionsStore = create<State>(() => ({
  count: 0
}));

export const increase = () => useActionsStore.setState((state) => ({ ...state, count: state.count + 1 }));

export const decrease = () => useActionsStore.setState((state) => ({ ...state, count: state.count - 1 }));

export default useActionsStore;