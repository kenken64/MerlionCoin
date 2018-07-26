// 10
const express = require("express");
const Blockchain = require("../blockchain");
const bodyParser = require("body-parser");
//12
const P2pServer = require("./p2p-server");

//15
const Wallet = require("../wallet");
const TransactionPool = require("../wallet/transaction-pool");

const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();
app.use(bodyParser.json());
const bc = new Blockchain();
const wallet = new Wallet();
const tp = new TransactionPool();
//12
const p2pServer = new P2pServer(bc, tp);

app.get("/blocks", (req, res) => {
  res.json(bc.chain);
});

app.post("/mine", (req, res) => {
  console.log(req.body);
  const block = bc.addBlock(req.body.data);
  console.log(`New block added : ${block.toString()}`);
  p2pServer.syncChains();
  res.redirect("/blocks");
});

app.get("/transactions", (req, res) => {
  res.json(tp.transactions);
});

app.post("/transact", (req, res) => {
  const { recipient, amount } = req.body;
  const transaction = wallet.createTransaction(recipient, amount, tp);
  console.log(">>>  " + transaction);
  p2pServer.broadcastTransaction(transaction);
  res.redirect("/transactions");
});

app.listen(HTTP_PORT, () => {
  console.log(`Listening on port ${HTTP_PORT}`);
});
//12
p2pServer.listen();
