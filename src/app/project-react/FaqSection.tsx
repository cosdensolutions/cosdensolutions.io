import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui';
import { cn } from '@/lib/utils';

type FaqSectionProps = {
  className?: string;
};

export default function FaqSection({ className }: FaqSectionProps) {
  const questions = [
    {
      question: 'Is this course right for me?',
      answer:
        'The course is built for developers who want to learn React and see how it looks like in the real world. It is beginner-friendly, but also teaches some more advanced concepts in the later modules. It is designed for anyone who wants to be able to confidently build a big project with React.',
    },
    {
      question: 'Are there any prerequisites to this course?',
      answer:
        'The only prerequisites are a basic understanding of HTML, CSS, and JavaScript. No prior knowledge of React is required.',
    },
    {
      question: 'Does the course use TypeScript?',
      answer:
        'Nope, it uses JavaScript. This was done to make this course as accessible as possible to everyone.',
    },
    {
      question: 'How is this course different from other courses?',
      answer:
        'Simple as this: custom application. On top of the traditional course material you get, the custom application walks you through step-by-step with instructions on how to build a big project. It has all of the code and building blocks necessary and it makes building a project really trivial.',
    },
    {
      question: 'How is the course any different than your YouTube videos?',
      answer:
        'Unlike my YouTube videos, this will show you everything that you need to know to be able to take a project from inception to completion. It will go much more in-depth, streamline the entire process, and cover more topics.',
    },
    {
      question: 'How long will it take to complete the course?',
      answer:
        'This course is self-paced, so the time you spend on it depends entirely on you. You could speed through it in a couple of weeks but to thoroughly learn everything, I suggest taking your time to study the code, even after finishing the course.',
    },
    {
      question: 'Is there an online community for this course?',
      answer:
        'Yes! We have a course-exclusive Discord community, where you will find people who already took the course, people who are currently taking the course, and me – Darius, who designed the course. You will be given a link to join after you enroll in the course.',
    },
    {
      question: 'Is there a completion certificate?',
      answer:
        'Yes. After you complete the course, you will receive a completion certificate.',
    },
    {
      question: 'What is Project React Extended?',
      answer:
        'The extended version an extension to the course that adds a ton of new features to the project and improves it with more advanced patterns. It is going to be released as a part 2 of this course and included at no extra cost. We’ll notify you once that happens.',
    },
    {
      question: 'I have a question not listed here!',
      answer:
        'Feel free to reach out to us at contact@cosdensolutions.io with any additional questions or concerns you may have.',
    },
  ];

  return (
    <section className={cn(className)}>
      <h2>Frequently Asked Questions</h2>
      <Accordion type="single" collapsible>
        {questions.map((question, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{question.question}</AccordionTrigger>
            <AccordionContent>{question.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
