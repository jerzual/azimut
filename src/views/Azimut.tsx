import { Component } from 'inferno';

import { connect } from 'inferno-redux';

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
  isLoading?: boolean;
  route?: {
    name: string;
    options?: any;
  };
  options?: any;
}
type RootState = {
  isLoading?: boolean;
  navigation?: any;
  options?: any;
};
export class Azimut extends Component<AzimutProps, any> {
  render() {
    return (
      <main id="azimut-main">
        {<GameView options={this.props.options} />}
        {this.getScreen()}
      </main>
    );
  }
  getScreen() {
    if (this.props.isLoading) {
      return <LoadingScreen />;
    }
    switch (this.props.route.name) {
      case 'about':
        return <AboutScreen />;
      case 'game':
        return <GameScreen />;
      case 'pause':
        return <PauseScreen />;
      case 'death':
        return <DeathScreen />;
      case 'options':
        return <OptionsScreen />;
      case 'party':
        return <PartyScreen />;
      case 'menu':
        return <MenuScreen />;
      default:
        return <ErrorScreen />;
    }
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    isLoading: state.isLoading,
    route: state.navigation.route,
    options: state.options,
  };
};

export default connect(mapStateToProps)(Azimut);
