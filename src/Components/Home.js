import React, { Component } from 'react'  // Importing React and Component from the 'react' library
import AlgorithmLister from './AlgorithmLister'  // Importing the AlgorithmLister component

export default class Home extends Component {  // Creating the Home component
    render() {  // Rendering the component's UI
        return (
            <>
                <div className="container" style={{ textAlign: "center", display:'flex', justifyContent:'space-around'}}> 
                    {/* Container div for centering content and applying flexbox for alignment */}
                    <h1 style={{margin:"30px 0px 50px 0px"}}>ALGORITHM VISUALISER</h1> 
                    {/* Main heading for the Algorithm Visualiser */}
                </div>
                <AlgorithmLister/> 
                {/* AlgorithmLister component is rendered here */}
            </>
        )
    }
}
