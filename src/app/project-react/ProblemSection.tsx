import ImageLightbox from '@/components/ImageLightbox/ImageLightbox';

export default function ProblemSection() {
  return (
    <section className="mx-auto max-w-[1100px]">
      <h2>❌ Stop wasting time on tutorials</h2>
      <p>
        Tutorials might seem like a useful learning tool, but in reality they
        barely scratch the surface of what React is.
      </p>
      <p className="font-semibold text-primary">
        I don't know a single senior React developer who learnt through
        tutorials.
      </p>
      <p>
        The senior developers I know are senior because of experience, not
        because they can build a simple to-do app.
      </p>
      <h3 className="mb-4">Experience comes by building</h3>
      <p>To become a true senior React developer, you need to build.</p>
      <p>
        You need to build big and complex projects. Projects that solve
        difficult problems.
      </p>
      <p>
        The problem is,{' '}
        <span className="font-semibold text-primary">
          how do you do that when you're just starting out?
        </span>
      </p>
      <ImageLightbox
        className="mt-8 w-full rounded-lg border"
        src="/project-react-lp-tutorials.jpg"
        alt='Project React course overview "Learning React is hard" section image'
        width={1000}
        height={581}
      />
      <p className="mt-2 text-center text-sm md:text-lg">
        The typical React tutorials search results
      </p>
    </section>
  );
}
