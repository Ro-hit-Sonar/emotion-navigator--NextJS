// pages/index.js (or pages/index.tsx if using TypeScript)
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-6">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-xl text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
hello , due to some issue we are redirecting this project to another URL , please click it below and check the project        </h1>
        <p className="text-gray-600 mb-6 text-lg">
          Click the button below to navigate to the Emotion Navigator page.
        </p>
        <a
          href="https://mental-health-taupe-gamma.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
        >
          Emotion Navigator
        </a>
      </div>
    </div>
  );
}
