import './RegisterButton.css';

function RegisterButton (props) {
    return (
        <>
        <div className={`${props.class}`}>
            <button className='registerButton__button'>{props.text}</button>
        </div>
        </>
    )
}
export default RegisterButton;
