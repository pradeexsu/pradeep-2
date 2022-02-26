import React from 'react';

const Home = ({ isDarkMode }) => {
    const forground = isDarkMode ? "light" : "dark"
    const background = isDarkMode ? "dark" : "light"

    return (
        <div className="px-4 py-5 my-5 text-center text-">
            <section id="home">
                <img src="https://avatars.githubusercontent.com/u/49487927?v=4" className="rounded-circle" height="200" alt="github dp" />
            </section>

            <h1 className={`display-6 fw-bold text-${forground}`}>Hi,
                <img src="/Hi.gif" width="50px" /><br />
                I'm Pradeep!</h1>
            <div className="col-lg-6 mx-auto ">
                <p className={`lead mb-4 text-justify text-${forground}`}>I strongly believe in collaboration to create a positive impact on the world, and contribute to the world-changing software.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                </div>
            </div>
        </div>
    );
}

export default Home;