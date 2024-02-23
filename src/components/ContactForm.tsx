'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Input, Textarea } from '@/components/ui';

const contactFormSchema = z.object({
  name: z.string().trim().optional(),
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
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <Input {...register('name')} placeholder="Name" />
        {errors.name && (
          <p className="mt-2 text-red-500">{errors.name.message}</p>
        )}
      </div>

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

      <Button type="submit">Submit</Button>
    </form>
  );
}
