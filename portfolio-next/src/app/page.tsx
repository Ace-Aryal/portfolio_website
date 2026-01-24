export default function SimplePortfolio() {
  return (
    <main className="prose mx-auto max-w-7xl p-2">
      {/* ABOUT */}
      <h1>Dipesh Aryal</h1>
      <p>
        Dipesh Aryal, Full stack developer, building real life projects at Mayamatrix Technologies
        using modern tech stack hybrid of T3 stack and MERN stack.
      </p>

      <hr />

      {/* PRODUCTS */}
      <h2>Products I have shipped</h2>

      <ul>
        <li>
          <strong>HealthGuard Nepal</strong> –{' '}
          <a href="https://healthguard.com.np" target="_blank">
            healthguard.com.np
          </a>{' '}
          – Internal business software
          <br />
          Worked actively on admin, distributors, and members dashboards, API integration, and
          dashboard UI.
        </li>

        <li>
          <strong>Jhyaap Station</strong> –{' '}
          <a href="https://jhyaapstation.com.np" target="_blank">
            jhyaapstation.com.np
          </a>{' '}
          – Mini e-commerce (liquor sellers)
          <br />
          Worked on landing page UI, order management, admin dashboard, product CRUD, and related
          features.
        </li>

        <li>
          <strong>PNA Technical</strong> –{' '}
          <a href="https://pnatechnical.com" target="_blank">
            pnatechnical.com
          </a>{' '}
          – Website + internal custom software
          <br />
          Worked on almost everything: static website and all role-based dashboards.
        </li>

        <li>
          <strong>Company Management System (Mayamatrix)</strong> –{' '}
          <a href="https://companymanagementsystem.com" target="_blank">
            companymanagementsystem.com
          </a>{' '}
          – Internal custom software
          <br />
          Worked on admin dashboard, chat system, and employee dashboard.
        </li>
      </ul>

      <hr />

      {/* SKILLS */}
      <h2>Skills / Tech Stack</h2>

      <h3>Frontend</h3>
      <ul>
        <li>JavaScript, TypeScript</li>
        <li>React, Next.js</li>
        <li>React Query</li>
        <li>Tailwind CSS, shadcn/ui</li>
      </ul>

      <h3>Backend</h3>
      <ul>
        <li>Next.js API routes & server actions</li>
        <li>Express.js</li>
        <li>Appwrite (BaaS)</li>
      </ul>

      <h3>Database & ORMs</h3>
      <ul>
        <li>MongoDB, PostgreSQL</li>
        <li>Prisma, Drizzle</li>
      </ul>

      <h3>Authentication</h3>
      <ul>
        <li>Clerk, Kinde</li>
        <li>NextAuth, Better Auth</li>
        <li>Appwrite Auth</li>
        <li>Custom JWT-based auth logic</li>
      </ul>

      <hr />

      {/* WORK EXPERIENCE */}
      <h2>Work Experience</h2>

      <ul>
        <li>
          <strong>July 2025 – Oct 2025</strong> — Mayamatrix Technologies
          <br />
          Full Stack Intern
        </li>
        <li>
          <strong>Oct 2025 – Present</strong> — Mayamatrix Technologies
          <br />
          Associate Full Stack Developer
        </li>
      </ul>

      <hr />

      {/* LINKS */}
      <h2>Links</h2>

      <ul>
        <li>
          LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/dipesh-aryal-612536272/" target="_blank">
            linkedin.com/in/dipesh-aryal-612536272
          </a>
        </li>
        <li>
          GitHub:{' '}
          <a href="https://github.com/ace-aryal" target="_blank">
            github.com/ace-aryal
          </a>
        </li>
      </ul>

      <hr />

      {/* INTERNAL LINKS */}
      <p>
        <a href="/contact">Click here to send me a message</a>
      </p>
      <p>
        <a href="/posts">Click here to see my posts</a>
      </p>
    </main>
  )
}
