pragma solidity ^0.5.0;

contract Adoption {
	address owner;
    address[16] public adopters;
		
	constructor () public {
	owner=address(0xB2FF82c3918A17e617eF648843ADBdc9F2cE6fb3);
	}
    
    function adopt(uint petId) public returns payable (uint) {	
        require(petId >= 0 && petId <= 15);
		require(msg.value == 0.1 ether);
		owner.transfer(msg.value);
        adopters[petId] = msg.sender;		
        return petId;
    }
    
    function getAdopters() public view returns (address[16] memory) {
        return adopters;			
    }
}
