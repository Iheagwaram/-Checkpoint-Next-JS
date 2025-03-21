import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-secondary text-white flex flex-col items-center justify-center">
      <Navbar />
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="text-lg mt-4">Showcasing my best projects and skills.</p>
      <Image src="/profile-img.jpg" width={200} height={200} className="rounded-full mt-6" alt="Profile" />
    </div>
  );
}