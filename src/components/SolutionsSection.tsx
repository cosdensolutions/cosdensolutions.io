type SolutionsSectionProps = {
  className?: string;
};

export default function SolutionsSection({ className }: SolutionsSectionProps) {
  const solutions = [
    {
      title: 'Videos',
      description:
        'Learn React through our free YouTube videos. We cover a wide range of topics such as tutorials, code reviews, best practices, and much more.',
    },
    {
      title: 'Courses',
      description:
        "Take one of our React courses to learn React in a structured way. Our courses involve building real-world applications in a way that's easy to follow.",
    },
    {
      title: 'Consulting',
      description:
        'We offer consulting services to help you with your React projects. We can help you with code reviews, refactoring suggestions, project architecture, and more.',
    },
    {
      title: 'Discord',
      description:
        'Join our Discord community to learn React with others. Our community is a great place to ask questions, get help, and meet other React developers.',
    },
  ];

  return (
    <section className={className}>
      <h2 className="text-d2 mb-4 text-center font-bold">Perfect Solutions</h2>
      <p className="text-secondary-500 text-s2 mx-auto mb-16 max-w-[50%] text-center">
        Become a professional React developer through our various solutions.
      </p>
      <div className="flex flex-row justify-between gap-8">
        {solutions.map((solution, index) => (
          <div key={index} className="w-[320px]">
            <h3 className="text-h3 mb-2 font-semibold">{solution.title}</h3>
            <p className="text-s2 text-grayscale-400">{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
