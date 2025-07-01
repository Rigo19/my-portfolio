import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-black text-white py-20">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6">
        {/* Profile Pic */}
        <Image
          src="/aboutMeRigo.jpeg"
          alt="Rigoberto Lizaola profile picture"
          width={384}
          height={384}
          className="rounded-full object-cover shadow-lg"
        />

        {/* About Info */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4 underline decoration-blue-600">
            About Me
          </h1>
          <p className="text-lg">
            Recent graduate seeking full-time position in Austin, TX or surrounding areas. I&apos;m a full stack
            developer passionate about building clean, scalable, and user-friendly web applications. A strong advocate of
            self-growth, excited to showcase my journey and projects here.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <SocialLinks />
      </div>
    </section>
  );
}
