import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

import {
  DateTimePicker as MuiDateTimePicker,
  DateTimePickerProps,
} from '@mui/x-date-pickers';

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  defaultValue?: string;
} & DateTimePickerProps<Date>;

export const DateTimePicker = <T extends FieldValues>({
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
        <MuiDateTimePicker label={label} {...field} {...props} />
      )}
    />
  );
};
