import type { NextPage } from "next";
import NavBar from "../components/nav-bar";
import Card from "../components/card";
import styles from "./app.module.css";
import data from "./data";
import { Box } from "@chakra-ui/react";


const Voting: NextPage = () => {

  // const cards = data.map(item => {
  //   return (
  //     <Card 
  //       data={item.voting}
  //     />
  //   )
  // })

  return <>
    <NavBar />

    <div className={styles.first}>
      {/* {cards[0]} */}
      <Card 
        title = "Speedy Sidrimo"
        score = {3400}
        image = "runner1.jpg"

      />
    </div>


    <div className={styles.second}>
      {/* {cards[1]} */}
      <Card
        title= "Muscular Macy"
        score= {1264}
        image= "runner4.jpeg"
      />
    </div>

    <div className={styles.third}>
      {/* {cards[2]} */}
      <Card
        title = "Agile Aspen"
        score = {1222}
        image = "runner3.jpeg"
      />
    </div>

    <div className = {styles.fourth}>
      {/* {cards[3]} */}
      <Card
        title="Fast-roller Fardan"
        score= {1850}
        image= "runner2.jpeg"
      />
    </div>
  </>;
};

export default Voting;
