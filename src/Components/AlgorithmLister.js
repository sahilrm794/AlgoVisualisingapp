// This component lists multiple Algorithm Cards  
import React, { Component } from 'react';
import AlgorithmCard from './AlgorithmCard'; // Importing the AlgorithmCard component
import './ListerStyle.css'; // Importing CSS for styling

export default class AlgorithmLister extends Component {
    render() {
        return (
            <div className="wrapper">
                
                {/* Sorting Algorithm Card */}
                <div className="item1">
                    <AlgorithmCard 
                        whichLink="/sorting" 
                        heading="Sorting Algorithms" 
                        description="Visualise Sorting Algorithms on the go" 
                    />
                </div>

                {/* Sieve Primality Card */}
                <div className="item2">
                    <AlgorithmCard 
                        whichLink="/sieve" 
                        heading="Sieve Primality" 
                        description="Visualise Sieve of Eratosthenes on the go" 
                    />
                </div>

                {/* Graph Algorithms Card (No description provided) */}
                <div className="item3">
                    <AlgorithmCard 
                        whichLink="/graph" 
                        heading="Graph Algorithms" 
                    />
                </div>

                {/* Tree Algorithms Card (No description provided) */}
                <div className="item4">
                    <AlgorithmCard 
                        whichLink="/sorting" 
                        heading="Tree Algorithms" 
                    />
                </div>
                
            </div>
        );
    }
}
