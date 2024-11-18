import Footer from '@/components/Footer'
import React from 'react'

export default function Teamspage() {
    return (
        <div>
            <div className='bg-gradient-to-b from-white via-green-100 to-white'>
                <div className="w-[1442px] h-[758px] relative ">
                    <div className="w-[194px] h-[206px] left-[653px] top-[421px] absolute rounded-md shadow flex-col justify-center items-center inline-flex">
                        <img className="w-[194px] h-[206px] relative" src="https://via.placeholder.com/194x206" />
                    </div>
                    <img className="w-[194px] h-[206px] left-[883px] top-[499px] absolute rounded-md shadow" src="https://via.placeholder.com/194x206" />
                    <img className="w-[194px] h-[206px] left-[653px] top-[195px] absolute rounded-md shadow" src="https://via.placeholder.com/194x206" />
                    <img className="w-[194px] h-[206px] left-[883px] top-[36px] absolute rounded-md shadow" src="https://via.placeholder.com/194x206" />
                    <div className="w-[194px] pl-[7px] left-[883px] top-[271px] absolute rounded-md shadow flex-col justify-center items-center inline-flex">
                        <img className="w-[194px] h-[206px] relative" src="/landingpage.png" />
                    </div>
                    <div className="w-[194px] h-[206px] left-[1112px] top-[143px] absolute rounded-md shadow flex-col justify-center items-center inline-flex">
                        <img className="w-[194px] h-[206px] relative" src="/landingpage.png" />
                    </div>
                    <div className="left-[134.19px] top-[67px] absolute flex-col justify-end items-start gap-[60.29px] inline-flex">
                        <div className="w-[440px] h-[198px] text-[#010101] text-[89.30px] font-normal font-['Poppins'] leading-[99px]">Tim Godong</div>
                        <div className="w-[394.33px] h-[153.60px] text-[#333333] text-2xl font-normal font-['Poppins'] leading-[38.40px] break-words">PenjelasanPenjelasanPenjelasanPenjelasanPenjelasanPenjelasanPenjelasanPenjelasanPenjelasanPenjelasanPenjelasan</div>
                    </div>
                    <img className="w-[194px] h-[206px] left-[1113px] top-[375px] absolute rounded-md shadow" src="https://via.placeholder.com/194x206" />
                </div>

                <div>
                    <div className="w-full h-[500px] flex items-center justify-between px-5">
                        <div className="flex flex-col gap-6 text-center">
                            <h2 className="text-[60px] text-black">5+ Tahun</h2>
                            <p className="text-gray-600 text-xl font-bold max-w-[700px]">
                                Dalam menjalankan penjelasanpenjelasanpenjelasan
                            </p>
                            <p className="text-gray-600 text-xl max-w-[700px]">
                                Dalam menjalankan penjelasanpenjelasanpenjelasan penjelasanpenjelasanpenjelasan penjelasanpenjelasanpenjelasan penjelasanpenjelasanpenjelasan
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/landingpage.png"
                                alt="Device Mockup"
                                className="w-[500px] h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
