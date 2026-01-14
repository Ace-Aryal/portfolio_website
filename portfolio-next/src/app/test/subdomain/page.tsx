'use client'

import React, { useEffect, useState } from 'react'

const tenantDisplay = [
  {
    slug: 'tenant-1',
    text: 'Hello i am tenant 1',
  },
  { slug: 'tenant-2', text: 'Hello i am tenant 2' },
]

export default function Test() {
  const [tenantSubdomain, setTenantSubdomain] = useState<string | null>(null)

  useEffect(() => {
    const fullUrl = window.location.href
    const splitByDot = fullUrl.split('.')[0]
    const subdomain = splitByDot.split('//')[1]
    setTenantSubdomain(subdomain)
  }, [])

  const tenant = tenantDisplay.find((tenant) => tenant.slug === tenantSubdomain)

  return (
    <div className="flex items-center justify-center bg-white pt-40">
      <p className="text-black">
        {tenantSubdomain === null ? 'Loading...' : tenant ? tenant.text : '404 not found'}
      </p>
    </div>
  )
}
