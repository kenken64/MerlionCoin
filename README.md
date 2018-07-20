## The Merlion Stable Coin

npm i nodemon --save-dev
npm i jest --save-dev

Runtime libraries

npm i crypto-js --save
npm i express --save

## Node 1
npm run dev

## Node 2
HTTP_PORT=3002 P2P_PORT=5002 PEERS=ws://localhost:5001 npm run dev

## Node 3
HTTP_PORT=3003 P2P_PORT=5003 PEERS=ws://localhost:5001,ws://localhost:5002 npm run dev

## Proof of work
(PoW) system (or protocol, or function) is an economic measure to deter denial of service attacks and other service abuses such as spam on a network by requiring some work from the service requester, usually meaning processing time by a computer.

* Any peer can replace the chain
* POW makes it expensive to generate corrupt chains
* Is quite manageable to submit one block rather than the entire chain.

Bitcoin POW uses hashcash created since 1997 it is used to prevent for email spamming
Difficulty = 6 
Hash = 000000haxi2910jasdfsjfd

Generate the hash until all the leading zeroes macthes.
A nonce value adjust new hash is generated

The computation work is 'mining'

The difficulty sets a rate of mining 

Bitcoin sets the rate to new block approximately around every 10 minutes.

## 51% attack 

* Dishonest miner owns the 51% of the network power
* A 51% attack for bitcoin would be more than $6 billion 

Dynamic Block adjust difficulty
* lastBlock timestamp + mine rate > currentTime then we know is too easy increase difficulty
 +1 else -1