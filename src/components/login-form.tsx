"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function LoginForm() {
  return (
    <form>
      <div className="mb-4">
        <Label className="block text-gray-700">Email</Label>
        <Input
          type="email"
          placeholder="nome@mail.com"
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>

      <div className="mb-4">
        <Label className="block text-gray-700">Senha</Label>
        <Input
          type="password"
          placeholder="Sua senha"
          className="w-full px-3 py-2 border rounded-lg"
        />
        <a href="#" className="text-sm text-blue-600 float-right mt-1">
          Esqueci minha senha
        </a>
      </div>

      <Button className="w-full bg-blue-900 text-white py-2 rounded-lg">
        ENTRAR
      </Button>

      <Button className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-lg flex items-center justify-center">
        Continuar com o Google
      </Button>
    </form>
  );
}
