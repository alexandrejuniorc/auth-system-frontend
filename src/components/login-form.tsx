"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type Inputs = {
  email: string;
  password: string;
};

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    signIn("credentials", { callbackUrl: "/dashboard", ...data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <Label className="block text-gray-700">Email</Label>
        <Input
          {...register("email", { required: true })}
          type="email"
          placeholder="nome@mail.com"
          className="w-full px-3 py-2 border rounded-lg"
        />
        {errors.password && <span>This field is required</span>}
      </div>

      <div className="mb-4">
        <Label className="block text-gray-700">Senha</Label>
        <Input
          {...register("password", { required: true })}
          type="password"
          placeholder="Sua senha"
          className="w-full px-3 py-2 border rounded-lg"
        />
        {errors.password && <span>This field is required</span>}

        <a href="#" className="text-sm text-blue-600 float-right mt-1">
          Esqueci minha senha
        </a>
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-900 text-white py-2 rounded-lg"
      >
        ENTRAR
      </Button>

      <Button className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-lg flex items-center justify-center">
        Continuar com o Google
      </Button>
    </form>
  );
}
