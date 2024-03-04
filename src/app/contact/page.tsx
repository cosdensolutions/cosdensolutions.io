import ContactForm from '@/components/ContactForm/ContactForm';

export default function ContactPage() {
  return (
    <main>
      <section className="mt-4 md:mt-12">
        <div className="mb-6 w-full space-y-4 text-center md:mx-auto md:w-[50%]">
          <h1 className="font-bold">Contact Us</h1>
          <p className="mx-auto max-w-[70%] text-muted-foreground md:text-lg">
            If you have any questions or comments, feel free to reach out to us.
            We are always happy to help and will get back to you as soon as
            possible
          </p>
        </div>
        <div className="w-full md:mx-auto md:w-[50%]">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
