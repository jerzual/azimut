/**
 * map inputs signals to game actions.
 * 
 * 
 */
enum ControlActions{
    CAMERA_PAN,// TODO PAYLOAD AXIS
    CURSOR_MOVE,// select tool
    CAMERA_ROTATE, //rotate slightly around current camera target+
}
interface Controls{
    
}

enum GamepadActions{
    GAMEPAD_CONNECTED,
    GAMEPAD_DISCONNECTED,
}
class GamepadControls{
    gamepad:Gamepad;
    heroIndex:number;
    constructor(gamepad:Gamepad, heroIndex:number){
        this.gamepad = gamepad;
        this.heroIndex = heroIndex;
    }
    initialize(){
        window.addEventListener('gamepadconnected',this.connected);
        window.addEventListener('gamepaddisconnected',this.disconnected);
    }
    connected(event:GamepadEvent){
       const gamepad = event.gamepad;
        console.log(
            `Gamepad connected at index ${gamepad.index}: ${gamepad.displayId}. \n
            \t${gamepad.buttons.length} buttons\t ${gamepad.axes.length} axes.`,
    
        );
    }
    disconnected(event:GamepadEvent){
       const gamepad = event.gamepad;
    }
    leftTrigger(event:GamepadEvent){
        
    }
    rightTrigger(){

    }
    leftButton(){

    }
    rightButton(){

    }

}
