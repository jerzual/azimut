import { Stage } from '../components/Stage';
import { Component } from 'inferno';
interface GameViewProps {
  // position: any;
  options: any;
}
export class GameView extends Component<GameViewProps, { width: number; height: number; options: any }> {
  constructor(props) {
    super(props);
    this.resize = this.resize.bind(this);
  }
  resize() {
    const body = document.getElementsByTagName('body')[0],
      width = window.innerWidth || document.documentElement.clientWidth || body.clientWidth,
      height = window.innerHeight || document.documentElement.clientHeight || body.clientHeight;

    this.setState({ width, height });
  }
  componentWillMount() {
    this.resize();
  }
  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }
  render() {
    return <Stage options={this.props.options} width={window.innerWidth} height={window.innerHeight} />;
  }
}
