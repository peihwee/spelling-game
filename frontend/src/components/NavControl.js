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
        let objPlayButton;
        let objAddWordButton;
        let objAddGroupButton;
        
        objPlayButton = <li><a href="/play">Play</a></li>
        objAddWordButton = <li><a href="/add/word">Add Word</a></li>
        objAddGroupButton = <li><a href="/add/group">Add Group</a></li>

        return(
            <ul id="nav-mobile" className="right">
                {objPlayButton}
                {objAddWordButton}
                {objAddGroupButton}
            </ul>
        );
    }
}

export default NavControl;