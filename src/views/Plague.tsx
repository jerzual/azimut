import * as React from "react";
import * as ReactDOM from "react-dom";
import * as redux from "redux";
import { connect } from 'react-redux';
import { GameScreen } from './containers/GameScreen';
import { MenuScreen } from './containers/MenuScreen';
import { OptionsScreen } from './containers/OptionsScreen';
import { PartyScreen } from './containers/PartyScreen';
import { PauseScreen } from './containers/PauseScreen';
import { AboutScreen } from './containers/AboutScreen';
import { DeathScreen } from './containers/DeathScreen';
import { ErrorScreen } from './containers/ErrorScreen';
import LoadingScreen from './containers/LoadingScreen';
import { ThreeView } from './containers/ThreeView';

interface PlagueProps {
    isLoading:boolean;
    route:{
        name:string,
        options?:any
    }
}

export class Plague extends React.Component<PlagueProps, undefined> {
    render(){
        return (<main id="plague-main">
            {<ThreeView/>}
            {this.getScreen()}
        </main>)
    }
    getScreen() {
        if (this.props.isLoading){
            return LoadingScreen;
        }
        switch(this.props.route.name){
            case 'about' : return <AboutScreen/>
            case 'game' : return <GameScreen/>
            case 'pause' : return <PauseScreen/>
            case 'death' : return <DeathScreen/>
            case 'options' : return <OptionsScreen/>
            case 'party' : return <PartyScreen/>
            case 'menu' : return <MenuScreen/>
            default : return <ErrorScreen/>
        };
    }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    route: state.navigation.route
  }
}

export default connect(mapStateToProps)(Plague);