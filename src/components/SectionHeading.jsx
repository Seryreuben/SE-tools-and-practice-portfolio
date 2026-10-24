function SectionHeading({ number, title }) {
  return (
    <h2 className='section-heading'>
      <span className='section-heading__number'>{number}.</span>
      <span className='section-heading__title'>{title}</span>
      <span className='section-heading__rule' aria-hidden='true' />
    </h2>
  )
}

export default SectionHeading