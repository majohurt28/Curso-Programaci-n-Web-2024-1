import './Footer.css'

export function Footer(
    tasks, deleteAllTask, headingText) {

    return (
        <footer className='footer' >
            <h2 id="list-heading">{headingText}</h2>
            <button onClick={deleteAllTask}>Delete All</button>
        </footer>
    )
}