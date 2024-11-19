export interface IFishSlice {
  fishes: number;
  addFish: () => void;
};

const FishSlice = (set: any) => ({
  fishes: 0,
  addFish: () => set((state: IFishSlice) => ({ ...state, fishes: state.fishes + 1 })),
});

export default FishSlice;