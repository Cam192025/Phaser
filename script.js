import ASSETS from '../assets.js';

export default class  coin extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y)
    {
        super(scene,x,y, ASSETS.spritesheet.tiles.key, 93);

        scene.add.existing(this);
        scene.Physics.add.existing(this);
    }

}