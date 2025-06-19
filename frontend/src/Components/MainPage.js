import React from "react";
import "../Styl/mainPage.css";

export default function MainPage() {
    return (
        <>
            <div id="about">
                <div className="about-main-container d-flex flex-column align-items-center">
                    <div className="about-main-container-content">
                        <p className="about-main-container-heading">
                            Simplify Your Life with Our Todo App
                        </p>
                        <spam className="about-main-container-text">
                            Stay orgainzed and boost your productivity with our intutive todo
                            website.
                        </spam>
                        <br />
                        <spam className="about-main-container-text">
                            Experience a modern approach to task management that fits your
                            lifestyle.
                        </spam>
                    </div>
                    <div className="d-flex p-3">
                        <div className="about-main-container-button-getStarted">
                            Get started
                        </div>
                        <div className="about-main-container-button-learnMore">
                            Learn more
                        </div>
                    </div>
                </div>
                <div className="about-main-images-section">
                    <div className="about-main-image-section-part1">
                        <spam style={{ color: "#ffffffbb" }}>Organize.</spam>
                        <br />
                        <spam>Achieve.</spam>
                        <br />
                        <spam>Relax.</spam>
                        <p>
                            Turn clutter into clarity, chaos into control, and dreams into
                            done.bold visions into markat success
                        </p>
                        <div className="d-flex pt-4">
                            <div className="about-main-image-button-1">Get Started Today</div>
                            <div className="about-main-image-button-2">Discover Features</div>
                        </div>
                    </div>
                    <div className="about-main-image-section-part2">
                        <div className="about-main-image-section-part2-content-large">
                            <spam style={{ color: "#FFFFFbb" }}>Your Tasks.</spam>
                            <br />
                            <spam>Our Tools.</spam>
                        </div>
                        <img
                            src="Assets\Arrows.png"
                            alt="arrows"
                            width={"320px"}
                            height={"35px"}
                        />
                        <div className="d-flex align-items-center">
                            <div>
                                <img
                                    src="Assets/about-main-image-section-part2-content-image.png"
                                    alt="logo"
                                />
                                <p className=" fs-4 pt-3 m-0">Frediee Halvorson</p>
                                <p className="m-0">Chief Production Entusiast</p>
                            </div>
                            <div className="about-main-image-section-part2-content-image2">
                                <img src="Assets/video-icon.png" alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-main-image-section-part3 container-fluid pt-3 pb-3">
                    <ul className="navbar-nav d-flex flex-row justify-content-evenly align-items-center">
                        <li>
                            <img src="Assets\google-icon.png" alt="google" />
                        </li>
                        <li>
                            <img src="Assets\facebook-icon.png" alt="facebook" />
                        </li>
                        <li>
                            <img src="Assets\youtube-icon.png" alt="Youtube" />
                        </li>
                        <li>
                            <img src="Assets\painterest-icon.png" alt="Pinterest" />
                        </li>
                        <li>
                            <img src="Assets\twitch-icon.png" alt="twitch" />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
