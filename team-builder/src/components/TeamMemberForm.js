import React, { useState, useEffect } from 'react';

const TeamMemberForm = props => {
    console.log('this is our props',props);
    //set state for team member
   const [ teamMember, setTeamMember ] = useState({
       name:'',
       role:'',
       email:''
   });

//    useEffect( () => {
//        setTeamMember({name: props.memberToEdit.name, role: props.memberToEdit.role, email: props.memberToEdit.email})
//    }, [props.memberToEdit])
   
   //onChange handler to control inputs
   const handleChanges = event => {
       setTeamMember({ ...teamMember, [event.target.name]: event.target.value});
       console.log(teamMember);
   };
   //submitform to control prevent default
   const submitForm = event => {
       event.preventDefault();
    //    if(props.isEditing === true){
    //        props.editMember({...teamMember, id:props.memberToEdit.id});
    //        setTeamMember({name:'', role:'', email:'',});
           
    //    }
    //    else
        props.addNewTeamMember(teamMember);//members are from setState
        setTeamMember({name:'', role:'', email:'',});
        console.log(event.target.value);
   };
   return (
       //makes form with placeholder
    <form onSubmit={submitForm}>
        <label htmlFor='Name'>Name</label>
        <input
            id='name'
            type='text'
            name='name'
            onChange={handleChanges}
            value={teamMember.name}
        />
        <label htmlFor='Role'>Role</label>
        <input
            id='role'
            type='text'
            name='role'
            onChange={handleChanges}
            value={teamMember.role}
        />
        <label htmlFor='Email'>Email</label>
        <input
            id='email'
            type='text'
            name='email'
            onChange={handleChanges}
            value={teamMember.email}
        />
        <button type='submit'>Add Team Member</button>
    </form>
   );
};

export default TeamMemberForm;

// first I created  two components for Team Members