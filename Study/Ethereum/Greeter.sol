pragma solidity ^0.4.19;

contract Greeeter
{
	address payable creator;
	string greeting;
	
	constructor (string memory _greeting) public{
	
	creator = msg.sender;
	greeting = _greeting;
	
	}
	
	function greet() public view returns(string) {
		return greeting;
	}
	
	function setGreeting(string memory _newgreeting) public	{
	greeting = _newgreeting;	
	}
	
	function kill()
	{
		if(msg.sender == creator)
			suicide(creator);
	}
}