import { Component } from "inferno";
interface IState {}
interface IProps {}
export default class App extends Component<IProps, IState> {
   constructor(props) {
      super(props);
   }
   public render() {
      return (
         <div>
	         <p>Hello, world!</p>
         </div>
      );
   }
}
