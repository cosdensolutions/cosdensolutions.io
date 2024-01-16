'use client';

import { ComponentPropsWithRef, forwardRef, Ref } from 'react';

type TextareaProps = ComponentPropsWithRef<'textarea'>;

function Textarea(props: TextareaProps, ref: Ref<HTMLTextAreaElement>) {
  return (
    <textarea
      ref={ref}
      className="border-grayscale-700 bg-grayscale-800 focus:border-primary-500 max-h-[500px] w-full appearance-none rounded-lg border-2 px-3 py-2 leading-tight focus:outline-none"
      {...props}
    />
  );
}

export default forwardRef(Textarea);
