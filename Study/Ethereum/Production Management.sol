pragma solidity >=0.4.22 <0.6.0;

contract ProductContract {
    struct myStruct{
        uint number;
        string productName;
        string locaton;
        uint timestamp;
        
    }
        uint totalNumber;
    
        //myStruct 구조체 배열

        event product (uint number, string productName, string locaton, uint timestamp);
        
        myStruct[] public products;

    
    function addProduct (uint _id, string memory _name, string memory _location) public {
        products.push(myStruct(_id, _name, _location, block.timestamp));
        totalNumber++;
        emit product(_id, _name, _location, block.timestamp);

    }

    function getNumberProducts() public view returns(uint) {
        return totalNumber;
        
    }
    
    // 상품id, 상품이름, 상품 생산지, 날짜 반환
    function getProduct(uint _id) public view returns(uint, string memory, string memory, uint) { 
        return (products[_id].number, products[_id].productName, products[_id].locaton, products[_id].timestamp);    
    }
}

