import Image from 'next/image'
import React from 'react'

function Intro() {
  return (
    <div className="greid w-full place-items-center">
      <div className="flex max-w-3xl flex-col-reverse items-center justify-center gap-4 sm:flex-row">
        <div className="flex flex-col gap-1" id="paragraph-section">
          <h1 className="title border-0">Namaste, I{`'`}m Dipesh Aryal</h1>
          <p className="text-sm">
            <span className="text-lg font-semibold text-gray-500">|</span> I{`'`}m a passionate
            frontend web developer who enjoys learning new technologies and building clean,
            functional, and user-friendly web applications
          </p>
        </div>
        <div id="image-section" className="">
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

export default Intro
