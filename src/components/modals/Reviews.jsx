import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ModalCloseButton } from '../modal-close-button/ModalCloseButton';
import {
  useGetAdCommentsQuery,
  usePostAdCommentMutation,
} from '../../services/ads';
import { LoaderMarginContainer } from '../../App.styles';
import { Loader } from '../loader/Loader';
import { formatDate } from '../../utils/getDate';
import { baseUrl } from '../../utils/url';
import * as S from './Reviews.styles';

export const Reviews = ({ setPopupOpen, id }) => {
  const [disableButton, setDisableButton] = useState(true);
  const [comment, setComment] = useState('');
  const [commentError, setCommentError] = useState(null);

  const user = useSelector((state) => state.auth.isAuth);

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
                {user ? (
                  <>
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
                  </>
                ) : (
                  <p>
                    Пожалуйста, <Link to="/auth">авторизуйтесь</Link>, чтобы
                    оставить отзыв
                  </p>
                )}
              </S.ModalFormAddReview>
              <S.Reviews>
                {data.length ? (
                  data.map((comment) => (
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
                  ))
                ) : (
                  <p>Отзывов пока нет</p>
                )}
              </S.Reviews>
            </S.ModalScroll>
          </S.ModalContent>
        </S.ModalBlock>
      </S.ContainerBg>
    </S.Wrapper>
  );
};
