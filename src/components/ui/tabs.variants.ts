import { cva, type VariantProps } from 'class-variance-authority';

const TABS_LIST_VARIANTS = cva(
  'rounded-lg p-[3px] group-data-[orientation=horizontal]/tabs:h-9 data-[variant=line]:rounded-none group/tabs-list text-muted-foreground inline-flex w-fit items-center justify-center group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col',
  {
    variants: {
      variant: {
        default: 'bg-muted',
        line: 'gap-1 bg-transparent'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

type TabsListVariantsProps = VariantProps<typeof TABS_LIST_VARIANTS>;

export { TABS_LIST_VARIANTS, type TabsListVariantsProps };
