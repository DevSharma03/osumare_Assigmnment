import React from 'react'
import '../Styl/JoinUsPage.css'

export default function JoinUsPage() {
    return (
        <>
            <div class="container" id='contact'>
                <div class="row">
                    <div class="col-6 p-0 text-end">
                        <img src="Assets\join-us-page-image.jpg" alt="img" height={"400px"} width={"580px"} />
                    </div>
                    <div class="col-6 d-flex">
                        <div className="join-main-container">
                            <p className="join-main-heading">Start Organizing Your Life Today</p>
                            <p className="join-main-text mt-3">Join us now and transform your productivity with our intuitive to-do list platform!</p>
                            <div className="join-main-buttons d-flex mt-3">
                                <div className='join-main-button' style={{color:'white', background:'#FF3E54'}}>Sign Up</div>
                                <div className='join-main-button'>Learn More</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
