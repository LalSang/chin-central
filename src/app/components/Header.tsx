
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">
          ChinCentral
        </h1>

        <nav className="flex items-center gap-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>

          <Link href="/sources" className="text-gray-700 hover:text-blue-600">
            Sources
          </Link>

          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
