import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface CounterState {
    count: number;
    increment: () => void;
    decrement: () => void;
    incrementFive: (num: number) => void;
    reset: () => void;
}

export const useCounterStore = create<CounterState>()(
    persist(
        (set) => ({
            count: 0,
            increment: () => set((state) => ({count: state.count + 1})),
            decrement: () => set((state) => ({count: state.count - 1})),
            incrementFive: (num: number = 5) => set((state) => ({count: state.count + num})),
            reset: () => set({count: 0}),
        }),
        {
            name: 'counter-storage',
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
)