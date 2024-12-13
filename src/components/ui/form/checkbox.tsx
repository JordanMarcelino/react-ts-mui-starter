import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

import {
  Checkbox as MuiCheckbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
} from '@mui/material';

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
} & CheckboxProps;

export const Checkbox = <T extends FieldValues>({
  name,
  label,
  ...props
}: Props<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl error={!!error}>
          <FormGroup>
            <FormControlLabel
              control={
                <MuiCheckbox
                  {...props}
                  checked={field.value || false}
                  onChange={(e) => {
                    field.onChange(e.target.checked);
                  }}
                  name={field.name}
                  inputRef={field.ref}
                />
              }
              label={label}
            />
          </FormGroup>
          <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};
