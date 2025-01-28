'use client'
import useCounterStore from '@/store/useCounterStore'
import Link from 'next/link'

export default function Stats() {
  const { count, totalClicks } = useCounterStore()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center lg:p-24">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold mb-8">Sayaç İstatistikleri</h1>
        <div className="space-y-4">
          <p className="text-xl">Mevcut Sayaç Değeri: {count}</p>
          <p className="text-xl">Toplam Tıklama Sayısı: {totalClicks}</p>
        </div>
        <div className="mt-8">
          <Link 
            href="/" 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </main>
  )
} 