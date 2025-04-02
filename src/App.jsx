import Footer from './components/Footer/Footer.jsx'
import EditingSide from './components/EditingSide/EditingSide.jsx'
import ResumeSide from './components/ResumeSide/ResumeSide.jsx'

function App() {
  return (
    <div className="app-container">
      <div className="main-app">
        <EditingSide>
        </EditingSide>
        <ResumeSide>
        </ResumeSide>
      </div>
      <Footer className="footer"/>
    </div>
  )
}

export default App
