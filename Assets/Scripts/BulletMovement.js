#pragma strict

var bulletSpeed : float;
var parentSpeed : float;
var bulletExplosion : GameObject;
var bulletLife : float;

function Start () {
	
}

function Update () {
	transform.Translate(Vector3.up*(bulletSpeed+parentSpeed)*Time.deltaTime);
	bulletLife-= Time.deltaTime;
	if (bulletLife <= 0)
	{
		gameObject.Destroy(gameObject);
	}
}

function OnCollisionEnter (collisionInfo : Collision) {
	//if (collisionInfo.gameObject.tag == "Terrain")
	//{
		Instantiate (bulletExplosion, transform.position, transform.rotation);
		gameObject.Destroy(gameObject);
	//}
}