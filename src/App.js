
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const friends = ["Naeem", "Sharif", "Mohtasim", "Mubarak", "Rabbi"]
    const products = [
        { name: "Photohope", price: 100 },
        { name: "illustrator", price: 200 },
        { name: "Pics Art", price: 300 },
    ]
    return (
        <div className="App">
            <header className="App-header">
                <Counter></Counter>
                <Users></Users>
                {
                    friends.map(name => <li>{name}</li>)
                }
                {
                    products.map(pd => <Products product={pd}></Products>)
                }
                <Person name="Naeem" age="20" profession="student"></Person>
                <Person name={friends[1]} age="20" profession="student"></Person>
                <Person name="Mohtasim" age="20" profession="student"></Person>

            </header>
        </div>
    );
}

function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => setUsers(data))
    },[])
    return (
        <div>
            <h3>Dynamic users:{users.length}</h3>
            <ul>
                {
                    users.map(user => <li>{user.name}</li>)
                }
            </ul>
        </div>
    )
}

function Counter() {
    const [count, setCount] = useState(10);

    // const handleIncrease = () => {
    //     const newCount = count+1;
    //     setCount(newCount);
    // }
    // const handleDecrease = () => {
    //     const newCount = count-1;
    //     setCount(newCount);
    // }

    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            {/* <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button> */}
        </div>
    )

}
function Products(props) {
    const style = {
        border: "2px solid tomato",
        width: "50%",
        margin: "10px",
        padding: "5px",
        backgroundColor: "gray"
    }
    const { name, price } = props.product
    return (
        <div style={style}>
            <h1>Name:{name}</h1>
            <h3>Price:{price}</h3>
        </div>
    )

}

function Person(props) {
    const style = {
        border: "2px solid tomato",
        width: "50%",
        margin: "10px",
        padding: "5px",
        backgroundColor: "gray"
    }
    return (
        <div style={style}>
            <h1>Name:{props.name}</h1>
            <h3>Age:{props.age}</h3>
            <h3>Profession:{props.profession}</h3>
        </div>
    )

}
export default App;