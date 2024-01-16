'use client';

import { ComponentPropsWithRef, forwardRef, Ref } from 'react';

type InputProps = ComponentPropsWithRef<'input'>;

function Input(props: InputProps, ref: Ref<HTMLInputElement>) {
  return (
    <input
      ref={ref}
      className="border-grayscale-700 bg-grayscale-800 focus:border-primary-500 w-full appearance-none rounded-lg border-2 px-3 py-2 leading-tight focus:outline-none"
      {...props}
    />
  );
}

export default forwardRef(Input);
