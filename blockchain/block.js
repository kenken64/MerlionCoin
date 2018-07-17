const SHA256  = require('crypto-js/sha256');
class Block {
    // 1
    constructor(timestamp, lastHash, hash, data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    // 2
    toString(){
        return `Block -
            Timestamp : ${this.timestamp}
            Last Hash : ${this.lastHash.substring(0,10)}
            Hash      : ${this.hash.substring(0,10)}
            Data      : ${this.data}`;
    }

    // 3
    /** static do not need to instance */
    static genesis(){
        return new this('Genesis Time', '------', 'f1r57-h45h', []);
    }


    // 4
    static mineBlock(lastBlock, data){
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = Block.hash(timestamp, lastHash, data);
        return new this(timestamp, lastHash, hash, data);
    }

    // 5
    //back stick construct a string for the hashing
    static hash(timestamp, lastHash, data){
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }

    // 9
    static blockHash(block){
        const { timestamp, lastHash, data } = block;
        return Block.hash(timestamp, lastHash, data);
    }
}

module.exports = Block;