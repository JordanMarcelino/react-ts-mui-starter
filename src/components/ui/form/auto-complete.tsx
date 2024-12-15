import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps,
  TextField,
} from '@mui/material';
import { Option } from './option';

type Props<T extends FieldValues> = {
  name: Path<T>;
  options?: Option[];
  label: string;
} & Omit<
  AutocompleteProps<Option, false, false, false>,
  'renderInput' | 'options'
>;

export const Autocomplete = <T extends FieldValues>({
  name,
  options = [],
  label,
  ...props
}: Props<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
        <MuiAutocomplete
          options={options}
          value={options.find((option) => option.id === value) || null}
          getOptionLabel={(option) => option?.label ?? ''}
          isOptionEqualToValue={(option, val) => option.id === val?.id}
          onChange={(_, newValue) => {
            onChange(newValue ? newValue.id : null);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              inputRef={ref}
              error={!!error}
              helperText={error?.message}
              label={label}
            />
          )}
          {...props}
        />
      )}
    />
  );
};
