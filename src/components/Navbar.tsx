//importing link which is responsible for handling internal
//navigation between pages in the app without causing ful page reloads
//next.js prefetches the link page in the background, so when the user clicks it
//its already loaded
import Link from "next/link";




/*the navigation bar will have no logo or name 
            will have the:
                Home
                About 
                Projects
                Skills
                Contact
the current page youre in will be highlighted in the navbar */

export default function Navbar() {
    return (
        <nav className="bg-black shadow-md" role="navigation">
            <ul className="flex justify-start space-x-8 text-white font-medium list-none">
                <li><Link href="/" className="hover:text-blue-600 cursor-pointer">Home</Link></li>
                <li><Link href="/about" className="hover:text-blue-600 cursor-pointer">About</Link></li>
                <li><Link href="/skills" className="hover:text-blue-600 cursor-pointer">Skills</Link></li>
                <li><Link href="/projects" className="hover:text-blue-600 cursor-pointer">Projects</Link></li>
                <li><Link href="/contact" className="hover:text-blue-600 cursor-pointer">Contact</Link></li>
                
            </ul>
        </nav>
    );
}