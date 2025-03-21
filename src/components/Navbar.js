import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-primary">MyPortfolio</h1>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about" className="ml-4">About</Link>
        <Link href="/projects" className="ml-4">Projects</Link>
        <Link href="/contact" className="ml-4">Contact</Link>
      </div>
    </nav>
  );
}