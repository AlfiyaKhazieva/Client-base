import './CartPrice.css';

function CartPrice (props) {
    return (
        <>
        <div className='cartPrice'>
            <div className='cartPrice__svg'>{props.src}</div>
            <h2 className='сartPrice__subtitle'>{props.h2}</h2>
            <p className='сartPrice__text'>{props.text}</p>
        </div>
        </>
    )
}

export default CartPrice;