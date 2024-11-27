import React, { useState, useCallback } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { ToastContext, ToastOptions } from './toast-context';

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentToast, setCurrentToast] = useState<ToastOptions | null>(null);
  const [open, setOpen] = useState(false);

  const toast = useCallback((options: ToastOptions) => {
    setCurrentToast(options);
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const autoHideDuration =
    currentToast?.duration === null ? null : currentToast?.duration || 6000;

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway' || currentToast?.duration === null) {
      return;
    }
    close();
  };

  console.log(currentToast);

  return (
    <ToastContext.Provider value={{ toast, close }}>
      {children}
      {currentToast && (
        <Snackbar
          anchorOrigin={
            currentToast.position || {
              vertical: 'bottom',
              horizontal: 'right',
            }
          }
          open={open}
          autoHideDuration={autoHideDuration}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            icon={currentToast.icon}
            severity={currentToast.severity ?? 'info'}
            variant={currentToast.variant ?? 'outlined'}
            color={currentToast.color ?? 'info'}
            sx={{ width: '100%' }}
            action={currentToast.action}
          >
            {currentToast.message}
          </Alert>
        </Snackbar>
      )}
    </ToastContext.Provider>
  );
};
