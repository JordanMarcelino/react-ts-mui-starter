import { Link as RouterLink, LinkProps } from 'react-router-dom';

import { cn } from '@/lib/cn';

export const Link: React.FC<LinkProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <RouterLink
      className={cn('text-slate-600 hover:text-slate-900', className)}
      {...props}
    >
      {children}
    </RouterLink>
  );
};
