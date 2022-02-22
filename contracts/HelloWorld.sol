// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.8.0;

contract HelloWorld {
    string public message = "Ola Semana Solidity!";

    function greetings() public view returns (string memory) {
        return message;
    }
}