import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

import {
  FormControlLabel,
  Switch as MuiSwitch,
  SwitchProps,
} from '@mui/material';

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
} & SwitchProps;

export const Switch = <T extends FieldValues>({
  name,
  label,
  ...props
}: Props<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={<MuiSwitch {...field} checked={field.value} {...props} />}
          label={label}
        />
      )}
    />
  );
};
