import { Slot } from 'radix-ui';
import * as React from 'react';

import { Cn } from '@/utils';

import { BADGE_VARIANTS, type BadgeVariantsProps } from './badge.variants';

function Badge({
  className,
  variant = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'span'> & BadgeVariantsProps & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : 'span';

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={Cn(BADGE_VARIANTS({ variant }), className)}
      {...props}
    />
  );
}

export { Badge };
