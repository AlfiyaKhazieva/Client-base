import './Reference.css';
import Header from '../Header/Header';

function Reference () {
    return (
        <>
         <Header class={'header__text'} text='Справка' />
        <div className='container__reference'>
            <p className='reference__text'>Перед тем, как разослать рассылку существует возможность предпросмотра писем, которые будут отправлены клиентам. В данном случае необходимо навести курсор мыши к нужному Вам шаблону рассылки.  Справа от названия шаблона повится значок "лупы" (см. фото 1). Кликнув по нему вы перейдете на страницу в новой вкладке и увидите содержание всех писем, которые будут отправлены по выбранным вами записям. </p>
                <div className='reference__container'>
                    <img className='reference__img' src="../../../images/glass.PNG" alt="" />
                </div>
                <p className='reference__img-text'>(фото 1)</p>
            <p className='reference__text'>Наверху страницы предпросмотра доступны действия, которые можно совершить с текущим шаблоном рассылки: (см. фото 2)</p>
                <div className='reference__edeting'>
                    <img className='reference__img-edeting' src="../../../images/editing.PNG" alt="" />
                    <p className='reference__img-text'>(фото 2)</p>
                </div>
            <ul className='reference__list'>
                <li>Запустить рассылку - запуская данную рассылку;</li>
                <li>Редактировать шаблон - позволяет перейти в раздел редактирования шаблона рассылки. После сохранения внесенных изменений снова откроется предпросмотр писем;</li>
                <li>Архивировать шаблон - переносит данный шаблон в архив. После этого действия будет произведет переход в таблицу откуда был начал выбор шаблонов рассылки; </li>
                <li>Удалить шаблон - удаляет текущий шаблон рассылки.</li>
            </ul>
            <h3 className='reference__subtitle'>Отложенный запуск рассылки</h3>
            <p className='reference__text'>Если вы включили опцию выбрать дату и время в поле настроек "Дата начала рассылки" в шаблоне печати, то после выбора данного шаблона рассылок появится окно для выбора времими и даты запуска рассылки. Таким образом, становится возможным настраивать запуск рассылки на подходящий для этого момент. </p>
        </div>
        </>
    )
}

export default Reference;