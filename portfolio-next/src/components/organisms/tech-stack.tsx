import Image from 'next/image'
import React from 'react'

function TechStack() {
  const techStackArray = [
    {
      title: 'HTML',
      level: 'expert',
      image:
        'https://fra.cloud.appwrite.io/v1/storage/buckets/questions-attachment/files/684acfa2001115f27cec/view?project=68465b0b0011b7d2e8b0&mode=admin',
    },
    {
      title: 'CSS',
      level: 'proficient',
      image:
        'https://fra.cloud.appwrite.io/v1/storage/buckets/questions-attachment/files/684acf6d0011a6868731/view?project=68465b0b0011b7d2e8b0&mode=admin',
    },
    {
      title: 'JavaScript',
      level: 'proficient',
      image:
        'https://fra.cloud.appwrite.io/v1/storage/buckets/questions-attachment/files/684acf55003b2f2e7f14/view?project=68465b0b0011b7d2e8b0&mode=admin',
    },
    {
      title: 'TypeScript',
      level: 'beginner',
      image:
        'https://fra.cloud.appwrite.io/v1/storage/buckets/questions-attachment/files/684ad98d00152804d9e3/view?project=68465b0b0011b7d2e8b0&mode=admin',
    },
    {
      title: 'React.js',
      level: 'proficient',
      image:
        'https://fra.cloud.appwrite.io/v1/storage/buckets/questions-attachment/files/684acf1900032ad6b806/view?project=68465b0b0011b7d2e8b0&mode=admin',
    },
    {
      title: 'Next.js',
      level: 'familiar',
      image:
        'https://fra.cloud.appwrite.io/v1/storage/buckets/questions-attachment/files/684ad97200193f7ff6f3/view?project=68465b0b0011b7d2e8b0&mode=admin',
    },
    {
      title: 'Tailwind CSS',
      level: 'proficient',
      image:
        'https://fra.cloud.appwrite.io/v1/storage/buckets/questions-attachment/files/684acf4a0037a68f966a/view?project=68465b0b0011b7d2e8b0&mode=admin',
    },
    {
      title: 'Bootstrap',
      level: 'intermediate',
      image:
        'https://fra.cloud.appwrite.io/v1/storage/buckets/questions-attachment/files/684acf3200042dcf7cb6/view?project=68465b0b0011b7d2e8b0&mode=admin',
    },
    {
      title: 'Material UI',
      level: 'familiar',
      image:
        'https://fra.cloud.appwrite.io/v1/storage/buckets/questions-attachment/files/684acf24000628bc4f30/view?project=68465b0b0011b7d2e8b0&mode=admin',
    },
    {
      title: 'ShadCN UI',
      level: 'intermediate',
      image:
        'https://fra.cloud.appwrite.io/v1/storage/buckets/questions-attachment/files/684acee20016ab249737/view?project=68465b0b0011b7d2e8b0&mode=admin',
    },
    {
      title: 'Redux Toolkit',
      level: 'intermediate',
      image:
        'https://fra.cloud.appwrite.io/v1/storage/buckets/questions-attachment/files/684ad97e0038b7c88906/view?project=68465b0b0011b7d2e8b0&mode=admin',
    },
    {
      title: 'React Query',
      level: 'intermediate',
      image:
        'https://fra.cloud.appwrite.io/v1/storage/buckets/questions-attachment/files/684acf0100199984000f/view?project=68465b0b0011b7d2e8b0&mode=admin',
    },
    {
      title: 'Zustand',
      level: 'beginner',
      image:
        'https://fra.cloud.appwrite.io/v1/storage/buckets/questions-attachment/files/684ad9620029bb8f4ef2/view?project=68465b0b0011b7d2e8b0&mode=admin',
    }, // Replace with actual image if needed
    {
      title: 'Axios',
      level: 'familiar',
      image:
        'https://fra.cloud.appwrite.io/v1/storage/buckets/questions-attachment/files/684ad95a0011bba1ae00/view?project=68465b0b0011b7d2e8b0&mode=admin',
    },
    {
      title: 'Appwrite',
      level: 'proficient',
      image:
        'https://fra.cloud.appwrite.io/v1/storage/buckets/questions-attachment/files/684ad96a001130c5e059/view?project=68465b0b0011b7d2e8b0&mode=admin',
    },
    {
      title: 'React Hook Form',
      level: 'intermediate',
      image:
        'https://fra.cloud.appwrite.io/v1/storage/buckets/questions-attachment/files/684aced8002a19868b42/view?project=68465b0b0011b7d2e8b0&mode=admin',
    },
    {
      title: 'Git',
      level: 'familiar',
      image:
        'https://fra.cloud.appwrite.io/v1/storage/buckets/questions-attachment/files/684aced000032284e814/view?project=68465b0b0011b7d2e8b0&mode=admin',
    },
    {
      title: 'Zod',
      level: 'Intermediate',
      image:
        'https://fra.cloud.appwrite.io/v1/storage/buckets/questions-attachment/files/684d7b30003d0c79aedf/view?project=68465b0b0011b7d2e8b0&mode=admin',
    },
    {
      title: 'Prisma ORM',
      level: 'Intermediate',
      image:
        'https://fra.cloud.appwrite.io/v1/storage/buckets/questions-attachment/files/684d7b5500090a9c604a/view?project=68465b0b0011b7d2e8b0&mode=admin',
    },
    {
      title: 'C Language',
      level: 'familiar',
      image:
        'https://fra.cloud.appwrite.io/v1/storage/buckets/questions-attachment/files/684acf3e002a1d81c131/view?project=68465b0b0011b7d2e8b0&mode=admin',
    },
  ]

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h2 className="title w mb-5 text-left">Tech Stack</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
        {techStackArray.map((techStack) => (
          <li key={techStack.image}>
            <div className="group reveal aspect-square min-h-48 [perspective:1000px]">
              <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)] group-active:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 flex items-center justify-center rounded-lg text-white [backface-visibility:hidden]">
                  <Image
                    width={150}
                    height={150}
                    src={techStack.image}
                    alt={techStack.title}
                    className={`rounded-lg object-contain ${techStack.title.toLowerCase().replaceAll(' ', '') === 'next.js' || techStack.title.toLowerCase().replaceAll(' ', '') === 'shadcnui' ? 'dark:invert' : ''}`}
                  ></Image>
                </div>

                {/* Back */}
                <div className="absolute inset-0 flex [transform:rotateY(180deg)] items-center justify-center rounded-lg bg-gray-200 text-white [backface-visibility:hidden] dark:bg-zinc-800">
                  <div className="flex flex-col p-2">
                    <h3 className="font-serif text-3xl font-semibold text-zinc-700 dark:text-zinc-200">
                      {techStack.title}
                    </h3>
                    <span className="text-lg text-gray-500 dark:text-gray-400">
                      level: {techStack.level}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TechStack
