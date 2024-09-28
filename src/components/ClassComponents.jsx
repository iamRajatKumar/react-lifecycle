import React from 'react'

export class ClassComponents extends React.Component {
  
    //step1: constructor call
    constructor(){
        console.log("Inside Constructor!");
        super();
        this.state = {
           fname : "Rajat"
        //    products : []
        }
    }

    //step 2: getDerivedStateFromProps call
    static getDerivedStateFromProps(props, state){
        console.log("Inside getDerivedStateFromProps!");
        console.log("State is : ",state);
        console.log("props are : ", props);
        return null;
            // fname: props.defaultName

    }
  
    //step4 : Component did Mount call
    // Step 5 : Component did Mount call again
    componentDidMount(){
        console.log("Inside componentDidMount");
        //Product API call
        // fetch("https://fakestoreapi.com/products")
        // .then( (res) => res.json())
        // .then( (json) => this.setState({
        //     products: json
        // }))
        //Updating Phase:
        this.setState({
            fname: this.props.defaultName
        })
    }

    //step7: shouldComponentUpdate call
    shouldComponentUpdate(){
        console.log("Inside shouldComponentUpdate");
        return true;
    }

    //step9 : getSnapshotBeforeUpdate call
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Inside getSnapshotBeforeUpdate");
        console.log('prevstate : ', prevState)
        return prevState;
    } 

    //step10 : componentDidUpdate method call
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Inside componentDidUpdate");
        console.log("snapshot : ",snapshot);
    }

    //step11: componentWillUnmount
    componentWillUnmount(){
        // cant console this phase console.log("Inside componentWillUnmount ");
        //remove event listener
        //clear timeouts
    }

    //step3 : render method call
    //step6: render method call again
    //step8 : render method call again
    render() {
        console.log("Inside render");
        // console.log("products are : ", this.state.products)
    return (
      <div>
        <p>My name is {this.state.fname}</p>
      </div>
    )
  }
}

export default ClassComponents