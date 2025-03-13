'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone, X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [rotation, setRotation] = useState(0)

  // Create a very visible idle animation using useEffect
  useEffect(() => {
    if (isOpen) return

    const interval = setInterval(() => {
      setRotation((prev) => (prev + 5) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [isOpen])

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {isOpen && (
        <div className="flex flex-col gap-3 items-end">
          <a
            href="mailto:contact@vastelcredence.com"
            className="flex items-center gap-3 bg-white text-secondary rounded-full pl-4 pr-5 py-3 shadow-lg transition-all hover:bg-gray-100"
          >
            <Mail className="h-5 w-5" />
            <span className="font-medium">contact@vastelcredence.com</span>
          </a>

          <a
            href="https://wa.me/2347019114104"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-green-600 rounded-full pl-4 pr-5 py-3 shadow-lg transition-all hover:bg-gray-100"
          >
            <FaWhatsapp className="h-5 w-5" />
            <span className="font-medium">+234 701 911 4104</span>
          </a>

          <a
            href="tel:+2347019114104"
            className="flex items-center gap-3 bg-white text-blue-600 rounded-full pl-4 pr-5 py-3 shadow-lg transition-all hover:bg-gray-100"
          >
            <Phone className="h-5 w-5" />
            <span className="font-medium">+234 701 911 4104</span>
          </a>
        </div>
      )}

      <button
        onClick={toggleOpen}
        className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-white shadow-lg transition-all duration-500 hover:scale-110 animate-bounce"
        style={{
          animation: isOpen ? 'none' : 'bounce 1.5s infinite',
          transformOrigin: 'center',
          transform: isOpen ? 'scale(1)' : `scale(${1 + Math.sin(rotation * 0.05) * 0.05})`,
          boxShadow: isOpen ? '0 4px 6px rgba(0, 0, 0, 0.1)' : '0 10px 15px rgba(0, 0, 0, 0.2)',
        }}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Phone
            className="h-6 w-6"
            style={{
              transition: 'transform 0.3s ease-in-out',
            }}
          />
        )}
      </button>
    </div>
    // </div>
  )
}
