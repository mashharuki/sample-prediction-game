# Rugby Prediction Game

> **Note**
>
> _This demo represents an educational example to use a Chainlink system, product, or service and is provided to demonstrate how to interact with Chainlink’s systems, products, and services to integrate them into your own. This template is provided “AS IS” and “AS AVAILABLE” without warranties of any kind, it has not been audited, and it may be missing key checks or error handling to make the usage of the system, product or service more clear. Do not use the code in this example in a production environment without completing your own audits and application of best practices. Neither Chainlink Labs, the Chainlink Foundation, nor Chainlink node operators are responsible for unintended outputs that are generated due to errors in code._

This project has been developed for educational purposes only and is not meant to be used for gambling.

This project demostrates how to build a smart contract based application using real time sports data via [Chainlink Functions](https://docs.chain.link/chainlink-functions).

Additionally, the project showcases how to send automatic payouts using [Chainlink Automation](https://chain.link/automation) and how to transfer tokens cross-chain using [Chainlink CCIP](https://chain.link/cross-chain).

## Requirements

- Node.js version [18](https://nodejs.org/en/download/) or higher

## Getting Started

Clone the repo:

```bash
git clone https://github.com/smartcontractkit/prediction-game
```

It contains two separate projects:

- [`contracts`](./contracts/) - the smart contracts
- [`app`](./app/) - the frontend

Navigate to each directory and follow the instructions in their respective README files, starting with the contracts.

## Solution Overview

<img src="./solution-diagram.png" alt="Solution" width="100%"/><br>

Code references:

1. Predict game result: [PredictionGame.sol#L116](./contracts/contracts/SportsPredictionGame.sol#L116)
2. Check for finished games: [PredictionGame.sol#379](./contracts/contracts/SportsPredictionGame.sol#L379)
3. Request game result: [ResultsConsumer.sol#L65](./contracts/contracts/ResultsConsumer.sol#L65)
4. Fetch game result: [sports-api.js#L63](./contracts/sports-api.js#L63)
5. Fulfill game result request [ResultsConsumer.sol#L105](./contracts/contracts/ResultsConsumer.sol#L105)
6. Claim winnings [SportsPredictionGame.sol#L151](./contracts/contracts/SportsPredictionGame.sol#L151)<br>
   6.1 Transfer winnings [NativeTokenSender.sol#L66](./contracts/contracts/ccip/NativeTokenSender.sol#L66)

## Resources

- [Chainlink Functions Docs](https://docs.chain.link/chainlink-functions)
- [Chainlink Automation Docs](https://docs.chain.link/chainlink-automation/introduction)
- [Chainlink CCIP Docs](https://docs.chain.link/ccip)

## 実際に動かした記録

- コントラクト側

   - インストール

      ```bash
      yarn 
      ```
   
   - コンパイル

      ```bash
      yarn compile
      ```

      ```bash
      Nothing to compile
      ✨  Done in 2.52s.
      ```

   - テスト

      ```bash
      yarn test
      ```

      ```bash
         SportsPredictionGame Unit Tests
         Register
            ✔ should not be able to register game twice (47ms)
            ✔ should not be able to register game with start time in the past
            ✔ should register game
            ✔ should add game to active games
            ✔ should emit GameRegistered event
         Predict
            ✔ should not be able to predict on not registered game
            ✔ should not be able to predict on resolved game (55ms)
            ✔ should not be able to predict game that already started
            ✔ should revert if Result is not Home or Away
            ✔ should revert if wager is 0
            ✔ should revert if wager is less than minimum
            ✔ should revert if wager is more than maximum
            ✔ should register prediction
            ✔ should get past predictions when game is resolved (51ms)
            ✔ should check if prediction is correct (63ms)
            ✔ should emit PredictionRegistered event
         Resolve
            ✔ should not be able to resolve before game finished
            when game is resolved
            ✔ should update game details
            ✔ should remove game from active games
            ✔ should not be able to resolve game twice
            ✔ should emit GameResolved event
         Claim
            ✔ should not be able to claim winnings before game is resolved
            ✔ should not be able to claim winnings if prediction is not correct (74ms)
            ✔ should not claim winnings twice (71ms)
            ✔ should claim winnings if prediction is correct (58ms)
            ✔ should split winnings between results (87ms)
            ✔ should combine winnings if user has multiple predictions (62ms)
            ✔ should refund if there is no winner (52ms)
            ✔ should send request to transfer winnings cross-chain if flag is set (67ms)
            ✔ should emit Claimed event (53ms)
         Automation
            checkUpkeep
            ✔ should return false if there are no active games to resolve
            ✔ should return true if there are active games to resolve
            performUpkeep
            ✔ should request game result from oracle


      33 passing (7s)

      ✨  Done in 15.68s.
      ```
   
   - 

   - 