export default function Login() {
    return (
      <div>
        <h1>Вход</h1>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Пароль" required />
          <button type="submit">Войти</button>
        </form>
      </div>
    );
  }
  