#pragma strict

var health : int;


function Start () {

}

function Update () {

}

function InflictDamage(damage:int)
{
	health-=damage;
}