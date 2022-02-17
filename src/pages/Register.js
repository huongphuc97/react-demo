import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useForm, Controller } from "react-hook-form";

const Register = () => {
  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      userName: '',
      passWord: '',
      email: '',
    }
  });
  const onSubmit = () => {
    alert('Login Succesfully')
  }
  const validationMessage = { username: 'This field is required', passWord: 'This field is required', email: 'This field is required' }
  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              render={({ field }) =>
                <TextField
                  fullWidth
                  label="Username"
                  color="secondary"
                  {...field} />
              }
              name="userName"
              control={control}
              rules={{
                required: true
              }}
            />
            {errors.userName?.type === 'required' && validationMessage.username}
          </Grid>
          <Grid item xs={12}>
            <Controller
              control={control}
              name="passWord"
              rules={{
                maxLength: 20,
                required: true
              }}
              render={({ field }) => <TextField
                fullWidth
                type="password"
                label="Password"
                color="secondary"
                {...field} />}
            />
            {errors.passWord?.type === 'required' && validationMessage.passWord}



          </Grid>
          <Grid item xs={12}>
            <Controller
              control={control}
              rules={{
                maxLength: 30,
                required: true
              }}
              name="email"
              render={({ field }) => <TextField
                fullWidth
                type="email"
                label="Email"
                color="secondary"
                {...field} />}
            />
            {errors.email?.type === 'required' && validationMessage.email}

          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="secondary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="#" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Register;
