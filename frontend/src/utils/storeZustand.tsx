import { create } from 'zustand';

export const useCounterStore:any = create((set: (arg0: (state: any) => { count: any; }) => any)=>(
    {
        count: 0,
        progress: () => set((state: any) => ({ count: state.count + 1 })),
    }
));