
  
  export default function ProjectCard() {
    const projects = [
      { name: 'Play4Progress', description: "Full-stack interactive web platform for 1st through 3rd grade students to practice math drills in a gamified environment.", 
        icon: <img src={"/play4progressPic.PNG"} alt="Play4Progress" className="shadow-lg"></img> },
    ];
  
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center py-2 px-6">
        {projects.map((project, idx) => (
        <button 
            key={idx}
            className="flex flex-col items-center w-full h-full px-6 py-4 bg-white text-black transition transform rounded hover:scale-105 shadow-md"
        >
            <div className="flex flex-col item-center text-left space-y-2">
                <div className="items-center">{project.icon}</div>
                <h1 className="text-lg font-bold">{project.name}</h1>
                <p className="text-sm font-medium">{project.description}</p>
            </div>
        </button>
        ))}
      </div>
    );
  }
  