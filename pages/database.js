import Head from 'next/head';
import {useState} from 'react'
//AXIOS er et bibliotek der muliggør kommunikation (API requests) med min backend (min sql-database)
import Axios from 'axios'



const Database = () => {

    const [usersList, setUsersList] = useState([]);
    const [toggle, setToggle] = useState(false);

//Ved hjælp af useState, kan jeg gemme mine tidligere values og tilføje nye.

const [firstname, setFirstname] = useState('');
const [lastname, setLastname] = useState('');
const [email, setEmail] = useState('');

//Når jeg klikker på knappen, starter følgende funktion. Den tilføjer en ny bruger til min database.
const addUser = () => {
    Axios.post('http://localhost:3001/create', {
        Firstname: firstname,
        Lastname: lastname,  
        Email: email
    }).then(() => {
            console.log('Bruger tilføjet databasen!')
            alert('Bruger tilføjet databasen');       
});

}

//Henter data fra databasen

const getUsers = () => {
    Axios.get('http://localhost:3001/users', {
    }).then((response) => {
           setUsersList(response.data);        
});  

setToggle(!toggle)
}

    return(
        <>
        <Head>
        <title>Ninja List | Contact</title>
        <meta name="keywords" content="Ninjas"></meta>
        </Head>
        <section className="postget">
      
            <div className="input-container">

            <h2>Tilføj bruger til databasen</h2>
            <fieldset>
            <form>
         {/* //NAVN */}
        
            <label>Fornavn:</label>
            <input 
            type="text" 
            onChange={(event) => 
            {setFirstname(event.target.value);}}
            />
        

            {/* //ALDER */}

        
            <label>Efternavn:</label>
            <input 
            type="text" 
            onChange={(event) => 
            {setLastname(event.target.value);}}
            />
        

            {/* //EMAIL */}

        
            <label>Email:</label>
            <input 
            type="text"
            onChange={(event) => 
            {setEmail(event.target.value);}}
            />
            </form>
 {/* //TILFØJ-KNAP */}
             <button onClick={addUser}>Tilføj bruger</button>  
            </fieldset>
        </div>
           

            {/* //HENT-KNAP */}
            <section className="users">
            <button className="get-users" onClick={getUsers}><h2>Hent liste over brugere</h2></button> 
            {usersList.map((val, key) => {
               return (
                   
                    <article className="user" key={key}>
                       
                    {
                    
                     toggle? 
                   
                    <div>   
                   <h3>{val.Firstname} {val.Lastname}</h3>
                   <p>{val.Email}</p>
                   </div>

                   : null
                   
                }
                   </article>
               ) 
               
               
            })}
            </section> 
            </section>

        </>
    )
}

export default Database;