
# Дипломный проект "Доска объявлений по типу Avito" для онлайн-школы Skypro
SPA-приложение разработано для просмотра, размещения и редактирования объявлений, с возможностью добавления, удаления фотографий товара, а также добавления отзывов.

Для клонирования репозитория выполните команду:
`git clone https://github.com/Alex-Viet/sky-ads-board`

Для установки зависимостей:
`git install`

Для запуска проекта выполните команду:
`npm start`

Проект будет доступен по адресу: http://localhost:3000

В проекте используется Docker, backend доступен по адресу: http://127.0.0.1:8090. API - Swagger.

## Язык и технологии:
- JavaScript
- React
- React-router-dom
- Styled components
- Redux toolkit
- RTK Query
- Eslint
- Prettier

### Сторонние библиотеки:
- date-fns

## Назначение папок проекта:
/pages - страницы приложения,<br>
/components - переиспользуемые react-компоненты,<br>
/services - API-запросы через RTK Query,<br>
/context - контекст для поиска,<br>
/store - redux-хранилище,<br>
/utils - дополнительные функции,<br>
/public - изображения, шрифты, index.html,<br>
/back-skyVito - backend-часть, хранилище Docker

## Проект состоит из:
- главной страницы со всеми объявлениями, поисковиком;<br>
- страницы авторизации/регистрации;<br>
- страницы профиля с объявлениями пользователя, а также возможностью редактировать данные пользователя;<br>
- страницы объявления с информацией по данному объявлению, а также возможностью редактировать или снять с публикации свое объявление;<br>
- страницы с профилем и товарами продавца;<br>
- header с кнопками "Разместить объявление", "Личный кабинет", разлогиниться или авторизоваться;<br>

### Планируемые доработки:
- адаптация под мобильные устройства;
- возможность сменить тему с белой на черную
