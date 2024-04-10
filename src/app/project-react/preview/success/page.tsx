export default async function ProjectReactPreviewSuccess() {
  return (
    <main>
      <section className="mb-8 space-y-8 text-center md:mx-auto md:mb-24 md:max-w-[70%]">
        <div className="mt-6 flex flex-col items-center justify-center gap-4 text-center md:mt-24">
          <h1 className="text-5xl font-bold md:text-7xl">Preview Sent!</h1>
          <p className="text-muted-foreground md:text-xl">
            Welcome to the{' '}
            <span className="font-semibold text-primary">Project React</span>{' '}
            preview.
          </p>
          <p className="text-muted-foreground md:text-lg">
            We sent you an email with instructions on how to access the course
            preview.
            <br />
            If you didn't receive it, please contact us at{' '}
            <a
              href="mailto:contact@cosdensolutions.io"
              className="text-primary hover:underline"
            >
              contact@cosdensolutions.io
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
