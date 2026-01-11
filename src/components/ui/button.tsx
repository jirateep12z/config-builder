import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';

import { Cn } from '@/utils';
import { BUTTON_VARIANTS } from './button.variants';

function Button({
  className,
  variant = 'default',
  size = 'default',
  as_child = false,
  ...props
}: ComponentProps<'button'> &
  VariantProps<typeof BUTTON_VARIANTS> & {
    as_child?: boolean;
  }) {
  const Comp = as_child ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={Cn(BUTTON_VARIANTS({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button };
