"use client"
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { logInUser } from '@/interfaces/user';
import { useForm, SubmitHandler } from 'react-hook-form';
import { redirect } from 'next/navigation';
import TextField from '@mui/material/TextField';
import style from './style.module.css';

const LoginForm = () => {
    const [isLoginUsingUsername, setLoginUsingUsername] = useState<boolean>(false);
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<logInUser>();

    const onSubmit: SubmitHandler<logInUser> = (data) => {
        console.log("login form data: ", data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card className={style.card}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className={style.text_center}>
                        Login
                    </Typography>
                    <Card className={`${style.card} ${style.input_card}`}>
                        {
                            isLoginUsingUsername ? <TextField
                                required
                                id="filled-basic-username"
                                {...register("username")}
                                label="Username"
                                variant="filled"
                                className={`${style.w_full}${style.pY}${style.mY}`}
                            />
                                :
                                <TextField
                                    required
                                    id="filled-basic-email"
                                    {...register("email")}
                                    label="Email"
                                    variant="filled"
                                    type='email'
                                    className={`${style.w_full}${style.pY}${style.mY}`}
                                />
                        }
                        <TextField
                            required
                            id="filled-basic-password"
                            {...register("password", { required: true })}
                            label="Password"
                            variant="filled"
                            type='password'
                            className={`${style.w_full}${style.pY}${style.mY}`}
                        />
                    </Card>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => { setLoginUsingUsername(!isLoginUsingUsername); }}>Login Using Username</Button>
                    <Button size="small" type='submit'>Login</Button>
                    <Button size="small" onClick={() => { redirect('/register') }}>Create Account</Button>
                </CardActions>
            </Card>
        </form>
    )
}

export default LoginForm;