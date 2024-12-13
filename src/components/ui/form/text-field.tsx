import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

import { TextField as MuiTextField, TextFieldProps } from '@mui/material';

type Props<T extends FieldValues> = {
  name: Path<T>;
} & TextFieldProps;

export const TextField = <T extends FieldValues>({
  name,
  ...props
}: Props<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <MuiTextField
          {...field}
          {...props}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};
