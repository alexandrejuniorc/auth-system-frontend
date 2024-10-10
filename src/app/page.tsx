import { LoginForm } from "@/components/login-form";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-blue-900 flex items-center justify-center">
        <Image
          src="https://placehold.co/300x100"
          alt="Whirlpool Corporation Logo"
          className="w-64"
          width={256}
          height={256}
        />
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h1 className="text-2xl font-bold mb-2">Login</h1>
          <h2 className="text-gray-600 mb-6">Portal de Clientes</h2>

          <LoginForm />

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Não possui acesso?
              <Link href="/signup" className="text-blue-600">
                Cadastre-se!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
