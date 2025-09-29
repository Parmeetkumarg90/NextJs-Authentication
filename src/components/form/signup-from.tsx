import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { signUpUser } from '@/interfaces/user';
import { useForm, SubmitHandler } from 'react-hook-form';
import { redirect } from 'next/navigation';
import TextField from '@mui/material/TextField';
import style from './style.module.css';

const SignUpForm = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<signUpUser>();

    const onSubmit: SubmitHandler<signUpUser> = (data) => {
        console.log("signup form data: ", data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card className={style.card}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className={style.text_center}>
                        Signup
                    </Typography>
                    <Card className={`${style.card} ${style.input_card}`}>
                        <TextField
                            required
                            id="filled-basic-username"
                            {...register("username")}
                            label="Username"
                            variant="filled"
                            className={`${style.w_full}${style.pY}${style.mY}`}
                        />
                        <TextField
                            required
                            id="filled-basic-email"
                            {...register("email")}
                            label="Email"
                            variant="filled"
                            type='email'
                            className={`${style.w_full}${style.pY}${style.mY}`}
                        />
                        <TextField
                            required
                            id="filled-basic-password"
                            {...register("password", { required: true })}
                            label="Password"
                            variant="filled"
                            type='password'
                            className={`${style.w_full}${style.pY}${style.mY}`}
                        />
                        <TextField
                            required
                            id="filled-basic-confirmPassword"
                            {...register("confirmPassword", { required: true })}
                            label="Confirm Password"
                            variant="filled"
                            type='password'
                            className={`${style.w_full}${style.pY}${style.mY}`}
                        />
                    </Card>
                </CardContent>
                <CardActions className={`${style.input_card}`}>
                    <Button size="small" className={`${style.border}`} type='submit'>Create</Button>
                    <Button size="small" className={`${style.border}`} onClick={() => { redirect('/') }}>Already have an account?</Button>
                </CardActions>
            </Card>
        </form>
    )
}

export default SignUpForm;