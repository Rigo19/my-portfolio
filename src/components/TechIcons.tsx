// components/TechIcons.tsx
import {
    SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
    SiTailwindcss, SiCplusplus, SiGit, SiHtml5, SiCss3, SiMysql,
    SiFirebase, SiLinux, SiDocker
  } from 'react-icons/si';
  import { FaJava } from 'react-icons/fa';
  
  export default function TechIcons() {
    const skills = [
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-300" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> },
      { name: 'React', icon: <SiReact className="text-cyan-400" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-300" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
      { name: 'Linux', icon: <SiLinux className="text-gray-300" /> },
      { name: 'Docker', icon: <SiDocker className="text-blue-400" /> },
      { name: 'Python', icon: <SiPython className="text-yellow-400" /> },
      { name: 'Java', icon: <FaJava className="text-red-500" /> },
      { name: 'C++', icon: <SiCplusplus className="text-blue-500" /> },
      { name: 'SQL', icon: <SiMysql className="text-blue-300" /> },
      { name: 'Git', icon: <SiGit className="text-orange-500" /> },
      { name: 'HTML', icon: <SiHtml5 className="text-orange-600" /> },
      { name: 'CSS', icon: <SiCss3 className="text-blue-500" /> },
    ];
  
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center py-8">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex flex-col items-center text-white">
            <div className="text-5xl mb-2">{skill.icon}</div>
            <p className="text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    );
  }
  