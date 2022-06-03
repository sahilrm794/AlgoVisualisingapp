import React, { Component } from 'react'
import AlgorithmLister from './AlgorithmLister'

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="container" style={{ textAlign: "center", display:'flex', justifyContent:'space-around'}}>
                    <h1 style={{margin:"30px 0px 50px 0px"}}>ALGORITHM VISUALISER</h1>
                </div>
                <AlgorithmLister/>
            </>
        )
    }
}
