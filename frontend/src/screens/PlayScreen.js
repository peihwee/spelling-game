import React from "react";
import Speech from "../components/Speech.js"

export default class PlayScreen extends React.Component
{
    constructor()
    {
        super();

        this.objSpeech = new Speech();
  
        this.objSpeech.init();
    }

    render()
    {
        return(
            <div>
                <p>PlayScreen</p>
                <button onClick={() => this.objSpeech.speak("Hello World")}>Hello World</button>
                <button onClick={() => this.objSpeech.speak("Eat Food")}>Eat Food</button>
                <button onClick={() => this.objSpeech.speak("Finally")}>Finally</button>
            </div>
        );
    }
}