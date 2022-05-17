import Head from 'next/head';
import {useState} from 'react'
import Axios from 'axios'

const Contact = () => {

const [name, setName] = useState('');
const [id, setId] = useState(0);
const [age, setAge] = useState(0);
const [grade, setGrade] = useState('');

const addStudent = () => {
    Axios.post('http://localhost:3001/create', {
        name: name,
        id: id, 
        age: age, 
        grade: grade
    }).then(() => {
            console.log('Succes!')
});
}

    return(
        <>
        <Head>
        <title>Ninja List | Contact</title>
        <meta name="keywords" content="Ninjas"></meta>
        </Head>
        <section>
            <div className="input-container">
            <label>Name:</label>
            <input 
            type="text" 
            onChange={(event) => 
            {setName(event.target.value);}}
            />

            
<label>Id:</label>
            <input 
            type="number" 
            onChange={(event) => 
            {setId(event.target.value);}}
            />

            <label>Age:</label>
            <input 
            type="number" 
            onChange={(event) => 
            {setAge(event.target.value);}}
            />


            <label>Karakter:</label>
            <input 
            type="number" 
            onChange={(event) => 
            {setGrade(event.target.value);}}
            /> 
            <button onClick={addStudent}>Tilføj person</button>
            </div>  
        </section>
        </>
    )
}

export default Contact;