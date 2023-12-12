import { useState } from 'react';
import { ModalCloseButton } from '../modal-close-button/ModalCloseButton';
import * as S from './AddNewAd.styles';

export const AddNewAd = () => {
  const [disableButton] = useState(true);
  const editMode = false;

  return (
    <S.Wrapper>
      <S.ContainerBg>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalHeading>
              {editMode ? 'Редактировать объявление' : 'Новое объявление'}
            </S.ModalHeading>
            <ModalCloseButton />
            <S.FormNewAd id="#" action="#">
              <S.FormNewAdBlock>
                <label htmlFor="name">Название</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Введите название"
                  required
                />
              </S.FormNewAdBlock>
              <S.FormNewAdBlock>
                <label htmlFor="text">Описание</label>
                <textarea
                  name="text"
                  cols="auto"
                  rows="10"
                  placeholder="Введите описание"
                  required
                ></textarea>
              </S.FormNewAdBlock>
              <S.FormNewAdBlock>
                <S.FormNewAdText>
                  Фотографии товара<span>не более 5 фотографий</span>
                </S.FormNewAdText>
                <S.FormNewAdBarImg>
                  <S.FormNewAdImg>
                    <img src="#" alt="" />
                    <S.FormNewAdImgCover></S.FormNewAdImgCover>
                  </S.FormNewAdImg>
                  <S.FormNewAdImg>
                    <img src="#" alt="" />
                    <S.FormNewAdImgCover></S.FormNewAdImgCover>
                  </S.FormNewAdImg>
                  <S.FormNewAdImg>
                    <S.FormNewAdImgCover></S.FormNewAdImgCover>
                    <img src="#" alt="" />
                  </S.FormNewAdImg>
                  <S.FormNewAdImg>
                    <S.FormNewAdImgCover></S.FormNewAdImgCover>
                    <img src="#" alt="" />
                  </S.FormNewAdImg>
                  <S.FormNewAdImg>
                    <S.FormNewAdImgCover></S.FormNewAdImgCover>
                    <img src="#" alt="" />
                  </S.FormNewAdImg>
                </S.FormNewAdBarImg>
              </S.FormNewAdBlock>
              <S.FormNewAdBlock>
                <label htmlFor="price">Цена</label>
                <input type="number" name="price" required />
                <S.FormNewAdPriceCover></S.FormNewAdPriceCover>
              </S.FormNewAdBlock>

              <S.FormNewAdButtonPublish $disable={disableButton}>
                Опубликовать
              </S.FormNewAdButtonPublish>
            </S.FormNewAd>
          </S.ModalContent>
        </S.ModalBlock>
      </S.ContainerBg>
    </S.Wrapper>
  );
};
