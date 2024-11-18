import { ArrowBigDown, ArrowRight, CircleArrowRight, CirclePlay, Phone, Store } from 'lucide-react'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Footer from './Footer'

export default function Landing() {
    const title = "Solusi Akutansi Terbaik untuk Bisnis Anda"
    const description = "Optimalkan keuangan bisnismu dengan Godong Software, mudah menyusun laporan, memonitor transaksi, dan menganalisis kinerja."
    const buttonText = "Try Godong Free"
    const description2 = "Godong adalah solusi ideal untuk mempermudah berbagai aspek operasional bisnis Anda. Dari mempercepat proses pembayaran (kasir) dan meningkatkan kepuasan pelanggan, hingga membantu pembuatan laporan keuangan yang akurat dan memberikan fitur manajemen bisnis yang dapat disesuaikan dengan kebutuhan Anda, Godong memastikan Anda dapat mengelola bisnis dengan efisien dan fokus pada pertumbuhan usaha Anda. Godong adalah mitra terpercaya menuju kesuksesan bisnis Anda. Godong juga mampu mengelola sistem koperasi dengan efektif, mendukung administrasi yang lebih terorganisir dan transparan. Dengan antarmuka yang user-friendly dan dukungan teknis yang handal, Godong adalah mitra terpercaya menuju kesuksesan bisnis Anda."
    const description3 = "Kami menghadirkan berbagai solusi perangkat lunak yang komprehensif dan mudah digunakan untuk memenuhi berbagai kebutuhan bisnis Anda. Berikut adalah beberapa produk unggulan kami:"
    const BusinessServiceCard = ({ title, description }: any) => {
        return (
            <div className='w-64 rounded-lg p-4 flex flex-col items-center'>
                <Store className='w-16 h-16 mb-2' />
                <h3 className='font-medium'>{title}</h3>
                <p className='text-sm text-gray-600 text-center'>{description}</p>
            </div>
        );
    };

    const StepCard = ({ number, text }: any) => {
        return (
            <div className="w-[148px] h-[140px] relative">
                <div className="w-[137.67px] h-[140px] left-[5.16px] top-0 absolute bg-white rounded-full border-2 border-[#88af89]"></div>
                <div className="w-[119.32px] h-[121.33px] left-[14.34px] top-[9.33px] absolute bg-[#88af89] rounded-full border-2 border-[#88af89]"></div>
                <div className="w-[87.19px] h-[88.67px] left-[30.40px] top-[25.67px] absolute bg-white rounded-full border-2 border-[#88af89]"></div>
                <div className="w-3 h-[12.25px] left-[135.95px] top-[63.58px] absolute bg-white rounded-full border-2 border-[#88af89]"></div>
                <div className="w-3 h-[12.25px] left-0 top-[63.58px] absolute bg-white rounded-full border-2 border-[#88af89]"></div>
                <div className="w-[26.39px] h-[30.92px] left-[60.81px] top-[40.25px] absolute border-[#88af89] flex-col justify-start items-center gap-2 inline-flex">
                    <div className="text-center text-[#2e2e2e] text-[44px] font-bold font-['Urbanist']">{number}</div>
                </div>
                <div className="w-[143px] left-0 top-[182px] absolute text-center text-[#07484a] text-2xl font-bold font-['Poppins']">{text}</div>
            </div>
        );
    };
    const DashedLine = () => {
        return (
            <div className="border-t-2 border-dashed border-[#366938] w-16"></div>
        );
    };

    const TestimonialCard = ({ content, name, role }: any) => {
        return (
            <CarouselItem>
                <div className="bg-[#F5F5F5] rounded-lg p-6 shadow-lg">
                    <div className="flex items-start mb-4">
                        <div className="flex-shrink-0">
                            <div className="text-[#366938] text-4xl font-serif">"</div>
                        </div>
                        <div className="ml-4">
                            <div className="flex mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-600 mb-4">
                                {content}
                            </p>
                            <div className="flex items-center">
                                <img
                                    src="/avatar-placeholder.jpg"
                                    alt="User Avatar"
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h4 className="font-medium text-gray-900">{name}</h4>
                                    <p className="text-sm text-gray-500">{role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CarouselItem>
        )
    }

    const NewsCard = ({ item }: any) => {
        return (
            <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                    src="/landingpage.png"
                    alt="Berita Franchise"
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="font-medium text-lg mb-2">
                        Bisnis Franchise Es Teh Semesta Rasanya, Begini Harga Buka Usahanya
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                        <div className="flex items-center gap-2">
                            <span>21 Februari 2024</span>
                            <span>by Ngajen Explore</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="hover:text-red-500">❤️</button>
                            <button className="hover:text-blue-500">💬</button>
                            <button className="hover:text-green-500">↗️</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='w-full h-full'>
            <div className='flex items-center justify-between px-16 py-20'>
                <div className='w-full sm:w-1/2 '>
                    <h1 className='text-[70px] font-bold text-[#1A1A1A] leading-tight'>
                        {title}
                    </h1>
                    <p className='text-gray-600 mt-4 text-lg'>
                        {description}
                    </p>
                    <button className='mt-8 bg-[#366938] text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2'>
                        {buttonText}
                        <CircleArrowRight />
                    </button>
                </div>
                <div className='hidden justify-end sm:flex w-1/2'>
                    <img
                        src="/landingpage.png"
                        alt="Puzzle Team Illustration"
                        className='w-[100%] h-[100%]'
                    />
                </div>
            </div>

            <div className='bg-gradient-to-b from-white via-green-100 to-white'>
                <h2 className='text-2xl font-bold mb-8 text-center'>Layanan Bisnis Godong:</h2>
                <div className='flex gap-4 px-16 overflow-x-auto' style={{ scrollbarWidth: 'none' }}>
                    <BusinessServiceCard title="Ritel Coffee Shop" description="Penjelasan" />
                    <BusinessServiceCard title="Ritel Restoran" description="Penjelasan" />
                    <BusinessServiceCard title="Ritel Toko Kelontong" description="Penjelasan" />
                    <BusinessServiceCard title="Ritel Warung Lite" description="Penjelasan" />
                    <BusinessServiceCard title="Supermarket" description="Penjelasan" />
                </div>

                <div className='mt-16 text-center'>
                    <h2 className='text-3xl font-bold mb-4'>Godong Memudahkan Pekerjaanmu</h2>
                    <p className='text-gray-600 max-w-4xl mx-auto leading-relaxed'>
                        {description2}
                    </p>
                </div>
                <div className='flex justify-center mt-8'>
                    <button className='mt-8 bg-[#366938] text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-content-center gap-2'>
                        {buttonText}
                        <CirclePlay />
                    </button>
                </div>
            </div>

            <div className='bg-white py-16'>
                <h2 className='text-center text-2xl font-bold mb-8'>Tersertifikasi oleh:</h2>
                <div className='flex justify-center gap-4 mb-16 overflow-x-auto' style={{scrollbarWidth: 'none'}}>
                    <BusinessServiceCard title="Ritel Coffee Shop" description="Penjelasan" />
                    <BusinessServiceCard title="Ritel Coffee Shop" description="Penjelasan" />
                    <BusinessServiceCard title="Ritel Coffee Shop" description="Penjelasan" />
                    <BusinessServiceCard title="Ritel Coffee Shop" description="Penjelasan" />
                </div>
                <h2 className='text-center text-3xl font-bold mb-4'>Produk Kami</h2>
                <p className='text-center text-gray-600 max-w-2xl mx-auto mb-12'>
                    {description3}
                </p>
                <div className='flex flex-wrap justify-center gap-6'>
                    <div className='bg-white p-8 rounded-lg text-center w-64'>
                        <img src="/landingpage.png" alt="Laku" className='mx-auto mb-4' />
                        <h3 className='text-xl font-bold mb-2'>Godong Laku</h3>
                        <p className='text-gray-600 mb-4'>Dengan keahlian dalam bidangnya dan kecanggihan teknologi, Godong Laku adalah....</p>
                        <button className='text-green-600 font-semibold flex items-center gap-2'>COBA SEKARANG <ArrowRight /></button>
                    </div>
                    <div className='bg-white p-8 rounded-lg text-center w-64'>
                        <img src="/landingpage.png" alt="Mobile Laku" className='mx-auto mb-4' />
                        <h3 className='text-xl font-bold mb-2'>Mobile Laku</h3>
                        <p className='text-gray-600 mb-4'>Dengan keahlian dalam bidangnya dan kecanggihan teknologi, Godong Laku adalah...</p>
                        <button className='text-green-600 font-semibold flex items-center gap-2'>COBA SEKARANG <ArrowRight /></button>
                    </div>
                    <div className='bg-white p-8 rounded-lg text-center w-64'>
                        <img src="/landingpage.png" alt="Godong Kasir" className='mx-auto mb-4' />
                        <h3 className='text-xl font-bold mb-2'>Godong Kasir</h3>
                        <p className='text-gray-600 mb-4'>Dengan keahlian dalam bidangnya dan kecanggihan teknologi, Godong Laku adalah...</p>
                        <button className='text-green-600 font-semibold flex items-center gap-2'>COBA SEKARANG <ArrowRight /></button>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center mt-8'>
                    <div className='bg-white p-8 rounded-lg text-center w-64'>
                        <img src="/landingpage.png" alt="Mobile Laku" className='mx-auto mb-4' />
                        <h3 className='text-xl font-bold mb-2'>Mobile Kasir</h3>
                        <p className='text-gray-600 mb-4'>Dengan keahlian dalam bidangnya dan kecanggihan teknologi, Godong Laku adalah...</p>
                        <button className='text-green-600 font-semibold flex items-center gap-2'>COBA SEKARANG <ArrowRight /></button>
                    </div>
                    <div className='bg-white p-8 rounded-lg text-center w-64'>
                        <img src="/landingpage.png" alt="Godong Pharmacy" className='mx-auto mb-4' />
                        <h3 className='text-xl font-bold mb-2'>Godong Pharmacy</h3>
                        <p className='text-gray-600 mb-4'>Dengan keahlian dalam bidangnya dan kecanggihan teknologi, Godong Laku adalah...</p>
                        <button className='text-green-600 font-semibold flex items-center gap-2'>COBA SEKARANG <ArrowRight /></button>
                    </div>
                    <div className='bg-white p-8 rounded-lg text-center w-64'>
                        <img src="/landingpage.png" alt="Godong Hardware" className='mx-auto mb-4' />
                        <h3 className='text-xl font-bold mb-2'>Godong Hardware</h3>
                        <p className='text-gray-600 mb-4'>Dengan keahlian dalam bidangnya dan kecanggihan teknologi, Godong Laku adalah...</p>
                        <button className='text-green-600 font-semibold flex items-center gap-2'>COBA SEKARANG <ArrowRight /></button>
                    </div>
                </div>
                <div className='flex justify-center mt-12'>
                    <button className='bg-[#366938] text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors'>
                        Telusuri Semua Produk
                    </button>
                </div>
            </div>

            <div className=" w-[1440px] h-[704px] relative">
                <div className="w-[328px] h-[155px] left-[154px] top-[177px] absolute">
                    <div className="w-[328px] h-[155px] left-0 top-0 absolute bg-white shadow"></div>
                    <div className="w-[220.55px] h-[85px] left-[34.87px] top-[14px] absolute text-black text-7xl font-semibold font-['Work Sans']">4048</div>
                    <div className="w-[10.37px] h-[42px] left-[49.95px] top-[96px] absolute bg-[#4a864c] rounded-[10px]"></div>
                    <div className="w-[240.34px] h-5 left-[67.86px] top-[111px] absolute text-black text-2xl font-semibold font-['Work Sans']">Kerjasama</div>
                </div>
                <div className="w-[404px] h-[211px] left-[158px] top-[397px] absolute">
                    <div className="w-[348px] h-[155px] left-[56px] top-[56px] absolute bg-white shadow"></div>
                    <img className="w-[102px] h-[103px] left-0 top-0 absolute" src="/landingpage.png" />
                    <div className="w-[234px] h-[85px] left-[93px] top-[70px] absolute text-black text-7xl font-semibold font-['Work Sans']">370K+</div>
                    <div className="w-[11px] h-[42px] left-[109px] top-[152px] absolute bg-[#4a864c] rounded-[10px]"></div>
                    <div className="w-[255px] h-5 left-[128px] top-[167px] absolute text-black text-2xl font-semibold font-['Work Sans']">Pengikut</div>
                </div>
                <div className="w-[348px] h-[155px] left-[409px] top-[67px] absolute">
                    <div className="w-[348px] h-[155px] left-0 top-0 absolute bg-white shadow"></div>
                    <div className="w-[234px] h-[85px] left-[37px] top-[14px] absolute text-black text-7xl font-semibold font-['Work Sans']">3700</div>
                    <div className="w-[11px] h-[42px] left-[53px] top-[96px] absolute bg-[#4a864c] rounded-[10px]"></div>
                    <div className="w-[255px] h-5 left-[72px] top-[111px] absolute text-black text-2xl font-semibold font-['Work Sans']">Jangkauan Customer</div>
                </div>
                <div className="w-[369px] h-[223px] left-[388px] top-[247px] absolute">
                    <div className="w-80 h-[155px] left-0 top-[68px] absolute bg-white shadow"></div>
                    <div className="w-[215.17px] h-[85px] left-[34.02px] top-[82px] absolute text-black text-7xl font-semibold font-['Work Sans']">387</div>
                    <div className="w-[10.11px] h-[42px] left-[48.74px] top-[164px] absolute bg-[#4a864c] rounded-[10px]"></div>
                    <img className="w-28 h-[102px] left-[257px] top-0 absolute" src="/landingpage.png" />
                    <div className="w-[234.48px] h-5 left-[66.21px] top-[179px] absolute text-black text-2xl font-semibold font-['Work Sans']">Program Demo</div>
                </div>
                <div className="w-[426px] h-[143px] left-[935px] top-[82px] absolute text-black text-4xl font-bold font-['Poppins']">2 Years<br />Experience</div>
                <div className="w-[350px] h-auto left-[940px] top-[200px] absolute text-black text-lg font-normal font-['Poppins'] break-words">penjelasanpenjelasanpenjelasanpenjelasanpenjelasanpenjelasanpenjelasanpenjelasanpenjelasanpenjelasanpenjelasanpenjelasanpenjelasan</div>
                <div className="px-10 py-5 left-[940px] top-[399px] absolute bg-[#366938] rounded-lg justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-lg font-medium font-['Poppins'] leading-[23px]">Contact US</div>
                    <div className="w-[23px] h-[23px] relative"></div>
                </div>
                <img className="w-[118px] h-[106px] left-[649px] top-[14px] absolute" src="/landingpage.png" />
                <img className="w-[105px] h-[87px] left-[136px] top-[133px] absolute" src="/landingpage.png" />
            </div>

            <div className="w-[1440px] h-[578px] relative bg-white">
                <div className="w-[669px] h-[162px] left-[381px] top-[40px] absolute">
                    <div className="w-[611px] h-[59px] left-[35px] top-0 absolute text-center text-black text-[50px] font-bold font-['Poppins'] leading-[52px] tracking-tight">Cara Register Aplikasi:</div>
                    <div className="w-[669px] h-24 left-0 top-[66px] absolute text-center text-[#020e35] text-xl font-normal font-['Poppins'] leading-loose tracking-tight">Silakan mengikuti panduan dibawah ini untuk dapat menggunakan aplikasi yang kami miliki.</div>
                </div>
                <div className="w-[1133px] h-[254px] left-[153px] top-[236px] absolute flex items-center justify-between">
                    <StepCard number="01" text="Daftar/Masuk" />
                    <div className="flex items-center">
                        <DashedLine />
                        <ArrowRight className="w-4 h-4 text-[#366938] " />
                    </div>
                    <StepCard number="02" text="Pilih Layanan" />
                    <div className="flex items-center">
                        <DashedLine />
                        <ArrowRight className="w-4 h-4 text-[#366938] " />
                    </div>
                    <StepCard number="03" text="Masukkan Pesanan" />
                    <div className="flex items-center">
                        <DashedLine />
                        <ArrowRight className="w-4 h-4 text-[#366938] " />
                    </div>
                    <StepCard number="04" text="Cek Pesanan" />
                    <div className="flex items-center">
                        <DashedLine />
                        <ArrowRight className="w-4 h-4 text-[#366938] " />
                    </div>
                    <StepCard number="05" text="Pembayaran" />
                </div>
            </div>

            <div className="py-16 px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="w-1/2">
                            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
                                Lebih dari 100+ Orang menggunakan Layanan kami
                            </h2>
                        </div>

                        <div className="w-1/3">
                            <Carousel>
                                <CarouselContent>
                                    <TestimonialCard content="Godong benar-benar memudahkan saya ketika mengurusi keuangan toko. Fitur-fitur lengkapnya memudahkan saya mengatur pembukuan dengan rapi, termasuk transaksi transfer dengan user lainnya. Sangat direkomendasikan untuk bisnis kecil hingga menengah!" name="Dewi Utami" role="Pemilik Toko Elektronik" />
                                    <TestimonialCard content="Godong benar-benar memudahkan saya ketika mengurusi keuangan toko. Fitur-fitur lengkapnya memudahkan saya mengatur pembukuan dengan rapi, termasuk transaksi transfer dengan user lainnya. Sangat direkomendasikan untuk bisnis kecil hingga menengah!" name="Dewi Utami" role="Pemilik Toko Elektronik" />
                                    <TestimonialCard content="Godong benar-benar memudahkan saya ketika mengurusi keuangan toko. Fitur-fitur lengkapnya memudahkan saya mengatur pembukuan dengan rapi, termasuk transaksi transfer dengan user lainnya. Sangat direkomendasikan untuk bisnis kecil hingga menengah!" name="Dewi Utami" role="Pemilik Toko Elektronik" />
                                </CarouselContent>
                                <CarouselPrevious className='text-white bg-[#538055]' />
                                <CarouselNext className='text-white bg-[#538055]' />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16 px-8 bg-gradient-to-b from-white via-green-100 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
                            Berita Terbaru
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Dapatkan informasi terkini untuk mengetahui berita Anda yang menghadirkan update terbaru, berita yang viral, dan berita penting dari dunia bisnis, baik pelayanan regulasi hingga hari berbagai berita...
                        </p>
                    </div>
                    <div className='flex gap-4 px-16 py-8 overflow-x-auto' style={{ scrollbarWidth: 'none' }}>
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                    </div>

                    <div className="text-center mt-8">
                        <button className="bg-[#366938] text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                            Selengkapnya
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
