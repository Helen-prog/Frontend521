import './Success.css';

function Success({count}){
    return (
        <div className="success-block">
            <h3>Успешно!</h3>
            <p>Всем <b>{count}</b> пользователям отправлено приглашение</p>
            <button className='send-invite-btn' onClick={() => window.location.reload()}>Назад</button>
        </div>
    )
}

export default Success;