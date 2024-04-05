const Notification = ({ message, isError = false }) => {
    if (message === '') {
        return null
    }

    return (
        <div className={isError ? 'statusMessage error': 'statusMessage success'}>
        {message}
        </div>
    )
}

export default Notification