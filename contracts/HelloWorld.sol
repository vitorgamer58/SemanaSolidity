// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

contract HelloWorld {
    string public message = "Ola Semana Solidity!";

    string public constant MESSAGE_CONSTANT = "Ola constante!";

    address public constant DONATION_ADDRESS =
        0x918af765D9AF1aF74B3F7b0F460D271580d75deB;

    address public immutable OWNER;

    constructor () {
        OWNER = msg.sender;
    }

    function greetings() public pure returns (string memory) {
        string memory internalmessage = "Ola Semana Solidity!";

        return internalmessage;
    }

    function getBlockNumber() public view returns (uint256) {
        return block.timestamp;
    }
}
