import ImageLightbox from '@/components/ImageLightbox/ImageLightbox';

export default function SolutionSection() {
  return (
    <section>
      <h2>✅ Build through a custom application</h2>
      <p>What if I told you that there was a better way to learn React?</p>
      <p>
        What if I gave you a custom application that had step-by-step
        instructions on how to build a real project, with all of the building
        blocks ready for you to use?
      </p>
      <p className="font-semibold text-primary">
        What if you could build a complex React application as a total beginner?
      </p>
      <p>
        Imagine having all the steps laid out in front of you, all of your
        questions answered, and a clear path to building the project.
      </p>
      <h3 className="mb-4">
        Introducing{' '}
        <span className="font-semibold text-primary">Project React</span>
      </h3>
      <p>As of today, you no longer have to imagine anything.</p>
      <p>That custom application exists, and you can have it right now.</p>
      <p className="font-semibold text-primary">
        I spent months building it so that you could have the best possible
        learning experience.
      </p>
      <p>
        It contains everything that you could possible need to build a real
        React project.
      </p>
      <ImageLightbox
        className="mt-8 w-full rounded-lg border"
        src="/project-react-lp-project-steps.jpg"
        width={1000}
        height={581}
        alt='Project React course overview "The correct way to learn React" section image'
      />
      <p className="mt-2 text-center text-sm md:text-lg">
        All of the steps you'll be guided through in the project
      </p>
    </section>
  );
}
