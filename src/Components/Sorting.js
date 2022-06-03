import React, { Component } from 'react'
import { translateX } from 'react-animations/lib/utils';
export default class Sorting extends Component {
    state = {
        array: [],
        arrayLength: 5,
    }
    constructor(props) {
        super(props);
        this.state = {
            arrayLength: 5,
            array: []
        }
    }
    timer=1;
    generateRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    handleRange = () => {
        const element = document.getElementById("slider");
        const target = document.getElementById("nOutput");
        target.innerHTML = `N=${element.value}`;
        this.generateArray();
    }

    componentDidMount=()=>{
        const element = document.getElementById("slider");
        element.value = 5
        element.addEventListener("input", this.handleRange);
        let newArray = [];
        for (let i = 0; i < 5; i++) {
            newArray.push([this.generateRandom(5, 500), i]);
        }
        this.setState({ array: newArray, arrayLength: 5 });
    }

    generateArray = () => {
        const parent=document.getElementById('myDiv').childNodes;
        const newSize = document.getElementById("slider").value;
        const newArray = [];
        this.setState({ array: [], arrayLength: 0 })
        for (let i = 0; i < newSize; i++) {
            newArray.push([this.generateRandom(5, 500), i]);
        }
        this.setState({ arrayLength: newSize, array: newArray });
        for (let i = 0; i < this.state.array.length; i++) {
            parent[i].style.backgroundColor='steelblue';
        }
    }

    handleRandomise = () => {
        const parent=document.getElementById('myDiv').childNodes;
        const newSize = this.state.array.length;
        const newArray = [];
        this.setState({ array: [], arrayLength: 0 })
        for (let i = 0; i < newSize; i++) {
            newArray.push([this.generateRandom(5, 500), i]);
        }
        this.setState({ arrayLength: newSize, array: newArray });
        for(let i=0;i<newSize;i++){
            parent[i].style.backgroundColor='steelblue';
        }
    }

    swapBars = (bar1, bar2) => {
        const temp = bar1.style.height;
        bar1.style.height = bar2.style.height;
        bar2.style.height = temp;
    }
    swapArray = (cloneArray, i, j) => {
        const newArray = cloneArray;
        const temp = cloneArray[i][0];
        newArray[i][0] = newArray[j][0];
        newArray[j][0] = temp;
        cloneArray = newArray;
    }
    bubbleSort = () => {
        const widthHere=(1000)/(this.state.array.length+1);
        let animations=[];
        const parent=document.getElementById("myDiv").childNodes;
        let cloneArray=this.state.array;
        for(let i=0;i<this.state.arrayLength;i++){
            for(let j=0;j<this.state.arrayLength-1-i;j++){
                if(cloneArray[j][0]>cloneArray[j+1][0]){
                    this.swapArray(cloneArray,j,j+1);
                    animations.push(j);
                }
            }
            animations.push([this.state.array.length-i-1,this.state.array.length-i-1]);
        }
        for(let i=0;i<animations.length;i++){
            let j=animations[i];
            if(j.length>1){
                setTimeout(()=>{
                    const bar=parent[j[0]];
                    bar.style.backgroundColor='green';
                },(200*i+100)*this.timer);
                continue;
            }
            const bar1=parent[j];
            const bar2=parent[j+1];
            setTimeout(()=>{
                bar1.style.backgroundColor='red';
                bar2.style.backgroundColor='red';
            },(200*i)*this.timer);
            setTimeout(()=>{
                bar1.animate({transform:translateX(`${widthHere*2}px`)},{duration:100,iterations:1,easing:'linear'});
                bar2.animate({transform:translateX(`${-widthHere*2}px`)},{duration:100,iterations:1,easing:'linear'});
                this.swapBars(bar1,bar2);
                bar1.style.backgroundColor='steelblue';
                bar2.style.backgroundColor='steelblue';
            },(200*i+100)*this.timer);
        }
        setTimeout(()=>{
            this.setState({array:cloneArray});
        },300*this.timer*animations.length);
    }

    selectionSort = () => {
        const parent = document.getElementById('myDiv').childNodes;
        let newArray = this.state.array;
        let N = newArray.length;
        for (let i = 0; i < N; i++) {
            setTimeout(() => {
                let minIndex = i;
                const mainBar=parent[i];
                mainBar.style.backgroundColor='red';
                for (let j = i+1; j < N; j++) {
                    const compareBar=parent[j];
                    setTimeout(()=>{
                        compareBar.style.backgroundColor='purple'
                    },((j-i)*200)*this.timer)
                    setTimeout(()=>{
                        compareBar.style.backgroundColor='steelblue'
                    },((j-i)*200+200)*this.timer)
                    if (newArray[j][0] < newArray[minIndex][0]) {
                        const prevBar=parent[minIndex];
                        const newBar=parent[j];
                        setTimeout(()=>{
                            prevBar.style.backgroundColor='steelblue';
                            parent[i].style.backgroundColor='red';
                            newBar.style.backgroundColor='pink';
                        },((j-i)*200+200)*this.timer);
                        minIndex = j;
                    }
                }
                if (1) {
                    const bar1 = parent[i];
                    const bar2 = parent[minIndex];
                    this.swapArray(newArray, minIndex, i);
                    setTimeout(()=>{
                        for(let j=i+1;j<N;j++){
                            parent[j].style.backgroundColor='steelblue';
                        }
                        this.swapBars(bar1, bar2)
                        parent[i].style.backgroundColor='green'
                    },((N-i)*200+200)*this.timer)
                }
            }, (((i)/ 2)*(N * 2 - i)*200)*this.timer);
        }
    }


    assignBar(i,newValue){
        const bar=document.getElementById('myDiv').childNodes[i];
        bar.style.height=`${newValue}px`;
    }
    insertionSort=()=>{
        const widthHere=(1000)/(this.state.array.length+1);
        const N=this.state.array.length;
        let newArray=this.state.array;
        let animations=[];
        for(let step=1;step<N;step++){
            const i=step;
            const key=newArray[step][0];
            let j=step-1;
            animations.push([i,i]);
            while(j>=0 && key<newArray[j][0]){
                newArray[j+1][0]=newArray[j][0];
                animations.push([i,j+1,newArray[j][0]]);
                j--;
            }
            newArray[j+1][0]=key;
            animations.push([i,j+1,key])
        }
        for(let i=0;i<animations.length;i++){
            if(animations[i].length===3){
                const bar=document.getElementById('myDiv').childNodes[animations[i][1]];
                setTimeout(()=>{
                    if(animations[i][1]!==animations[i][0]){
                        bar.style.backgroundColor='red';
                    }
                    bar.animate({transform:translateX(`${-widthHere}px`)},{duration:100*this.timer,iterations:1})
                },200*i*this.timer)
                setTimeout(()=>{
                    if(animations[i][1]!==animations[i][0]){
                    bar.style.backgroundColor='steelblue'
                    }
                    this.assignBar(animations[i][1],animations[i][2]);
                },(200*i+200)*this.timer)
            }
            else{
                let cnt=0;
                while((cnt+i)<animations.length && animations[i][0]===animations[i+cnt][0]){
                    cnt++;
                }
                const bar=document.getElementById('myDiv').childNodes[animations[i][0]];
                setTimeout(()=>{
                    bar.style.backgroundColor='blue';
                },200*i*this.timer)
                setTimeout(()=>{
                    bar.style.backgroundColor='steelblue'
                },(200*(cnt+i))*this.timer)
                console.log(cnt)
            }
        }
    }
    // Merge Sort starts
    tempArray=[];
    Arr=[];
    mergeSortAnimations=[];
    mergeSort=()=>{
        this.Arr=this.state.array;
        this.mergeSortAnimations=[];
        this.tempArray=[0];
        this.performMergeSort(0,this.Arr.length-1);
        const parent=document.getElementById('myDiv').childNodes;
        let animations=this.mergeSortAnimations;
        let cnt=0;
        for(let i=0;i<animations.length;i++){
            setTimeout(() => {
                if(animations[i][0]==='start'){
                    const bar1=parent[animations[i][1]];
                    const bar2=parent[animations[i][2]];
                    bar1.style.backgroundColor='red';
                    bar2.style.backgroundColor='red';
                }
                else if(animations[i][0]==='left'){
                    const bar=parent[animations[i][1]];
                    bar.style.backgroundColor='pink';
                }
                else if(animations[i][0]==='right'){
                    const bar=parent[animations[i][1]];
                    bar.style.backgroundColor='violet';
                }
            },cnt*50);
            setTimeout(() => {
                if(animations[i][0]==='assign'){
                    this.assignBar(animations[i][1],animations[i][2]);
                    if(animations[i][3]===0 && animations[i][5]===this.Arr.length-1){
                        parent[animations[i][1]].style.backgroundColor='green'
                    }
                    else{
                        parent[animations[i][1]].style.backgroundColor='cyan'
                    }
                }
                if(animations[i][0]==='end'){
                    const bar1=parent[animations[i][1]];
                    const bar2=parent[animations[i][2]];
                    if(animations[i][3]===this.Arr.length-1 && animations[i][1]===0){
                        bar1.style.color='green';
                        bar2.style.color='green';
                    }
                    else{
                        bar1.style.color='cyan';
                        bar2.style.color='cyan';
                    }
                }
            },cnt*50+30);
            if(animations[i][0]==='start' || animations[i][0]==='assign' || animations[i][0]==='end'){
                cnt++;
            }
            else{
                cnt+=0.05;
            }
        }
        console.log(this.Arr)
    }
    performMergeSort=(start,end)=>{
        if(start<end){
            let mid=Math.floor((start+end)/2);
            this.performMergeSort(start,mid);
            this.performMergeSort(mid+1,end);
            this.mergeSortHelper(start,mid,end);
        }
    }
    mergeSortHelper(start,mid,end){
        this.mergeSortAnimations.push(['start',start,end,mid]);
        this.tempArray=[];
        let i=start;
        let j=mid+1;
        for(let x=start;x<=mid;x++){
            this.mergeSortAnimations.push(['left',x]);
        }
        for(let x=mid+1;x<=end;x++){
            this.mergeSortAnimations.push(['right',x]);
        }
        while(i<=mid && j<=end){
            if(this.Arr[i][0]<=this.Arr[j][0]){
                this.tempArray.push(this.Arr[i]);
                i++;
            }
            else{
                this.tempArray.push(this.Arr[j]);
                j++;
            }
        }
        while(i<=mid){
            this.tempArray.push(this.Arr[i]);
            i++;
        }
        while(j<=end){
            this.tempArray.push(this.Arr[j]);
            j++;
        }
        for(let x=start;x<=end;x++){
            this.mergeSortAnimations.push(['assign',x,this.tempArray[x-start][0],start,mid,end]);
            this.Arr[x]=this.tempArray[x-start];
        }
        this.mergeSortAnimations.push(['end',start,end,mid]);
    }
    // Merge Sort Ends
    render() {
        return (
            <>
                {/* Navbar */}
                <div className="container" style={{ alignItems: "center", justifyContent: "center" }}>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ borderRadius: "0px 0px 10px 10px", height: "75px" }}>

                        <a className="navbar-brand" href="/" style={{ margin: "0px 15px", fontSize: "30px" }}>AlgoVisualizer</a>

                        <div className="d-flex flex-column bd-highlight mb-3" style={{ alignItems: "center" }}>
                            <label id="nOutput" htmlFor="slider" style={{ color: "white", display: "block" }}>N=5</label>
                            <input type="range" id="slider" name="quantity" min="5" max="200" step={1} style={{ display: "block" }} />
                        </div>
                        <button onClick={this.mergeSort} className="btn btn-dark">Merge Sort</button>
                        <button onClick={this.bubbleSort} className="btn btn-dark">Bubble Sort</button>
                        <button onClick={this.selectionSort} className="btn btn-dark">Selection Sort</button>
                        <button onClick={this.insertionSort} className="btn btn-dark">Insertion Sort</button>

                        <button onClick={this.handleRandomise} className="btn btn-dark">Randomise Values</button>

                    </nav>
                </div>
                <div className="container" style={{ alignItems: "center", justifyContent: "center" }}>
                    <div id="myDiv" className="container d-flex align-items-end d-flex justify-content-around" style={{ margin: "50px 0px", width: "1000x", height: "550px", border: "2px solid steelblue" }}>
                        {this.state.array.map((element) => (
                            <div key={element[1]} className="user" style={{ backgroundColor: "steelblue", height: element[0], width: 500/(this.state.array.length+10) }}></div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}
