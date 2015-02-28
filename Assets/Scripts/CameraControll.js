#pragma strict

var cameraDistance : float;
var horizontalRotationSpeed : float;
var verticalRotationSpeed : float;
private var myCamera : GameObject;
private var verticalAngle : float;
private var horizontalAngle : float;
var angleReductionFactor : float;
private var veritcalOffset : float;
private var horizontalOffset : float;
var maxVerticalOffset : float;
var maxHorizontalOffset : float;
var offsetSpeed : float;


function Start () {
	myCamera = GameObject.FindWithTag ("MainCamera");
	//if (myCamera != null)
		//myCamera = myCamera.GetComponent (MainCamera);
	if (myCamera == null)
		Debug.Log ("Cannot find 'Main Camera' script");
	horizontalOffset = 0;
	veritcalOffset = 0;
		
}

function Update () {
	
	
	if (Mathf.Abs(Input.GetAxis("Camera Vertical")) > 0.2)
	{
		verticalAngle += verticalRotationSpeed * Time.deltaTime * Input.GetAxis("Camera Vertical");
		veritcalOffset += verticalRotationSpeed * Time.deltaTime *Input.GetAxis("Camera Vertical");
	}
	else
	{
		verticalAngle *= angleReductionFactor;
		veritcalOffset *= angleReductionFactor;
	}
	if (Mathf.Abs(Input.GetAxis("Camera Horizontal")) > 0.2)
	{
		horizontalAngle += horizontalRotationSpeed * Time.deltaTime * Input.GetAxis("Camera Horizontal");
		horizontalOffset += horizontalRotationSpeed * Time.deltaTime *Input.GetAxis("Camera Horizontal");
	}
	else
	{
		horizontalAngle *= angleReductionFactor;
		horizontalOffset *= angleReductionFactor;
	}
	
	if (horizontalAngle >= 180) horizontalAngle -= 360;
	if (horizontalAngle <= -180) horizontalAngle += 360;
	if (verticalAngle >= 180) verticalAngle -= 360;
	if (verticalAngle <= -180) verticalAngle += 360;
	
	if (horizontalOffset >= maxHorizontalOffset) horizontalOffset = maxHorizontalOffset;
	if (horizontalOffset <= -1*maxHorizontalOffset) horizontalOffset = -1*maxHorizontalOffset;
	if (veritcalOffset >= maxVerticalOffset) veritcalOffset = maxVerticalOffset;
	if (veritcalOffset <= -1*maxVerticalOffset) veritcalOffset = -1*maxVerticalOffset;
	
	myCamera.transform.position = transform.position - transform.up*cameraDistance;
	myCamera.transform.rotation = transform.rotation;
	myCamera.transform.Rotate(-90,0,0);
	
	// Rotate in Vertical Direction
	//myCamera.transform.RotateAround(transform.position,Vector3.forward,verticalAngle);
	//myCamera.transform.RotateAround(transform.position,Vector3.up,horizontalAngle);
	
	// Camera Offsets
	myCamera.transform.Translate(horizontalOffset,veritcalOffset,0);
	
	// Camera Rotation
	myCamera.transform.Rotate(90-Mathf.Rad2Deg*Mathf.Atan2(cameraDistance,veritcalOffset),-90+Mathf.Rad2Deg*Mathf.Atan2(cameraDistance,horizontalOffset),0);
	// Mathf.Rad2Deg*Mathf.Atan2(cameraDistance,horizontalOffset)
	// Mathf.Rad2Deg*Mathf.Atan2(cameraDistance,veritcalOffset)
	
	
	

}

function CameraFOV(fov : float)
{
	myCamera.camera.fieldOfView = fov;
}