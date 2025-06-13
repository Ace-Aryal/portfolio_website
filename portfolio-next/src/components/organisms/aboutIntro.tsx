import Image from 'next/image'

export default function AboutIntro() {
  return (
    <div className="grid w-full place-items-center px-2">
      <div className="flex max-w-3xl flex-col-reverse items-center justify-center gap-4 sm:flex-row">
        <div className="flex flex-col gap-2" id="paragraph-section">
          <h1 className="title border-0">About me</h1>
          <p className="max-w-md text-sm">
            <span className="text-lg font-semibold text-gray-500">|</span>{' '}
            {`I'm a frontend developer based in Kathmandu with solid skills in the React ecosystem and a
               growing familiarity with serverless backends. With a +2 Science 
               background, I enjoy building clean, functional, and user-friendly web applications. 
               Passionate about web technologies,
                I’m always exploring and learning to stay sharp in this fast-moving field.`}
          </p>
        </div>

        <div id="image-section">
          <Image
            className="rounded-lg grayscale-100 transition-all hover:scale-105 hover:grayscale-25 focus:scale-105 focus:grayscale-25 active:scale-105 active:grayscale-25"
            alt="profile-picture"
            src="https://fra.cloud.appwrite.io/v1/storage/buckets/questions-attachment/files/684ab145000ff2199814/view?project=68465b0b0011b7d2e8b0&mode=admin"
            width={175}
            height={175}
            priority
          />
        </div>
      </div>
    </div>
  )
}
