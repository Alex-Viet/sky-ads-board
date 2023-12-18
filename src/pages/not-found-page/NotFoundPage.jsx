import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '200px',
  };

  return (
    <div style={styles}>
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p style={{ marginTop: '20px' }}>
        Вернуться на <Link to="/">Главную</Link>
      </p>
    </div>
  );
};
