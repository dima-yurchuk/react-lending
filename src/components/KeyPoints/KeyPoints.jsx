import React from 'react';
import './KeyPoints.scss'
import Title from "../Title/Title";
import TextBlock from "../TextBlock/TextBlock";
import KeyPointsItem from "./KeyPointsItem/KeyPointsItem";

const KeyPoints = () => {
    return (
        <div className={'key-points'}>
            <Title text={'Ключевые моменты'}/>
            <TextBlock text={'Мы хотим, чтобы наши клиенты получали максимум результатов от нашего инструмента'}/>
            <div style={{marginTop:80}}>
                <KeyPointsItem title={'Продвижение по поисковым запросам'}
                               text={'WILD BEST поможет вывести ваши товары в ТОП, чтобы их легче было найти вашим' +
                                   ' покупателям.'}
                               marginTop={0}
                               height={57}/>
                <KeyPointsItem title={'Быстрая реакция на негатив'}
                               text={'В любое удобное время вы сможете написать положительный отзыв, чтобы быстро ' +
                                   'закрыть негатив.'}
                               marginTop={48}
                               height={57}/>
                <KeyPointsItem title={'Дополнительные услуги - помогут повысить лояльность к бренду'}
                               text={'<ul><li>Увеличить добавления в избранное как бренда, так и у товара</li>' +
                                   '<li>Добавить в лист ожидания отсутствующий артикул</li>' +
                                   '<li>Задать "правильные вопросы" к товару</li>' +
                                   '<li>Лайкнуть сильные отзывы, которые влияют на продажи</li></ul>'}
                               marginTop={48}
                               height={120}/>
            </div>
        </div>
    );
};

export default KeyPoints;