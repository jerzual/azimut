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
import { GameView } from './containers/GameView';

interface AzimutProps {
    isLoading?:boolean;
    route:{
        name:string,
        options?:any
    },
    options?: any
}
interface RootState {
    isLoading: boolean;
    navigation?: any,
    options?: any
}
export class Azimut extends React.Component<AzimutProps, void> {
    render(){
        return (<main id="azimut-main">
            {<GameView options={this.props.options} />}
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
    route: state.navigation.route,
    options: state.options
  }
}

export default connect(mapStateToProps)(Azimut);