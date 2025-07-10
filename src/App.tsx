import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import ProjectList from './components/Projects/ProjectList';
import Skills from './components/Skills/Skills';
import Blog from './components/Blog/Blog';
import BlogPost from './components/Blog/BlogPost';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={(
                <>
                  <Landing />
                  <Experience />
                  <Skills />
                  <ProjectList />
                </>
              )}
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
