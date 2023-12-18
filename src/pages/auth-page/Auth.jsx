import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useGetTokensMutation,
  useRegisterUserMutation,
} from '../../services/users';
import * as S from './Auth.styles';

export const Auth = () => {
  const isLogin = false;

  const navigate = useNavigate();

  const [registerUser] = useRegisterUserMutation();
  const [getTokens] = useGetTokensMutation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async (evt) => {
    evt.preventDefault();

    if (!email) {
      setError('Введите email');
      return;
    }

    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!pattern.test(email.toLowerCase())) {
      setError('Введите корректный email');
      return;
    }

    if (!password) {
      setError('Введите пароль');
      return;
    }

    if (password !== repeatPass) {
      setError('Пароли не совпадают');
      return;
    }

    try {
      await registerUser({
        email,
        password,
        name,
        surname,
        city,
        role: 'user',
      }).then((userData) => {
        if (userData.error?.status === 400) {
          setError('Пользователь с таким email уже существует');
          return;
        } else {
          getTokens({ email, password }).then((tokensData) => {
            localStorage.setItem('ads-board', JSON.stringify(tokensData.data));
          });

          navigate('/', { replace: true });
        }
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <S.AuthContainer>
      <S.Modal>
        <S.ModalLogo>
          <img src="/img/logo_modal.png" alt="logo" />
        </S.ModalLogo>
        <S.ModalForm>
          <S.ModalInput
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <S.ModalInput
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {!isLogin && (
            <>
              <S.ModalInput
                type="password"
                name="password-control"
                placeholder="Повторите пароль"
                value={repeatPass}
                onChange={(e) => setRepeatPass(e.target.value)}
                required
              />
              <S.ModalInput
                type="text"
                name="first-name"
                placeholder="Имя (необязательно)"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <S.ModalInput
                type="text"
                name="last-name"
                placeholder="Фамилия (необязательно)"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
              <S.ModalInput
                type="text"
                name="city"
                placeholder="Город (необязательно)"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </>
          )}
          {error && <p style={{ color: 'coral' }}>{error}</p>}
          <S.ModalButton onClick={handleSignUp}>
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </S.ModalButton>
          {isLogin && (
            <S.ModalButtonRegister className="modal__btn-signup" id="btnSignUp">
              Зарегистрироваться
            </S.ModalButtonRegister>
          )}
        </S.ModalForm>
      </S.Modal>
    </S.AuthContainer>
  );
};
