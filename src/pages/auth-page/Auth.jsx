import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../components/loader/Loader';
import {
  useGetTokensMutation,
  useRegisterUserMutation,
} from '../../services/ads';
import { setAuth } from '../../store/slices/authSlice';
import { trimSpaces } from '../../utils/stringHandlers';
import * as S from './Auth.styles';

export const Auth = () => {
  const [isLoginMode, setLoginMode] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [registerUser, { isLoading: regLoading }] = useRegisterUserMutation();
  const [getTokens, { isLoading }] = useGetTokensMutation();

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

    if (!password.trim()) {
      setError('Введите пароль');
      return;
    }

    // При необходимости можно добавить валидацию пароля на различные символы
    if (password.length < 3) {
      setError('Пароль должен содержать не менее 3 символов');
      return;
    }

    if (isLoginMode) {
      // Авторизация

      try {
        const tokensData = await getTokens({ email, password });
        if (tokensData.error?.status === 401) {
          setError('Неправильный пароль');
          return;
        }

        dispatch(
          setAuth({
            email,
            access: tokensData.data.access_token,
            refresh: tokensData.data.refresh_token,
            isAuth: true,
          }),
        );

        navigate('/profile', { replace: true });
      } catch (error) {
        console.error(error);
      }
    } else {
      if (password !== repeatPass) {
        setError('Пароли не совпадают');
        return;
      }

      // Регистрация
      try {
        const userData = await registerUser({
          email,
          password,
          name: trimSpaces(name),
          surname: trimSpaces(surname),
          city: trimSpaces(city),
          role: 'user',
        });

        if (userData.error?.status === 400) {
          setError('Пользователь с таким email уже существует');
          return;
        }

        const tokensData = await getTokens({ email, password });
        dispatch(
          setAuth({
            email,
            access: tokensData.data.access_token,
            refresh: tokensData.data.refresh_token,
            isAuth: true,
          }),
        );

        navigate('/profile', { replace: true });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleToRegForm = () => {
    setLoginMode(false);
    setError(null);
  };

  const handleToLoginForm = () => {
    setLoginMode(true);
    setError(null);
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
          {!isLoginMode && (
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
          {isLoading || regLoading ? (
            <Loader />
          ) : (
            <>
              <S.ModalButton onClick={handleSignUp}>
                {isLoginMode ? 'Войти' : 'Зарегистрироваться'}
              </S.ModalButton>
              {isLoginMode && (
                <S.ModalButtonRegister onClick={handleToRegForm}>
                  Зарегистрироваться
                </S.ModalButtonRegister>
              )}
            </>
          )}
          {!isLoginMode && (
            <S.BackToLoginBlock>
              {' '}
              {!regLoading && (
                <S.BackToLoginText>
                  Вернуться к{' '}
                  <span onClick={handleToLoginForm}>авторизации</span>
                </S.BackToLoginText>
              )}
            </S.BackToLoginBlock>
          )}
        </S.ModalForm>
      </S.Modal>
    </S.AuthContainer>
  );
};
