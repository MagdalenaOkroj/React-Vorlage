import './Content.css';

const Content = (props) => {

    
    return (
        <main className='content'>
            <h2>Welcome to My React App</h2>
            <p>Testing React.js with Vite</p>
            <img src="https://images.pexels.com/photos/907489/pexels-photo-907489.jpeg" alt="" />
            {/* {props.children} */}
            {props.skills.map( (item,index) =>{
                return <p key={index}>{item}</p>
            })}
        </main>
    )
}
export default Content