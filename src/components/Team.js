import React from 'react'
import Card from './Card'
import './Team.css'
import TeamCard from './TeamCard'
const teams=[{
    name:'John Smith',
    img:'https://randomuser.me/api/portraits/men/40.jpg',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptates fugiat blanditiis repellendus, deleniti nesciunt enim aliquam vitae. Asperiores repellat obcaecati quam, exercitationem itaque corrupti! Quaerat, accusamus quis facere deserunt sit, alias reiciendis eligendi modi maiores, quas soluta laborum a? Similique nihil saepe.'
},

{
    name:'Elina Williams',
    img:'https://randomuser.me/api/portraits/women/68.jpg',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptates fugiat blanditiis repellendus, deleniti nesciunt enim aliquam vitae. Asperiores repellat obcaecati quam, exercitationem itaque corrupti! Quaerat, accusamus quis facere deserunt sit, alias reiciendis eligendi modi maiores, quas soluta laborum a? Similique nihil saepe.'
},
{
    name:'John Smith',
    img:'https://randomuser.me/api/portraits/men/53.jpg',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptates fugiat blanditiis repellendus, deleniti nesciunt enim aliquam vitae. Asperiores repellat obcaecati quam, exercitationem itaque corrupti! Quaerat, accusamus quis facere deserunt sit, alias reiciendis eligendi modi maiores, quas soluta laborum a? Similique nihil saepe.'
},
]
const Team = () => {
    const content= teams.map(teamPerson=>(
        <TeamCard name={teamPerson.name} img={teamPerson.img} description={teamPerson.description}/>
    ))
  return (
    <Card className='team'> 
    <h2>Team</h2>
    <p>Quam beatae natus maxime ea sunt at nesciunt id fugiat fuga, vero possimus quo corporis. Aliquam, excepturi. Vitae, voluptas. Unde provident eos iure atque, expedita dolor consectetur, blanditiis libero maxime molestiae quos ab quas.o </p>
    <article className="team__card">
            { content}
    </article>
    </Card>
  )
}

export default Team
