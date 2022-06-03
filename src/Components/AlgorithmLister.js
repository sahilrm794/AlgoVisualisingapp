import React, { Component } from 'react'
import AlgorithmCard from './AlgorithmCard'
import './ListerStyle.css';

export default class AlgorithmLister extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="item1"><AlgorithmCard whichLink="/sorting" heading="Sorting Algorithms" description="Visualise Sorting Algorithms on the go"/></div>
                <div className="item2"><AlgorithmCard whichLink="/sieve" heading="Sieve Primality" description="Visualise Sieve of Erasthones on the go"/></div>
                <div className="item3"><AlgorithmCard whichLink="/graph" heading="Graph Algorithms"/></div>
                <div className="item4"><AlgorithmCard whichLink="/sorting" heading="Tree Algorithms"/></div>
            </div>
        )
    }
}
