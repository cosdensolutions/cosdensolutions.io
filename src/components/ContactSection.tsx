import ContactForm from '@/components/ContactForm';

export default function ContactSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-12">
      <div className="w-full text-center md:mx-auto md:w-[50%]">
        <h2 className="text-d2 mb-4 font-bold">Contact Us</h2>
        <p className="text-secondary-500 text-s2 mx-auto max-w-[70%]">
          If you have any questions or comments, feel free to reach out to us.
          We are always happy to help and will get back to you as soon as
          possible
        </p>
      </div>
      <div className="w-full md:mx-auto md:w-[50%]">
        <ContactForm />
      </div>
    </section>
  );
}
