// Collision

#pragma strict

//var enemyExplosion : GameObject;
//var playerExplosion : GameObject;
//
//var speed : float;
//var zMin : float;
//
//var scoreValue : int;
//
//private var myGameController : GameController;
//
//function Start () {
//	var myGameControllerObject : GameObject = GameObject.FindWithTag ("GameController");
//	if (myGameControllerObject != null)
//		myGameController = myGameControllerObject.GetComponent (GameController);
//	if (myGameController == null)
//		Debug.Log ("Cannot find 'GameController' script");
//}
//
//function Update () {
//	transform.Translate (-Vector3.forward * speed * Time.deltaTime, Space.World);
//	
//	if (transform.position.z < zMin)
//		Destroy (gameObject);
//}
//
//function OnCollisionEnter (collisionInfo : Collision) {
//	myGameController.AddScore (scoreValue);
//	Instantiate (enemyExplosion, transform.position, transform.rotation);
//	if (collisionInfo.gameObject.tag == "Player") {
//		Instantiate (playerExplosion, collisionInfo.transform.position, collisionInfo.transform.rotation);
//		myGameController.GameOver ();
//	}
//	Destroy (collisionInfo.gameObject);
//	Destroy (gameObject);
//}