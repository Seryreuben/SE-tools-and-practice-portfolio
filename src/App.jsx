import Navbar from './components/Navbar'

const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']

function App() {
  return (
    <>
      <Navbar />
      <main>
        {sections.map((id) => (
          <section
            key={id}
            id={id}
            className="section container"
            style={{ minHeight: '70vh' }}
          >
            <h2>{id}</h2>
          </section>
        ))}
      </main>
    </>
  )
}

export default App
