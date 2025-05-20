import Navbar from "../components/Navbar"

export default function Home() {
  return (

    <div 
      className="min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/homePage.jpg')" }}
    >
      
      <Navbar />

      <div className="flex flex-col items-start justify-center h-screen pl-8">
        <h1 className="text-5xl font-normal text-white">
          Rigoberto
        </h1>
        <h1 className="text-8xl font-bold text-white">
          Lizaola
        </h1>
        <h1 className="text-3xl font-thin text-white">
          Full Stack Developer
        </h1>

      </div>
    </div>
  )
}

