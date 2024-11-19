import { create } from "zustand";
import BearSlice, { IBearSlice } from "./BearSlice";
import FishSlice, { IFishSlice } from "./FishSlice";

const useSlicesStore = create<IBearSlice & IFishSlice>((set) => ({
  ...BearSlice(set),
  ...FishSlice(set)
}));

export default useSlicesStore;