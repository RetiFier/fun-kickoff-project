import { InputLabel, TextField, Typography, Box } from '@mui/material';
import useStyles from './useStyles';
interface Props {
  id: string;
  label?: string;
  margin?: 'dense' | 'normal' | 'none';
  name?: string;
  autoComplete?: string;
  helperText?: React.ReactNode;
  error?: boolean;
  value?: string;
  placeholder: string;
  autoFocus?: boolean;
  multiline?: boolean;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: React.InputHTMLAttributes<unknown>['type'];
}

const CustomTextField = ({
  id,
  label,
  margin,
  name,
  autoComplete,
  helperText,
  error,
  value,
  onChange,
  type,
  autoFocus,
  placeholder,
  multiline,
  rows,
}: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box marginBottom={'5px'}>
      {label && (
        <InputLabel htmlFor={id} classes={{ root: classes.label }}>
          <Typography fontSize={10} fontWeight={800} className={classes.labelText}>
            {label}
          </Typography>
        </InputLabel>
      )}
      <TextField
        id={id}
        fullWidth
        InputProps={{
          classes: { input: classes.inputs },
        }}
        name={name}
        autoComplete={autoComplete}
        helperText={helperText}
        margin={margin}
        error={error}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoFocus={autoFocus}
        type={type}
        multiline={multiline}
        rows={rows}
      />
    </Box>
  );
};

export default CustomTextField;
