// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SmartAgent {
    address public owner;


    constructor(address _owner) {
        require(_owner != address(0), "Invalid owner address");
        owner = _owner;
    }

    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }

    struct Message {
        string message;        // The message content
        address sender; // The address of the sender
    }
    // Array to store messages
    Message[] public inBox;

    // Event to notify that a message was sent
    event MessageSent(address indexed sender, address indexed receiver, uint256 messageId, string message);

    // Event to notify that a message was acknowledged
    event MessageAcknowledged(uint256 indexed messageId);


    function addToInbox(address sender, string memory message) public {
        // Ensure a valid address is provided
        require(sender != address(this), "Can't sent message to self");

        // Add the message to the inbox
        inBox.push(Message(message, sender));

        // Emit the message sent event
        emit MessageSent(sender, address(this), inBox.length - 1, message);
    }


    function ackMsg(uint256 messageId) public onlyOwner {
        // Ensure the messageId is valid
        require(messageId < inBox.length, "Invalid message ID");

        // Emit the message acknowledged event
        emit MessageAcknowledged(messageId);

        // Remove the message from the inbox by replacing it with the last message
        // and then popping the array
        inBox[messageId] = inBox[inBox.length - 1];
        inBox.pop();
    }


}
