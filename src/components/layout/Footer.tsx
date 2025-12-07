"use client"

import { Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  const socialLinks = [
    {
      name: "X",
      url: "https://twitter.com/vineethsendil",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      url: "https://instagram.com/vinnysaucee",
      icon: <Instagram className="w-4 h-4" />
    },
    {
      name: "TikTok", 
      url: "https://tiktok.com/@vinnysaucee",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/vineethsendilraj", 
      icon: <Linkedin className="w-4 h-4" />
    }
  ]

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200/40 dark:border-gray-700/40 mt-16">
      <div className="container mx-auto px-6 py-4 max-w-6xl">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">@vinnysaucee</span>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 