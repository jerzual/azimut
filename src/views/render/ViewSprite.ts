import { SpriteManager, Sprite } from 'babylonjs';
/**
 * Connects a sprite and its manger with a game object.
 */
class ViewSprite {
    manager:SpriteManager;
    sprite:Sprite;
    x: number;
    y: number;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export default ViewSprite;
