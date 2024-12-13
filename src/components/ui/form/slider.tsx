import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

import { Slider as MuiSlider, SliderProps, Typography } from '@mui/material';

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
} & SliderProps;

export const Slider = <T extends FieldValues>({ name, label }: Props<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <Typography>{label}</Typography>
          <MuiSlider valueLabelDisplay="auto" {...field} />
        </>
      )}
    />
  );
};
