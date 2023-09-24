import { createContext } from "react";
import { RootStore } from "./root.store";

export const rootStore = new RootStore()

export const StoreContext = createContext<RootStore>(rootStore)

export const StoreProvider = StoreContext.Provider