import { useState } from 'react';
import * as S from './Reviews.styles';
import { ModalCloseButton } from '../modal-close-button/ModalCloseButton';
import {
  useGetAdCommentsQuery,
  usePostAdCommentMutation,
} from '../../services/ads';
import { LoaderMarginContainer } from '../../App.styles';
import { Loader } from '../loader/Loader';
import { formatDate } from '../../utils/getDate';
import { baseUrl } from '../../pages/adv-page/AdvPage';
import { useEffect } from 'react';

export const Reviews = ({ setPopupOpen, id }) => {
  const [disableButton, setDisableButton] = useState(true);
  const [comment, setComment] = useState('');
  const [commentError, setCommentError] = useState(null);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    setDisableButton(false);
  };

  useEffect(() => {
    if (!comment) {
      setDisableButton(true);
    }
  }, [comment]);

  const { data, isLoading, isError, error } = useGetAdCommentsQuery(id);
  const [postAdComment] = usePostAdCommentMutation();

  const postCommentHandler = async (evt) => {
    evt.preventDefault();

    if (!comment.trim()) {
      setCommentError('Поле не может быть пустым');
      return;
    }

    await postAdComment({ id, text: comment }).unwrap();

    setDisableButton(true);
    setCommentError(null);
    setComment('');
  };

  return isLoading ? (
    <LoaderMarginContainer>
      <Loader />
    </LoaderMarginContainer>
  ) : isError ? (
    <h2>Ошибка: {error?.error}</h2>
  ) : (
    <S.Wrapper>
      <S.ContainerBg>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalHeading>Отзывы о товаре</S.ModalHeading>
            <ModalCloseButton setPopupOpen={setPopupOpen} />
            <S.ModalScroll>
              <S.ModalFormAddReview>
                <S.FormAddReviewBlock>
                  <label htmlFor="text">Добавить отзыв</label>
                  <textarea
                    name="text"
                    cols="auto"
                    rows="5"
                    placeholder="Введите отзыв"
                    value={comment}
                    onChange={handleCommentChange}
                    required
                  ></textarea>
                  <S.CommentError>{commentError}</S.CommentError>
                </S.FormAddReviewBlock>
                <S.FormButtonReviewPublish
                  disabled={disableButton}
                  $disable={disableButton}
                  onClick={postCommentHandler}
                >
                  Опубликовать
                </S.FormButtonReviewPublish>
              </S.ModalFormAddReview>
              <S.Reviews>
                {data.map((comment) => (
                  <S.Review key={comment.id}>
                    <S.ReviewItem>
                      <S.ReviewImgContainer>
                        <S.ReviewImg>
                          <img src={baseUrl + comment.author.avatar} alt="" />
                        </S.ReviewImg>
                      </S.ReviewImgContainer>
                      <S.ReviewContent>
                        <S.ReviewAuthorName>
                          {comment.author.name}{' '}
                          <span>{formatDate(comment.created_on)}</span>
                        </S.ReviewAuthorName>
                        <p>Комментарий</p>
                        <p>{comment.text}</p>
                      </S.ReviewContent>
                    </S.ReviewItem>
                  </S.Review>
                ))}
              </S.Reviews>
            </S.ModalScroll>
          </S.ModalContent>
        </S.ModalBlock>
      </S.ContainerBg>
    </S.Wrapper>
  );
};
