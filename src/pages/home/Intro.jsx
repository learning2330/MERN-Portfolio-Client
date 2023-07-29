import React from "react";

export default function Intro() {
  return (
    <div className="h-[86vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">Hi , I am </h1>
      <h1 className="text-9xl text-secondary font-semibold">Abid Hussain </h1>
      <h1 className="text-7xl text-white font-semibold">
        I am a Web Developer{" "}
      </h1>
      <p className="text-white w-2/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quaerat
        animi expedita a corporis, hic minus quisquam eius impedit?
        Exercitationem culpa fuga temporibus reiciendis a unde ut quos
        voluptates quas non voluptatibus, nobis dolorum debitis quae natus
        incidunt alias facilis?
      </p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
        Get Started
      </button>
    </div>
  );
}
