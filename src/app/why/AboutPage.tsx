/* eslint-disable react/no-unescaped-entities */

import Container from "@/components/Container";
import Link from "next/link";

const AboutPage: React.FC = () => {
  return (
    <>
      <Container>
        <h1 className="my-8 text-6xl font-bold text-amber-500">Why Hire Me?</h1>
      </Container>

      <div className="my-4 border-y-4 border-amber-500 bg-orange-100 p-8">
        <Container>
          <div className="flex items-center justify-between">
            <div className="mx-4 flex grow basis-0 flex-col items-center rounded-xl bg-white py-8">
              <p className="pb-4 text-8xl">👨‍💻</p>
              <p className="text-2xl">Software Engineer</p>
            </div>
            <p className="pb-4 text-4xl">+</p>
            <div className="mx-4 flex grow basis-0 flex-col items-center rounded-xl bg-white py-8">
              <p className="pb-4 text-8xl">✍️</p>
              <p className="text-2xl">Writer</p>
            </div>
            <p className="pb-4 text-4xl">+</p>
            <div className="mx-4 flex grow basis-0 flex-col items-center rounded-xl bg-white py-8">
              <p className="pb-4 text-8xl">❤️</p>
              <p className="text-2xl">People Person</p>
            </div>
            <p className="pb-4 text-4xl">=</p>
            <div className="mx-4 flex grow basis-0 flex-col items-center rounded-xl bg-white py-8">
              <p className="pb-4 text-8xl">🥑</p>
              <p className="text-2xl">Developer Advocate</p>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex flex-col items-center">
          <div className="mt-4 mb-40 flex justify-between">
            <div className="my-4 mx-10">
              <h2 className="mb-4 text-center text-4xl text-amber-500">
                Software Engineer
              </h2>
              <p className="text-lg">
                With six years of professional experience as a full-stack
                software engineer, I'm well-versed in the language of code and
                the art of problem-solving. My time at SpaceX reinforced my
                ability to thrive in the most demanding engineering
                environments, proving my capacity to excel in hardcore
                engineering teams. Adapting to diverse industries throughout my
                career has sharpened my skill of quickly embracing new
                technologies and paradigms. As a Developer Advocate, I bring
                this technical depth to understand and address the unique
                challenges faced by developers.
              </p>
            </div>
            <div className="my-4 mx-10">
              <h2 className="mb-4 text-center text-4xl text-amber-500">
                Writer
              </h2>
              <p className="text-lg">
                My creative writing degree, coupled with my early-career
                experience in web copywriting and my continuous passion for
                personal writing, converge to make me a versatile and adept
                communicator. Whether it's crafting technical documentation,
                blog posts, or any form of content, I bring a dedication to
                clarity and precision in language. I embrace the art of
                storytelling as a powerful means to connect with audiences, and
                I'm equally comfortable weaving narratives in code or prose.
              </p>
            </div>
            <div className="my-4 mx-10">
              <h2 className="mb-4 text-center text-4xl text-amber-500">
                People Person
              </h2>
              <p className="text-lg">
                My compassion for others drives my commitment to improving
                developer experiences. Having navigated jobs and tools with
                subpar developer experiences, I'm inspired to use those
                experiences as lessons to enhance the lives of developers
                everywhere. I recognize that the most effective way to be heard
                and drive change is by meeting people where they are,
                understanding their needs, and collaborating to find solutions.
                As a Developer Advocate, I'm passionate about creating spaces
                where developers feel valued, understood, and empowered.
              </p>
            </div>
          </div>
          <Link href="/blog">
            <div className="w-fit rounded-full bg-amber-500 px-16 py-3 text-5xl text-white">
              See a writing sample ➡
            </div>
          </Link>
        </div>
      </Container>

      {/* <div className="mb-4 border-y-4 border-amber-500 bg-orange-100 p-8">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="mb-4 text-4xl text-amber-500">tl;dr</h2>
              <ul className="list-disc">
                <li>
                  Eight years of professional full stack software engineering
                  experience.
                </li>
                <li>
                  Worked in several industries, most recently aerospace with
                  SpaceX.
                </li>
                <li>Considering a pivot into developer advocacy.</li>
                <li>Communicator, constant learner, people person.</li>
                <li>Pretty nice guy.</li>
              </ul>
            </div>
            <Image
              src="/avatar.png"
              alt="Avatar of Matt Davis"
              width={300}
              height={300}
            ></Image>
          </div>
        </Container>
      </div> */}

      {/* <Container>
        <section>
          <h2 className="mb-4 text-4xl text-amber-500">My Journey</h2>
          <p className="mb-4">
            I've spent the last eight years as a full stack software engineer,
            working in gaming, fitness, and most recently aerospace. I've worked
            with all the popular web technologies, and some of the less popular
            ones. I've worked on tiny projects like in-house tooling for local
            small businesses and very large ones, like the Starlink.com
            platform, which currently supports nearly two million customers.
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
          <h2 className="mb-4 text-4xl text-amber-500">
            Why Developer Advocacy?
          </h2>
          <p className="mb-4">Tough question! Thanks for asking.</p>
          <p className="mb-4">
            SpaceX was my dream job. It's the reason I learned to code. Shortly
            after graduating in 2012, I was writing web content for a higher
            education lead generation company. I was unhappy with the work and
            my prospects. I started learning to code for fun
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-4xl text-amber-500">Why Render?</h2>
          <p className="mb-4">
            In short, I think the product is really cool! I've enjoyed making
            this site as a reason to experiment with Render's tooling. I've used
            Heroku for personal projects, and the larger cloud providers at work
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-4xl text-amber-500">Why Hire Me?</h2>
          <p className="mb-4">
            I believe I am uniquely positioned to fill this role. My engineering
            experience gives me insight into what real developers face in their
            daily work. I'm a solid communicator who is comfortable speaking in
            public a
          </p>
        </section>
      </Container> */}
    </>
  );
};

export default AboutPage;
