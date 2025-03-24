import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="h-screen bg-stone-950">
      <Navbar />
      <div className="text-white text-center text-4xl pt-20">
        Hi, Sign Up or Sign In
      </div>
    </div>
  );
}
