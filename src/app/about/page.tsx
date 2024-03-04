import Image from 'next/image';

export default function AboutPage() {
  return (
    <main>
      <section className="mt-4 flex flex-col gap-8 md:mt-12 md:flex-row md:items-center md:justify-between md:gap-4">
        <div className="md:w-[50%]">
          <Image
            priority
            className="mx-auto w-[250px] rounded-full md:w-[500px]"
            src="/profile-photo.png"
            width={500}
            height={500}
            alt="Darius"
          />
        </div>
        <div className="md:w-[50%]">
          <p className="text-2xl font-semibold">Hey!</p>
          <p>
            My name is Darius and I'm the founder of{' '}
            <span className="text-primary">
              <span className="font-semibold">Cosden Solutions</span>
            </span>
            . I started this company in 2020 when I decided to set off on my own
            to do freelance developing for clients. This decision came about
            after having spent 4 years learning software development and
            applying what I had learnt to the small company I worked at.
          </p>
          <p>
            Within just a few months, I found myself building apps for different
            clients around the world. I got the opportunity to work in many
            different industries, continuously learning and developing my skills
            as I built more and more complex apps.
          </p>
          <p>
            Eventually I decided it was time to expand the company and make it
            about more than just building projects. In early 2023 I decided to
            start a YouTube channel dedicated to teaching developers React. The
            channel features tutorials, courses, and videos that help developers
            learn React and build their own projects.
          </p>
          <p>
            Since then, the YouTube channel has grown to millions of views and
            thousands of subscribers. The company has expanded to do more than
            just software development, and now offers courses, tutorials, and
            consulting services.
          </p>
          <p>
            It has been a difficult but very rewarding journey and I wake up
            everyday full of joy to be able to do what I do. I hope that I can
            share this joy with you, and help you become the developer you've
            always dreamt of.
          </p>
          <p>
            Best,
            <br />
            Darius
          </p>
        </div>
      </section>
    </main>
  );
}
