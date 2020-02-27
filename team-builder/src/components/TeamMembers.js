import React from 'react';

const TeamMembers = props => {
    console.log('this is member props',props)
    return (
        <div className='teamMember-list'>
            {props.teamMembers.map(teamMember => (
                <div className='teamMember' key={teamMember.id}>
                    <h2>Name:{teamMember.name}</h2>
                    <p>Role: {teamMember.role}</p>
                    <p>Email:{teamMember.email}</p>
                </div>
            ))}
        </div>
    )
}
export default TeamMembers;