import Navbar from "../components/Navbar"
import ProjectCard from "@/components/ProjectCard"

export default function Projects() {
  return (

    <div className="min-h-screen bg-black text-white">
      
        <Navbar />

        
        {/*Project Page Title*/}
        <div className="w-full flex justify-center py-20">
            <h1 className="text-5xl font-bold mb-4 underline decoration-blue-600 text-center">
                Projects
            </h1>
        </div>
        
        <ProjectCard />
        
  
    </div>
  )
}
