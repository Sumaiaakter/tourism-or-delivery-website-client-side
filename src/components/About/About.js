import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import SpecialService from '../SpecialService/SpecialService';

const About = () => {
    return (
        <div>
            <Banner></Banner>
            <br /><br />
            <hr />
            <h2>What Makes a Great About Us Page?</h2>

            <h4>Your About Us page should be:</h4>
            <ul>
                <li>Informative. It doesn’t always have to tell your whole story, but it should at least provide people with an idea of .</li>
                <li>Contain social proof, testimonials, and some personal information that visitors can relate to, such as education, family, etc.</li>
                <li>Useful.</li>
                <li>Engaging.</li>
                <li>Easy to navigate.</li>
                <li>Accessible on any device.</li>
            </ul>
            <br /><br /><br />
            <hr />
            <SpecialService></SpecialService>
            <br /><br /><br />
            <hr />
            <div>
                <h2>The main purpose of your About Us page is to give your visitors a glimpse into who you are as a person or a business (or sometimes both).As users discover your brand, they need to distinguish what sets you apart and makes you… you.

                    This often requires finding the right balance between compelling content and a design carefully planned to look the part.</h2>
            </div>

            <Footer></Footer>
        </div>
    )
};

export default About;