import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function SocialLinks() {
    const links = [
        {
            name: "GitHub",
            icon: <FaGithub size={30}/>,
            url: "https://github.com/Rigo19",
        },
        {
            name: "Linkedin",
            icon: <FaLinkedin size={30}/>,
            url: "https://www.linkedin.com/in/rigoberto-lizaola-2570a016b/",
        },
        {
            name: "Instagram",
            icon: <FaInstagram size={30}/>,
            url: "https://www.instagram.com/z34.rigo/",
        },
    ];
    
    return(
        <div className="flex justify-center space-x-6 py-6">
            {links.map((link) =>(
                <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-500 transition transform hover:scale-100"
                    >
                        {link.icon}
                    </a>
            ))}
        </div>
    );
}