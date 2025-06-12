import { Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Intro() {
  return (
    <div className="grid w-full place-items-center">
      <div className="flex flex-col-reverse items-center justify-center gap-4 sm:flex-row">
        <div className="flex flex-col gap-2" id="paragraph-section">
          <h1 className="title border-0">Namaste, I{`'`}m Dipesh</h1>
          <p className="max-w-md text-sm">
            <span className="text-lg font-semibold text-gray-500">|</span> I{`'`}m a passionate
            frontend web developer who enjoys learning new technologies and building clean,
            functional, and user-friendly web applications
          </p>
          {/* Social Icons */}
          <div className="mt-1 flex gap-3 text-gray-500 dark:text-gray-400">
            <a
              href="https://github.com/aryaldipesh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} className="transition hover:text-black dark:hover:text-white" />
            </a>
            <a
              href="https://linkedin.com/in/aryaldipesh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="transition hover:text-blue-600" />
            </a>
            <a href="mailto:dipesh@example.com" aria-label="Email">
              <Mail size={18} className="transition hover:text-red-500" />
            </a>
          </div>
        </div>

        <div id="image-section">
          <Image
            className="rounded-lg grayscale-100 transition-all hover:scale-105 hover:grayscale-25"
            alt="profile-picture"
            src="https://avatars.githubusercontent.com/u/153974691?v=4"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  )
}
