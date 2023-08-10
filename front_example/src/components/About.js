import React from "react";
import "./../styles/about/aboutcss.css"
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className='wrapper'>
            <text className="text_up">О проекте:</text>
            <text className="text">Проект "Civ:Modify" - это инновационная платформа, которая позволяет пользователям
                создавать собственные модификации (моды) для популярной игры "Цивилизация" без необходимости знания
                SQL-синтаксиса.
            </text>

            <text className="text">Уникальность этого проекта заключается в том, что он предоставляет простой и
                интуитивно понятный интерфейс для создания модов, основанных на базе данных игры. Теперь пользователи
                могут создавать свои собственные модификации без необходимости изучения сложного SQL-синтаксиса.
            </text>

            <text className="text">Важно отметить, что автором этого проекта является Pavel Zharkov. Он вложил много
                усилий в разработку этой платформы, чтобы сделать ее доступной для широкого круга пользователей.
            </text>

            <text className="text">Также стоит упомянуть, что Ivan Robin оказал неоценимую помощь в проектировании
                архитектуры этого сервиса. Его экспертиза и опыт в разработке программного обеспечения были ключевыми
                факторами, которые способствовали успешной реализации этого проекта.
            </text>

            <text className="text">Проект "Civ:Modify" открывает новые горизонты для любителей игры "Цивилизация",
                позволяя им воплотить свои творческие идеи в реальность без необходимости быть экспертами в
                SQL-синтаксисе. Благодаря этой платформе, пользователи могут наслаждаться более гибким и
                персонализированным геймплеем, добавляя свои собственные модификации в игру.
            </text>
            <Link to="/" className="button_back">Назад</Link>
        </div>
    )
}
export default About;