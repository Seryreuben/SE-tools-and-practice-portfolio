import SectionHeading from '../components/SectionHeading'

const facts = [
  { label: 'Role', value: 'Full Stack Developer' },
  { label: 'Focus', value: 'Fast, accessible websites' },
  { label: 'Approach', value: 'Modern technologies, thoughtful design' },
]

function About() {
  return (
    <section id='about' className='section container about'>
      <SectionHeading number='01' title='About me' />
      <div className='about__layout'>
        <div className='about__content'>
          <p className='about__intro'>
            I’m Robel Yemaneh, a full stack developer who enjoys turning ideas
            into useful, polished web experiences.
          </p>
          <p className='about__story'>
            I build fast, accessible and good-looking websites with modern
            technologies. I care about the details that make a site feel clear
            and easy to use, from its first layout to its final interaction.
          </p>
          <dl className='about__facts'>
            {facts.map((fact) => (
              <div className='about__fact' key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className='about__portrait'>
          <span className='about__initial' aria-hidden='true'>R</span>
          <img
            src='/Confident Football Celebration Portrait.png'
            alt='Robel celebrating during a football match'
            onError={(event) => {
              event.currentTarget.hidden = true
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default About