import './PersonalPage.css';
import Header from '../Header/Header';
import RegisterButton from '../RegisterButton/RegisterButton';
import Footer from '../Footer/Footer';
import CartInformationSecond from '../CartInformationSecond/CartInformationSecond';

function PersonalPage () {
    return (
        <>
        <Header text='Привет, Ксения!' class={'header__text-personalPage'}/>
        <div className='main__container'>
            <p className='main__text'>Спасибо, что выбрали компанию <a className='main__link' href="#">«Клиентская База»</a> в качестве партнера для сотрудничества. Мы формируем сплоченное комьюнити, и вы тот, кого нам так не хватало :) </p>
            <RegisterButton text='Войти в личный кабинет' class={'registerButton__personalPage'} />
            <p className='main__text'>Войти в личный кабинет в партнерской программе можно по этой ссылке: <a className='main__link' href="https://invite.clientbase.ru/">https://invite.clientbase.ru/</a></p>
            <div className='main__personalData'>
                <p className='main__data'> <span className='main__color'>Ваш логин:</span> loginloginlogin</p>
                <p className='main__data'> <span className='main__color'>Ваш пароль:</span> passwordpassword</p>
            </div>
            <p className='main__text'>Всю полезную информацию для продуктивного старта добавили в ваш личный кабинет. Тем не менее, в следующих письмах мы подробно расскажем про:</p>
                <div className='personalPage__information'>
                    <div className='personalPage__block' >
                        <img className='personalPage__img' src="../../../images/Ellipse3.png" alt="" />
                        <p className='personalPage__text'>Как работать в личном кабинете;</p>
                    </div>
                    <div className='personalPage__block' >
                        <img className='personalPage__img' src="../../../images/Ellipse3.png" alt="" />
                        <p className='personalPage__text'>Как работать по партнерской программе;</p>
                    </div>
                    <div className='personalPage__block' >
                        <img className='personalPage__img' src="../../../images/Ellipse3.png" alt="" />
                        <p className='personalPage__text'>Как получить первое вознаграждение;</p>
                    </div>
                    <div className='personalPage__block' >
                        <img className='personalPage__img' src="../../../images/Ellipse3.png" alt="" />
                        <p className='personalPage__text'>Как пройти курсы, чтобы лучше разбираться в «Клиентской Базе»;</p>
                    </div>
                    <div className='personalPage__block' >
                        <img className='personalPage__img' src="../../../images/Ellipse3.png" alt="" />
                        <p className='personalPage__text'>Где почитать новости программы;</p>
                    </div>
                </div>
        </div>
        <Footer class={'footer__icons-personalPage'} footer={ <CartInformationSecond /> } />

        </>
    )
}

export default PersonalPage;

