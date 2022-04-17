import React from 'react';
import JSON from 'json5';

class NavControl extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            
        }
    }
    render()
    {
        let objHomeButton;
        let objPlayButton;
        let objAddWordButton;
        let objAddGroupButton;
        
        objHomeButton = <li><a href="/">Home</a></li>
        objPlayButton = <li><a href="/play">Play</a></li>
        objAddWordButton = <li><a href="/add/word">Add Word</a></li>
        objAddGroupButton = <li><a href="/add/group">Add Group</a></li>

        return(
            <div>
                <nav>
                    <div className="nav-wrapper blue darken-1">
                    <ul id="nav-mobile" className="">
                        {objHomeButton}
                        {objPlayButton}
                        {objAddWordButton}
                        {objAddGroupButton}
                    </ul>
                    </div>
                </nav>
            </div>
            
        );
    }
}

export default NavControl;