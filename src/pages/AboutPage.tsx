import Sidebar from "../components/Sidebar";

const AboutPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="p-5 text-text bg-primary flex flex-col justify-center text-lg md:text-xl">
        <h1 className="text-4xl md:text-6xl font-semibold mb-5">About Me</h1>
        <p className="mb-2">Hey, I’m Elo.</p>

        <p className="mb-2">
          This little corner of the web is where my thoughts come to overthink
          out loud. I'm a developer, student, feeler, builder, deep diver, and
          recovering perfectionist-depending on the day.
        </p>
        <p className="mb-2">
          <span className="italic">The world according to Elo</span> is exactly what it sounds like: my lens on
          life, code, faith, mental health, ideas that keep me up at night, and
          the quiet chaos of figuring things out.
        </p>

        <p className="mb-2">
          I love clean UIs, messy growth, and asking questions that don’t have
          one-line answers.
        </p>
        <p className="mb-2">
          So welcome. Stay as long as you like. 
        </p>
        <p>Because overthinking deserves a
          stage.</p>
      </div>
    </div>
  );
};

export default AboutPage;
