import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Unlock Creativity with
        <br className="max-md:hidden" />
        <span className="custom_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Introducing PromptGenius: Your Ultimate Prompting Companion.
        PromptGenius, the innovative AI-powered prompting tool, is your key to
        unlocking creativity in the digital age.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
