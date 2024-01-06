import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  useAddNewTextOnlyAdMutation,
  useEditAdMutation,
  useAddNewAdMutation,
} from '../../services/ads';
import { ModalCloseButton } from '../modal-close-button/ModalCloseButton';
import * as S from './AddNewAd.styles';

const array = [1, 2, 3, 4, 5];

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
  const [addNewAd] = useAddNewAdMutation({});

  // Обработчик загрузки фото
  const [img, setImg] = useState([]);
  const [imgSrc, setImgSrc] = useState([]);

  const uploadImgHandler = async (e) => {
    e.preventDefault();
    setImg([]);

    const selectedFiles = e.target.files;
    if (selectedFiles.length > 5) {
      setError('Фотографий должно быть не более 5');
      return;
    }

    const tempArray = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      let file = selectedFiles[i];

      if (!file.type.startsWith('image/')) {
        continue;
      }

      setImg((prev) => prev.concat(file));

      const reader = new FileReader();

      reader.onload = (function (aImg) {
        return function (e) {
          aImg = e.target.result;
          tempArray.push(aImg);
          setImgSrc(tempArray);
        };
      })(img);
      reader.readAsDataURL(file);
    }

    setIsFormChanged(true);
    setError(null);
  };

  // Опубликовать объявление
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
    } else if (!imgSrc.length) {
      await addNewTextOnlyAd(adData).unwrap();
    } else {
      const formData = new FormData();

      formData.append('title', title);
      formData.append('description', description);
      formData.append('price', price);

      img.forEach((image, index) => {
        formData.append(`image${index + 1}`, image);
      });

      await addNewAd(formData).unwrap();
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
                  {imgSrc.length
                    ? imgSrc.map((item) => (
                        <S.FormNewAdImgLabel
                          key={item}
                          htmlFor="photo"
                          $visibleImg={imgSrc.length}
                          onChange={uploadImgHandler}
                        >
                          <img src={item} alt="" />
                          <S.FormNewAdImgInput
                            type="file"
                            id="photo"
                            accept="image/*"
                            multiple
                          />
                        </S.FormNewAdImgLabel>
                      ))
                    : array.map((item) => (
                        <S.FormNewAdImgLabel
                          key={item}
                          htmlFor="photo"
                          $visibleImg={imgSrc.length}
                          onChange={uploadImgHandler}
                        >
                          <img src="#" alt="" />
                          <S.FormNewAdImgInput
                            type="file"
                            id="photo"
                            accept="image/*"
                            multiple
                          />
                        </S.FormNewAdImgLabel>
                      ))}
                </S.FormNewAdBarImg>
              </S.FormNewAdBlock>
              <S.FormNewAdBlock>
                <label htmlFor="price">Цена</label>
                <S.FormNewAdPriceInput
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
