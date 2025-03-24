import Link from "next/link"

function Navbar() {
  return (
    <nav className="bg-gray-200 p-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-medium">AuthJs</Link>
        <div className="space-x-4 text-white">
            <button className="bg-blue-500 px-3 py-2 cursor-pointer">Sign Up</button>
            <button className="bg-blue-500 px-3 py-2 cursor-pointer">Sign In</button>
            <button className="bg-red-500 px-3 py-2 cursor-pointer">Log Out</button>
        </div>
    </nav>
    
  )
}
export default Navbar