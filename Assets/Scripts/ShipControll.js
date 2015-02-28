#pragma strict

var shipSpeed : float;
var turnSpeed : float;
var tiltSpeed : float;
var myBullet : Transform;
var myMuzzle1 : Transform;
var myMuzzle2 : Transform;
var speedModifier : float;
var boostSpeedMultiplier : float;
var brakeSpeedMultiplier : float;
var fire1CoolDownTime : float;
private var remainingFire1CoolDownTime : float;
private var myGameController : GameController;

function Start () {
	// Find Game Controller
	var myGameControllerObject : GameObject = GameObject.FindWithTag ("GameController");
	if (myGameControllerObject != null)
		myGameController = myGameControllerObject.GetComponent (GameController);
	if (myGameController == null)
		Debug.Log ("Cannot find 'GameController' script");
}

function Update () {
	transform.Translate(Vector3.up*shipSpeed*Time.deltaTime*speedModifier);
	if ( remainingFire1CoolDownTime >= 0) remainingFire1CoolDownTime -= Time.deltaTime;
	
	// Rotate in Vertical Direction
	transform.Rotate(Vector3.left * turnSpeed * Input.GetAxis("Joystick Vertical") * Time.deltaTime);
	//Rotate in Horizontal Direction
	if(! Input.GetButton("Tilt")) transform.Rotate(Vector3.forward * turnSpeed * Input.GetAxis("Joystick Horizontal") * Time.deltaTime);
	// Tilt
	if(Input.GetButton("Tilt")) transform.Rotate(Vector3.up * tiltSpeed * Input.GetAxis("Joystick Horizontal") * Time.deltaTime);
	
	if (Input.GetButton("Up"))
	{
		transform.Rotate(Vector3.left * turnSpeed * Time.deltaTime);
	}
	if (Input.GetButton("Down"))
	{
		transform.Rotate(-1 * Vector3.left * turnSpeed * Time.deltaTime);
	}
	if (Input.GetButton("Left"))
	{
		transform.Rotate(Vector3.forward * turnSpeed * Time.deltaTime);
	}
	if (Input.GetButton("Right"))
	{
		transform.Rotate(-1 * Vector3.forward * turnSpeed * Time.deltaTime);
	}
	if (Input.GetButton("Fire1") && remainingFire1CoolDownTime <= 0)
	{
		Instantiate(myBullet, myMuzzle1.position, myMuzzle1.rotation);
		Instantiate(myBullet, myMuzzle2.position, myMuzzle2.rotation);
		remainingFire1CoolDownTime = fire1CoolDownTime;
	}
	if (Input.GetButtonDown("Boost"))
	{
		speedModifier = boostSpeedMultiplier;
	}
	if (Input.GetButtonUp("Boost"))
	{
		speedModifier = 1;
	}
	if (Input.GetButtonDown("Brake"))
	{
		speedModifier = brakeSpeedMultiplier;
	}
	if (Input.GetButtonUp("Brake"))
	{
		speedModifier = 1;
	}
}

function OnCollisionEnter (collisionInfo : Collision) {
	if (collisionInfo.gameObject.tag == "Terrain")
	{
		myGameController.PlayerIsDead();
		gameObject.Destroy(gameObject);
	}
}