import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import {
  Autocomplete,
  AutocompleteProps,
  TextField,
  Checkbox,
  Box,
} from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Option } from './option';

type Props<T extends FieldValues> = {
  name: Path<T>;
  options?: Option[];
  label: string;
} & Omit<
  AutocompleteProps<Option, true, false, false>,
  'renderInput' | 'options'
>;

export const MultiAutocomplete = <T extends FieldValues>({
  name,
  options = [],
  label,
  ...props
}: Props<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
        <Autocomplete
          multiple
          options={options}
          value={options.filter((option) =>
            Array.isArray(value) ? value.includes(option.id) : false,
          )}
          getOptionLabel={(option) => option.label}
          isOptionEqualToValue={(option, val) => option.id === val.id}
          onChange={(_, newValue) => {
            onChange(newValue.map((item) => item.id));
          }}
          disableCloseOnSelect
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
          renderOption={(props, option, { selected }) => (
            <Box component="li" {...props}>
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                checked={selected}
              />
              {option.label}
            </Box>
          )}
          {...props}
        />
      )}
    />
  );
};
