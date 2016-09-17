import React from 'react';

export default class AddProfile extends React.Component{
    
    constructor(props){
        super(props);
        this.handleName=this.handleName.bind(this);
         this.handleBio=this.handleBio.bind(this);
         this.handleHobby=this.handleHobby.bind(this);
          this.handClick=this.handClick.bind(this);
        this.state={
            name:'',
            bio:'',
            hobby:''
        };
    }
    
    handleName(e){
        
        this.setState({
            name:e.target.value
        });
    }
    
    
    handleBio(e){
        
        this.setState({
            bio:e.target.value
        });
    }
    
    handleHobby(e){
        
        this.setState({
            hobby:[e.target.value]
        });
    }
    
    handClick(){
        let newUser={
            name:this.state.name,
            bio:this.state.bio,
            hobbies:[this.state.hobby]     
        }    ;
        
        this.props.addUser(newUser);
        
        
    }
    
    render() {
               
        return (    
            <div> 
                <p>add new profile</p>
            
                 <input onChange={this.handleName} value={this.state.name}></input>
                 <input onChange={this.handleBio} value={this.state.bio}></input>
                 <input onChange={this.handleHobby} value={this.state.hobby}></input>
                 <button onClick={this.handClick}>add new profile</button>
            </div>

        )
    }
};