import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

import {
  DatePicker as MuiDatePicker,
  DatePickerProps,
} from '@mui/x-date-pickers';

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  defaultValue?: string;
} & DatePickerProps<Date>;

export const DatePicker = <T extends FieldValues>({
  name,
  label,
  ...props
}: Props<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <MuiDatePicker label={label} {...field} {...props} />
      )}
    />
  );
};
