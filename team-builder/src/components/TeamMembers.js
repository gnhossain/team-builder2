import React from 'react';
import Card from 'react-bootstrap/Card'

const TeamMembers = props => {
    console.log('this is member props',props)
    return (
        
            <div className='teamMember-list'>
                {props.teamMembers.map(teamMember => (
                <Card body>
                    <div className='teamMember' key={teamMember.id}>
                        <h2>Name:{teamMember.name}</h2>
                        <p>Role: {teamMember.role}</p>
                        <p>Email:{teamMember.email}</p>
                        {/* <button onClick={props.chooseMemberToEdit(teamMember)}>Edit</button> */}
                    </div>
                </Card>
                ))}
            </div>
    )
}
export default TeamMembers;