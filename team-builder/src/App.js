import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TeamMembers from './components/TeamMembers';
import TeamMemberForm from './components/TeamMemberForm';
import './App.css';

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
  return (
    <div className="App">
     <h1>Team Builder</h1>
     <TeamMemberForm addNewTeamMember={addNewTeamMember}/>
     <TeamMembers teamMembers={teamMembers}/>
    </div>
  );
}

export default App;
