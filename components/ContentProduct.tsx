import React from 'react'

export interface TabContent {
  label: string;
  content: React.ReactNode;
}

export const tabContents: TabContent[] = [
  { 
    label: 'Aplikasi',
    content: <div>Konten untuk Aplikasi Lain</div>
  },
  {
    label: 'Suite',
    content: <div>Konten untuk Suite Laku One</div>
  },
  {
    label: 'Laku One',
    content: <div>Konten untuk Suite Laku One</div>
  },
  {
    label: 'Marketplace',
    content: <div>Konten untuk Marketplace</div>
  },
];

export default function ContentProduct() {
  return (
    <div></div>
  )
}