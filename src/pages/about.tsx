import Navbar from "../components/Navbar"

export default function About() {
  return (

    <div className="min-h-screen bg-black text-white">
      
        <Navbar />

        {/*Profile Section*/}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-20">
            {/*Profile Pic*/}
            <img src={"/aboutMeRigo.jpeg"} className="w-48 h-48 rounded-full object-cover shadow-lg">
            </img>

            {/*About Me Info*/}
            <div className="max-w-xl text-center md:text-left">
                <h1 className="text-5xl font-bold mb-4 underline decoration-blue-600">
                    About Me
                </h1>
                <p className="text-lg">
                    Recent graduate seeking full-time position in Austin, TX or surrounding areas. I'm a full stack 
                    developer passionate about bulding clean, scalable, and user-friendly web application. A strong advocate of
                    self growth, excited to showcase my journey and projects here.
                </p>
            </div>
        </div>
    </div>
  )
}

