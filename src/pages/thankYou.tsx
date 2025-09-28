import Link from "next/link"

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-black text-white">

      <div className="w-screen h-screen flex flex-col gap-28 justify-center items-center bg-black ">
        <h1 className="relative w-full text-8xl md:text-8xl xl:text-9xl tracking-[10px] sm:tracking-[17px] text-center leading-[0.70em] outline-none animate-dimlight box-reflect">
            Thanks!
        </h1>

        <h2>
            The from was sumbitted successfully.
        </h2>

        <Link href="/#contact" className="underline text-blue-500 hover:text-blue-700 transition">
          Go back
        </Link>

      </div>
    </div>
  );
}
