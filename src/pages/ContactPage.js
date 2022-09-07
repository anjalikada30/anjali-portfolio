import React from 'react'
import ContactItem from '../components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import TitleComponent from '../components/TitleComponent';

function ContactPage() {
    return (
        <div className="ContactSection">
            <div className="title">
                <TitleComponent title={'Contact Me'} span={'Contact Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7623.296677124332!2d82.26655842440334!3d17.18730940279506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39d4f7bb6f42e5%3A0x9e2a7a07cc5fd11e!2sTatiparthi%2C%20Andhra%20Pradesh%20533445!5e0!3m2!1sen!2sin!4v1630344273634!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+918897750779'} text2={'+919182772411'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'anjalikada26@gmail.com'} text2={'anjalikada@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Andhra Pradesh'} text2={'India'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
