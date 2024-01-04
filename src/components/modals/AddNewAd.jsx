import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  useAddNewTextOnlyAdMutation,
  useEditAdMutation,
} from '../../services/ads';
import { ModalCloseButton } from '../modal-close-button/ModalCloseButton';
import * as S from './AddNewAd.styles';

export const AddNewAd = ({ setPopupOpen, isEditMode, actualAd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [isFormChanged, setIsFormChanged] = useState(false);
  const [error, setError] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value.trim());
    setIsFormChanged(true);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value.trim());
    setIsFormChanged(true);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value.trim());
    setIsFormChanged(true);
  };

  const [addNewTextOnlyAd] = useAddNewTextOnlyAdMutation();
  const { id } = useParams();
  const [editAdd] = useEditAdMutation(id);

  const publishAd = async (e) => {
    e.preventDefault();

    if (!title) {
      setError('Введите название');
      return;
    }

    if (!price) {
      setError('Введите цену');
      return;
    }

    const adData = {
      title,
      description,
      price,
    };

    if (isEditMode) {
      await editAdd({
        title: title,
        description: description,
        price: price,
        id: id,
      }).unwrap();
    } else {
      await addNewTextOnlyAd(adData).unwrap();
    }

    setIsFormChanged(false);
    setError(null);
    setPopupOpen(false);
  };

  return (
    <S.Wrapper>
      <S.ContainerBg>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalHeading>
              {isEditMode ? 'Редактировать объявление' : 'Новое объявление'}
            </S.ModalHeading>
            <ModalCloseButton setPopupOpen={setPopupOpen} />
            <S.FormNewAd id="#" action="#">
              <S.FormNewAdBlock>
                <label htmlFor="title">Название</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Введите название"
                  defaultValue={actualAd?.title}
                  required
                  onChange={handleTitleChange}
                />
              </S.FormNewAdBlock>
              <S.FormNewAdBlock>
                <label htmlFor="text">Описание</label>
                <textarea
                  name="text"
                  cols="auto"
                  rows="10"
                  placeholder="Введите описание"
                  defaultValue={actualAd?.description}
                  onChange={handleDescriptionChange}
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
                <input
                  type="number"
                  name="price"
                  defaultValue={actualAd?.price}
                  required
                  onChange={handlePriceChange}
                />
                <S.FormNewAdPriceCover></S.FormNewAdPriceCover>
              </S.FormNewAdBlock>
              {error && <p style={{ color: 'coral' }}>{error}</p>}
              <S.FormNewAdPublishButton
                disabled={!isFormChanged}
                $disabled={!isFormChanged}
                onClick={publishAd}
              >
                Опубликовать
              </S.FormNewAdPublishButton>
            </S.FormNewAd>
          </S.ModalContent>
        </S.ModalBlock>
      </S.ContainerBg>
    </S.Wrapper>
  );
};
