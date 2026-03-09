export default function SimplePortfolio() {
  return (
<div className="bg-white w-full">
    <main className="prose mx-auto max-w-6xl p-2">
      {/* ABOUT */}
      <h1>Dipesh Aryal</h1>
      <p>
        I am full stack developer with real life applications development experience. I have shipped multiple products in production and have been working in the industry for 8+ months. I am passionate about building products that solve real world problems and are user friendly.
      </p>

      <hr />

      {/* PRODUCTS */}
      <h2>Products I have shipped</h2>

      <ul>
        <li>
          <strong>Gamingmandu </strong> –{' '}
          <a href="https://gamingmandu.com" target="_blank">
           gamingmandu.com
          </a>{' '}
          – Online giftcards and in app purchases selling platform
          <br />
          Worked on admin dashboard, order management, product management, banner management and related features.
        </li>
        <li>
          <strong>Healthguard Nepal </strong> –{' '}
          <a href="https://healthguard.com.np" target="_blank">
           helthguard.com.np
          </a>{' '}
          – Distributor and retailer management system
          <br />
          Worked on admin dashboard, distributor dashboard, RBAC, email features and related features.
        </li>

        <li>
          <strong>Jhyaap Station</strong> –{' '}
          <a href="https://jhyaapstation.com" target="_blank">
            jhyaapstation.com
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
          – Website + Workforce Management System (WFM)
          <br />
          Worked on website landing page, WFM dashboard, employee management, auth and related features.
        </li>

        <li>
          <strong>Company Management System</strong> –{' '}
          <a href="https://companymanagementsystem.com" target="_blank">
            companymanagementsystem.com
          </a>{' '}
          – In House Company Management System for Mayamatrix Technologies
          <br />
          Worked on admin dashboard, chat system, auth  and employee dashboard.
        </li>
      </ul>

      <hr />

      {/* SKILLS */}
      <h2>Skills / Tech Stack</h2>

      <h3>Frontend</h3>
      <ul>
        <li>JavaScript, TypeScript</li>
        <li>React.js, Next.js</li>
        <li>React Query, React Hook form</li>
        <li>Tailwind CSS, shadcn/ui</li>
        <li>Redux Toolkit, Zustand, Zod</li>
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
        <li>NextAuth</li>
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
          Software Developer Intern
        </li>
        <li>
          <strong>Oct 2025 – Present</strong> — Mayamatrix Technologies
          <br />
          Associate Software Developer
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
</div>
  )
}
