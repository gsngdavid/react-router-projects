import { useEffect, useState } from "react";
import Van from "../components/Van";

function Vans() {
    const [ vans, setVans ] = useState([]);
    
    useEffect(() => {
        fetch('/api/vans')
        .then(res => res.json())
        .then(data => setVans(data.vans))
        .catch(err => console.log(err));
    }, []);

    return <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className="van-list">
            {vans.map(van => <Van key={van.id} van={van} />)}
        </div>
    </div>
}

export default Vans;