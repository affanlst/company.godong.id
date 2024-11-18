"use client"
import Footer from '@/components/Footer'
import React, { useState } from 'react'
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Badge } from 'lucide-react';
import { Paginator } from 'primereact/paginator';


export default function FAQPage() {
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(5);

    const onPageChange = (event: any) => {
        setCurrentPage(event.page);
    };
    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const faqItems = [
        {
            header: "Ada yang dapat kami bantu?",
            content: "Dengan tutorial aksial untuk dalih dan petualangan memperkenalkan harga mereka, memiliki perangkat lunak yang dapat melacak pekerjaan yang sulit. Kami akan memberikan bantuan keaslian yang dapat membantu Anda mencapai kesuksesan dalam kondisi perangkat lunak. Ini akan meningkatkan waktu untuk menemukan layanan dan menghemat biaya operasional yang akan menguntungkan nilai Anda. Tugas besar untuk mencapai tujuan ini adalah kepada Anda, untuk memastikan yang sesuai berdasarkan keaslian Anda."
        },
        {
            header: "Bagaimana cara mendaftar godong?",
            content: "Untuk mendaftar Godong, Anda dapat mengunjungi website kami di godong.id dan klik tombol \"Daftar\". Isi formulir pendaftaran dengan data yang valid dan ikuti petunjuk selanjutnya."
        },
        {
            header: "Adakah tutorial untuk mengasah software godong lebih?",
            content: "Ya, kami menyediakan berbagai tutorial dan panduan lengkap di platform pembelajaran kami. Anda dapat mengakses tutorial video, dokumentasi, dan materi pelatihan untuk memaksimalkan penggunaan software Godong."
        },
        {
            header: "Bagaimana cara saya upgrade versi pro?",
            content: "Untuk upgrade ke versi Pro, login ke akun Anda, kunjungi halaman \"Berlangganan\" dan pilih paket Pro. Ikuti proses pembayaran dan Anda akan langsung dapat menikmati fitur Pro."
        },
        {
            header: "Apakah godong menyediakan verifikasi untuk koperasi?",
            content: "Ya, Godong menyediakan layanan verifikasi khusus untuk koperasi. Proses ini membantu memastikan keabsahan dan kredibilitas koperasi dalam platform kami."
        },
        {
            header: "Apa saja fitur dalam godong saat ini?",
            content: "Godong menawarkan berbagai fitur seperti manajemen anggota, pencatatan keuangan, laporan otomatis, integrasi pembayaran, dan masih banyak lagi. Setiap versi memiliki fitur yang berbeda sesuai kebutuhan."
        },
        {
            header: "Seberapa credible software godong?",
            content: "Godong telah terbukti melayani ribuan pengguna dan mendapat berbagai sertifikasi keamanan. Kami juga bekerja sama dengan berbagai institusi terpercaya dan selalu mengutamakan keamanan data pengguna."
        },
        
    ];
    const faq = "FAQ"
    const deskripsi = "Punya banyak pertanyaan tentang produk-produk Godong.Id? Kami telah mengumpulkan jawaban untuk pertanyaan-pertanyaan yang sering diajukan. Jika Anda tidak menemukan jawaban yang Anda cari, jangan ragu untuk mengajukan pertanyaan atau menghubungi tim customer service kami."
    const gambar = "/landingpage.png"
    const judul = "godong.id"
    const cari = "Cari artikel, proses, pertanyaan umum, dan lainnya..."
    const pertanyaan = "Frequently Asked Questions"
    const currentItems = faqItems.slice(indexOfFirstItem, indexOfLastItem);
    return (
        <div>
            <div>
                <div className="bg-green-100 p-10 rounded-md shadow-md flex items-center">
                    <div className="flex-1">
                        <h2 className="text-green-700 font-bold text-xl">{faq}</h2>
                        <h1 className="text-black font-bold text-4xl">{judul}</h1>
                        <p className="text-gray-700 mt-4">
                            {deskripsi}
                        </p>
                    </div>
                    <div className="flex-1">
                        <img src={gambar} alt="FAQ Illustration" className="w-full h-auto" />
                    </div>
                </div>
                <div className="m-20">
                    <input
                        type="text"
                        placeholder={cari}
                        className="w-full p-3 border border-gray-300 rounded-md mb-5"
                    />
                    <h2 className="text-center text-2xl font-bold mb-5">{pertanyaan}</h2>
                    <div className="space-y-4">
                        <Accordion>
                            {currentItems.map((item, index) => (
                                <AccordionTab
                                    key={indexOfFirstItem + index}
                                    header={item.header}
                                >
                                    <p className="m-0 text-gray-700">{item.content}</p>
                                </AccordionTab>
                            ))}
                        </Accordion>

                        <Paginator
                            first={currentPage * itemsPerPage}
                            rows={itemsPerPage}
                            totalRecords={faqItems.length}
                            onPageChange={onPageChange}
                            template="PrevPageLink PageLinks NextPageLink"
                            className="mt-4"
                        />
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
