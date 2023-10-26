/* eslint-disable react/no-unescaped-entities */

const AboutPage: React.FC = () => {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold text-amber-500">About Me</h1>

      <div className="bg-amber-500 p-8">
        <h2 className="mb-4 text-3xl font-bold text-amber-50">Highlights</h2>
        <ul className="list-disc">
          <li>
            Eight years of professional full stack software engineering
            experience.
          </li>
          <li>
            Worked in several industries, most recently aerospace with SpaceX.
          </li>
          <li>Considering a pivot into developer advocacy.</li>
          <li>Communicator, constant learner, people person.</li>
          <li>Pretty nice guy.</li>
        </ul>
      </div>

      <section>
        <h2 className="mb-4 text-3xl text-amber-500">My Journey</h2>
        <p className="mb-4">
          I've spent the last eight years as a full stack software engineer,
          working in gaming, fitness, and most recently aerospace. I've worked
          with all the popular web technologies, and some of the less popular
          ones. I've worked on tiny projects like in-house tooling for local
          small businesses and very large ones, like the Starlink.com platform,
          which currently supports nearly two million customers.
        </p>
        <p className="mb-4">
          Throughout my career, I've prided myself on my communication skills.
          Given my background, I feel uniquely positioned for inter-team
          communication.
        </p>
        <p className="mb-4">
          I have a non-technical background -- my undergraduate degree is in
          creative writing -- so I'm self-taught. I'm proud of the work I've
          done to build my career, but I've spent most of it worrying that my
          lack of formal education would hold me back.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-3xl text-amber-500">
          Why Developer Advocacy?
        </h2>
        <p className="mb-4">Tough question! Thanks for asking.</p>
        <p className="mb-4">
          SpaceX was my dream job. It's the reason I learned to code. Shortly
          after graduating in 2012, I was writing web content for a higher
          education lead generation company. I was unhappy with the work and my
          prospects. I started learning to code for fun
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-3xl text-amber-500">Why Render?</h2>
        <p className="mb-4">
          In short, I think the product is really cool! I've enjoyed making this
          site as a reason to experiment with Render's tooling. I've used Heroku
          for personal projects, and the larger cloud providers at work
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-3xl text-amber-500">Why Hire Me?</h2>
        <p className="mb-4">
          I believe I am uniquely positioned to fill this role. My engineering
          experience gives me insight into what real developers face in their
          daily work. I'm a solid communicator who is comfortable speaking in
          public a
        </p>
      </section>
    </>
  );
};

export default AboutPage;
