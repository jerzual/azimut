import { Color3 } from 'babylonjs';

export interface Color{
   r:number;
   g:number;
   b:number;
}

export class Colors{
    BLUE:Color3          = new Color3(0,0,0);
    BLUE_DARK:Color3     = new Color3(0,0,0);
    BLUE_DARKER:Color3   = new Color3(0,0,0);
    BLUE_LIGHT:Color3    = new Color3(0,0,0);
    BLUE_LIGHTER:Color3  = new Color3(0,0,0);
}
