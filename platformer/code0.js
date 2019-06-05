gdjs.Stage1Code = {};
gdjs.Stage1Code.GDPlayerObjects1_1final = [];

gdjs.Stage1Code.forEachCount0_3 = 0;

gdjs.Stage1Code.forEachCount1_3 = 0;

gdjs.Stage1Code.forEachIndex3 = 0;

gdjs.Stage1Code.forEachObjects3 = [];

gdjs.Stage1Code.forEachTotalCount3 = 0;

gdjs.Stage1Code.GDPlayerObjects1= [];
gdjs.Stage1Code.GDPlayerObjects2= [];
gdjs.Stage1Code.GDPlayerObjects3= [];
gdjs.Stage1Code.GDPlatformObjects1= [];
gdjs.Stage1Code.GDPlatformObjects2= [];
gdjs.Stage1Code.GDPlatformObjects3= [];
gdjs.Stage1Code.GDJumpthruObjects1= [];
gdjs.Stage1Code.GDJumpthruObjects2= [];
gdjs.Stage1Code.GDJumpthruObjects3= [];
gdjs.Stage1Code.GDTiledGrassPlatformObjects1= [];
gdjs.Stage1Code.GDTiledGrassPlatformObjects2= [];
gdjs.Stage1Code.GDTiledGrassPlatformObjects3= [];
gdjs.Stage1Code.GDTiledCastlePlatformObjects1= [];
gdjs.Stage1Code.GDTiledCastlePlatformObjects2= [];
gdjs.Stage1Code.GDTiledCastlePlatformObjects3= [];
gdjs.Stage1Code.GDMovingPlatformObjects1= [];
gdjs.Stage1Code.GDMovingPlatformObjects2= [];
gdjs.Stage1Code.GDMovingPlatformObjects3= [];
gdjs.Stage1Code.GDGoLeftObjects1= [];
gdjs.Stage1Code.GDGoLeftObjects2= [];
gdjs.Stage1Code.GDGoLeftObjects3= [];
gdjs.Stage1Code.GDGoRightObjects1= [];
gdjs.Stage1Code.GDGoRightObjects2= [];
gdjs.Stage1Code.GDGoRightObjects3= [];
gdjs.Stage1Code.GDLadderObjects1= [];
gdjs.Stage1Code.GDLadderObjects2= [];
gdjs.Stage1Code.GDLadderObjects3= [];
gdjs.Stage1Code.GDPlayerHitBoxObjects1= [];
gdjs.Stage1Code.GDPlayerHitBoxObjects2= [];
gdjs.Stage1Code.GDPlayerHitBoxObjects3= [];
gdjs.Stage1Code.GDSlimeWalkObjects1= [];
gdjs.Stage1Code.GDSlimeWalkObjects2= [];
gdjs.Stage1Code.GDSlimeWalkObjects3= [];
gdjs.Stage1Code.GDFlyObjects1= [];
gdjs.Stage1Code.GDFlyObjects2= [];
gdjs.Stage1Code.GDFlyObjects3= [];
gdjs.Stage1Code.GDCloudObjects1= [];
gdjs.Stage1Code.GDCloudObjects2= [];
gdjs.Stage1Code.GDCloudObjects3= [];
gdjs.Stage1Code.GDBackgroundObjectsObjects1= [];
gdjs.Stage1Code.GDBackgroundObjectsObjects2= [];
gdjs.Stage1Code.GDBackgroundObjectsObjects3= [];
gdjs.Stage1Code.GDScoreObjects1= [];
gdjs.Stage1Code.GDScoreObjects2= [];
gdjs.Stage1Code.GDScoreObjects3= [];
gdjs.Stage1Code.GDCoinObjects1= [];
gdjs.Stage1Code.GDCoinObjects2= [];
gdjs.Stage1Code.GDCoinObjects3= [];
gdjs.Stage1Code.GDCoinIconObjects1= [];
gdjs.Stage1Code.GDCoinIconObjects2= [];
gdjs.Stage1Code.GDCoinIconObjects3= [];
gdjs.Stage1Code.GDLeftButtonObjects1= [];
gdjs.Stage1Code.GDLeftButtonObjects2= [];
gdjs.Stage1Code.GDLeftButtonObjects3= [];
gdjs.Stage1Code.GDRightButtonObjects1= [];
gdjs.Stage1Code.GDRightButtonObjects2= [];
gdjs.Stage1Code.GDRightButtonObjects3= [];
gdjs.Stage1Code.GDJumpButtonObjects1= [];
gdjs.Stage1Code.GDJumpButtonObjects2= [];
gdjs.Stage1Code.GDJumpButtonObjects3= [];
gdjs.Stage1Code.GDArrowButtonsBgObjects1= [];
gdjs.Stage1Code.GDArrowButtonsBgObjects2= [];
gdjs.Stage1Code.GDArrowButtonsBgObjects3= [];

gdjs.Stage1Code.conditionTrue_0 = {val:false};
gdjs.Stage1Code.condition0IsTrue_0 = {val:false};
gdjs.Stage1Code.condition1IsTrue_0 = {val:false};
gdjs.Stage1Code.condition2IsTrue_0 = {val:false};
gdjs.Stage1Code.condition3IsTrue_0 = {val:false};
gdjs.Stage1Code.conditionTrue_1 = {val:false};
gdjs.Stage1Code.condition0IsTrue_1 = {val:false};
gdjs.Stage1Code.condition1IsTrue_1 = {val:false};
gdjs.Stage1Code.condition2IsTrue_1 = {val:false};
gdjs.Stage1Code.condition3IsTrue_1 = {val:false};


gdjs.Stage1Code.eventsList0x7862ac = function(runtimeScene) {

{

gdjs.Stage1Code.GDPlayerHitBoxObjects2.createFrom(gdjs.Stage1Code.GDPlayerHitBoxObjects1);


gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Stage1Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( !(gdjs.Stage1Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Stage1Code.condition0IsTrue_0.val = true;
        gdjs.Stage1Code.GDPlayerHitBoxObjects2[k] = gdjs.Stage1Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.Stage1Code.GDPlayerHitBoxObjects2.length = k;}if (gdjs.Stage1Code.condition0IsTrue_0.val) {
gdjs.Stage1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Stage1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Stage1Code.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

/* Reuse gdjs.Stage1Code.GDPlayerHitBoxObjects1 */

gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Stage1Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.Stage1Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Stage1Code.condition0IsTrue_0.val = true;
        gdjs.Stage1Code.GDPlayerHitBoxObjects1[k] = gdjs.Stage1Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.Stage1Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.Stage1Code.condition0IsTrue_0.val) {
gdjs.Stage1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


}; //End of gdjs.Stage1Code.eventsList0x7862ac
gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDGoLeftObjects1Objects = Hashtable.newFrom({"GoLeft": gdjs.Stage1Code.GDGoLeftObjects1});gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.Stage1Code.GDMovingPlatformObjects1});gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDGoRightObjects1Objects = Hashtable.newFrom({"GoRight": gdjs.Stage1Code.GDGoRightObjects1});gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.Stage1Code.GDMovingPlatformObjects1});gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDGoLeftObjects1Objects = Hashtable.newFrom({"GoLeft": gdjs.Stage1Code.GDGoLeftObjects1});gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46Stage1Code_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.Stage1Code.GDSlimeWalkObjects1, "Fly": gdjs.Stage1Code.GDFlyObjects1});gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDGoRightObjects1Objects = Hashtable.newFrom({"GoRight": gdjs.Stage1Code.GDGoRightObjects1});gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46Stage1Code_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.Stage1Code.GDSlimeWalkObjects1, "Fly": gdjs.Stage1Code.GDFlyObjects1});gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.Stage1Code.GDPlayerHitBoxObjects1});gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46Stage1Code_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.Stage1Code.GDSlimeWalkObjects1, "Fly": gdjs.Stage1Code.GDFlyObjects1});gdjs.Stage1Code.eventsList0x68c324 = function(runtimeScene) {

}; //End of gdjs.Stage1Code.eventsList0x68c324
gdjs.Stage1Code.eventsList0x7ceafc = function(runtimeScene) {

{

/* Reuse gdjs.Stage1Code.GDFlyObjects2 */
/* Reuse gdjs.Stage1Code.GDSlimeWalkObjects2 */

gdjs.Stage1Code.forEachTotalCount3 = 0;
gdjs.Stage1Code.forEachObjects3.length = 0;
gdjs.Stage1Code.forEachCount0_3 = gdjs.Stage1Code.GDSlimeWalkObjects2.length;
gdjs.Stage1Code.forEachTotalCount3 += gdjs.Stage1Code.forEachCount0_3;
gdjs.Stage1Code.forEachObjects3.push.apply(gdjs.Stage1Code.forEachObjects3,gdjs.Stage1Code.GDSlimeWalkObjects2);
gdjs.Stage1Code.forEachCount1_3 = gdjs.Stage1Code.GDFlyObjects2.length;
gdjs.Stage1Code.forEachTotalCount3 += gdjs.Stage1Code.forEachCount1_3;
gdjs.Stage1Code.forEachObjects3.push.apply(gdjs.Stage1Code.forEachObjects3,gdjs.Stage1Code.GDFlyObjects2);
for(gdjs.Stage1Code.forEachIndex3 = 0;gdjs.Stage1Code.forEachIndex3 < gdjs.Stage1Code.forEachTotalCount3;++gdjs.Stage1Code.forEachIndex3) {
gdjs.Stage1Code.GDFlyObjects3.length = 0;

gdjs.Stage1Code.GDSlimeWalkObjects3.length = 0;


if (gdjs.Stage1Code.forEachIndex3 < gdjs.Stage1Code.forEachCount0_3) {
    gdjs.Stage1Code.GDSlimeWalkObjects3.push(gdjs.Stage1Code.forEachObjects3[gdjs.Stage1Code.forEachIndex3]);
}
else if (gdjs.Stage1Code.forEachIndex3 < gdjs.Stage1Code.forEachCount0_3+gdjs.Stage1Code.forEachCount1_3) {
    gdjs.Stage1Code.GDFlyObjects3.push(gdjs.Stage1Code.forEachObjects3[gdjs.Stage1Code.forEachIndex3]);
}
if (true) {
{runtimeScene.getVariables().get("Score").add(50);
}}
}

}


}; //End of gdjs.Stage1Code.eventsList0x7ceafc
gdjs.Stage1Code.eventsList0x7ce9cc = function(runtimeScene) {

{

gdjs.Stage1Code.GDPlayerHitBoxObjects2.createFrom(gdjs.Stage1Code.GDPlayerHitBoxObjects1);


gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Stage1Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs.Stage1Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Stage1Code.condition0IsTrue_0.val = true;
        gdjs.Stage1Code.GDPlayerHitBoxObjects2[k] = gdjs.Stage1Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.Stage1Code.GDPlayerHitBoxObjects2.length = k;}if (gdjs.Stage1Code.condition0IsTrue_0.val) {
gdjs.Stage1Code.GDFlyObjects2.createFrom(gdjs.Stage1Code.GDFlyObjects1);

/* Reuse gdjs.Stage1Code.GDPlayerHitBoxObjects2 */
gdjs.Stage1Code.GDSlimeWalkObjects2.createFrom(gdjs.Stage1Code.GDSlimeWalkObjects1);

{for(var i = 0, len = gdjs.Stage1Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.Stage1Code.GDSlimeWalkObjects2[i].setAnimation(1);
}
for(var i = 0, len = gdjs.Stage1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Stage1Code.GDFlyObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Stage1Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.Stage1Code.GDSlimeWalkObjects2[i].activateBehavior("PlatformerObject", true);
}
for(var i = 0, len = gdjs.Stage1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Stage1Code.GDFlyObjects2[i].activateBehavior("PlatformerObject", true);
}
}{for(var i = 0, len = gdjs.Stage1Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.Stage1Code.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
for(var i = 0, len = gdjs.Stage1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Stage1Code.GDFlyObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
}{for(var i = 0, len = gdjs.Stage1Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.Stage1Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.Stage1Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.Stage1Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 100, 1);
}
{ //Subevents
gdjs.Stage1Code.eventsList0x7ceafc(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Stage1Code.GDFlyObjects1 */
/* Reuse gdjs.Stage1Code.GDPlayerHitBoxObjects1 */
/* Reuse gdjs.Stage1Code.GDSlimeWalkObjects1 */

gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Stage1Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.Stage1Code.GDPlayerHitBoxObjects1[i].getY() >= (( gdjs.Stage1Code.GDFlyObjects1.length === 0 ) ? (( gdjs.Stage1Code.GDSlimeWalkObjects1.length === 0 ) ? 0 :gdjs.Stage1Code.GDSlimeWalkObjects1[0].getPointY("")) :gdjs.Stage1Code.GDFlyObjects1[0].getPointY("")) - (gdjs.Stage1Code.GDPlayerHitBoxObjects1[i].getHeight()) + (( gdjs.Stage1Code.GDFlyObjects1.length === 0 ) ? (( gdjs.Stage1Code.GDSlimeWalkObjects1.length === 0 ) ? 0 :gdjs.Stage1Code.GDSlimeWalkObjects1[0].getHeight()) :gdjs.Stage1Code.GDFlyObjects1[0].getHeight()) / 2 ) {
        gdjs.Stage1Code.condition0IsTrue_0.val = true;
        gdjs.Stage1Code.GDPlayerHitBoxObjects1[k] = gdjs.Stage1Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.Stage1Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.Stage1Code.condition0IsTrue_0.val) {
}

}


}; //End of gdjs.Stage1Code.eventsList0x7ce9cc
gdjs.Stage1Code.eventsList0x68d44c = function(runtimeScene) {

{

gdjs.Stage1Code.GDFlyObjects2.createFrom(gdjs.Stage1Code.GDFlyObjects1);

gdjs.Stage1Code.GDSlimeWalkObjects2.createFrom(gdjs.Stage1Code.GDSlimeWalkObjects1);


gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Stage1Code.GDSlimeWalkObjects2.length;i<l;++i) {
    if ( gdjs.Stage1Code.GDSlimeWalkObjects2[i].getVariableNumber(gdjs.Stage1Code.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        gdjs.Stage1Code.condition0IsTrue_0.val = true;
        gdjs.Stage1Code.GDSlimeWalkObjects2[k] = gdjs.Stage1Code.GDSlimeWalkObjects2[i];
        ++k;
    }
}
gdjs.Stage1Code.GDSlimeWalkObjects2.length = k;for(var i = 0, k = 0, l = gdjs.Stage1Code.GDFlyObjects2.length;i<l;++i) {
    if ( gdjs.Stage1Code.GDFlyObjects2[i].getVariableNumber(gdjs.Stage1Code.GDFlyObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        gdjs.Stage1Code.condition0IsTrue_0.val = true;
        gdjs.Stage1Code.GDFlyObjects2[k] = gdjs.Stage1Code.GDFlyObjects2[i];
        ++k;
    }
}
gdjs.Stage1Code.GDFlyObjects2.length = k;}if (gdjs.Stage1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Stage1Code.GDFlyObjects2 */
/* Reuse gdjs.Stage1Code.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.Stage1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Stage1Code.GDFlyObjects2[i].addForce(-(300), 0, 0);
}
}{for(var i = 0, len = gdjs.Stage1Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.Stage1Code.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
for(var i = 0, len = gdjs.Stage1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Stage1Code.GDFlyObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Stage1Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.Stage1Code.GDSlimeWalkObjects2[i].flipX(false);
}
for(var i = 0, len = gdjs.Stage1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Stage1Code.GDFlyObjects2[i].flipX(false);
}
}}

}


{

gdjs.Stage1Code.GDFlyObjects2.createFrom(gdjs.Stage1Code.GDFlyObjects1);

gdjs.Stage1Code.GDSlimeWalkObjects2.createFrom(gdjs.Stage1Code.GDSlimeWalkObjects1);


gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Stage1Code.GDSlimeWalkObjects2.length;i<l;++i) {
    if ( gdjs.Stage1Code.GDSlimeWalkObjects2[i].getVariableNumber(gdjs.Stage1Code.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")) == 0 ) {
        gdjs.Stage1Code.condition0IsTrue_0.val = true;
        gdjs.Stage1Code.GDSlimeWalkObjects2[k] = gdjs.Stage1Code.GDSlimeWalkObjects2[i];
        ++k;
    }
}
gdjs.Stage1Code.GDSlimeWalkObjects2.length = k;for(var i = 0, k = 0, l = gdjs.Stage1Code.GDFlyObjects2.length;i<l;++i) {
    if ( gdjs.Stage1Code.GDFlyObjects2[i].getVariableNumber(gdjs.Stage1Code.GDFlyObjects2[i].getVariables().get("GoingLeft")) == 0 ) {
        gdjs.Stage1Code.condition0IsTrue_0.val = true;
        gdjs.Stage1Code.GDFlyObjects2[k] = gdjs.Stage1Code.GDFlyObjects2[i];
        ++k;
    }
}
gdjs.Stage1Code.GDFlyObjects2.length = k;}if (gdjs.Stage1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Stage1Code.GDFlyObjects2 */
/* Reuse gdjs.Stage1Code.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.Stage1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Stage1Code.GDFlyObjects2[i].addForce(300, 0, 0);
}
}{for(var i = 0, len = gdjs.Stage1Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.Stage1Code.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
for(var i = 0, len = gdjs.Stage1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Stage1Code.GDFlyObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Stage1Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.Stage1Code.GDSlimeWalkObjects2[i].flipX(true);
}
for(var i = 0, len = gdjs.Stage1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Stage1Code.GDFlyObjects2[i].flipX(true);
}
}}

}


{



}


{

/* Reuse gdjs.Stage1Code.GDFlyObjects1 */
gdjs.Stage1Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
/* Reuse gdjs.Stage1Code.GDSlimeWalkObjects1 */

gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
gdjs.Stage1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDPlayerHitBoxObjects1Objects, gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46Stage1Code_46GDFlyObjects1Objects, false, runtimeScene, false);
}if (gdjs.Stage1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Stage1Code.eventsList0x7ce9cc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Stage1Code.eventsList0x68d44c
gdjs.Stage1Code.eventsList0x68c6e4 = function(runtimeScene) {

{

/* Reuse gdjs.Stage1Code.GDFlyObjects1 */
/* Reuse gdjs.Stage1Code.GDSlimeWalkObjects1 */

gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Stage1Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.Stage1Code.GDSlimeWalkObjects1[i].getOpacity() == 0 ) {
        gdjs.Stage1Code.condition0IsTrue_0.val = true;
        gdjs.Stage1Code.GDSlimeWalkObjects1[k] = gdjs.Stage1Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.Stage1Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Stage1Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.Stage1Code.GDFlyObjects1[i].getOpacity() == 0 ) {
        gdjs.Stage1Code.condition0IsTrue_0.val = true;
        gdjs.Stage1Code.GDFlyObjects1[k] = gdjs.Stage1Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.Stage1Code.GDFlyObjects1.length = k;}if (gdjs.Stage1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Stage1Code.GDFlyObjects1 */
/* Reuse gdjs.Stage1Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.Stage1Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDSlimeWalkObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Stage1Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDFlyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.Stage1Code.eventsList0x68c6e4
gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.Stage1Code.GDPlayerHitBoxObjects1});gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.Stage1Code.GDCoinObjects1});gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDLeftButtonObjects1Objects = Hashtable.newFrom({"LeftButton": gdjs.Stage1Code.GDLeftButtonObjects1});gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDRightButtonObjects1Objects = Hashtable.newFrom({"RightButton": gdjs.Stage1Code.GDRightButtonObjects1});gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDJumpButtonObjects1Objects = Hashtable.newFrom({"JumpButton": gdjs.Stage1Code.GDJumpButtonObjects1});gdjs.Stage1Code.eventsList0xb2490 = function(runtimeScene) {

{


gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
gdjs.Stage1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Stage1Code.condition0IsTrue_0.val) {
gdjs.Stage1Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.Stage1Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDPlayerHitBoxObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 0, 1);
}}

}


{


{
gdjs.Stage1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.Stage1Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.Stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDPlayerObjects1[i].setPosition((( gdjs.Stage1Code.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.Stage1Code.GDPlayerHitBoxObjects1[0].getPointX("")) - 12,(( gdjs.Stage1Code.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.Stage1Code.GDPlayerHitBoxObjects1[0].getPointY("")));
}
}}

}


{



}


{

gdjs.Stage1Code.GDPlayerObjects1.length = 0;


gdjs.Stage1Code.condition0IsTrue_0.val = false;
gdjs.Stage1Code.condition1IsTrue_0.val = false;
{
gdjs.Stage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "RShift");
}if ( gdjs.Stage1Code.condition0IsTrue_0.val ) {
{
{gdjs.Stage1Code.conditionTrue_1 = gdjs.Stage1Code.condition1IsTrue_0;
gdjs.Stage1Code.GDPlayerObjects1_1final.length = 0;gdjs.Stage1Code.condition0IsTrue_1.val = false;
gdjs.Stage1Code.condition1IsTrue_1.val = false;
{
gdjs.Stage1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
for(var i = 0, k = 0, l = gdjs.Stage1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Stage1Code.GDPlayerObjects2[i].getAnimation() == 0 ) {
        gdjs.Stage1Code.condition0IsTrue_1.val = true;
        gdjs.Stage1Code.GDPlayerObjects2[k] = gdjs.Stage1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Stage1Code.GDPlayerObjects2.length = k;if( gdjs.Stage1Code.condition0IsTrue_1.val ) {
    gdjs.Stage1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Stage1Code.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Stage1Code.GDPlayerObjects1_1final.indexOf(gdjs.Stage1Code.GDPlayerObjects2[j]) === -1 )
            gdjs.Stage1Code.GDPlayerObjects1_1final.push(gdjs.Stage1Code.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.Stage1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
for(var i = 0, k = 0, l = gdjs.Stage1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Stage1Code.GDPlayerObjects2[i].getAnimation() == 2 ) {
        gdjs.Stage1Code.condition1IsTrue_1.val = true;
        gdjs.Stage1Code.GDPlayerObjects2[k] = gdjs.Stage1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Stage1Code.GDPlayerObjects2.length = k;if( gdjs.Stage1Code.condition1IsTrue_1.val ) {
    gdjs.Stage1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Stage1Code.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Stage1Code.GDPlayerObjects1_1final.indexOf(gdjs.Stage1Code.GDPlayerObjects2[j]) === -1 )
            gdjs.Stage1Code.GDPlayerObjects1_1final.push(gdjs.Stage1Code.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.Stage1Code.GDPlayerObjects1.createFrom(gdjs.Stage1Code.GDPlayerObjects1_1final);
}
}
}}
if (gdjs.Stage1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 100, 1);
}}

}


{

gdjs.Stage1Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Stage1Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.Stage1Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Stage1Code.condition0IsTrue_0.val = true;
        gdjs.Stage1Code.GDPlayerHitBoxObjects1[k] = gdjs.Stage1Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.Stage1Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.Stage1Code.condition0IsTrue_0.val) {
gdjs.Stage1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Stage1Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Stage1Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.Stage1Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Stage1Code.condition0IsTrue_0.val = true;
        gdjs.Stage1Code.GDPlayerHitBoxObjects1[k] = gdjs.Stage1Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.Stage1Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.Stage1Code.condition0IsTrue_0.val) {
gdjs.Stage1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Stage1Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Stage1Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.Stage1Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Stage1Code.condition0IsTrue_0.val = true;
        gdjs.Stage1Code.GDPlayerHitBoxObjects1[k] = gdjs.Stage1Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.Stage1Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.Stage1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Stage1Code.eventsList0x7862ac(runtimeScene);} //End of subevents
}

}


{


gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
gdjs.Stage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Stage1Code.condition0IsTrue_0.val) {
gdjs.Stage1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
gdjs.Stage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Stage1Code.condition0IsTrue_0.val) {
gdjs.Stage1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDPlayerObjects1[i].flipX(false);
}
}}

}


{



}


{


{
gdjs.Stage1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Stage1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Stage1Code.GDPlayerObjects1[0].getPointX("")), "", 0);
}}

}


{



}


{


gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
gdjs.Stage1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Stage1Code.condition0IsTrue_0.val) {
gdjs.Stage1Code.GDGoLeftObjects1.createFrom(runtimeScene.getObjects("GoLeft"));
gdjs.Stage1Code.GDGoRightObjects1.createFrom(runtimeScene.getObjects("GoRight"));
{for(var i = 0, len = gdjs.Stage1Code.GDGoLeftObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDGoLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Stage1Code.GDGoRightObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDGoRightObjects1[i].hide();
}
}}

}


{

gdjs.Stage1Code.GDGoLeftObjects1.createFrom(runtimeScene.getObjects("GoLeft"));
gdjs.Stage1Code.GDMovingPlatformObjects1.createFrom(runtimeScene.getObjects("MovingPlatform"));

gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
gdjs.Stage1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDGoLeftObjects1Objects, gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDMovingPlatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.Stage1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Stage1Code.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.Stage1Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Stage1Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDMovingPlatformObjects1[i].addForce(-(150), 0, 1);
}
}}

}


{

gdjs.Stage1Code.GDGoRightObjects1.createFrom(runtimeScene.getObjects("GoRight"));
gdjs.Stage1Code.GDMovingPlatformObjects1.createFrom(runtimeScene.getObjects("MovingPlatform"));

gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
gdjs.Stage1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDGoRightObjects1Objects, gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDMovingPlatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.Stage1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Stage1Code.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.Stage1Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Stage1Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDMovingPlatformObjects1[i].addForce(150, 0, 1);
}
}}

}


{



}


{



}


{


gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
gdjs.Stage1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Stage1Code.condition0IsTrue_0.val) {
gdjs.Stage1Code.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
{for(var i = 0, len = gdjs.Stage1Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDFlyObjects1[i].activateBehavior("PlatformerObject", false);
}
}}

}


{



}


{

gdjs.Stage1Code.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
gdjs.Stage1Code.GDGoLeftObjects1.createFrom(runtimeScene.getObjects("GoLeft"));
gdjs.Stage1Code.GDSlimeWalkObjects1.createFrom(runtimeScene.getObjects("SlimeWalk"));

gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
gdjs.Stage1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDGoLeftObjects1Objects, gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46Stage1Code_46GDFlyObjects1Objects, false, runtimeScene, false);
}if (gdjs.Stage1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Stage1Code.GDFlyObjects1 */
/* Reuse gdjs.Stage1Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.Stage1Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDSlimeWalkObjects1[i].returnVariable(gdjs.Stage1Code.GDSlimeWalkObjects1[i].getVariables().get("GoingLeft")).setNumber(1);
}
for(var i = 0, len = gdjs.Stage1Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDFlyObjects1[i].returnVariable(gdjs.Stage1Code.GDFlyObjects1[i].getVariables().get("GoingLeft")).setNumber(1);
}
}}

}


{

gdjs.Stage1Code.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
gdjs.Stage1Code.GDGoRightObjects1.createFrom(runtimeScene.getObjects("GoRight"));
gdjs.Stage1Code.GDSlimeWalkObjects1.createFrom(runtimeScene.getObjects("SlimeWalk"));

gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
gdjs.Stage1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDGoRightObjects1Objects, gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46Stage1Code_46GDFlyObjects1Objects, false, runtimeScene, false);
}if (gdjs.Stage1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Stage1Code.GDFlyObjects1 */
/* Reuse gdjs.Stage1Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.Stage1Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDSlimeWalkObjects1[i].returnVariable(gdjs.Stage1Code.GDSlimeWalkObjects1[i].getVariables().get("GoingLeft")).setNumber(0);
}
for(var i = 0, len = gdjs.Stage1Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDFlyObjects1[i].returnVariable(gdjs.Stage1Code.GDFlyObjects1[i].getVariables().get("GoingLeft")).setNumber(0);
}
}}

}


{

gdjs.Stage1Code.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
gdjs.Stage1Code.GDSlimeWalkObjects1.createFrom(runtimeScene.getObjects("SlimeWalk"));

gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Stage1Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.Stage1Code.GDSlimeWalkObjects1[i].getAnimation() == 0 ) {
        gdjs.Stage1Code.condition0IsTrue_0.val = true;
        gdjs.Stage1Code.GDSlimeWalkObjects1[k] = gdjs.Stage1Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.Stage1Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Stage1Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.Stage1Code.GDFlyObjects1[i].getAnimation() == 0 ) {
        gdjs.Stage1Code.condition0IsTrue_0.val = true;
        gdjs.Stage1Code.GDFlyObjects1[k] = gdjs.Stage1Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.Stage1Code.GDFlyObjects1.length = k;}if (gdjs.Stage1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Stage1Code.eventsList0x68d44c(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.Stage1Code.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
gdjs.Stage1Code.GDSlimeWalkObjects1.createFrom(runtimeScene.getObjects("SlimeWalk"));

gdjs.Stage1Code.condition0IsTrue_0.val = false;
gdjs.Stage1Code.condition1IsTrue_0.val = false;
gdjs.Stage1Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Stage1Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.Stage1Code.GDSlimeWalkObjects1[i].getAnimation() == 1 ) {
        gdjs.Stage1Code.condition0IsTrue_0.val = true;
        gdjs.Stage1Code.GDSlimeWalkObjects1[k] = gdjs.Stage1Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.Stage1Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Stage1Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.Stage1Code.GDFlyObjects1[i].getAnimation() == 1 ) {
        gdjs.Stage1Code.condition0IsTrue_0.val = true;
        gdjs.Stage1Code.GDFlyObjects1[k] = gdjs.Stage1Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.Stage1Code.GDFlyObjects1.length = k;}if ( gdjs.Stage1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Stage1Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.Stage1Code.GDSlimeWalkObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Stage1Code.condition1IsTrue_0.val = true;
        gdjs.Stage1Code.GDSlimeWalkObjects1[k] = gdjs.Stage1Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.Stage1Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Stage1Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.Stage1Code.GDFlyObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Stage1Code.condition1IsTrue_0.val = true;
        gdjs.Stage1Code.GDFlyObjects1[k] = gdjs.Stage1Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.Stage1Code.GDFlyObjects1.length = k;}if ( gdjs.Stage1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Stage1Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( !(gdjs.Stage1Code.GDSlimeWalkObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Stage1Code.condition2IsTrue_0.val = true;
        gdjs.Stage1Code.GDSlimeWalkObjects1[k] = gdjs.Stage1Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.Stage1Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Stage1Code.GDFlyObjects1.length;i<l;++i) {
    if ( !(gdjs.Stage1Code.GDFlyObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Stage1Code.condition2IsTrue_0.val = true;
        gdjs.Stage1Code.GDFlyObjects1[k] = gdjs.Stage1Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.Stage1Code.GDFlyObjects1.length = k;}}
}
if (gdjs.Stage1Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Stage1Code.GDFlyObjects1 */
/* Reuse gdjs.Stage1Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.Stage1Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDSlimeWalkObjects1[i].activateBehavior("PlatformerObject", false);
}
for(var i = 0, len = gdjs.Stage1Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDFlyObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.Stage1Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDSlimeWalkObjects1[i].setOpacity(gdjs.Stage1Code.GDSlimeWalkObjects1[i].getOpacity() - (50));
}
for(var i = 0, len = gdjs.Stage1Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDFlyObjects1[i].setOpacity(gdjs.Stage1Code.GDFlyObjects1[i].getOpacity() - (50));
}
}
{ //Subevents
gdjs.Stage1Code.eventsList0x68c6e4(runtimeScene);} //End of subevents
}

}


{



}


{



}


{

gdjs.Stage1Code.GDCoinObjects1.createFrom(runtimeScene.getObjects("Coin"));
gdjs.Stage1Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.Stage1Code.condition0IsTrue_0.val = false;
gdjs.Stage1Code.condition1IsTrue_0.val = false;
{
gdjs.Stage1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDPlayerHitBoxObjects1Objects, gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDCoinObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Stage1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Stage1Code.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.Stage1Code.GDCoinObjects1[i].getOpacity() == 255 ) {
        gdjs.Stage1Code.condition1IsTrue_0.val = true;
        gdjs.Stage1Code.GDCoinObjects1[k] = gdjs.Stage1Code.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.Stage1Code.GDCoinObjects1.length = k;}}
if (gdjs.Stage1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Stage1Code.GDCoinObjects1 */
{for(var i = 0, len = gdjs.Stage1Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDCoinObjects1[i].setOpacity(254);
}
}{runtimeScene.getVariables().get("Score").add(100);
}}

}


{

gdjs.Stage1Code.GDCoinObjects1.createFrom(runtimeScene.getObjects("Coin"));

gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Stage1Code.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.Stage1Code.GDCoinObjects1[i].getOpacity() < 255 ) {
        gdjs.Stage1Code.condition0IsTrue_0.val = true;
        gdjs.Stage1Code.GDCoinObjects1[k] = gdjs.Stage1Code.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.Stage1Code.GDCoinObjects1.length = k;}if (gdjs.Stage1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Stage1Code.GDCoinObjects1 */
{for(var i = 0, len = gdjs.Stage1Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDCoinObjects1[i].setOpacity(gdjs.Stage1Code.GDCoinObjects1[i].getOpacity() - (255));
}
}{for(var i = 0, len = gdjs.Stage1Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDCoinObjects1[i].addForce(0, -(30), 0);
}
}}

}


{

gdjs.Stage1Code.GDCoinObjects1.createFrom(runtimeScene.getObjects("Coin"));

gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Stage1Code.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.Stage1Code.GDCoinObjects1[i].getOpacity() == 0 ) {
        gdjs.Stage1Code.condition0IsTrue_0.val = true;
        gdjs.Stage1Code.GDCoinObjects1[k] = gdjs.Stage1Code.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.Stage1Code.GDCoinObjects1.length = k;}if (gdjs.Stage1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Stage1Code.GDCoinObjects1 */
{for(var i = 0, len = gdjs.Stage1Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}}

}


{



}


{



}


{


{
gdjs.Stage1Code.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
{for(var i = 0, len = gdjs.Stage1Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDScoreObjects1[i].setString("x " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Score"))));
}
}}

}


{



}


{


gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
gdjs.Stage1Code.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.Stage1Code.condition0IsTrue_0.val) {
gdjs.Stage1Code.GDArrowButtonsBgObjects1.createFrom(runtimeScene.getObjects("ArrowButtonsBg"));
gdjs.Stage1Code.GDJumpButtonObjects1.createFrom(runtimeScene.getObjects("JumpButton"));
gdjs.Stage1Code.GDLeftButtonObjects1.createFrom(runtimeScene.getObjects("LeftButton"));
gdjs.Stage1Code.GDRightButtonObjects1.createFrom(runtimeScene.getObjects("RightButton"));
{for(var i = 0, len = gdjs.Stage1Code.GDLeftButtonObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDLeftButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.Stage1Code.GDRightButtonObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDRightButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.Stage1Code.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDJumpButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.Stage1Code.GDArrowButtonsBgObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDArrowButtonsBgObjects1[i].hide();
}
}}

}


{


gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
gdjs.Stage1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Stage1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{

gdjs.Stage1Code.GDLeftButtonObjects1.createFrom(runtimeScene.getObjects("LeftButton"));

gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
gdjs.Stage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDLeftButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Stage1Code.condition0IsTrue_0.val) {
gdjs.Stage1Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.Stage1Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.Stage1Code.GDRightButtonObjects1.createFrom(runtimeScene.getObjects("RightButton"));

gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
gdjs.Stage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDRightButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Stage1Code.condition0IsTrue_0.val) {
gdjs.Stage1Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.Stage1Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.Stage1Code.GDJumpButtonObjects1.createFrom(runtimeScene.getObjects("JumpButton"));

gdjs.Stage1Code.condition0IsTrue_0.val = false;
{
gdjs.Stage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Stage1Code.mapOfGDgdjs_46Stage1Code_46GDJumpButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Stage1Code.condition0IsTrue_0.val) {
gdjs.Stage1Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.Stage1Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Stage1Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 100, 1);
}}

}


}; //End of gdjs.Stage1Code.eventsList0xb2490


gdjs.Stage1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Stage1Code.GDPlayerObjects1.length = 0;
gdjs.Stage1Code.GDPlayerObjects2.length = 0;
gdjs.Stage1Code.GDPlayerObjects3.length = 0;
gdjs.Stage1Code.GDPlatformObjects1.length = 0;
gdjs.Stage1Code.GDPlatformObjects2.length = 0;
gdjs.Stage1Code.GDPlatformObjects3.length = 0;
gdjs.Stage1Code.GDJumpthruObjects1.length = 0;
gdjs.Stage1Code.GDJumpthruObjects2.length = 0;
gdjs.Stage1Code.GDJumpthruObjects3.length = 0;
gdjs.Stage1Code.GDTiledGrassPlatformObjects1.length = 0;
gdjs.Stage1Code.GDTiledGrassPlatformObjects2.length = 0;
gdjs.Stage1Code.GDTiledGrassPlatformObjects3.length = 0;
gdjs.Stage1Code.GDTiledCastlePlatformObjects1.length = 0;
gdjs.Stage1Code.GDTiledCastlePlatformObjects2.length = 0;
gdjs.Stage1Code.GDTiledCastlePlatformObjects3.length = 0;
gdjs.Stage1Code.GDMovingPlatformObjects1.length = 0;
gdjs.Stage1Code.GDMovingPlatformObjects2.length = 0;
gdjs.Stage1Code.GDMovingPlatformObjects3.length = 0;
gdjs.Stage1Code.GDGoLeftObjects1.length = 0;
gdjs.Stage1Code.GDGoLeftObjects2.length = 0;
gdjs.Stage1Code.GDGoLeftObjects3.length = 0;
gdjs.Stage1Code.GDGoRightObjects1.length = 0;
gdjs.Stage1Code.GDGoRightObjects2.length = 0;
gdjs.Stage1Code.GDGoRightObjects3.length = 0;
gdjs.Stage1Code.GDLadderObjects1.length = 0;
gdjs.Stage1Code.GDLadderObjects2.length = 0;
gdjs.Stage1Code.GDLadderObjects3.length = 0;
gdjs.Stage1Code.GDPlayerHitBoxObjects1.length = 0;
gdjs.Stage1Code.GDPlayerHitBoxObjects2.length = 0;
gdjs.Stage1Code.GDPlayerHitBoxObjects3.length = 0;
gdjs.Stage1Code.GDSlimeWalkObjects1.length = 0;
gdjs.Stage1Code.GDSlimeWalkObjects2.length = 0;
gdjs.Stage1Code.GDSlimeWalkObjects3.length = 0;
gdjs.Stage1Code.GDFlyObjects1.length = 0;
gdjs.Stage1Code.GDFlyObjects2.length = 0;
gdjs.Stage1Code.GDFlyObjects3.length = 0;
gdjs.Stage1Code.GDCloudObjects1.length = 0;
gdjs.Stage1Code.GDCloudObjects2.length = 0;
gdjs.Stage1Code.GDCloudObjects3.length = 0;
gdjs.Stage1Code.GDBackgroundObjectsObjects1.length = 0;
gdjs.Stage1Code.GDBackgroundObjectsObjects2.length = 0;
gdjs.Stage1Code.GDBackgroundObjectsObjects3.length = 0;
gdjs.Stage1Code.GDScoreObjects1.length = 0;
gdjs.Stage1Code.GDScoreObjects2.length = 0;
gdjs.Stage1Code.GDScoreObjects3.length = 0;
gdjs.Stage1Code.GDCoinObjects1.length = 0;
gdjs.Stage1Code.GDCoinObjects2.length = 0;
gdjs.Stage1Code.GDCoinObjects3.length = 0;
gdjs.Stage1Code.GDCoinIconObjects1.length = 0;
gdjs.Stage1Code.GDCoinIconObjects2.length = 0;
gdjs.Stage1Code.GDCoinIconObjects3.length = 0;
gdjs.Stage1Code.GDLeftButtonObjects1.length = 0;
gdjs.Stage1Code.GDLeftButtonObjects2.length = 0;
gdjs.Stage1Code.GDLeftButtonObjects3.length = 0;
gdjs.Stage1Code.GDRightButtonObjects1.length = 0;
gdjs.Stage1Code.GDRightButtonObjects2.length = 0;
gdjs.Stage1Code.GDRightButtonObjects3.length = 0;
gdjs.Stage1Code.GDJumpButtonObjects1.length = 0;
gdjs.Stage1Code.GDJumpButtonObjects2.length = 0;
gdjs.Stage1Code.GDJumpButtonObjects3.length = 0;
gdjs.Stage1Code.GDArrowButtonsBgObjects1.length = 0;
gdjs.Stage1Code.GDArrowButtonsBgObjects2.length = 0;
gdjs.Stage1Code.GDArrowButtonsBgObjects3.length = 0;

gdjs.Stage1Code.eventsList0xb2490(runtimeScene);
return;

}
gdjs['Stage1Code'] = gdjs.Stage1Code;
