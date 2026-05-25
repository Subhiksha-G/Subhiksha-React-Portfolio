import Testimonials from "../components/Testimonials/Testimonials";

function Home({likes, handleLikeClick}) {
    return(
        <div style={{padding: '20px'}}>
            <div style={{textAlign: 'center', marginTop: '40px'}}>
                <h1 style={{color: 'gold'}}>Subhiksha's React Portfolio Hub 🚀</h1>
                <p style={{fontSize: '1.2rem', color: '#cccccc'}}>Project Appreciation Score : <strong style={{color: 'gold'}}>{likes}</strong> ❤️</p>
                <button onClick={handleLikeClick} style={{background: '#333', color: 'gold', border: '1px solid gold', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer'}}>Appreciation Project 👍</button>
            </div>
            <Testimonials />
        </div>
    );
}

export default Home;