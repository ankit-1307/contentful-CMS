import HeroImg from "./HeroImg.svg";
import "./App.css";
const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-center">
                <div className="hero-title">
                    <h1>Contentful CMS</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Voluptatum optio fugit quasi adipisci placeat rem
                        expedita pariatur eum natus dicta eaque distinctio,
                        doloribus commodi laborum. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Cumque, exercitationem?
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quidem, nisi!
                    </p>
                </div>
                <div className="img-container">
                    <img src={HeroImg} alt="project list" className="img" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
