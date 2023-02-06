import './CartInformation.css';

function CartInformation () {
    return (
        <>
        <div className='cartInformation'>
                <img src="../../../images/Manager.png" alt="" />
                <div className='cartInformation__block'>
                    <p className='cartInformation__question'>У вас остались вопросы?</p>
                    <p className='cartInformation__text'>Позвоните менеджеру Константину <span className='red'>8-800-1000-936</span> внутр. <span className='red'>135</span> или напишите ему в скайп (логин). Константин с удовольствием вам поможет.</p>
                </div>
            </div>
        </>
    )
}

export default CartInformation;
