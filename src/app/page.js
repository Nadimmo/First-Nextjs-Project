
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {/* Page Title */}
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
        Welcome to Next.js in 2025!
      </h1>

      {/* Introduction Paragraph */}
      <p className="text-xl text-gray-700 text-center max-w-2xl mb-8">
        This is a simple `page.jsx` file, the entry point for your Next.js App Router application.
        Next.js continues to be a powerful framework for building modern, performant, and scalable web applications.
      </p>

      {/* Key Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Feature Card 1 */}
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-indigo-700 mb-3">Server Components</h2>
          <p className="text-gray-600">
            Leverage the power of React Server Components for better performance and reduced client-side JavaScript.
          </p>
        </div>

        {/* Feature Card 2 */}
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-green-700 mb-3">App Router</h2>
          <p className="text-gray-600">
            Enjoy a flexible and powerful routing system built on React Server Components for nested layouts and more.
          </p>
        </div>

        {/* Feature Card 3 */}
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-purple-700 mb-3">Optimized Performance</h2>
          <p className="text-gray-600">
            Benefit from automatic image optimization, code splitting, and server-side rendering (SSR) / static site generation (SSG).
          </p>
        </div>

        {/* Feature Card 4 */}
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-red-700 mb-3">Full-Stack Capabilities</h2>
          <p className="text-gray-600">
            Build APIs directly within your Next.js project, making it a true full-stack solution.
          </p>
        </div>

        {/* Feature Card 5 */}
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-blue-700 mb-3">Vibrant Ecosystem</h2>
          <p className="text-gray-600">
            Access a vast collection of libraries, tools, and a strong community for support and resources.
          </p>
        </div>

        {/* Feature Card 6 */}
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-orange-700 mb-3">Developer Experience</h2>
          <p className="text-gray-600">
            Enjoy features like Fast Refresh, built-in TypeScript support, and easy deployment.
          </p>
        </div>
      </div>

    

      
    </div>

  );
}
