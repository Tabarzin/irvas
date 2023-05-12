## Задание:

https://docs.google.com/document/d/1lRYlblSIz7fPdWEChsItL8jdS3ltTR6K-FxB2rHVHBY/edit

### Что я сделал:

- Реализовал вызов и удаление модального окна (класс popup_engineer)

- Реализовал вызов модального окна при клике на “Заказать обратный звонок” и “Спросите у нашего специалиста” (класс popup)

- Отправка формы внутри модальных окон. Данные шести форм обратной связи обрабатываются через FormData. Собранные данные выводятся в консоль.

* Пользователь оповещается о состоянии отправки.
* В поле с телефоном можно вводить только цифры.

- Табы:

* переключение активного таба и его стиля (класс active), пользователь может кликнуть и на надпись и на картинку;

- Функционал “Рассчитать стоимость”:

* вызов модального окна с классом popup_calc
* при клике на маленькие превью (4 в ряд сверху) эта превьюшка(картинка) становится несколько больше. Под ними показывается картинка-аналог активной превью.
* В поля “ширина” и “высота” можно вписать только цифры.
* При клике на кнопку “Далее” данное модальное окно скрывается. Появляется popup_calc_profile
* На этом окне реализовать, что можно выбрать только 1 профиль. Или холодное или теплое.
* При клике на кнопку “Далее” данное модальное окно скрывается. Появляется popup_calc_end
* Все данные, что отметил или выбрал человек передаются вместе с формой.

- Сделал табы (класс after_click)

- Добавил функционал для таймера:

- В разделе "Наши работы" сделал вызов модальных картинок при клике на превью.

- Вызов модального окна, если пользователь на странице больше 60 секунд.

- Установил Gulp и настроил для сборки в dist.
