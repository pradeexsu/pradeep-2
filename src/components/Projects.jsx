import React from 'react';


const Projects = ({ isDarkMode }) => {
    const forground = isDarkMode ? "light" : "dark"
    const background = isDarkMode ? "dark" : "light"

    return (
        <div className="container pt-5">

            <section id="projects" className="my-5 m-5 p-5" >

                {/*<!-- Section heading -->*/}
                <h2 className={`h1-responsive font-weight-bold text-center my-5 text-${forground}`}>Projects</h2>

                {/*<!-- Grid row -->*/}
                <div className="row">

                    {/*<!-- Grid column -->*/}
                    <div className="col-lg-5 mb-lg-0 mb-5">
                        {/*<!--Image-->*/}
                        <img src="https://i.ibb.co/2WGx583/image.png" alt="Online IDE" className="img-fluid rounded z-depth-1" />
                    </div>
                    {/*<!-- Grid column -->*/}

                    {/*<!-- Grid column -->*/}
                    <div className="col-lg-7">

                        {/*<!-- Grid row -->*/}
                        <div className="row mb-3">
                            <div className="col-md-1 col-2">
                                <i className="fas fa-book fa-2x cyan-text"></i>
                            </div>
                            <div className="col-md-11 col-10">
                                <h5 className={`font-weight-bold mb-3 text-${forground}`}>Online IDE</h5>
                                <p className={`grey-text text-${forground}`}>Online IDE is Web Application, which uses Jdoodle Compiler API
                                    for compile and execute code on the server requested by client. it supports 28 languages, multiple ide themes, and we can also save
                                    the code and share it via link. </p>
                            </div>
                        </div>
                        {/*<!-- Grid row -->*/}

                        {/*<!-- Grid row -->*/}
                        <div className="row mb-3">
                            <div className="col-md-1 col-2">
                                <i className="fas fa-code fa-2x red-text"></i>
                            </div>
                            <div className="col-md-11 col-10">
                                <h6 className={`font-weight-bold mb-3 text-${forground}`}>Tech Stack</h6>
                                <p className={`grey-text text-${forground}`}> NodeJs and Express, EJS, MongoDB Storage Cloud, Heroku & Azure, Codemirror for Syntax Highlighting.</p>
                            </div>
                        </div>
                        {/*<!-- Grid row -->*/}

                        {/*<!-- Grid row -->*/}
                        <div className="row">
                            <div className="col-md-1 col-1">
                            </div>
                            <div className="col-md-11 col-10">
                                <p className={`grey-text mb-0 text-${forground}`}>deployment link: &nbsp;
                                    <a href='https://ide7.herokuapp.com/' target="_blank">
                                        https://ide7.herokuapp.com</a>
                                </p>
                                <p className={`grey-text mb-0 text-${forground}`}>code link: &nbsp;
                                    <a href='https://github.com/sutharp777/ide-seven-x' target="_blank">
                                        https://github.com/sutharp777/ide-seven-x</a>
                                </p>
                            </div>
                        </div>
                        {/*<!-- Grid row -->*/}

                    </div>
                    {/*<!-- Grid column -->*/}

                </div>
                {/*<!-- Grid row -->*/}

                <hr className="my-5" />

                {/*<!-- Grid row -->*/}
                <div className="row">

                    {/*<!-- Grid column -->*/}
                    <div className="col-lg-7">

                        {/*<!-- Grid row -->*/}
                        <div className="row mb-3">
                            <div className="col-md-1 col-2">
                                <i className="far fa-chart-bar fa-2x indigo-text"></i>
                            </div>
                            <div className="col-md-11 col-10">
                                <h5 className={`font-weight-bold mb-3 text-${forground}`}>URL Shortener</h5>
                                <p className={`grey-text text-${forground}`}>
                                    URL Shortener is Web Application and it shortens the link. makes
                                    them easy to share. Additionally it also provide feature of slug which make it easy to remember for user.
                                </p>
                            </div>
                        </div>
                        {/*<!-- Grid row -->*/}

                        {/*<!-- Grid row -->*/}
                        <div className="row mb-3">
                            <div className="col-md-1 col-2">
                                <i className="fas fa-music fa-2x pink-text"></i>
                            </div>
                            <div className="col-md-11 col-10">
                                <h6 className={`font-weight-bold mb-3 text-${forground}`}>Tech Stack:</h6>
                                <p className={`grey-text text-${forground}`}> NodeJs, MongoDb Cloud, EJS, and Regex, Heroku, Docker.</p>
                            </div>
                        </div>
                        {/*<!-- Grid row -->*/}
                        <div className="row">
                            <div className="col-md-1 col-1">
                            </div>
                            <div className="col-md-11 col-10">
                                <p className={`grey-text mb-0 text-${forground}`}>deployment link: &nbsp;
                                    <a href='https://ide7.herokuapp.com/' target="_blank">
                                        https://ide7.herokuapp.com</a>
                                </p>
                                <p className={`grey-text mb-0 text-${forground}`}>code link: &nbsp;
                                    <a href='https://github.com/sutharp777/ide-seven-x' target="_blank">
                                        https://github.com/sutharp777/ide-seven-x</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*<!-- Grid column -->*/}
                    <div className="col-lg-5 mb-lg-0 mb-5 ">
                        {/*<!--Image-->*/}
                        <img src="https://i.ibb.co/6r6DtPx/image.png" alt="URL Shortner" className="img-fluid rounded z-depth-1" />
                    </div>
                </div>
                {/*<!-- Grid row -->*/}

            </section>
        </div>

    );
}

export default Projects;