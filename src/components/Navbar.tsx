//importing link which is responsible for handling internal
//navigation between pages in the app without causing ful page reloads
//next.js prefetches the link page in the background, so when the user clicks it
//its already loaded
import Link from "next/link";
//importing userRouter from Next.js
import { useRouter } from "next/router";



/*the navigation bar will have no logo or name 
            will have the:
                Home
                About 
                Skills
                Projects
                Contact
the current page youre in will be highlighted in the navbar */

export default function Navbar() {
    const router = useRouter();
    const currentPath = router.pathname;

    return (
        <nav className="bg-stone-800 fixed top-0 left-0 w-full z-50 shadow-md" role="navigation">
            <ul className="flex justify-start space-x-8 text-white font-medium list-none">
                <li><Link href="/" className={`hover:text-blue-600 cursor-pointer ${currentPath === "/" ? "underline decoration-blue-600" : ""}`}>Home</Link></li>
                <li><Link href="/about" className={`hover:text-blue-600 cursor-pointer ${currentPath === "/about" ? "underline decoration-blue-600" : ""}`}>About</Link></li>
                <li><Link href="/skills" className={`hover:text-blue-600 cursor-pointer ${currentPath === "/skills" ? "underline decoration-blue-600" : ""}`}>Skills</Link></li>
                <li><Link href="/projects" className={`hover:text-blue-600 cursor-pointer ${currentPath === "/projects" ? "underline decoration-blue-600" : ""}`}>Projects</Link></li>
                <li><Link href="/contact" className={`hover:text-blue-600 cursor-pointer ${currentPath === "/contact" ? "underline decoration-blue-600" : ""}`}>Contact</Link></li>
                
            </ul>
        </nav>
    );
}