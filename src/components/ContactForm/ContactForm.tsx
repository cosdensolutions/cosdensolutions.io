'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Input, Textarea } from '@/components/ui';

import { sendContactEmail } from './actions';

const contactFormSchema = z.object({
  email: z
    .string()
    .trim()
    .pipe(
      z
        .string()
        .min(1, { message: 'Email is required' })
        .email({ message: 'Invalid email address' }),
    ),
  message: z.string().min(1, { message: 'Message is required' }),
});

type FormFields = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setError,
  } = useForm<FormFields>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async data => {
    try {
      await sendContactEmail(data);
    } catch {
      setError('root', {
        message: 'Something went wrong, please try again later.',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <Input {...register('email')} placeholder="Email" />
        {errors.email && (
          <p className="mt-2 text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Textarea {...register('message')} placeholder="Message" />
        {errors.message && (
          <p className="text-red-500 ">{errors.message.message}</p>
        )}
      </div>

      <Button disabled={isSubmitting || isSubmitSuccessful} type="submit">
        Submit
      </Button>
      {errors.root && <p className="text-red-500 ">{errors.root.message}</p>}
      {isSubmitSuccessful && (
        <p className="mb-0 mt-2 text-center text-green-500 md:text-lg">
          Your message has been sent successfully!
        </p>
      )}
    </form>
  );
}
