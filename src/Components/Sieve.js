import React, { Component } from 'react'
import { scale,} from 'react-animations/lib/utils';

export default class Sieve extends Component {
    state = {
        n: 0,
        array: []
    }
    constructor(props) {
        super(props);
        this.state = {
            n: 0,
            array: []
        }
    }
    handleRange = () => {
        const element = document.getElementById("slider");
        const target = document.getElementById("nOutput");
        target.innerHTML = `N=${element.value}`;
        this.setState({ n: 0, array: [] });
        let newArray = [];
        for (let i = 0; i < element.value; i++) {
            newArray.push([i, i]);
        }
        this.setState({ n: element.value, array: newArray });
        const parent = document.getElementById("myDiv").childNodes;
        for (let i = 0; i < parent.length; i++) {
            const box = parent[i].childNodes[0];
            box.style.backgroundColor = 'steelblue';
        }
    }
    componentDidMount() {
        const element = document.getElementById("slider");
        element.value = 5;
        element.addEventListener("input", this.handleRange);
        let newArray = [];
        for (let i = 0; i < 5; i++) {
            newArray.push([i, i]);
        }
        this.setState({ n: 5, array: newArray });
        const parent = document.getElementById("myDiv").childNodes;
        for (let i = 0; i < parent.length; i++) {
            const box = parent[i].childNodes[0];
            box.style.backgroundColor = 'steelblue';
        }
    }
    Sieve = () => {
        const parent = document.getElementById("myDiv").childNodes;
        const N = this.state.n;
        let prime = [];
        let primes = [];
        for (let i = 0; i <= N; i++) {
            prime.push(true);
        }
        const bar1 = parent[0].childNodes[0];
        bar1.style.backgroundColor = 'red';
        for (let i = 2; i <= N; i++) {
            if (prime[i]) {
                primes.push(i);
                for (let j = 2 * i; j <= N; j += i) {
                    prime[j] = false;
                }
            }
        }
        let timer = 0;
        for (let x = 0; x < primes.length; x++) {
            const i = primes[x];
            let cnt = (N - i) / i;
            cnt *= 200;
            setTimeout(() => {
                const mainBar = parent[i - 1].childNodes[0];
                mainBar.style.backgroundColor = 'purple';
                mainBar.style.fontSize = "22px";
                mainBar.style.fontWeight = "bold";
                mainBar.animate({transform:scale(1.25,0.5)},{durations:cnt,iterations:1});
                setTimeout(() => {
                    mainBar.style.backgroundColor = 'green';
                    mainBar.style.fontWeight = 'normal';
                    mainBar.style.fontSize = "20px";
                }, cnt);
                for (let j = 2 * i; j <= N; j += i) {
                    setTimeout(() => {
                        const bar = parent[j - 1].childNodes[0];
                        bar.style.backgroundColor='violet';
                        bar.animate({ transform: 'scale(1.25)'}, { duration: 200, iterations: 1 })
                    }, ((j - i) / i) * 200)
                    setTimeout(() => {
                        const bar = parent[j - 1].childNodes[0];
                        bar.style.backgroundColor='red';
                    }, ((j - i) / i) * 200+200)
                }
            }, timer);
            timer += cnt + 500;
        }
    }
    render() {
        return (
            <>
                {/* Navbar */}
                <div className="container" style={{ alignItems: "center", justifyContent: "center" }}>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ borderRadius: "0px 0px 10px 10px", height: "75px" }}>

                        <a className="navbar-brand" href="/" style={{ margin: "0px 15px", fontSize: "30px" }}>AlgoVisualizer</a>

                        <div className="d-flex flex-column bd-highlight mb-3" style={{ alignItems: "center" }}>
                            <label id="nOutput" htmlFor="slider" style={{ color: "white", display: "block" }}>N=5</label>
                            <input type="range" id="slider" name="quantity" min="5" max="150" step={1} style={{ display: "block" }} />
                        </div>
                        <button className="btn btn-dark" onClick={this.Sieve}>
                            Visualise Sieve
                        </button>
                    </nav>
                </div>

                <div className="container">
                    <div id="myDiv" className="container d-flex justify-content-start d-flex flex-wrap" style={{ padding: "20px", margin: "50px 0px", width: "1000x", border: "2px solid steelblue", justifyContent: "center" }}>
                        {this.state.array.map((element) => (
                            <div key={element[1]} className="user" style={{ position: "relative", margin: "5px 10px", height: 55, width: 55 }}>
                                <div id={element[0]} className='user' style={{ padding: '4px', justifyContent: 'center', fontSize: '20px', textAlign: 'center', color: 'white', height: '45px', width: '45px', backgroundColor: 'steelblue', borderRadius: '5px' }}>{element[0] + 1}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}
