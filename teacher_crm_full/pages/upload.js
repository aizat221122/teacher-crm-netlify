export default function Upload() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Загрузка материала</h1>
      <select><option>Математика</option><option>История</option></select><br /><br />
      <input placeholder="Дата" /><br /><br />
      <input placeholder="Выберите файл" /><br /><br />
      <button>Загрузить</button>
    </div>
  );
}
