import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
   
  function handlebio(b){
    b.preventDefault();
    alert(props.Bio)
  }


    return (
        <div>
            
            
            <h1 style={{marginLeft:"45%",color:"violet"}}>My app {props.Myapp} </h1> 
            <br/>
            <h1 style={{marginLeft:"5%", color:"#8b1e79"}}>FullName :</h1><p style={{fontWeight:"bold",marginLeft:"5%"}}>{props.FullName}</p>
            <br/>
            <h1 style={{marginLeft:"5%", color:"#8b1e79"}}>Bio :</h1><p style={{fontWeight:"bold",marginLeft:"5%"}}>{props.Bio}</p>
            <button onClick={handlebio} style={{marginLeft:"5%"}} >Bio</button>
            <br/>
            <h1 style={{marginLeft:"5%", color:"#8b1e79"}}>Profession :</h1><p style={{fontWeight:"bold",marginLeft:"5%"}}>{props.Profession}</p>
            <br/>
            
        
            
        </div>
    )
};

Profile.propTypes = {Myapp:PropTypes.string,
                    FullName:PropTypes.string,
                    Bio:PropTypes.string,
                    Profession:PropTypes.string};

Profile.defaultProps = {
    Myapp: "...",
    FullName: "...",
    Bio: "...",
    Profession: "..."
  }


export default Profile