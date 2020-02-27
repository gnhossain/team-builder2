import React, { useState } from 'react';

import ReactDOM from 'react-dom';
import TeamMembers from './components/TeamMembers';
import TeamMemberForm from './components/TeamMemberForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: 'Reanna',
      role:'Frontend Developer',
      email: 'email@email.com'
    },
    {
      id: 2,
      name: 'John',
      role: 'Backend Developer',
      email: 'john@email.com'

    }
  ]);
  const addNewTeamMember = teamMember => {
    const newTeamMember = {
      id: Date.now(),
      name: teamMember.name,
      role: teamMember.role,
      email: teamMember.email
    };
    setTeamMembers([...teamMembers, newTeamMember]);
  }

  const [memberToEdit, setMemberToEdit] = useState({
    name:'',
    role:'',
    email:''
})

  const [isEditing, setIsEditing] = useState(false)

  const chooseMemberToEdit = (member) => {
    setMemberToEdit(member)
    setIsEditing(true)
  }

  const editMember = member => {
    teamMembers.map( teamMember => {
      if(teamMember.id == member.id)
      {
        teamMember.name = member.name;
        teamMember.role = member.role;
        teamMember.email = member.email;
      }
    })
  }

  return (
    <div className="App">
     <h1>Team Builder</h1>
     <TeamMemberForm addNewTeamMember={addNewTeamMember} />
     <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;
// memberToEdit={memberToEdit} isEditing={isEditing} editMember={editMember}
// chooseMemberToEdit={chooseMemberToEdit}