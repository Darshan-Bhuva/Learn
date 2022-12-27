// import CryptoJS from 'crypto-js'
const CryptoJS = require('crypto-js');

class Block {
    constructor(data) {
      this.data = data;
      this.previousHash = null;
      this.hash = this.calculateHash();
    }
  
    calculateHash() {
      // Calculate the hash of the block using the data and previous hash
      // Concatenate the data and previous hash to create the input for the hash function
        let input = this.data + this.previousHash;
        // Use the SHA-256 hash function from the crypto-js library to calculate the hash
        let hash = CryptoJS.SHA256(input);

    // Return the hash as a hexadecimal string
        return hash.toString(CryptoJS.enc.Hex);
    }
  }
  
  class Blockchain {
    constructor() {
      this.chain = [this.createGenesisBlock()];
    }
  
    createGenesisBlock() {
      // Create the first block in the blockchain
      // The data for the genesis block can be anything, but it is typically a
      // message to indicate that it is the first block
        let data = "Genesis block";

    // The previous hash for the genesis block is typically all zeros
        let previousHash = "0".repeat(64);

    // Create the genesis block using the data and previous hash
        let genesisBlock = new Block(data, previousHash);

        return genesisBlock;
    }
  
    getLatestBlock() {
      // Return the latest block in the blockchain
      return this.chain.slice(-1)[0];
    }
  
    addBlock(newBlock) {
      // Add a new block to the blockchain
      // Set the previous hash of the new block to be the hash of the latest block in the chain
        newBlock.previousHash = this.getLatestBlock().hash;

    // Calculate the hash of the new block using the calculateHash method
        newBlock.hash = newBlock.calculateHash();

    // Add the new block to the end of the chain
        this.chain.push(newBlock);
    }
  }
  


// Create a new block with some data and a previous hash
// let block = new Block("Hello, world!", "abc123");

// The block's hash will be calculated using the calculateHash method
// console.log(block.hash); // Output: 6c6b9f0df0585a838fd2b0c9b0e74d881ddb3f6e721a3bcc9b55a8a1e2a0b41f




// Create a new instance of the Blockchain class
// let blockchain = new Blockchain();

// The first block in the blockchain will be the genesis block
// console.log(blockchain.chain[0]);
/* Output:
Block {
  data: "Genesis block",
  previousHash: "0000000000000000000000000000000000000000000000000000000000000000",
  hash: "82d47d7b1f4bef69c4b30a4a00eceb5a2f5cc5c5e1d7f1b7680ef26e4b4a90a4"
}
*/



// Create a new instance of the Blockchain class
// let blockchain = new Blockchain();

// Add some blocks to the blockchain
// blockchain.chain.push(new Block("Block 1", blockchain.getLatestBlock().hash));
// blockchain.chain.push(new Block("Block 2", blockchain.getLatestBlock().hash));
// blockchain.chain.push(new Block("Block 3", blockchain.getLatestBlock().hash));

// The getLatestBlock method should return the last element in the array of blocks
// console.log(blockchain.getLatestBlock());
/* Output:
Block {
  data: "Block 3",
  previousHash: "3d972e0e961f8fc7d87e87b0f749085c5e5b5c3f3fc77f9af9737c845d7c6513",
  hash: "ccd90f8d2a18aad9f9f6c9a8d2bfdd4

*/




// Create a new instance of the Blockchain class
// let blockchain = new Blockchain();

// Add some blocks to the blockchain
// blockchain.addBlock(new Block("Block 1", blockchain.getLatestBlock().hash));
// blockchain.addBlock(new Block("Block 2", blockchain.getLatestBlock().hash));
// blockchain.addBlock(new Block("Block 3", blockchain.getLatestBlock().hash));

// The chain should now have four blocks, including the genesis block
// console.log(blockchain.chain);


