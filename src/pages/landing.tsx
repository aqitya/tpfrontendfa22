import type { NextPage } from "next";
import NavBar from "../components/nav-bar";
import background from "/public/background.png"
import { Box } from "@chakra-ui/react";
import styles from './app.module.css';




const Landing: NextPage = () => {
  
  return (
    <>
      <NavBar />
      <div className = {styles.opacity}>
        <img src="background.png"/>
      </div>
      <div className = {styles.grand}>
        Grand Cheese Race
      </div>
      <div className= {styles.subtext}>
        It’s the race of the century! All victors return for one final race... who do you think will win?
      </div>
      
    </>
  );
};

export default Landing;
