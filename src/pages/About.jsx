import '../styles/about.scss';

const About = () => {
    return (
        <section className="About">
            <div className="About__text-block">
                <h2 className='About__title'>ABOUT</h2>
                <div className='About__desc'>
                    <p>I'm a passionate programmer, who always ready for solving various types of problems. My enthusiasm helps me discover and learn new technologies. You may always rely on me.</p>
                    <p>I was born and raised in Kyiv, Ukraine. In my free time, I usually watch youtube, explore linux, and spend time with my friends.</p>
                </div>
            </div>
            <div className="About__skills">
                <img src="https://skillicons.dev/icons?i=git,linux,nix,cpp,python,bash"/>
                <img src="https://skillicons.dev/icons?i=javascript,react,html,css,scss"/>
            </div>
        </section>
    )
}

export default About;
