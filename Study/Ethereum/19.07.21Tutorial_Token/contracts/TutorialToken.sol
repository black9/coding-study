pragma solidity ^0.5.0;

import "./forERC20.sol";

contract TutorialToken is ERC20 {
	string public name = "TutorialToken";
	string public symbol = "TT";
	uint8 public decimals = 2;
	uint public INITIAL_SUPPLY = 12000;

	constructor() public {
		_mint(address(0xB2FF82c3918A17e617eF648843ADBdc9F2cE6fb3), INITIAL_SUPPLY);
	}
	
	function mint(uint amount) public{
		_mint(msg.sender, amount);
	}
	
	function burn(uint amount) public{
		_burn(msg.sender, amount);
	}
	
	function tokenbuy() public payable{
		_mint(msg.sender, msg.value/1000000000000000);
	}
	
	function tokensell(uint amount) public payable {
		_burn(msg.sender, amount);
		msg.sender.transfer(amount*1000000000000000);
	}
	
}
