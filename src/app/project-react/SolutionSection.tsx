import Image from 'next/image';

export default function SolutionSection() {
  return (
    <section>
      <h2>A better way to learn React ✅</h2>
      <p>What if I told you that there was a better way to learn React?</p>
      <p>
        A way that would teach you beyond a simple todo app and that would
        actually show you what a real React project looks like?
      </p>
      <p>
        What if you could be confident in your abilities and be able to
        meaningfully contribute to any React project that you work on?
      </p>
      <p>
        I'm happy to say that today, there finally is.{' '}
        <span className="font-semibold text-primary">
          I just had to build it myself.
        </span>
      </p>
      <h3 className="mb-4">When all else fails, build it yourself</h3>
      <p>
        Since what was available out there wasn't enough, I took it upon myself
        to build the ultimate React course. A course that would be the only
        resource you need to take you from zero to hero in React.
      </p>
      <p>
        I built{' '}
        <span className="font-semibold text-primary">Project React</span>, which
        teaches you React by building a real-world project. Unlike tutorials, it
        will actually show you what it takes to build a big and complex
        application with React, just like you would see in the real world.
      </p>
      <p>
        You will learn everything from the basics to how to implement complex
        features like navigation, data fetching, forms, authentication, and you
        will learn how all of the different pieces fit together in a big
        project.
      </p>
      <p></p>
      <p className="font-semibold text-primary">
        This course would've saved me from feeling like an imposter.
      </p>
      <p>
        It's unfortunately too late for me to learn React through this course.{' '}
      </p>
      <p>But for you, this is just the beginning.</p>
      <Image
        className="mt-8 w-full rounded-lg border"
        src="/project-react-lp-project-files.jpg"
        width={1000}
        height={600}
        alt='Project React course overview "The correct way to learn React" section image'
      />
      <p className="mt-2 text-center text-sm">
        Some of the files you will be working with in the project
      </p>
    </section>
  );
}
