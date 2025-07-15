import React from 'react'

const AboutPage = () => {
  return (
     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-10 max-w-4xl w-full">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center">
          About Next.js
        </h1>

        <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
          <p>
            Next.js is a popular open-source React framework that enables developers to build
            server-side rendered (SSR), static site generated (SSG), and client-side rendered (CSR)
            React applications with ease. It was created by Vercel (formerly ZEIT) and has become a
            go-to choice for building modern web applications due to its focus on performance,
            developer experience, and scalability.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-8 mb-4">
            A Brief History of Next.js
          </h2>

          <div className="space-y-4">
            <p>
              <strong className="font-semibold text-gray-900">2016: The Beginning</strong>
              <br />
              Next.js was first released as open-source on October 25, 2016, by Vercel (then ZEIT).
              It quickly gained traction for its innovative approach to server-side rendering with React,
              addressing common challenges faced by developers in building performant React applications
              that were also SEO-friendly. Its initial release focused on simplifying the setup for SSR,
              hot module replacement, and automatic code splitting.
            </p>

            <p>
              <strong className="font-semibold text-gray-900">2017-2018: Growth and Static Site Generation</strong>
              <br />
              In the years following its release, Next.js continued to evolve rapidly. Version 3 introduced
              static export, allowing developers to generate static HTML files from their React components,
              making it suitable for static site generation (SSG). This broadened its appeal, as it could
              now be used for a wider range of projects, from dynamic web apps to content-heavy static sites.
            </p>

            <p>
              <strong className="font-semibold text-gray-900">2019: Next.js 9 and API Routes</strong>
              <br />
              Next.js 9, released in 2019, was a significant milestone. It introduced "API Routes,"
              a built-in solution for creating backend API endpoints directly within the Next.js project.
              This feature streamlined full-stack development, allowing developers to manage both frontend
              and backend code within a single repository. It also brought improved automatic static
              optimization and better TypeScript support.
            </p>

            <p>
              <strong className="font-semibold text-gray-900">2020: Next.js 10 and Image Optimization</strong>
              <br />
              Next.js 10, released in 2020, focused heavily on performance and developer experience.
              Key features included the `next/image` component for automatic image optimization,
              internationalization (i18n) routing, and Next.js Analytics. These additions further
              solidified its position as a comprehensive framework for modern web development.
            </p>

            <p>
              <strong className="font-semibold text-gray-900">2021-Present: React 18, Server Components, and Beyond</strong>
              <br />
              Recent versions of Next.js have continued to push the boundaries of web development.
              Next.js 12 brought Rust-based tooling (SWC) for faster compilation. The framework has also
              been at the forefront of adopting new React features, such as React 18's concurrent features
              and Server Components (introduced in Next.js 13 with the App Router). The App Router,
              built on React Server Components, represents a significant shift towards server-first
              rendering and a more integrated full-stack development experience, aiming to improve
              performance and simplify data fetching.
            </p>

            <p>
              Today, Next.js remains a leading framework, continuously innovating and adapting to the
              evolving landscape of web development, empowering developers to build highly performant,
              scalable, and user-friendly applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage