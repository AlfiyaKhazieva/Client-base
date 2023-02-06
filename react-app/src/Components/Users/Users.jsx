import './Users.css';

function User (props) {
    return (
        <> 
            <div className='user'>
                    <div className='user__photo'>{props.src}</div>
                <div className='user__container'> 
                    <p className='user__name'>{props.name}</p>
                    <p className='user__information'>{props.information}</p>
                </div>   
            </div>
            <p className='user__text'>{props.text}</p>
        </>
    )
}

export default User;