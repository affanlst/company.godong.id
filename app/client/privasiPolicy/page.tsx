import Footer from '@/components/Footer'
import React from 'react'

export default function PrivasiPolicyPage() {
    const title = "Ringkasan Kebijakan Privasi kami"
    const description = "Kebijakan ini mencakup setiap situs web Godong yang ditautkan di sini, dan semua produk serta layanan yang terdapat di situs web tersebut."
    const deskripsi1 = "penjelasanpenjelasanpenjelasanpenjelasanpenjelasanpenjelasanpenjelasanpenjelasanpenjelasanpenjelasan penjelasanpenjelasanpenjelasanpenjelasanpenjelasanpenjelasanpenjelasanpenjelasanpenjelasanpenjelasan"
    return (
        <div className='font-[Poppins]'>
            <div className=' flex flex-col justify-center items-center mb-10 w-full text-center bg-gradient-to-b from-[#D4E2D2] to-[#FFFFFF]'>
                <h2 className='text-2xl font-bold my-5'>{title}</h2>
                <p className='w-1/2'>{description}</p>
                <p className='w-1/2'>{deskripsi1}</p>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="w-full lg:w-1/3">
                        <div className="space-y-4">
                            <div className="border-b pb-4">
                                <h3 className="font-semibold text-lg">Syarat & Ketentuan</h3>
                            </div>
                            <div className="border-b pb-4">
                                <h3 className="font-semibold text-lg">Kebijakan Privasi Godong Kasir</h3>
                            </div>
                            <div className="border-b pb-4">
                                <h3 className="font-semibold text-lg">Kebijakan Izin dan API yang Mengakses Informasi Sensitif</h3>
                            </div>
                            <div className="border-b pb-4">
                                <h3 className="font-semibold text-lg">Izin dan API yang Mengakses Informasi Sensitif</h3>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 text-start">
                        <div className="flex flex-col gap-8">
                            <div className="space-y-6">
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-lg">1. Persetujuan Syarat & Ketentuan</span>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Dengan menggunakan aplikasi ini, Anda setuju untuk mematuhi dan terikat oleh syarat dan ketentuan yang berlaku. Jika Anda tidak setuju dengan syarat dan ketentuan ini, harap jangan menggunakan aplikasi ini.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-lg">2. Penggunaan Aplikasi</span>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Hak Penggunaan: Kami memberikan Anda lisensi non-eksklusif, tidak dapat dipindah tangankan, dan dapat dibatalkan untuk menggunakan aplikasi ini untuk tujuan yang sah dan sesuai dengan syarat ini.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-lg">3. Hak Kekayaan Intelektual</span>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Semua konten, nama merek, logo, merek dagang dan merek layanan dalam aplikasi ini termasuk tetapi tidak terbatas pada hak cipta, merek dagang, dan hak kekayaan intelektual lainnya adalah milik kami atau pemberi lisensi kami.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-lg">4. Pembatasan Tanggung Jawab</span>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Tanggung Jawab: Aplikasi ini disediakan "sebagaimana adanya" tanpa jaminan apapun, baik tidak langsung maupun tersirat.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-lg">5. Perubahan Syarat & Ketentuan</span>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Kami dapat memperbarui syarat dan ketentuan ini dari waktu ke waktu. Perubahan akan diumumkan di aplikasi kami. Anda disarankan untuk memeriksa syarat dan ketentuan ini secara berkala.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-lg">6. Hukum yang Berlaku</span>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Syarat dan ketentuan ini diatur dan ditafsirkan sesuai dengan Hukum Negara Indonesia tanpa memperhatikan prinsip konflik hukum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
