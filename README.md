
Тестовое задание для Quantron System.
Работал проверялась на десктопе. Но адаптив тоже сделан. 

Страница должна показывать список постов про react со stackoverflow:
https://api.stackexchange.com/2.2/search?intitle=react&site=stackoverflow
Пока загружается, в середине страницы показывается надпись Loading...
После загрузки показывается вертикальный список. Список должен содержать
только посты с ответом (is_answered == true) и репутацией овнера не менее
50.
Список должен сортироваться в порядке creation_date. Вверху страницы
находится кнопка для переключения направления сортировки. На кнопке
соответствующая надпись.
Элемент должен быть высотой 40 пикселей. Слева показан аватар
пользователя, если есть.
Справа заголовок поста. Весь элемент является линком на пост на сайте
stackoverflow.

## Available Scripts

In the project directory, you can run:
### 'yarn install or npm install'
after
### `yarn start or npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
