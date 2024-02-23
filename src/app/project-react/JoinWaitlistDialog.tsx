'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
  Input,
} from '@/components/ui';

import { joinWaitlist } from './actions';

const joinWaitlistSchema = z.object({
  name: z.string().trim().min(1, { message: 'Name is required' }),
  email: z
    .string()
    .trim()
    .pipe(
      z
        .string()
        .min(1, { message: 'Email is required' })
        .email({ message: 'Invalid email address' }),
    ),
});

type JoinWaitlistFormFields = z.infer<typeof joinWaitlistSchema>;

export default function JoinWaitlistDialog() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    setError,
  } = useForm<JoinWaitlistFormFields>({
    resolver: zodResolver(joinWaitlistSchema),
  });

  const onSubmit: SubmitHandler<JoinWaitlistFormFields> = async data => {
    try {
      await joinWaitlist(data);
    } catch {
      setError('root', {
        message: 'Something went wrong, please try again later.',
      });
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      setTimeout(() => setIsOpen(false), 3000);
    }
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(reset, 300);
    }
  }, [isOpen, reset]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="xl">Join Waitlist</Button>
      </DialogTrigger>
      <DialogContent
        onOpenAutoFocus={e => e.preventDefault()}
        className="top-[40%] sm:max-w-[550px]"
      >
        <h3 className="text-center text-3xl">
          You are one step away from becoming a React developer
        </h3>
        <p className="mx-[5%] text-center text-muted-foreground">
          <span className="text-primary">Project React</span> will teach you
          everything that you need to be able to build big and complex
          applications in React.
        </p>
        <form
          className="flex flex-col items-center justify-center gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full">
            <Input {...register('name')} placeholder="Name" />
            {errors.name && (
              <p className="mb-0 mt-2 text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <Input {...register('email')} placeholder="Email Address" />
            {errors.email && (
              <p className="mb-0 mt-2 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            Join Waitlist
          </Button>
          {errors.root && (
            <p className="mb-0 mt-2 text-sm text-red-500">
              {errors.root.message}
            </p>
          )}
          {isSubmitSuccessful && (
            <p className="mb-0 mt-2 text-sm text-green-500">
              Success! Check your email 🎉
            </p>
          )}
        </form>
        <p className="text-center text-sm text-muted-foreground">
          Your information is 100% secure
        </p>
      </DialogContent>
    </Dialog>
  );
}
