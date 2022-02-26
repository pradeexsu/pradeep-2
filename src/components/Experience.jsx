import React from 'react';
import "./TimeLine.min.css"

const Experience = ({ isDarkMode }) => {
    const forground = isDarkMode ? "light" : "dark"
    const background = isDarkMode ? "dark" : "light"

    return (
        <div className="section section-md py-5">
            <section id='experence'>
                <div className="container">
                    {/* <!-- Title  --> */}
                    <div className="row">
                        <div className="col-md-4 text-center mx-auto">
                            <div className="mt-6 mb-5">
                                <h2 className={"font-weight-bold text-" + forground}>Experence</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-10 mx-auto">
                            {/* <!-- Timeline --> */}
                            <div className="timeline timeline-one">
                                {/* <!-- Timeline Item 1 --> */}
                                <div className="timeline-item">
                                    <span className="icon icon-info icon-lg">
                                        <img src="/wmall.png" className='icons-c' alt="logo" />
                                    </span>
                                    <h5 className={`my-3 text-${forground}`}>Member of Technical Staff Intern</h5>
                                    <h6 className={`my-3 text-${forground}`}>Blitzscale Tech Private Limited</h6>
                                    <div>
                                        <span className={"my-3 fst-italic fw-light text-" + forground}>July 2021 - January 2022</span>
                                    </div>
                                    <br />
                                    <p className={`text-${forground}`}>
                                        Collaborated in a cross-functional team of 20 for WMall Customer app, and NuShop Seller app in Android(Kotlin).
                                        Applied Advanced knowledge of Android in Kotlin, Java, MVVM Architecture, API Integration, Jetpack Compose Library, Crashlytics, etc on Application.
                                        <br />Implemented application logic, Worked on Designing UI, Enhancements, Bug- fixing, and Maintenance of the App.
                                    </p>
                                </div>
                                {/* <!-- Timeline Item 2 --> */}
                                <div className="timeline-item">
                                    <span className="icon icon-secondary"
                                    >
                                        <img src="/icons/fiverr.svg" className='icons-c' alt="logo" />
                                    </span>
                                    <h5 className={`my-3 text-${forground}`}>C++ Developer (Freelancer)</h5>
                                    <h6 className={`my-3 text-${forground}`}>Fiverr.com</h6>
                                    <div>
                                        <span className={`my-3 fst-italic fw-light text-${forground}`}> January 2021 - July 2021</span>
                                    </div>
                                    <br />
                                    <p className={`text-${forground}`}>
                                        Delivered a major project which provide user interface application for login of FreeWRDP console based software. Delivered many small C++ projects with UI including, Minesweeper Game , Text Editor, To-do App in C++. using: wxWidgets C++ framework and openssl.
                                    </p>
                                </div>
                            </div>
                            {/* <!--End of Timeline--> */}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Experience;