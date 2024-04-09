type QuoteSectionProps = {
  quote: {
    author: string;
    text: string;
  };
};

export default function QuoteSection({ quote }: QuoteSectionProps) {
  return (
    <section className="text-center">
      <p className="text-4xl font-bold text-primary md:text-4xl">
        "{quote.text}"
      </p>
      <p>{quote.author}</p>
    </section>
  );
}
