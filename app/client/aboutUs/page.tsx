import Footer from '@/components/Footer'
import { ArrowRight, ChartBar } from 'lucide-react'
import React from 'react'

export default function AboutUsPage() {
    const title = "Mewujudkan Bisnis Hebat dengan Solusi Software Terpercaya"
    const description = "Kami di Godong.ID berkomitmen untuk menyediakan layanan digital terbaik yang dirancang khusus untuk membantu bisnis Anda tumbuh dan berkembang. Dengan keahlian dan dedikasi, kami menghadirkan teknologi yang memudahkan pengelolaan bisnis modern."

    const gambar = "/landingpage.png"
    const deskripsi1 = "Kami percaya bahwa software adalah produk terbaik hasil kerja keras tangan dan pikiran. Kami bangga telah menciptakan produk dan solusi yang membantu Anda berkembang baik itu untuk memecahkan masalah bisnis, mengantisipasi kebutuhan, ataupun menemukan peluang."
    const deskripsi2 = "Kami lebih suka membangun inovasi sendiri daripada mengembangkan platform kami lewat akuisisi. Kami berinvestasi lebih pada dukungan pelanggan dan pengembangan produk alih-alih penjualan dan pemasaran. Kami yakin, inilah cara terbaik untuk memberikan pelanggan kami pilihan dan manfaat."
    const deskripsi3 = "Pemikiran semacam ini tidak inovatif. Namun, dalam iklim bisnis saat ini, pola pikir ini semakin jarang ditemui."
    const title2 = "Perusahaan independen dengan misi untuk memenuhi kebutuhan software publik"
    const title3 = "Cara baru dalam menjalankan bisnis"
    const deskripsi4 = "Karena kami tidak pernah mengambil uang dari investor, kami dapat selalu fokus pada apa yang terbaik bagi pelanggan. Daripada mengkhawatirkan profit jangka pendek, kami memiliki kebebasan untuk berpikir jangka panjang. Kebebasan semacam ini mengubah cara kami memecahkan masalah, memberdayakan kami untuk berpikir dengan cara yang benar-benar berbeda."
    const deskripsi5 = "Dengan memilih Godong, Anda tidak hanya memperoleh produk, paket, atau platform, tetapi juga sebuah sistem operasi bisnis yang komprehensif. Ini adalah hasil dari lebih dari satu dekade kerja keras dalam rekayasa dan desain, yang dirancang untuk mendukung dan memperkuat kebutuhan bisnis Anda. Dengan lebih dari (brp?) aplikasi yang terintegrasi secara mendalam baik di website maupun mobile, kami menyediakan solusi yang dapat memenuhi hampir semua kebutuhan bisnis dan koperasi. Dan jika ada yang belum kami kembangkan, percayalah bahwa kami akan segera membuatnya."
    return (
        <div className='font-[Poppins]'>
            <div className=' flex flex-col justify-center items-center mb-10 w-full text-center bg-gradient-to-b from-[#D4E2D2] to-[#FFFFFF]'>
                <h2 className='text-2xl font-bold my-5'>{title}</h2>
                <p className='w-1/2'>{description}</p>
            </div>
            <img src="/about.png" alt="landingpage" className='w-full h-96' />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="w-full lg:w-1/3">
                        <img
                            src={gambar}
                            alt="Software as a Service"
                            className="w-full h-full rounded-lg shadow-md"
                        />
                    </div>
                    <div className="w-full lg:w-1/3">
                        <p className='mb-5'>
                            {deskripsi1}
                        </p>
                        <p>
                            {deskripsi2}
                        </p>
                    </div>
                    <div className="w-full lg:w-1/3 text-start">
                        <p>
                            {deskripsi3}
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="w-full lg:w-1/3 flex flex-row">
                        <div className="border-l-2 border-gray-300 h-[200px] mr-5"></div>
                        <div className="flex flex-col gap-5">
                            <a href="" className='hover:text-blue-500'>Pendekatan logis soal privasi</a>
                            <a href="" className='hover:text-blue-500'>Perusahaan swasta dengan visi publik</a>
                            <a href="" className='hover:text-blue-500'>Teman Anda di segala situasi</a>
                            <a href="" className='hover:text-blue-500'>Cara baru menjalankan bisnis</a>
                            <a href="" className='hover:text-blue-500'>Komitmen terhadap masyarakat</a>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3">
                        <div>
                            <h2 className='text-4xl mb-5 '>{title2}</h2>
                            <p className='mb-5 '>
                                {deskripsi4}
                            </p>
                        </div>
                        <div >
                            <h2 className='text-4xl my-5 '>{title3}</h2>
                            <p>
                                {deskripsi5}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 border-2 border-gray-300 rounded-lg p-5">
                    <h2 className='text-4xl text-center mb-5'>Tentang Kami</h2>
                    <div className="flex flex-col lg:flex-row gap-12 justify-center items-center">
                        <div className="w-full lg:w-1/4 ">
                            <ChartBar className='mb-5' />
                            <h2 className='text-2xl mb-5'>Visi</h2>
                            <p className='mb-5 break-words'>
                                VisiVisiVisiVisiVisiVisiVisiVisiVisiVisiVisiVisiVisiVisiVisiVisiVisiVisiVisiVisiVisiVisiVisi
                            </p>
                        </div>
                        <div className="w-full lg:w-1/4">
                            <ChartBar className='mb-5' />
                            <h2 className='text-2xl mb-5 '>Misi</h2>
                            <p className='mb-5 break-words'>
                                MisiMisiMisiMisiMisiMisiMisiMisiMisiMisiMisiMisiMisiMisiMisiMisiMisiMisiMisiMisiMisiMisiMisi
                            </p>
                        </div>
                        <div className="w-full lg:w-1/4 ">
                            <ChartBar className='mb-5' />
                            <h2 className='text-lg mb-5 '>Pencapaian</h2>
                            <p className='mb-5 break-words'>
                                PencapaianPencapaianPencapaianPencapaianPencapaianPencapaianPencapaianPencapaianPencapaian
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='bg-[#366938] text-white px-4 py-2 rounded-md flex justify-center items-center'>
                            Simak Perjalanan Kami
                            <ArrowRight className='ml-2' />
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
