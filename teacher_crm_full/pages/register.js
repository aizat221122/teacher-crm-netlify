import { useState } from 'react';

export default function Register() {
  const [role, setRole] = useState('Учитель');
  return (
    <div style={{ padding: 20 }}>
      <h1>Регистрация</h1>
      <input placeholder="Email" /><br /><br />
      <input placeholder="Пароль" type="password" /><br /><br />
      <label>Роль:</label><br />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option>Админ</option>
        <option>Учитель</option>
        <option>Ученик</option>
      </select><br /><br />
      <button>Зарегистрироваться</button>
    </div>
  );
}
