import styles from '../../styles/Ninjas.module.scss'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(ninja => {
      return {
        params: { id: ninja.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { ninja: data }
    }
  }
  
  const Details = ({ ninja }) => {
    return (
      <section className={styles.details}>
        <h1>{ ninja.name }</h1>
        <h3>Email </h3>
        <p>{ ninja.email }</p>
        <h3>Website</h3>
        <p>{ ninja.website }</p>
        <h3>By</h3>
        <p>{ ninja.address.city }</p>
      </section>
    );
  }
  
  export default Details;