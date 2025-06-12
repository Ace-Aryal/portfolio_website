'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  const router = useRouter()

  return (
    <div className="flex h-full grow flex-col items-center justify-center px-4 text-center">
      <h1 className="text-foreground mb-4 text-6xl font-bold">404</h1>
      <p className="text-muted-foreground mb-6 text-lg">
        The page you{`'`}re looking for doesn{`'`}t exist.
      </p>
      <Button variant="outline" onClick={() => router.back()}>
        Go Back
      </Button>
    </div>
  )
}
