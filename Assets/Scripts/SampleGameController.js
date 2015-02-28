// GUI

#pragma strict

var enemy : GameObject;
var enemyCount : int;

private var score : int;
private var gameOver : boolean;
private var restart : boolean;

function Awake () {
	score = 0;
	gameOver = false;
	restart = false;
}

function Start () {
	SpawnWaves ();
}

function Update () {

}

function OnGUI () {
    GUI.Label (Rect (10, 10, 100, 20), "Score: " + score);
    if (gameOver)
    	GUI.Label (Rect (Screen.width / 2 - 40, Screen.height / 3, 80, 20), "Game Over!");
    if (restart) {
    	if (GUI.Button (Rect (Screen.width - 70, 10, 60, 20), "Restart")) {
    		Application.LoadLevel (Application.loadedLevel);
    	}
    }
}

function SpawnWaves () {
	yield WaitForSeconds (1.0);
	
	while (true) {
		for (var i : int = 0; i < enemyCount; i++) {
			var spawnPosition : Vector3 = Vector3 (Random.Range (-8.5, 8.5), 0.0, 25.0);
			Instantiate (enemy, spawnPosition, Quaternion.identity);
			
			yield WaitForSeconds (0.5);
		}
		
		yield WaitForSeconds (3.0);
		
		if (gameOver) {
			restart = true;
			return;
		}
	}
}

function AddScore (newScoreValue : int) {
	score += newScoreValue;
}

function GameOver () {
	gameOver = true;
}