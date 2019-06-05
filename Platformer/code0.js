gdjs.MenuCode = {};
gdjs.MenuCode.GDPlayerObjects1= [];
gdjs.MenuCode.GDPlayerObjects2= [];
gdjs.MenuCode.GDPlatformObjects1= [];
gdjs.MenuCode.GDPlatformObjects2= [];
gdjs.MenuCode.GDJumpthruObjects1= [];
gdjs.MenuCode.GDJumpthruObjects2= [];
gdjs.MenuCode.GDTiledGrassPlatformObjects1= [];
gdjs.MenuCode.GDTiledGrassPlatformObjects2= [];
gdjs.MenuCode.GDTiledCastlePlatformObjects1= [];
gdjs.MenuCode.GDTiledCastlePlatformObjects2= [];
gdjs.MenuCode.GDMovingPlatformObjects1= [];
gdjs.MenuCode.GDMovingPlatformObjects2= [];
gdjs.MenuCode.GDGoLeftObjects1= [];
gdjs.MenuCode.GDGoLeftObjects2= [];
gdjs.MenuCode.GDGoRightObjects1= [];
gdjs.MenuCode.GDGoRightObjects2= [];
gdjs.MenuCode.GDLadderObjects1= [];
gdjs.MenuCode.GDLadderObjects2= [];
gdjs.MenuCode.GDPlayerHitBoxObjects1= [];
gdjs.MenuCode.GDPlayerHitBoxObjects2= [];
gdjs.MenuCode.GDSlimeWalkObjects1= [];
gdjs.MenuCode.GDSlimeWalkObjects2= [];
gdjs.MenuCode.GDFlyObjects1= [];
gdjs.MenuCode.GDFlyObjects2= [];
gdjs.MenuCode.GDCloudObjects1= [];
gdjs.MenuCode.GDCloudObjects2= [];
gdjs.MenuCode.GDBackgroundObjectsObjects1= [];
gdjs.MenuCode.GDBackgroundObjectsObjects2= [];
gdjs.MenuCode.GDPlayObjects1= [];
gdjs.MenuCode.GDPlayObjects2= [];
gdjs.MenuCode.GDCoinObjects1= [];
gdjs.MenuCode.GDCoinObjects2= [];
gdjs.MenuCode.GDCoinIconObjects1= [];
gdjs.MenuCode.GDCoinIconObjects2= [];
gdjs.MenuCode.GDLeftButtonObjects1= [];
gdjs.MenuCode.GDLeftButtonObjects2= [];
gdjs.MenuCode.GDRightButtonObjects1= [];
gdjs.MenuCode.GDRightButtonObjects2= [];
gdjs.MenuCode.GDJumpButtonObjects1= [];
gdjs.MenuCode.GDJumpButtonObjects2= [];
gdjs.MenuCode.GDArrowButtonsBgObjects1= [];
gdjs.MenuCode.GDArrowButtonsBgObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MenuCode.GDPlayObjects1});gdjs.MenuCode.eventsList0x67fe1c = function(runtimeScene) {

{

gdjs.MenuCode.GDPlayObjects1.createFrom(runtimeScene.getObjects("Play"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Stage1", false);
}}

}


}; //End of gdjs.MenuCode.eventsList0x67fe1c
gdjs.MenuCode.eventsList0xb23e0 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0x67fe1c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MenuCode.eventsList0xb23e0


gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDPlayerObjects1.length = 0;
gdjs.MenuCode.GDPlayerObjects2.length = 0;
gdjs.MenuCode.GDPlatformObjects1.length = 0;
gdjs.MenuCode.GDPlatformObjects2.length = 0;
gdjs.MenuCode.GDJumpthruObjects1.length = 0;
gdjs.MenuCode.GDJumpthruObjects2.length = 0;
gdjs.MenuCode.GDTiledGrassPlatformObjects1.length = 0;
gdjs.MenuCode.GDTiledGrassPlatformObjects2.length = 0;
gdjs.MenuCode.GDTiledCastlePlatformObjects1.length = 0;
gdjs.MenuCode.GDTiledCastlePlatformObjects2.length = 0;
gdjs.MenuCode.GDMovingPlatformObjects1.length = 0;
gdjs.MenuCode.GDMovingPlatformObjects2.length = 0;
gdjs.MenuCode.GDGoLeftObjects1.length = 0;
gdjs.MenuCode.GDGoLeftObjects2.length = 0;
gdjs.MenuCode.GDGoRightObjects1.length = 0;
gdjs.MenuCode.GDGoRightObjects2.length = 0;
gdjs.MenuCode.GDLadderObjects1.length = 0;
gdjs.MenuCode.GDLadderObjects2.length = 0;
gdjs.MenuCode.GDPlayerHitBoxObjects1.length = 0;
gdjs.MenuCode.GDPlayerHitBoxObjects2.length = 0;
gdjs.MenuCode.GDSlimeWalkObjects1.length = 0;
gdjs.MenuCode.GDSlimeWalkObjects2.length = 0;
gdjs.MenuCode.GDFlyObjects1.length = 0;
gdjs.MenuCode.GDFlyObjects2.length = 0;
gdjs.MenuCode.GDCloudObjects1.length = 0;
gdjs.MenuCode.GDCloudObjects2.length = 0;
gdjs.MenuCode.GDBackgroundObjectsObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjectsObjects2.length = 0;
gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;
gdjs.MenuCode.GDCoinObjects1.length = 0;
gdjs.MenuCode.GDCoinObjects2.length = 0;
gdjs.MenuCode.GDCoinIconObjects1.length = 0;
gdjs.MenuCode.GDCoinIconObjects2.length = 0;
gdjs.MenuCode.GDLeftButtonObjects1.length = 0;
gdjs.MenuCode.GDLeftButtonObjects2.length = 0;
gdjs.MenuCode.GDRightButtonObjects1.length = 0;
gdjs.MenuCode.GDRightButtonObjects2.length = 0;
gdjs.MenuCode.GDJumpButtonObjects1.length = 0;
gdjs.MenuCode.GDJumpButtonObjects2.length = 0;
gdjs.MenuCode.GDArrowButtonsBgObjects1.length = 0;
gdjs.MenuCode.GDArrowButtonsBgObjects2.length = 0;

gdjs.MenuCode.eventsList0xb23e0(runtimeScene);
return;

}
gdjs['MenuCode'] = gdjs.MenuCode;
