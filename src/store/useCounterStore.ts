import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type CounterStore = {
  count: number
  totalClicks: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

const useCounterStore = create<CounterStore>()(
  persist( 
    (set) => ({
      count: 0,
      totalClicks: 0,
      increment: () => set((state) => ({ 
        count: state.count + 1,
        totalClicks: state.totalClicks + 1 
      })),
      decrement: () => set((state) => ({ 
        count: state.count - 1,
        totalClicks: state.totalClicks + 1 
      })),
      reset: () => set((state) => ({ 
        count: 0,
        totalClicks: state.totalClicks + 1 
      }))
    }),
    {
      name: 'counter-storage', // local storage'da kullanılacak anahtar
      storage: createJSONStorage(() => localStorage), // storage tipi
    }
  )
)

export default useCounterStore