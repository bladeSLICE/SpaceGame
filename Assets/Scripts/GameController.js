#pragma strict


private var playerIsDead : boolean;
var playerPrefab : GameObject;
var playerSpawnLocation : Vector3;
var playerSpawnRotation : Quaternion;

function Start () {

}

function Update () {
	if (playerIsDead) SpawnPlayer();
}

function PlayerIsDead() {
	playerIsDead = true;
}

function SpawnPlayer() {
	Instantiate(playerPrefab, playerSpawnLocation, playerSpawnRotation);
}