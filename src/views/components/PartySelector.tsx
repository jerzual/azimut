// presents current party members and allow to select one.

import * as React from 'react';

export class PartySelectorProps{
    party?:Array<String>;
    selectedParty?:any;
}
export class PartySelector 
       extends React.Component<PartySelectorProps, any>{
    render(){
        return (<ul><li><a></a></li></ul>)
    }
}
