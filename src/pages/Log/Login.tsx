import "./Login.scss";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logAnimation } from "@/assets/img/personajes";

interface AuthResponse {
  email: string;
  primerNombre: string;
  rol: "ADMIN" | "CLIENTE";
  token: string;
}

interface RegisterFormProps {
  onToggleView: (isLogin: boolean) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onToggleView }) => {
  const [primerNombre, setPrimerNombre] = useState("");
  const [segundoNombre, setSegundoNombre] = useState("");
  const [primerApellido, setPrimerApellido] = useState("");
  const [segundoApellido, setSegundoApellido] = useState("");
  const [email, setEmail] = useState("");
  const [numeroCelular, setNumeroCelular] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [message, setMessage] = useState("");

  //URL del Back-end
  const API_URL = "http://localhost:8080/api/auth/register";

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Registrando usuario...");
    if (password !== confirmarContrasena) {
      setMessage("Error: Las contraseñas no coinciden.");
      return;
    }

    const userData = {
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      email,
      numeroCelular,
      password,
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        setMessage("¡Registro exitoso! Por favor, inicia sesión.");
        setTimeout(() => {
          onToggleView(true);
        }, 2000);
      } else {
        const errorText = await response.text();
        setMessage(`Fallo de registro: ${errorText}`);
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      setMessage("ERROR: No se pudo conectar al Back-end para registrar.");
    }
  };

  return (
    <div className="form-login-box w-[80%] h-[90] rounded-[30px] p-[5%]">
      <h2>Registro de Nuevo Cliente</h2>

      <form className="form-login-box-registro" onSubmit={handleRegisterSubmit}>
        <div className="grid grid-cols-2 gap-3">
          <div className="form-group">
            <label>Primer Nombre</label>
            <input
              type="text"
              value={primerNombre}
              onChange={(e) => setPrimerNombre(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Segundo Nombre</label>
            <input
              type="text"
              value={segundoNombre}
              onChange={(e) => setSegundoNombre(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="form-group">
            <label>Primer Apellido</label>
            <input
              type="text"
              value={primerApellido}
              onChange={(e) => setPrimerApellido(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Segundo Apellido</label>
            <input
              type="text"
              value={segundoApellido}
              onChange={(e) => setSegundoApellido(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Número de Celular</label>
          <input
            type="tel"
            value={numeroCelular}
            onChange={(e) => setNumeroCelular(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            value={confirmarContrasena}
            onChange={(e) => setConfirmarContrasena(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-button w-full p-[0.2rem] rounded-[5px] ">
          Crear Cuenta
        </button>
      </form>

      {message && <p className="status-message">{message}</p>}

      <p className="register-link">
        ¿Ya tienes cuenta?{" "}
        <span onClick={() => onToggleView(true)}>Inicia Sesión</span>
      </p>
    </div>
  );
};

const Login: React.FunctionComponent = () => {
  //Controla qué formulario se muestra
  const [isLoginView, setIsLoginView] = useState(true);
  //si Login es true
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const API_URL = "http://localhost:8080/api/auth/login";
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Procesando...");
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data: AuthResponse = await response.json();
        setMessage(`¡Inicio de sesión exitoso! Rol: ${data.rol}`);
        if (data.rol === "ADMIN") {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      } else {
        setMessage(`Fallo de conexión. Código: ${response.status}.`);
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      setMessage("ERROR: No se pudo conectar al Back-end.");
    }
  };

  const renderLoginForm = (
    <div className="form-login-box rounded-[30px] w-[70%] h-[60%] p-[5%]">
      <h2 className="">Iniciar Sesión Cliente</h2>
      <form
        className="form-login-box-entrada flex justify-center items-center flex-col"
        onSubmit={handleLoginSubmit}
      >
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="login-button w-full p-[0.2rem] rounded-[5px] "
        >
          Iniciar
        </button>
      </form>

      {message && <p className="status-message">{message}</p>}

      {/* ENLACE PARA ALTERNAR A REGISTRO */}
      <p className="register-link">
        ¿Aún no tienes cuenta?{" "}
        <span onClick={() => setIsLoginView(false)}>Regístrate aquí</span>
      </p>
    </div>
  );
  return (
    <div id="login-register-usuarios" className="login-page-container relative flex justify-center items-center min-h-screen p-[0rem1rem]">
      <div className="login-page-decoracion absolute w-full h-full rounded-br-[50%] rounded-tl-[50%]"></div>

      <div className="content-form w-[70%] h-[35rem] grid grid-cols-[40%60%] grid-rows-1 rounded-[30px] overflow-hidden">
        <div className=" visual-panel flex flex-col justify-center items-center p-[5%] ">
          <div className="visual-content absolute">
            <img src={logAnimation} alt="Imagen de Perrito" className="log-form-div-img" />
          </div>
        </div>
        <div className="content-form-login-registro flex justify-center items-center rounded-tl-[70px] rounded-bl-[70px] p-[5%]">
          {isLoginView ? (
            renderLoginForm
          ) : (
            <RegisterForm onToggleView={setIsLoginView} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
