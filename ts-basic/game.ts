///<reference path="babylon.2.5.d.ts"/>

class Game {
    private _canvas: any; // HTMLCanvasElement
    private _engine: BABYLON.Engine;
    private _scene: BABYLON.Scene;
    private _camera: BABYLON.FreeCamera;

    constructor(canvasElement : string){
        this._canvas = document.getElementById(canvasElement);
        this._engine = new BABYLON.Engine(this._canvas, true);
    }

    createScene() : void {
        
        this._scene = new BABYLON.Scene(this._engine);
        this._camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5,-10), this._scene);
        this._camera.setTarget(BABYLON.Vector3.Zero());
        // this._camera.attachControl(this._canvas, false);

        let light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), this._scene);
        let sphere = BABYLON.MeshBuilder.CreateSphere('sphere1', {segments: 16, diameter: 2}, this._scene);
        let ground = BABYLON.MeshBuilder.CreateGround('ground1', {width: 3, height: 8, subdivisions: 2}, this._scene);

        sphere.position.y = 1;

    }

    render() : void {
        this._engine.runRenderLoop(() => {
            this._scene.render();
        });

        window.addEventListener('resize', () => {
            this._engine.resize();
        });
        
    }

    
}