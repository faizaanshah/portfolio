import './App.css'
import AboutMe from './components/AboutMe'
import Blogs from './components/Blogs'
import Certifications from './components/Certifications'
import ContactInfo from './components/ContactInfo'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'

function App() {

  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <AboutMe title="About Me" subtitle="Who am I?" />
        <WorkExperience title="Work Experience" subtitle="My Professional Journey in software development" />
        <Skills title="Skills" subtitle="Technology and tools I work with" />
        <Certifications title="Certifications" subtitle="My Professional Certifications" />
        <Blogs title="Blogs" subtitle="Technical Articles and Tutorials" />
        <ContactInfo title="Contact Info" subtitle="You can simply send your email" />
      </main>
      <Footer />
    </div>
  )
}

export default App
