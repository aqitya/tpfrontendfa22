import { useState } from "react";
import React from "react";
import styles from "../pages/app.module.css";
import internal from "stream";
import StatUpArrow from "@chakra-ui/react"
import StatDownArrow from "@chakra-ui/react"

interface cardProps {
    title: String
    score: number
    image: string

}

function card(props: cardProps) {

    const [vote, setVote] = React.useState(props.score)

    
    function addVote() {
        setVote(prevVote => prevVote + 1)
    }

    function subVote() {
        setVote(function(prevVote) {
            if (prevVote == 0) {
                return 0
            }
            return prevVote - 1
        })
    }

    return (
        <>
        <img className={styles.cardImage} src={props.image}/>
        <img src="tbg.png"/>
        <div className={styles.v1}>
            <p className={styles.name}>{props.title}</p>
            <p className={styles.sc}>Score: {vote}</p>
            <img src="circle.png"/>
            <button className={styles.close1}> <img src="Vector3.png" alt="my image" onClick={addVote} /></button>
        </div>

        <div className={styles.v2}>
            <img src="circle.png"/>
            <button className={styles.close2}><img src="Vector4.png" alt="my image" onClick={subVote} /></button>
        </div>
        </>
    )
}
 

export default card;