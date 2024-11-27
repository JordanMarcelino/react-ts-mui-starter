import { createContext } from 'react';

export interface ToastOptions {
  message: string;
  icon?: React.ReactNode;
  severity?: 'success' | 'error' | 'warning' | 'info';
  variant?: 'standard' | 'filled' | 'outlined';
  color?: 'success' | 'info' | 'warning' | 'error';
  duration?: number;
  action?: React.ReactNode;
  position?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
}

interface ToastContextType {
  toast: (options: ToastOptions) => void;
  close: () => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined,
);
