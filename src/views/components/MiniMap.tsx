import { Component } from 'inferno';
// Minimap of th City;

interface MiniMapProps {
  level?: Array<Array<any>>;
  fogOfWar?: Array<Array<any>>;
}
export class MiniMap extends Component<MiniMapProps, any> {
  render() {
    return <canvas />;
  }
}

export default MiniMap;
