import Footer from '@/components/Footer'
import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'

export default function Customerpage() {
    const TestimonialCard = ({ index }: { index: number }) => {
        return (
            <div key={`testimonial-${index}`} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                    <div className="flex-1">
                        <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, starIndex) => (
                                <svg
                                    key={starIndex}
                                    className="w-5 h-5 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-gray-600 mb-4">
                            "Godong benar-benar mengubah cara kami berbisnis. Fitur-fitur yang ditawarkan memudahkan kami mengelola operasional. Sangat membantu!"
                        </p>
                    </div>
                </div>
                <div className="flex items-center">
                    <img
                        src="/avatar-placeholder.png"
                        alt="User Avatar"
                        className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                        <h4 className="font-semibold">Devel Utami</h4>
                        <p className="text-sm text-gray-500">Pemilik Toko Elektronik</p>
                    </div>
                </div>
            </div>
        )
    }
    const TestimonialCard2 = ({ index }: { index: number }) => {
        return (
            <div key={`testimonial-${index}`} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                    <div className="flex-1">
                        <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, starIndex) => (
                                <svg
                                    key={starIndex}
                                    className="w-5 h-5 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-gray-600 mb-4">
                            "Godong benar-benar mengubah cara kami berbisnis. Fitur-fitur yang ditawarkan memudahkan kami mengelola operasional. Sangat membantu!
                            Godong benar-benar mengubah cara kami berbisnis. Fitur-fitur yang ditawarkan memudahkan kami mengelola operasional. Sangat membantu!
                            Godong benar-benar mengubah cara kami berbisnis. Fitur-fitur yang ditawarkan memudahkan kami mengelola operasional. Sangat membantu!"
                        </p>
                    </div>
                </div>
                <div className="flex items-center">
                    <img
                        src="/avatar-placeholder.png"
                        alt="User Avatar"
                        className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                        <h4 className="font-semibold">Devel Utami</h4>
                        <p className="text-sm text-gray-500">Pemilik Toko Elektronik</p>
                    </div>
                </div>
            </div>
        )
    }
    const SidebarCheckbox = ({ id, label }: any) => {
        return (
            <div className="flex items-center space-x-2">
                <Checkbox id={id} />
                <label
                    htmlFor={id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    {label}
                </label>
            </div>
        )
    }
    return (
        <div>
            <div>
                <div className="container mx-auto px-4 py-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-2">
                            Dipercaya oleh <span className="text-[#366938]">100 Ribu Orang</span> di Indonesia
                        </h2>
                        <p className="text-gray-600">
                            Solusi terpercaya untuk pengelolaan bisnis yang lebih efisien
                        </p>
                    </div>

                    <div className="grid grid-cols-7">
                        {[...Array(7)].map((_, index) => (
                            <div key={`icon-bottom-${index}`} className="bg-white p-20 shadow-sm flex items-center justify-center" style={{
                                backgroundColor: index % 7 === 0 ? '#FFE6E6' :
                                    index % 7 === 1 ? '#E6FFE6' :
                                        index % 7 === 2 ? '#E6F5FF' :
                                            index % 7 === 3 ? '#FFE6F5' :
                                                index % 7 === 4 ? '#FFF5E6' :
                                                    index % 7 === 5 ? '#F5E6FF' :
                                                        '#FFE6E6'
                            }}>
                                <span className="text-gray-800">icon</span>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-7">
                        {[...Array(7)].map((_, index) => (
                            <div key={`icon-bottom-${index}`} className="bg-white p-20 shadow-sm flex items-center justify-center" style={{
                                backgroundColor: index % 7 === 0 ? '#FFE6E6' :
                                    index % 7 === 1 ? '#FFF5E6' :
                                        index % 7 === 2 ? '#E6FFE6' :
                                            index % 7 === 3 ? '#F5E6FF' :
                                                index % 7 === 4 ? '#E6F5FF' :
                                                    index % 7 === 5 ? '#FFE6F5' :
                                                        '#E6FFE6'
                            }}>
                                <span className="text-gray-800">icon</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex bg-[#F5F5F5] '>
                    <div className='w-1/4'>
                        <div className="p-8">
                            <div className="mb-8 mx-4">
                                <h3 className="text-lg font-semibold text-[#366938] mb-4">Industri</h3>
                                <div className="space-y-3 mx-4">
                                    <SidebarCheckbox id="akuntansi" label="Akuntansi" />
                                    <SidebarCheckbox id="kasir" label="Kasir" />
                                </div>
                            </div>

                            <div className="mx-4">
                                <h3 className="text-lg font-semibold text-[#366938] mb-4">Produk</h3>
                                <div className="space-y-3 mx-4">
                                    <SidebarCheckbox id="godong-laku" label="Godong Laku" />
                                    <SidebarCheckbox id="godong-kasir" label="Godong Kasir" />
                                    <SidebarCheckbox id="mobile-kasir" label="Mobile Kasir" />
                                    <SidebarCheckbox id="mobile-laku" label="Mobile Laku" />
                                    <SidebarCheckbox id="godong-pharmacy" label="Godong Pharmacy" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto px-4 py-12 w-3/4">
                        <div className="grid grid-cols-3 gap-8">
                            <div className='col-1 flex flex-col gap-4'>
                                <TestimonialCard index={1} />
                                <TestimonialCard2 index={1} />
                            </div>
                            <div className='col-1 flex flex-col gap-4'>
                                <TestimonialCard2 index={2} />
                                <TestimonialCard2 index={3} />
                            </div>
                            <div className='col-1 flex flex-col gap-4'>
                                <TestimonialCard index={2} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
