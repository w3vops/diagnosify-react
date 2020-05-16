import React from "react";
import "./homepage.style.css";
import NavBar from "../../components/navbar/navbar";
import CustomButton from "../../components/button/customButton";
import CustomCard from "../../components/card/card";
import Mike from "../../assets/images/mike.jpg";
import Nii from "../../assets/images/nii.jpg";
import GTL from "../../assets/images/gtl_logo.png";
import Footer from "../../components/footer/footer";

const Homepage = () => {
    return (
        <div className="home">
            <NavBar/>
            <div className="cover">
                <div className="overlay">
                    <h1>Skin disease diagnosis <br/>at your fingertips</h1>
                    <h3>Get more functionality on Android and iOS</h3>
                    <div className="cover-buttons">
                        <CustomButton text="Google play" button_type='type2' icon="fab fa-google-play"/>
                        <div className="space"/>
                        <CustomButton text="Apple store" button_type='type3' icon="fab fa-apple"/>
                    </div>
                </div>
            </div>
            <section className="container-fluid problem-statement">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 problem-container">
                        <h1 className="problem">Only about <span className="make-blue">25 dermatologists</span> in
                            the <span className="make-blue">whole</span> of Ghana</h1>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                        <h4 className="problem2">Diagnosify is here to bridge the gap between the few dermatologists in
                            Ghana and Ghanaians.
                            Through it's AI powered system, Diagnosify ensures Ghanaians with skin conditions do not
                            resort to self diagnosis, that may end up being fatal.</h4>
                    </div>
                </div>
            </section>
            <section className="service">
                <h1>Get your solution in 3 steps</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="step1 col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <i className="fas fa-file-upload"/>
                            <h5>Upload an image</h5>
                            <p>Upload an image of the part of your skin with the lesion and scan it with our system</p>
                        </div>
                        <div className="step2 col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <i className="fas fa-poll-h"/>
                            <h5>Receive reports</h5>
                            <p> Receive report on the name of your skin lesion, the accuracy and its risk indication</p>
                        </div>
                        <div className="step3 col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <i className="fas fa-stethoscope"/>
                            <h5>Connect to a doctor</h5>
                            <p>Get connected with a
                                doctor or pharmacy to enable you better treat skin diseases</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="medium">
                <h5>"AI Startup, Diagnosify is leveraging advanced technology to aid patients with proficient
                    diagnosis and treatment of skin diseases in the health sector of Ghana."</h5>
                <div className="read"><p className="whiten">-Ghana Tech Lab</p>
                    <a href="https://medium.com/@ghanatechlab/ai-startup-diagnosify-to-aid-patients-with-proficient
                    -diagnosis-and-treatment-of-skin-diseases-36ae0dd8bec6" target="_blank" rel="noopener noreferrer"><i
                        className="fab fa-readme animate__animated animate__pulse animate__infinite"/></a></div>
            </section>
            <section className="partners">
                <h1>Our partners</h1>
                <img src={GTL} alt="Ghana tech lab logo"/>
            </section>
            <section className="team">
                <h1>Meet the team</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-0 col-sm-0 col-md-2 col-lg-2 team-card">
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 team-card">
                            <CustomCard image={Mike} name="Michael Asante"
                                        info="Technochrat | Data Engineer | Researcher | Cloud manager"
                            />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 team-card">
                            <CustomCard image={Nii} name="Samuel Abbey"
                                        info="Web developer | UI/UX designer | Biologist"
                                        facebook="https://web.facebook.com/nii.o.abbey"
                                        linkedIn="https://www.linkedin.com/in/samuel-abbey-618957168/"/>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 team-card">
                        </div>
                    </div>
                </div>
            </section>
            <section className="jumbo">
                <div className="overlay jumbo-overlay">
                <div className="jumbo-text">
                    <h1>Ready for your first diagnosis?</h1>
                    <CustomButton button_type="type1" text="Get Started"/>
                </div>
                </div>
            </section>
            <Footer />
        </div>
    )
};
export default Homepage;