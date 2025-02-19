#!/usr/bin/env node.js

const readline = require("readline");

const input = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

input.question("Enter Agent: ", (putMe) => {
	let Me = Agents();
	while (putMe === Me.name){
		console.log(`This is ${agent.name}`);
		break;
	};
	console.log(`This is your Agent: ${putMe}`);
	input.close();
});

function Agents(){
	let agent = [
	{
		name: "Jett",
		type: "Duelist",
		ult: "Knife"
	},
	{
		name: "Pheonix",
		type: "Duelist",
		ult: "Revive"

	},
	{
		name: "Cypher",
		type: "Sentinel",
		ult: "Scan"
	},
	{
		name: "Vyse",
		type: "Sentinel",
		ult: "Restrict"
	}
	];

	return agent;
};
