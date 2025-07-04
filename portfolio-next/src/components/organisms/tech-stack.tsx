import React from 'react'
import TechStackItem from '../molecules/tech-stack-item'
export type TTechStack = {
  title: string
  level: string
  image: string
}

function TechStack() {
  const techStackArray: TTechStack[] = [
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
      level: 'faimiliar',
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
      level: 'intermediate',
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
      level: 'familiar',
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
      level: 'familiar',
      image:
        'https://fra.cloud.appwrite.io/v1/storage/buckets/questions-attachment/files/684d7b5500090a9c604a/view?project=68465b0b0011b7d2e8b0&mode=admin',
    },
  ]

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h2 className="title w mb-5 text-left">Tech Stack</h2>
      <ul className="grid grid-cols-2 gap-10 sm:grid-cols-4 md:grid-cols-6">
        {techStackArray.map((techStack, index) => (
          <TechStackItem index={index} techStack={techStack} key={techStack.image} />
        ))}
      </ul>
    </div>
  )
}

export default TechStack
