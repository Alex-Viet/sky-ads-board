import { useState } from 'react';
import { ModalCloseButton } from '../modal-close-button/ModalCloseButton';
import { useChangePassMutation } from '../../services/ads';
import * as S from './ChangePass.styles';

export const ChangePassword = ({ setPopupOpen }) => {
  const [password, setPassword] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState(null);

  const [changePass] = useChangePassMutation();

  const handleChangePass = async (e) => {
    e.preventDefault();

    if (!password.trim()) {
      setError('Введите пароль');
      return;
    }

    if (password !== repeatPass) {
      setError('Пароли не совпадают');
      return;
    }

    if (!newPassword.trim()) {
      setError('Введите новый пароль');
      return;
    }

    await changePass({
      password_1: password,
      password_2: newPassword,
    }).unwrap();

    setError(null);
    setPopupOpen(false);
  };

  return (
    <S.Wrapper>
      <S.ContainerBg>
        <S.ModalBlock>
          <S.ModalContent>
            <ModalCloseButton setPopupOpen={setPopupOpen} />
            <S.ModalLogo>
              <img src="/img/logo_modal.png" alt="logo" />
            </S.ModalLogo>
            <S.ModalForm>
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Введите старый пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <S.ModalInput
                type="password"
                name="password-control"
                placeholder="Подтвердите старый пароль"
                value={repeatPass}
                onChange={(e) => setRepeatPass(e.target.value)}
                required
              />
              <S.ModalInput
                type="password"
                name="new-password"
                placeholder="Введите новый пароль"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              {error && <p style={{ color: 'coral' }}>{error}</p>}
              <S.ModalButton onClick={handleChangePass}>
                Подтвердить
              </S.ModalButton>
            </S.ModalForm>
          </S.ModalContent>
        </S.ModalBlock>
      </S.ContainerBg>
    </S.Wrapper>
  );
};
