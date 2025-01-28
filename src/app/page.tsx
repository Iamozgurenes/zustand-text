'use client'
import useCounterStore from '@/store/useCounterStore'
import Link from 'next/link'

export default function Home() {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center lg:p-24">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Sayaç: {count}</h1>
        <div className="space-x-2">
          <button
            onClick={increment}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Artır
          </button>
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Azalt
          </button>
          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            Sıfırla
          </button>
        </div>
        <div className="mt-4">
          <Link 
            href="/stats" 
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            İstatistikleri Görüntüle
          </Link>
        </div>
      </div>
    </main>
  )
}
