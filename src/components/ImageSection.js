import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Anjali</span></h4>
                <p className="about-text">
                    An organized and task driven professional with 2 years 3 months of experience in Frontend development. 
                    Ability to leverage full-stack knowledge to build interactive website design. Cohesive team worker, fire
                    fighter, having strong analytical and problem solving skills.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Country</p>
                    </div>
                    <div className="right-section">
                        <p>: Venkata Anjali Sai Kumari Kada</p>
                        <p>: 23</p>
                        <p>: Indian</p>
                        <p>: English, telugu</p>
                        <p>: 8-27, Tatiparthi, AP-533445</p>
                        <p>: India</p>
                    </div>
                </div>
                <a href="https://drive.google.com/uc?export=download&id=1-g4DqzkdsxOTqv7pNBrOxEXuW24q85Aa">
                    <button className="btn">Download Cv</button>
                </a>
            </div>
        </div>
    )
}

export default ImageSection;
