import { Link as RouterLink, LinkProps } from 'react-router-dom';

import { cn } from '@/lib/cn';

export const Link: React.FC<LinkProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <RouterLink className={cn(className)} {...props}>
      {children}
    </RouterLink>
  );
};
