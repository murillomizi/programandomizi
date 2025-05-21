import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";  // Ajuste o caminho conforme o seu projeto

const LoginForm: React.FC = () => {
  const { entrar } = useAuth();  // pega a função de login
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setCarregando(true);
    setErro(null);

    const { error } = await entrar(email, senha);

    if (error) {
      setErro("Email ou senha incorretos.");
    }

    setCarregando(false);
  };

  return (
    <form onSubmit={handleLogin} className="max-w-sm mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>

      {erro && <div className="text-red-500 mb-2">{erro}</div>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        required
      />

      <button
        type="submit"
        disabled={carregando}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {carregando ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
};

export default LoginForm;
