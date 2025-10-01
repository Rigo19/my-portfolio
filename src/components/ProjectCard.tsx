import { useState } from 'react';
import Image from "next/image"

interface Project {
  name: string;
  description: string;
  image: string;
  demoLink: string;
  githubLink: string;
}

export default function ProjectCard() {
  const projects = [
    {
      name: 'Play4Progress',
      description:
        'Gamified web app for 1st–3rd graders to practice math drills through interactive badges and levels. It features level tracking, streak rewards, and a user-friendly interface built for classrooms or at-home learning.',
      image: '/play4progressPic.jpg',
      demoLink: 'https://hf-earlychildhood.web.app/login.html',
      githubLink: 'https://github.com/Rigo19/play4progress',
    },
    // Add more projects if needed
    {
      name: 'Drobe',
      description:
        'We are creating an application where you have access to a virtual wardrobe. Here, you can save the different outfits and clothes you have.',
      image: '/DrobeAppPic.jpg',
      demoLink: 'https://drobe-ngx07en4t-rigo-s-projects.vercel.app/login.html',
      githubLink: 'https://github.com/Rigo19/drobeApp',
    },
    {
      name: 'JDMCARHUB',
      description:
        'This is a simple yet stylish online shopping platform for JDM aftermarket car parts, built using HTML, CSS, and JavaScript. The goal of this project is to provide car enthusiasts with an easy way to browse and purchase high-quality parts for their vehicles, more specifically JDM cars.',
      image: '/jdmCarShop.jpg',
      demoLink: 'https://github.com/Rigo19/CarPartsShoppingPlatform',
      githubLink: 'https://github.com/Rigo19/CarPartsShoppingPlatform',
    },
    
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 py-10">
      {projects.map((project, idx) => (
        <FlipCard key={idx} project={project} />
      ))}
    </div>
  );
}

function FlipCard({ project }: { project: Project }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-full max-w-xs sm:max-w-sm md:max-w-md [perspective:1000px] cursor-pointer  hover:transition transform hover:scale-105 pt-2"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full min-h-[24rem] transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* FRONT */}
        <div className="absolute w-full min-h-[24rem] bg-white rounded-lg shadow-lg overflow-hidden backface-hidden flex flex-col py-4">
          <Image
            src={project.image}
            alt={project.name}
            width={400}
            height={192}
            className="object-cover w-full max-h-48"
          />
          <div className="flex flex-col justify-start flex-1 p-4">
            <h1 className="text-lg font-bold text-gray-900 text-center">
              {project.name}
            </h1>
            <p className="text-sm text-gray-600 text-center mt-2 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute w-full min-h-[24rem] bg-white rounded-lg shadow-lg p-6 rotate-y-180 backface-hidden flex flex-col justify-center items-center space-y-4">
          <h2 className="text-lg font-semibold text-center">{project.name}</h2>
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-blue-600"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-blue-600"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}
