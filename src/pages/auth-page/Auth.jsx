import * as S from './Auth.styles';

export const Auth = () => {
  return (
    <S.AuthContainer>
      <S.Modal>
        <S.ModalLogo>
          <img src="/img/logo_modal.png" alt="logo" />
        </S.ModalLogo>
        <S.ModalForm>
          <S.ModalInput type="text" name="login" placeholder="email" />
          <S.ModalInput type="password" name="password" placeholder="Пароль" />
          <S.ModalInput
            type="password"
            name="password-control"
            placeholder="Повторите пароль"
          />
          <S.ModalInput
            type="text"
            name="first-name"
            placeholder="Имя (необязательно)"
          />
          <S.ModalInput
            type="text"
            name="last-name"
            placeholder="Фамилия (необязательно)"
          />
          <S.ModalInput
            type="text"
            name="city"
            placeholder="Город (необязательно)"
          />
          <S.ModalButton>Зарегистрироваться/Войти</S.ModalButton>
          <S.ModalButtonRegister className="modal__btn-signup" id="btnSignUp">
            Зарегистрироваться
          </S.ModalButtonRegister>
        </S.ModalForm>
      </S.Modal>
    </S.AuthContainer>
  );
};
