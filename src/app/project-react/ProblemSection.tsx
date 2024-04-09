import Image from 'next/image';

export default function ProblemSection() {
  return (
    <section>
      <h2>Let's face it, learning React is hard 🙁</h2>
      <p>
        When I got my first React developer job over 8 years ago,{' '}
        <span className="font-semibold text-primary">I was so excited</span>.
      </p>
      <p>
        I had spent the few months prior learning React on my own, watching
        simple tutorials and whatever else I could find by searching online.
      </p>
      <p>
        On my first day, I was given access to the codebase and then told to
        look through it and start getting familiar with it.
      </p>
      <p>
        But when I opened up the code,{' '}
        <span className="font-semibold text-primary">
          I was completely shocked
        </span>
        . This was nothing like I had ever seen before.
      </p>
      <p>
        The codebase was big, confusing, and I couldn't understand most of it.
        Panicking, I spent hours opening file after file trying to find
        something that I had seen before but I found nothing.
      </p>
      <h3 className="mb-4">What happened?</h3>
      <p>
        I now realize that I had fallen into a trap. I naively thought that
        watching tutorials and building simple todo apps was enough to teach me
        React. It's not.
      </p>
      <p>
        Watching tutorials made me feel like I was making progress, but in
        reality, I was just running in circles doing the same things over and
        over again.
      </p>
      <p>
        For the next few years,{' '}
        <span className="font-semibold text-primary">
          I felt like an imposter.
        </span>
      </p>
      <p>
        Every job I got or project I worked on intimidated me. I never felt
        confident to be able to contribute or to voice my opinions. And
        honestly, that totally sucked.
      </p>
      <Image
        className="mt-8 w-full rounded-lg border"
        src="/project-react-lp-tutorials.jpg"
        width={1000}
        height={600}
        alt='Project React course overview "Learning React is hard" section image'
      />
      <p className="mt-2 text-center text-sm md:text-lg">
        Tutorials promise a lot, but often don't deliver
      </p>
    </section>
  );
}
