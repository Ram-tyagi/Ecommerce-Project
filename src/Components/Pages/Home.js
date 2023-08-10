import classes from './Home.module.css';

const Home = () => {

    return <>
        <h1>TOURS</h1>
        <ul>
            <li>
                <span className={classes.span}>Date</span>
                <span className={classes.span}>Location</span>
                <span className={classes.span}>Place</span>
                <button>Buy Tickets</button>
            </li>
        </ul>
    </>
}

export default Home;