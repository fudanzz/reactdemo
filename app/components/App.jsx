import React from 'react';
import Profile from './Profile.jsx';
import AddProfile from './AddProfile.jsx';
import {getProfiles} from './ProfileApi.jsx';

export default class App extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            profiles:[]
        };
        this.addProfile=this.addProfile.bind(this);
    }
    
    componentDidMount(){
        
        getProfiles().then(data=>{
            this.setState({
                profiles:data
            })
        });

    }
    
    addProfile(user){
      
        this.setState({
            profiles: this.state.profiles.concat([user])
        });
        
}
    
    render() {   
       
        let profiles=this.state.profiles.map((profile)=>{
            return (<Profile name={profile.name} age={profile.age} bio={profile.bio} hobbies={profile.hobbies}></Profile>);
        });
            
        return (
            <div> 
                
                {profiles}
            
                <AddProfile addUser={this.addProfile}></AddProfile>
            </div>
           );

    }
}  