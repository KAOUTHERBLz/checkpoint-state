import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.persone = {
      FullName:"kawther blouza",
      Bio:"web devloper",
      profession:"FullstackJS",
      img:"https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  

    };
    this.state={Count :0}
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState(prevState =>(
        {
          Count :prevState.Count+0.5
        }
      ))
    },1000 )
  }
  render() {
    return (
      <div>
<h2>{this.persone.FullName}</h2>
<h2>{this.persone.Bio}</h2>
<h2>{this.persone.profession}</h2>
<img src={this.persone.img} alt="img" style={{width :"30%"}}/>
<h2>{this.state.Count}</h2>

      </div>
    )
  }
}

