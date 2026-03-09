import Link from 'next/link'
import {
  ArrowUpRight,
  Briefcase,
  Building2,
  Code2,
  Database,
  ExternalLink,
  Github,
  Layers3,
  Linkedin,
  Mail,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react'

const products = [
  {
    name: 'Gamingmandu',
    url: 'https://gamingmandu.com',
    description: 'Online gift cards and in-app purchases platform.',
    details:
      'Built admin dashboard, order management, product management, banner management, and related features.',
  },
  {
    name: 'Healthguard Nepal',
    url: 'https://healthguard.com.np',
    description: 'Distributor and retailer management system.',
    details:
      'Worked on admin and distributor dashboards, role-based access control, email flows, and related features.',
  },
  {
    name: 'Jhyaap Station',
    url: 'https://jhyaapstation.com',
    description: 'Mini e-commerce platform for liquor sellers.',
    details:
      'Implemented landing page UI, order flows, admin dashboard, product CRUD, and related features.',
  },
  {
    name: 'PNA Technical',
    url: 'https://pnatechnical.com',
    description: 'Website and workforce management system.',
    details:
      'Built landing page experience, workforce dashboard, employee management, auth, and related features.',
  },
  {
    name: 'Company Management System',
    url: 'https://companymanagementsystem.com',
    description: 'In-house management suite for Mayamatrix Technologies.',
    details: 'Developed admin dashboard, chat system, authentication, and employee dashboard modules.',
  },
]

const skillGroups = [
  {
    title: 'Frontend',
    icon: Layers3,
    items: ['JavaScript, TypeScript', 'React.js, Next.js', 'React Query, React Hook Form', 'Tailwind CSS, shadcn/ui', 'Redux Toolkit, Zustand, Zod'],
  },
  {
    title: 'Backend',
    icon: Terminal,
    items: ['Next.js API routes and Server Actions', 'Express.js', 'Appwrite (BaaS)'],
  },
  {
    title: 'Database and ORM',
    icon: Database,
    items: ['MongoDB, PostgreSQL', 'Prisma, Drizzle'],
  },
  {
    title: 'Authentication',
    icon: ShieldCheck,
    items: ['Clerk, Kinde', 'NextAuth', 'Appwrite Auth', 'Custom JWT auth logic'],
  },
]

const experiences = [
  {
    period: 'July 2025 - Oct 2025',
    role: 'Software Developer Intern',
    company: 'Mayamatrix Technologies',
  },
  {
    period: 'Oct 2025 - Present',
    role: 'Associate Software Developer',
    company: 'Mayamatrix Technologies',
  },
]

export default function SimplePortfolio() {
  return (
    <main className="light relative overflow-hidden w-full  bg-slate-50 text-slate-900" style={{ colorScheme: 'light' }}>
      <div className="pointer-events-none absolute inset-x-0  top-0 h-[38rem] bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.2),_transparent_42%),radial-gradient(circle_at_top_left,_rgba(251,146,60,0.14),_transparent_36%)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-cyan-200/50 backdrop-blur-xl sm:p-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">
            <Sparkles className="size-3.5" />
            Full Stack Developer
          </p>

          <div className="mt-5 grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Dipesh Aryal
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                I build production-ready web apps that solve real problems, balance speed with usability,
                and scale with clean architecture. Over the past 8+ months, I have shipped multiple live
                products across dashboards, e-commerce, and internal management systems.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-600"
                >
                  <Mail className="size-4" />
                  Contact Me
                </Link>
                <Link
                  href="/posts"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
                >
                  <Code2 className="size-4" />
                  Read Posts
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Products Shipped</p>
                <p className="mt-1 text-3xl font-bold text-slate-900">5+</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Experience</p>
                <p className="mt-1 text-3xl font-bold text-slate-900">8+ mo</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Current Role</p>
                <p className="mt-1 text-sm font-semibold text-cyan-700">Associate Software Developer</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Focus</p>
                <p className="mt-1 text-sm font-semibold text-orange-700">Full Stack Delivery</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
            <Zap className="size-4 text-cyan-600" />
            Products I Have Shipped
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {products.map((product) => (
              <a
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-50/50"
              >
                <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                  <Building2 className="size-4 text-cyan-600" />
                  {product.name}
                </h2>
                <p className="mt-2 text-sm text-slate-600">{product.description}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{product.details}</p>
                <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cyan-700 transition group-hover:text-cyan-800">
                  Visit live site
                  <ExternalLink className="size-4 transition group-hover:translate-x-0.5" />
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="mb-5 flex items-center gap-2 text-xl font-bold text-slate-900">
              <Briefcase className="size-5 text-orange-600" />
              Work Experience
            </h2>
            <div className="space-y-4">
              {experiences.map((experience) => (
                <div key={experience.period} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{experience.period}</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">{experience.role}</p>
                  <p className="text-sm text-cyan-700">{experience.company}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="mb-5 flex items-center gap-2 text-xl font-bold text-slate-900">
              <ArrowUpRight className="size-5 text-cyan-600" />
              Links
            </h2>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/dipesh-aryal-612536272/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-cyan-300 hover:bg-cyan-50/50"
              >
                <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Linkedin className="size-4 text-cyan-600" />
                  LinkedIn
                </span>
                <ArrowUpRight className="size-4 text-slate-500" />
              </a>
              <a
                href="https://github.com/ace-aryal"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-cyan-300 hover:bg-cyan-50/50"
              >
                <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Github className="size-4 text-cyan-600" />
                  GitHub
                </span>
                <ArrowUpRight className="size-4 text-slate-500" />
              </a>
            </div>
          </article>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="mb-5 flex items-center gap-2 text-xl font-bold text-slate-900">
            <Code2 className="size-5 text-cyan-600" />
            Skills and Tech Stack
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-slate-900">
                  <group.icon className="size-4 text-orange-600" />
                  {group.title}
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 leading-relaxed">
                      <span className="mt-[0.45rem] size-1.5 rounded-full bg-cyan-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
