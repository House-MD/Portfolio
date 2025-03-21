import Hero from '../components/Hero';
import Header from '../components/Header';
import ProjectList from '../components/ProjectList';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="home">
            <Header />
            <Hero />
            <ProjectList />
            <Footer />
        </div>
    );
}

export default Home;