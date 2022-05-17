import Head from 'next/head';
import {useState} from 'react'
import Axios from 'axios'

const Contact = () => {

//Ved hjælp af useState, kan jeg gemme mine tidligere values og tilføje nye.

const [name, setName] = useState('');
const [age, setAge] = useState(0);
const [email, setEmail] = useState('');

const addStudent = () => {
    Axios.post('http://localhost:3001/create', {
        name: name, 
        age: age, 
        email: email
    }).then(() => {
            console.log('Bruger tilføjet databasen!')
            alert('Bruger tilføjet databasen');
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

                {/* //NAVN */}

            <label>Name:</label>
            <input 
            type="text" 
            onChange={(event) => 
            {setName(event.target.value);}}
            />
            
            {/* //ALDER */}

            <label>Age:</label>
            <input 
            type="number" 
            onChange={(event) => 
            {setAge(event.target.value);}}
            />

            {/* //EMAIL */}

            <label>Email:</label>
            <input 
            type="text" 
            onChange={(event) => 
            {setEmail(event.target.value);}}
            /> 

            {/* //KNAP */}

            <button onClick={addStudent}>Tilføj person</button>
            </div>  
            </section>

        </>
    )
}

export default Contact;