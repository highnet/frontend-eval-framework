import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const wienerMelangeButtonExampleVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-lg transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-2 hover:border-2",
  {
    variants: {
      variant: {
        default: '',
      },
      size: {
        default: 'px-4 py-2 font-bold ',
      },
      tone: {
        default: 'bg-[#4B4B83] text-white hover:bg-transparent hover:text-[#4B4B83] border-[#4B4B83] hover:border-[#4B4B83]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      tone: 'default',
    },
  }
);

export interface WienerMelangeButtonExampleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof wienerMelangeButtonExampleVariants> {
  asChild?: boolean;
}

const WienerMelangeButtonExample: React.FC<WienerMelangeButtonExampleProps> = ({
  className,
  variant = 'default',
  size = 'default',
  tone = 'default',
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(wienerMelangeButtonExampleVariants({ variant, size, tone }), className)}
      {...props}
    >
        Wiener Melange Button
    </Comp>
  );
};

export { WienerMelangeButtonExample, wienerMelangeButtonExampleVariants };