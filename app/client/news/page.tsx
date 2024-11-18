import Footer from '@/components/Footer'
import React from 'react'

export default function NewsPage() {
    const berita = "BERITA"
    const latestPost = "LATEST POSTS"
    const judul = "Bisnis Franchise Es Teh Semanis Rasanya, Segini Harga Buka Usahanya"
    const tanggal = "Posted on August 5, 2024"
    const oleh = "By"
    const admin = "Admin"
    const kategori = "UMKM & Wirausaha"
    const gambar = "/landingpage.png"
    const categories = [
        {
            name: "UMKM & Wirausaha",
            checked: false
        },
        {
            name: "Infrastruktur",
            checked: false
        },
        {
            name: "Ekonomi Bisnis",
            checked: false
        }
    ];
    const NewsCard = ({ gambar, judul, tanggal, admin, kategori }: any) => {
        return (
            <div className='bg-slate-500 rounded-lg'>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                        src={gambar}
                        alt="Es Teh"
                        className="w-full h-48 md:h-96 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="font-bold text-lg mb-2">
                            {judul}
                        </h3>
                        <div className="flex flex-wrap items-center text-sm text-gray-500 mb-2">
                            <span>{tanggal}</span>
                            <span className="mx-2">•</span>
                            <span className='mr-1'>{oleh}</span>
                            <span className='text-blue-500'>{admin}</span>
                        </div>
                        <p className="text-blue-500 text-sm">
                            {kategori}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="min-h-screen">
            <div className="bg-[#DCE7DA] p-6 md:p-10 rounded-md shadow-md">
                <div className="flex justify-center">
                    <h2 className="text-[#7A7A7A] font-bold text-2xl md:text-4xl">{berita}</h2>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                    <div className="my-8 md:my-20 flex flex-col lg:flex-row lg:justify-between gap-8">
                        <div className="w-full lg:w-1/3 lg:order-2">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                            <div className="mt-8">
                                <h3 className="text-lg font-semibold text-green-700 mb-4">Kategori</h3>
                                <div className="space-y-2">
                                    {categories.map((category, index) => (
                                        <label key={index} className="flex items-center space-x-2">
                                            <input type="checkbox" className="form-checkbox text-green-600" />
                                            <span>{category.name}</span>
                                        </label>
                                    ))}
                                </div>

                                <div className="mt-8">
                                    <h3 className="text-lg font-semibold text-green-700 mb-4">RECENT POSTS</h3>
                                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                                        {[1, 2, 3, 4].map((item) => (
                                            <div key={item} className="flex space-x-4 items-start bg-green-50 p-2 rounded">
                                                <img
                                                    src={gambar}
                                                    alt="Pedagang"
                                                    className="w-16 h-16 object-cover rounded"
                                                />
                                                <div>
                                                    <h4 className="font-medium text-sm">
                                                        Jurus Pedagang Basreng Bangkit dari Dampak COVID-19
                                                    </h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-2/3 lg:order-1">
                            <h2 className="text-xl font-bold mb-8">{latestPost}</h2>
                            <div className='flex flex-col gap-4'>
                                <NewsCard gambar={gambar} judul={judul} tanggal={tanggal} admin={admin} kategori={kategori} />
                                <NewsCard gambar={gambar} judul={judul} tanggal={tanggal} admin={admin} kategori={kategori} />
                                <NewsCard gambar={gambar} judul={judul} tanggal={tanggal} admin={admin} kategori={kategori} />
                                <NewsCard gambar={gambar} judul={judul} tanggal={tanggal} admin={admin} kategori={kategori} />
                                <NewsCard gambar={gambar} judul={judul} tanggal={tanggal} admin={admin} kategori={kategori} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
