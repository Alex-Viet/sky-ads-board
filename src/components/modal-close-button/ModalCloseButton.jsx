import * as S from './ModalCloseButton.styles';

export const ModalCloseButton = ({ setPopupOpen }) => {
  return (
    <S.ModalButtonClose onClick={() => setPopupOpen(false)}>
      <S.ModalButtonCloseLine></S.ModalButtonCloseLine>
    </S.ModalButtonClose>
  );
};
