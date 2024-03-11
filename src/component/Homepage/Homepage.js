import React , {useState} from "react";
import "./style.scss";
import Header from "../Header";
import FirstHomePage from "../FirstHomePage";
import KippaBusness from "../KippaBusness";
import Account from "../Account";
import SubSection from "../SubSection";
import Access from "../Access";
import AboutKippa from "../AboutKippa";
import Footer from "../Footer";
import Navsection from "../Navsection";

const Homepage = () => {
  const [toggle, settoggle] = useState(false)
  return (
    <div className="overflow-hidden">
      <Header   toggle = {toggle}  settoggle = {settoggle}  />
      <FirstHomePage />
    { toggle == true &&  <Navsection  toggle = {toggle}  settoggle = {settoggle} />}
      <KippaBusness />
      <Account />
      <SubSection />
      <Access />
      <AboutKippa />
      <Footer />
    </div>
  );
};

export default Homepage;
