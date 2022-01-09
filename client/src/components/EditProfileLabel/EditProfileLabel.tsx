import { InputLabel, Typography } from '@mui/material';
import useStyles from './useStyles';
interface Props {
  id: string;
  label: string;
}

const EditProfileLabel = ({ id, label }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <InputLabel htmlFor={id} classes={{ root: classes.label }}>
      <Typography fontSize={13} fontWeight={700} className={classes.labelText}>
        {label}
      </Typography>
    </InputLabel>
  );
};

export default EditProfileLabel;
