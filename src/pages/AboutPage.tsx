import Layout from "../components/Layout";
import ContentWrapper from "../components/ContentWrapper";

const AboutPage = () => {
  return (
    <Layout>
      <ContentWrapper title="About Me" showBackButton>
        <p className="mb-2">Hey, I’m Elo.</p>

        <p className="mb-2">
          This little corner of the web is where my thoughts come to overthink
          out loud. I'm a developer, student, feeler, builder, deep diver, and
          recovering perfectionist-depending on the day.
        </p>
        <p className="mb-2">
          <span className="italic">The world according to Elo</span> is exactly
          what it sounds like: my lens on life, code, faith, mental health,
          ideas that keep me up at night, and the quiet chaos of figuring things
          out.
        </p>

        <p className="mb-2">
          I love clean UIs, messy growth, and asking questions that don’t have
          one-line answers.
        </p>
        <p className="mb-2">So welcome. Stay as long as you like.</p>
        <p>Because overthinking deserves a stage.</p>
      </ContentWrapper>
    </Layout>
  );
};

export default AboutPage;
