'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"

// Data dummy untuk cards
const contactCards = [
    {
        id: 1,
        badge: "SAYA PELANGGAN BARU",
        badgeColor: "bg-[#049949]",
        icon: "/icon/card_1_contact.png",
        description: "Ingin mencoba demo dari aplikasi nya dan pertanyaan seputar godong?",
        link: "https://laku.godong.id"
    },
    {
        id: 2,
        badge: "SAYA PELANGGAN LAMA",
        badgeColor: "bg-[#e44d4d]",
        icon: "/icon/card_2_contact.png",
        description: "Ingin mencoba demo dari nya dan pertanyaan seputar godong?",
        link: "https://laku.godong.id"
    },
    {
        id: 3,
        badge: "BANTUAN",
        badgeColor: "bg-[#049949]",
        icon: "/icon/card_3_contact.png",
        description: "Ingin mencoba demo dari aplikasi nya dan pertanyaan seputar godong?",
        link: "https://laku.godong.id"
    }
]

export default function ContactPage() {
    return (
        <div className='flex flex-col w-full h-full'>
            <div 
                className="w-screen h-[627px] py-16 flex flex-col"
                style={{
                    backgroundImage: 'linear-gradient(to bottom, #EBF1EE 65%, white 65%)'
                }}
            >
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-2">Mencari hal yang spesifik?</h1>
                    <p className="text-gray-600 mb-12">Kami siap membantu</p>

                    <div className="w-[999px] mx-auto  bg-white rounded-[5px] shadow p-4">
                        <div className="grid grid-cols-3 gap-6">
                            {contactCards.map((card) => (
                                <div key={card.id} className="  bg-[#f0f0f0] rounded-[5px] p-4 h-[380px]">
                                    {/* Badge */}
                                    <Badge className={card.badgeColor}>{card.badge}</Badge>
                                    {/* Content */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-[130px] h-[130px] mt-8 mb-6">
                                            <img src={card.icon} alt={card.badge} className="w-full h-full" />
                                        </div>
                                        
                                        <p className="text-[#333333] text-lg font-normal font-['Poppins'] leading-[27px] mb-6">
                                            {card.description}
                                        </p>
                                        
                                        <Link 
                                            href={card.link}
                                            className="text-[#056cb8] text-lg font-normal font-['Inter'] underline leading-7 tracking-tight"
                                        >
                                            {card.link}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row py-16 container mx-auto">
                <div className="w-1/2 flex flex-col gap-4">
                    <h2 className="text-[50px] font-normal font-['Poppins'] leading-tight">
                        Tertarik dengan produk? Hubungi tim penjualan kami
                    </h2>
                    <p className="text-gray-600 text-base">
                        Jika Anda memiliki pertanyaan atau memerlukan bantuan, jangan ragu untuk menghubungi kami.
                    </p>
                </div>
                
                <div className="w-1/2 flex flex-col gap-8 pl-8">
                    {/* Location */}
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#0D503C] flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-semibold text-lg">Location</h3>
                            <p className="text-gray-600">Jl. Letkol Suwarno Ruko Bale Lintang No.2 Kota Madiun - Jawa Timur</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#0D503C] flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-semibold text-lg">Email Address</h3>
                            <p className="text-gray-600">info@godong.id</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#0D503C] flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-semibold text-lg">Phone number</h3>
                            <p className="text-gray-600">0811-3036-09</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[724px]" 
                style={{
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #DCE7DA 45%, #FFFFFF 100%)'
                }}
            >
                <div className="container mx-auto py-16">
                    <h2 className="text-center text-[32px] font-bold mb-4">
                        Bantuan dan Pertanyaan
                    </h2>
                    
                    <div className="w-[529px] h-[555px] mx-auto bg-white rounded-lg shadow-lg p-8 overflow-y-auto">
                        <p className="text-center mb-6">Hubungi kami untuk memulai prosesnya</p>
                        
                        <form className="flex flex-col gap-3">
                            <div className="space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input 
                                    id="name"
                                    type="text" 
                                    placeholder="Name*" 
                                    required
                                />
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input 
                                    id="email"
                                    type="email" 
                                    placeholder="Email*" 
                                    required
                                />
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="subject">Subject</Label>
                                <Input 
                                    id="subject"
                                    type="text" 
                                    placeholder="Your Subject*" 
                                    required
                                />
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="message">Message</Label>
                                <Textarea 
                                    id="message"
                                    placeholder="Your Message*" 
                                    className="min-h-[100px]"
                                    required
                                />
                            </div>
                            
                            <div className="space-y-1.5">
                                <Label htmlFor="file">File</Label>
                                <Input 
                                    id="file"
                                    type="file" 
                                    className="h-15 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#0D503C] file:text-white hover:file:bg-[#0a3f2f]"
                                />
                                <p className="text-xs text-red-500">Accept File Type: Pdf.pdf</p>
                            </div>

                            <div className="text-sm text-gray-600 mt-1">
                                Dengan mengirimkan formulir ini, Anda menyetujui{' '}
                                <Link href="/privacy-policy" className="text-[#056cb8] underline">
                                    Privacy Policy
                                </Link>
                            </div>

                            <Button 
                                type="submit" 
                                className="w-full bg-[#0D503C] text-white hover:bg-[#0a3f2f] mt-2"
                            >
                                SUBMIT
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

