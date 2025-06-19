import React from 'react'
import '../Styl/Feature.css'

export default function FeaturesPage() {
    return (
        <>
            <div id="feature">
                <div className="feature-heading">
                    Transform Your Productivity with Our Innovative To-Do List Feature
                </div>
                <div className="feature-cards d-flex justify-content-center">
                    <div className="feature-card">
                    <div className="feature-card-icons d-flex">
                            <div className='feature-card-icon-images'>
                            <img src="Assets/phone-icon.png" alt="phone" width={"50px"} height={"43px"}/>
                            </div>
                            <p className="feature-number">01</p>
                        </div>
                        <div className="feature-card-content">
                            <p className="feature-content-heading">
                                User-Friendly Interface
                            </p>
                            <img src="Assets/line-img.png" alt="line" />
                            <p className="feature-content-text">
                                Our platform offers seamless task management to boost your efficiency.
                            </p>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="feature-card-icons d-flex">
                            <div className='feature-card-icon-images'>
                            <img src="Assets/arrow-icon.png" alt="phone" width={"50px"} height={"45px"}/>
                            </div>
                            <p className="feature-number">02</p>
                        </div>
                        <div className="feature-card-content">
                            <p className="feature-content-heading">
                                Collabrate & Share Effortlessly
                            </p>
                            <img src="Assets/line-img.png" alt="line" />
                            <p className="feature-content-text">
                                Invite team members to work together and achieve your goals faster.
                            </p>
                        </div>
                    </div>

                    <div className="feature-card">
                    <div className="feature-card-icons d-flex">
                            <div className='feature-card-icon-images'>
                            <img src="Assets/idea-icon.png" alt="phone" width={"50px"} height={"50px"}/>
                            </div>
                            <p className="feature-number">03</p>
                        </div>
                        <div className="feature-card-content">
                            <p className="feature-content-heading">
                                Effortless Collaboration
                            </p>
                            <img src="Assets/line-img.png" alt="line" />
                            <p className="feature-content-text">
                                Invite team members to work together and achieve your goals faster.
                            </p>
                        </div>
                    </div>

                    <div className="feature-card">
                    <div className="feature-card-icons d-flex">
                            <div className='feature-card-icon-images'>
                            <img src="Assets/book-icon.png" alt="phone" width={"50px"} height={"50px"}/>
                            </div>
                            <p className="feature-number">04</p>
                        </div>
                        <div className="feature-card-content">
                            <p className="feature-content-heading" style={{marginBottom: "40px"}}>
                                Seamless Access
                            </p>
                            <img src="Assets/line-img.png" alt="line" />
                            <p className="feature-content-text">
                                Stay connected and manage your tasks on the go with ease.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
