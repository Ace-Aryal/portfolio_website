import { Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Intro() {
  return (
    <div className="grid w-full place-items-center">
      <div className="flex flex-col-reverse items-center justify-center gap-4 sm:flex-row">
        <div className="flex flex-col gap-2" id="paragraph-section">
          <h1 className="title border-0">
            Namaste, I{`'`}m{' '}
            <span className="text-blue-500">
              Dipesh <span className="blink">_</span>
            </span>
          </h1>
          <p className="max-w-md text-sm">
            <span className="text-lg font-semibold text-gray-500">|</span> I{`'`}m a passionate
            frontend web developer who enjoys learning new technologies and building clean,
            functional, and user-friendly web applications
          </p>
          {/* Social Icons */}
          <div className="mt-1 flex gap-3 text-gray-500 dark:text-gray-400">
            <Link
              href="https://github.com/ace-aryal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github
                size={18}
                className="transition hover:text-black focus:text-black active:text-black dark:hover:text-white dark:focus:text-white dark:active:text-white"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/dipesh-aryal-612536272/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={18}
                className="transition hover:text-blue-600 focus:text-blue-600 active:text-blue-600"
              />
            </Link>
            <Link href="mailto:aryaldipesh404@gmail.com" aria-label="Email">
              <Mail
                size={18}
                className="transition hover:text-red-500 focus:text-red-500 active:text-red-500"
              />
            </Link>
          </div>
        </div>

        <div id="image-section">
          <Image
            priority
            className="rounded-lg grayscale-100 transition-all hover:scale-105 hover:grayscale-25 focus:scale-105 focus:grayscale-25 active:scale-105 active:grayscale-25"
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
