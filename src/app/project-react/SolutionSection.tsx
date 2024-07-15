import ImageLightbox from '@/components/ImageLightbox/ImageLightbox';

export default function SolutionSection() {
  return (
    <section>
      <h2>🛠️ Project React will teach you how to build</h2>
      <p>What if I told you that there was a better way to learn React?</p>
      <p>
        What if you had a mentor who would guide you through building a
        real-world project with step-by-step instructions?
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
      <p>
        As of today, you no longer have to imagine anything. You can start
        building today.
      </p>
      <p>
        Project React is going to walk you through step-by-step on how to build
        a big and complex application with React.
      </p>
      <p className="font-semibold text-primary">
        I spent months building it so that you could have the best possible
        learning experience.
      </p>
      <p>
        It is efficient, effective, and will help you more than any tutorial
        ever could.
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
