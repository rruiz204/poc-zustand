export interface IBearSlice {
  bears: number;
  addBear: () => void;
};

const BearSlice = (set: any) => ({
  bears: 0,
  addBear: () => set((state: IBearSlice) => ({ ...state, bears: state.bears + 1 })),
});

export default BearSlice;