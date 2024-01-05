'use client';

import { LinkIcon } from '@heroicons/react/20/solid'
import { useState } from "react";

export default function ShareLinkButton() {
  const [clicked, setClicked] = useState(false)
  const HandleClick = () => {
    navigator.clipboard.writeText(window.location.href)
    setClicked(true)
    setTimeout(() => setClicked(false), 1500)
  }

  console.log('[ShareLinkButton] clicked:', clicked)
  return (
    <button onClick={HandleClick}
      className="flex gap-1 items-center bg-rose-700 hover:bg-rose-900 font-bold py-2 px-4 rounded text-slate-100">
      <LinkIcon className="w-4 h-4 inline" />
      {clicked ? 'Link Copied': 'Share Link'}
    </button>
  )
}
