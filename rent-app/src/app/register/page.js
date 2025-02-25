export default function Register() {
    return (
      <div>
        <h1>Регистрация</h1>
        <form>
          <input type="text" placeholder="Имя" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Пароль" required />
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    );
  }
  