Для запуска проекта необходимо выполнить две команды 
1) npm install
2) npm start



<h1>Теория</h1>

<h3><b>Q1.</b></h3>
Расскажите, чем, на ваш взгляд, отличается хорошее клиентское приложение от плохого с точки зрения
<ul>
  <li>пользователя;   </li>
  <li>менеджера проекта;   </li>
  <li>дизайнера; </li>
  <li>верстальщика;</li>
  <li>серверного программиста.</li>
</ul>
<h4><b>Ответ:</b></h4>
Хорошее приложение:
<ul>
  <li>1)Для пользователя – пользователю должно быть интуитивно понятно где и что искать на сайте. Сайт должен быстро загружаться. </li>
  <li>2)Для менеджера – возможность легкого и быстрого расширения текущего функционала. Простота во внесении доработок. Протестировано, исправлены все ошибки приложения.</li>
  <li>3)Для дизайнера – дизайн должен привлекать внимание пользователя, и решать все основные проблемы по удобству пользования сайтом(для пользователя)</li>
  <li>4)Для верстальщика – дизайн должен быть адаптивным, возможность использования одних и тех же частей многократно в рамках проекта.</li>
  <li>5)Для программиста – вся логика приложения должна быть хорошо продумана изначально, чтобы в середине или в конце написания приложения, не возникло ситуации, что необходимо переписывать ядро приложения.</li>
 </ul>
</br></br>

<h3><b>Q2.</b></h3>
Опишите основные особенности разработки крупных многостраничных сайтов, функциональность которых может меняться в процессе реализации и поддержки. Расскажите о своем опыте работы над подобными сайтами: какие подходы, инструменты и технологии вы применяли на практике, с какими проблемами сталкивались и как их решали.
<h4><b>Ответ:</b></h4>
При разработке крупных приложений очень важно придерживаться единого стиля написания кода. Т.к. разработка крупного проекта зачастую ведется длительный период, и в процессе возможны ситуации когда придется поддерживать и дорабатывать чужой код. Если каждый программист будет писать в своем стиле, то увеличивается время на решение определенной задачи новым программистом.
Необходимо придерживаться выбранных на начальном этапе технологий в рамках всего проекта.</br>
Функциональный стиль написания с архитектурой Redux наиболее лучше подходит для расширения. Тимлид должен составить архитектуру и следить за тем, чтобы ее придерживалась команда.
</br></br>

<h3><b>Q3.</b> </h3>
При разработке интерфейсов с использованием компонентной архитектуры часто используются термины Presentational Сomponents и Сontainer Сomponents. Что означают данные термины? Зачем нужно такое разделение, какие у него есть плюсы и минусы?
<h4><b>Ответ:</b></h4>
Presentational Сomponents – это компонент для отрисовки данных. 
Сontainer Сomponents – это компонент для получения данных (например с сервера), и реализации необходимой логики. </br>
Сontainer Сomponents передают структурированные данные в Presentational Сomponents для отрисовки.</br>
Плюсами данного подхода является возможность многократного использования компонентов для отрисовки в рамках проекта. Есть разделение логики и отрисовки – огромный плюс при доработках. </br>
Минусом думаю является то что приходится писать больше кода
</br></br>

<h3><b>Q4. </b></h3>
Как устроено наследование в JS? Расскажите о своем опыте реализации JS наследования без использования фреймворков.
<h4><b>Ответ:</b></h4>
Наследование в JS бывает двух видов:
<ul>  
<li>1)прототипное наследование</li>
<li>2)функциональное наследование.</li>
</ul>
Функциональное наследование реализуется через вызов конструктора родителя с передачей текущего контекста.</br>
Прототипное наследование реализуется через запись свойств и методом в prototype объекта. </br>
При доработке карты на предыдущем месте работы, реализовывал свои объекты с наследованием для отрисовки на карте с нужной логикой.
  
</br></br>

<h3><b>Q5.</b></h3>
Какие библиотеки можно использовать для написания тестов end-to-end во фронтенде? Расскажите о своем опыте тестирования веб-приложений. 
<h4><b>Ответ:</b></h4>
Тесты не писал. Это предстоит освоить.
</br></br>

<h3><b>Q6.</b></h3>
Вам нужно реализовать форму для отправки данных на сервер, состоящую из нескольких шагов. В вашем распоряжении дизайн формы и статичная верстка, в которой не показано, как форма должна работать в динамике. Подробного описания, как должны вести себя различные поля в зависимости от действий пользователя, в требованиях к проекту нет. Ваши действия?
<h4><b>Ответ:</b></h4>
Я бы реализовал валидацию полей, и все свои дальнейшие идеи согласовал с менеджером проектов.
</br></br>

<h3><b>Q7.</b></h3>
Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода
<h4><b>Ответ:</b></h4>
Proptypes в реакт.
</br></br>

<h3><b>Q8.</b></h3>
Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?
<h4><b>Ответ:</b></h4>
Хабр, StackOverflow.
Мне интересна сфера финансов, бизнес, инвестиции.
</br></br>

<h3><b>Q9.</b></h3>
Расскажите нам немного о себе и предоставьте несколько ссылок на последние работы, выполненные вами.
<h4><b>Ответ:</b></h4>
Программировал на следующих языках:
<ul>  
<li>1)С++ с QT </li>
<li>2)Java </li>
<li>3)PHP,JS,React + Redux + Saga, HTML,CSS</li>
<li>4)Работал с базами данных  MySQL и PostgreSQL</li>
</ul>
<br>
Работал в компании Рэд Софт – поддерживал и дорабатывал проект на JAVA.
В компании Эргоцентр программировал на :
<ul>  
<li>1)php – написание генератора отчетов.</li>
<li>2)C++ c Qt – переписал генератор отчетов, разработал свою библиотеку для работы с картой.</li>
<li>3) JS,React + Redux + Saga – участвовал в разработке сервиса.</li>
<li>4) JS – поддерживал и дорабатывал готовую карту на JS.</li>
</ul><br>
Ссылки не могу предоставить, т.к. вся информация на прежнем месте работы засекречена. Организация работает с военными.
<br><br>




