let app = new PIXI.Application({
    width: 500,
    height: 500
});

document.body.appendChild(app.view);

app.loader
    .add('rider', './source/raptor/export/raptor_pro.json')
    .load(onRiderLoader);
app.stage.interactive = true;


function onRiderLoader(name, res){
    const rider = new PIXI.spine.Spine(res.rider.spineData);

    rider.skeleton.setSkinByName('default');
    rider.skeleton.setSlotsToSetupPose();

    rider.x = 150;
    rider.y = 450;

    rider.scale.set(0.3);


    rider.state.setAnimation(0, 'walk', true);

    app.stage.addChild(rider);

    app.stage.on('mouseup', () => {
        rider.state.setAnimation(0, 'walk', true);
    });
    app.stage.on('mousedown', () => {
        rider.state.setAnimation(0, 'roar', true);
    });

    app.stage.on('touchstart', () => {
        rider.state.setAnimation(0, 'roar', true);
    });
    app.stage.on('touchend', () => {
        rider.state.setAnimation(0, 'walk', true);
    });
}