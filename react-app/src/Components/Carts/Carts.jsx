import './Carts.css';

function Cart (props) {
    return (
        <>
        <div className='cart__container'>
            <div className='cart__svg'>{props.svg}</div>
            <div className={`${props.class}`}>
                <div className='cart__text'>{props.text}</div>
            </div>
        </div>
        </>
    )
}

export default Cart;
