import TechIcons from "@/components/TechIcons";
import Navbar from "../components/Navbar"
import {
    Plane,
    Dumbbell,
    Camera,
    Shirt,
  } from "lucide-react";
  

export default function Skills() {
  return (

    <div className="min-h-screen bg-black text-white">
      
        <Navbar />

        {/*Main Container*/}
        <div className="flex flex-col md:flex-row gap-12 px-6 py-20 max-w-7xl mx-auto w-full">

            {/*Left Column - Skills Section*/}
            <div className="max-w-md flex-1 text-left">

                {/*Sofware skills Title*/}
                <div className="mb-10">
                    <h1 className="text-4xl font-bold mb-4 underline decoration-blue-600 text-center">
                        Software Skills
                    </h1>
                    <TechIcons />
                </div>

                {/*Languages Title*/}
                <div>
                    <h1 className="text-5xl font-bold mb-4 underline decoration-blue-600 text-center">
                        Languages
                    </h1>
                    <div className="text-lg space-y-1 text-center">
                        <p>English</p>
                        <p>Spanish</p>
                    </div>
                </div>
            </div>
        

            {/*Center Column - Experience + Education Section*/}
            <div className="max-w-md flex-1 text-center flex flex-col justify-between h-full">

                {/*Education Title*/}
                <div className="mb-20">
                    <h1 className="text-4xl font-bold mb-4 underline decoration-blue-600">
                        Education
                    </h1>
                    <div className="border-t border-gray-500 pt-4 text-left space-y-1">
                        {/* First row: School and location on left, dates on right */}   
                        <div className="flex justify-between text-sm">
                            <p>
                                <span className="font-bold">
                                Texas State University
                                </span>
                            </p>   
                            <p className="font-bold">
                                Aug. 2022 - May. 2025
                            </p>
                        </div>
                        {/* Second row: Degree */}
                        <p className="italic font-semibold leading-tight">
                            Bachelors of Science in Computer Science 
                        </p>
                        <p className="text-sm text-gray-300">San Marcos, Texas</p>
                    </div>
                </div>

                {/*Experience Title*/}  
                <div>
                    <h1 className="text-4xl font-bold mb-4 underline decoration-blue-600">
                        Experience
                    </h1> 
                    <div className="border-t border-gray-500 pt-4 text-left space-y-1">
                        {/* First row: Company and location on left, dates on right */}   
                        <div className="flex justify-between text-sm">
                            <p>
                                <span className="font-bold">
                                Thiio - Austin, Texas (Remote)
                                </span>
                            </p>   
                            <p className="font-bold">
                                May. 2023 - Aug. 2023
                            </p>
                        </div>
                        {/* Second row: Role title */}
                        <p className="italic font-semibold leading-tight">
                            Software Engineer Intern 
                        </p>
                        </div>
                        {/* Third Section: Role descriptions*/}
                        <div className="text-left text-sm space-y-2 mt-4 pl-4 list-disc">
                            <li>Helped reduce site load times in webpages by 10% by minifying scripts and images.</li>
                            <li>Increased user engagement in several clients’ sites by 15% using a responsive mobile-first UI design</li>
                            <li>Boosted SEO optimizing frontend performance, adding a module for adding keywords, meta tags, etc.</li>
                            <li>Was part of the Agile development lifecycle, including daily standups, sprint planning, and peer code reviews.</li>
                            <li>Utilized technologies including PHP, JavaScript, Docker, Go, and MySQL, focusing on scalable, maintainable code.</li>
                        </div>
                    </div>   
                </div>


            {/*Right Column - Hobbies + Interest Section*/}
            <div className="max-w-md flex-1 text-right">

                {/*Hobbies Title*/}
                <div className="mb-20">
                    <h1 className="text-4xl font-bold mb-4 underline decoration-blue-600 text-center">
                        Hobbies
                    </h1>
                    {/* First row: First Two hobbies */}   
                    <div className="text-lg flex justify-center gap-11 mb-8">
                            <div className="flex flex-col items-center">
                                <Plane className="w-10 h-10 mb-1"/>
                                <p>Travel</p>
                            </div>   
                            <div className="flex flex-col items-center">
                                <Dumbbell className="w-10 h-10 mb-1"/>
                                <p>Lifting</p>
                            </div> 
                    </div>
                    {/* Second row: Last Two hobbies */}   
                    <div className="flex justify-center gap-11 text-sm">
                            <div className="flex flex-col items-center">
                                <Camera className="w-10 h-10 mb-1"/>
                                <p>Photography</p>
                            </div>   
                            <div className="flex flex-col items-center">
                                <Shirt className="w-10 h-10 mb-1"/>
                                <p>Style</p>
                            </div> 
                    </div>
                </div>

                {/*Interests Title*/}  
                <div>
                    <h1 className="text-4xl font-bold mb-4 underline decoration-blue-600 text-center">
                        Interest
                    </h1>  
                    <div>
                        <p className="text-sm space-y-1 text-start">
                            I’m deeply passionate about self-growth and enjoy exploring ways to promote personal development within my community. I also have a strong interest in cars and car modifications, and I hope to one day build my dream car from the ground up. Beyond that, I value meaningful connections and love meeting new people — especially when those connections lead to positive, lasting impact.
                        </p>
                    </div>
                </div>        
            </div>
        </div>
    </div>
  )
}

