export default function Hero() {
    return (
      <section
        id="home"
        className="relative flex flex-col items-start justify-center h-screen pl-8 overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center -z-10"
          style={{ backgroundImage: "url('/homePage.jpg')" }}
        />
  
        <h1 className="text-5xl font-normal text-white">Rigoberto</h1>
        <h1 className="text-8xl font-bold text-white">Lizaola</h1>
        <h1 className="text-3xl font-thin text-white">Full Stack Developer</h1>
      </section>
    );
  }
  