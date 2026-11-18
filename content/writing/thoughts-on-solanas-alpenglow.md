---
title: Thoughts on Solana's Alpenglow
---

There is something beautiful about the aligned energy in the Solana ecosystem right now. Reminiscent of the early days of Ethereum, where the limits of the chain are continuing to be tested, and everyone understands that the sole goal is centered around expanding the performance frontier. In Solana’s case, Increase Latency and Reduce Bandwidth.

This is reinforced with the recent launch of Alpenglow, a new consensus mechanism proposal for Solana. Alpenglow introduces Votor and Rotor. Votor is a new algorithm for voting and finalization logic that concurrently runs a fast-finality single-round vote for transactions that reach 80% of all stake votes, and a two-round vote for transactions that reach 60% of all stake votes. This decreases Solana’s time-to-finality from a median 12.8 seconds to a median 150 milliseconds. Rotor is an improvement on Turbine, Solana’s current block propagation mechanism, that introduces a single layer of relay nodes specialized in sending shreds of a block to the network as its being produced, rather that a multi-layer tree network.

A couple of observations and interesting points I noted:

- While most Byzantine Fault Tolerant mechanisms achieve resilience against adversaries that control up to 33% of stake, Alpenglow makes the bold assumption that resilience against adversaries that control 20% of stake is resilient enough. This introduces performance upgrades through Votor, which allows finalization of a transaction in one round of voting.

- In Rotor, the leader of a slot continuously builds blocks and sends shreds of these blocks to a selected sample of relays that are chosen randomly, but based on stake. These relays are then responsible for sharing these shreds redundantly with the rest of the network based on a stake-decreasing order of nodes.

- In consensus mechanisms, there are usually timeout periods that help advance the chain in the face of delayed communication or malicious actors. While some mechanisms wait for the timeout regardless of correct or incorrect action, Alpenglow doesn’t wait for the timeout to end if the correct action is taken; it advances as soon as the correct action is taken.

- Votes from validators are not processed as onchain transactions anymore, but are aggregated off chain and posted occasionally onchain. This has a large impact on validator costs as validators spend upwards of 2 SOL per day on voting. Now, validators (especially long-tail ones) will be able to maximize their profits and won’t be over-reliant on inflation rewards (there are other factors though, discussed below).

- From folks I’ve talked to at Anza, Votor is a sure-shot implementation that will replace Solana’s TowerBFT and Proof-of-History. However, there are concerns about the efficiency of Rotor and if it’s actually that much more performant than Turbine.

Question: Rotor and Votor rewards are given to relays and voters, respectively, that are usually selected in a stake-weighted way. Doesn’t this make the rich richer since large-stake validators are selected more often, so they receive a majority of the rewards, making long-tail validators more dependent on inflation? This came up as I noticed most rewards are organized by stake-weight in decreasing order, which is an obvious optimization for performance, but may have an adverse effect on favoring high-stake validators rather than long-tail ones. I think this has important implications for SIMD-228, which is back in discussion given the reduction in costs from validator voting.

_These views/opinions don’t necessarily represent those of Placeholder Management LLC or its team._
