"use client"
import React from 'react'
import NavbarProduct from '@/components/NavbarProduct'
import { tabContents } from '@/components/ContentProduct'

export default function Home() {
  return (
    <div>
      <NavbarProduct tabsData={tabContents} />
    </div>
  )
}