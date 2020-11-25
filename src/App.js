import './App.css'
import HomePage from './views/home/home'
import Sidebar from './views/sidebar/sidebar'
import Posts from './views/posts/posts'
import Gallery from './views/gallery/gallery'
import Projects from './views/projects/projects'
import Contact from './views/contact/contact'
import ScrollTop from './components/scrollTop/scrollTop.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <>
            <Sidebar className="sidebar" />
            <ScrollTop />
            <Router>
                <div className="content">
                    <Switch>
                        <Route path="/posts">
                            <Posts />
                        </Route>
                        <Route path="/gallery">
                            <Gallery />
                        </Route>
                        <Route path="/projects">
                            <Projects />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    )
}

export default App
