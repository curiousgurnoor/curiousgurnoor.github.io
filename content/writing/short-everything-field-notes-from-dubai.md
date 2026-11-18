---
title: Short Everything? Field Notes from Dubai
---

Dubai was an interesting balance of renewed optimism around long-lasting and proven L1 ecosystems, and extreme pessimism on narrative-driven projects that follow the cyclical boom-bust. My overall takeaway is that Sui is the leader of the midfield of L1 ecosystems while Ethereum has entered wartime mode with detailed priorities (scale the L1, scale blobs, and improve interoperability/UX).

## 1 Sui’s recent technical upgrades
Sui is leading the midfield. Amongst a variety of infrastructure and consumer partnerships announced at Basecamp, Sui introduced a host of interesting technical upgrades too. Walrus has positioned itself as a programmable storage layer, primarily servicing Sui. It is essentially building the same thing as Story/Arweave/Filecoin/Celestia, but now, under the branch of Sui. While it may not compete as the scale of an independent “storage” layer solution, its cool because it enables any application one might be building on Arweave, but now on Sui (and said application gains the network benefits of being built on Sui).

Seal is a new primitive by the Mysten Labs team. It is a decentralized secrets management service that relies on access control policies that are defined and validated on Sui. Think of it as the toolkit necessary to enable private DA and storage (developers can use Seal to secure sensitive data on Walrus). Some of Seal’s most prominent features include (1) client-side encryption and decryption for sensitive data storage, (2) access control policies on Sui to manage decryption keys for authorization, and (3) Seal key servers to validate access control by certain users or applications. This technology enables an interesting set of use cases, such as secure personal data stored on Walrus, implementing secure voting or MEV-resistant trading on Sui, implementing a Seal key server with an MPC committee, or forms of Digital Right Management.

Sui also showcased Mysticeti, which features Mysticeti-C and Mysticeti-FPC. Mysticeti-C/FPC is an improvement over Narwhal/Bullshark, and is currently implemented on Sui with 80% reduced latency while a sustained 200k TPS. Mysticeti-C is a DAG-based 3-round BFT consensus protocol, and FPC extends the implementation with a fast path for transactions that bypass consensus, enabling near instant finality (for something like payments).

Sui has committed to implementing local fee markets, pioneered on Solana. Localized fee markets ensure that transactions only pay for the state they access, and are made possible by implementing parallel execution and some form of state access lists. Sui is implementing a similar approach to Solana, as both of these chains have different accounts and states for different tokens/objects, as compared to Ethereum, which implements a global fee market.

Appchains are prevalent on Ethereum because global fees cannot guarantee that the normal user always pays the same fees regardless of other activity onchain – global fee L1s have failed to deliver a single state machine that can efficiently support many applications.

## 2 Ethereum’s Re-Prioritization
Ethereum’s new war cry is centered around 3 priorities: Scale the L1, Scale Blobs, and Improve UX. All specific initiatives will be prioritized by falling under these three branches. For example, preconfirmations are a mechanism to Scale the L1, while account abstraction helps Improve UX. Overall, it’s good to see this renewed focus.

## 3 Celestia’s Mamo Upgrade
During the conference, Celestia announced their Mamo Upgrade. Mamo-1 is Celestia’s new public testnet, delivering 128MB blocks with 6-second Single-Slot Finality block times. This is a 16x improvement from their current mainnet. For reference, Ethereum DA blobs have a maximum blob data capacity of 0.77 MB per block (6 blobs per block, each blob being 128 KiB). This Celestia testnet also supports light nodes and data availability sampling. The core innovation behind these improvements is their new block propagation mechanism, Vacuum!. I wrote an explanation of Vacuum! here.

## 4 Hindenburg Research time?
I became relatively disillusioned with the extent of shady backdoor deals that obviously benefit an early cash out for the founders at the expense of their investors, their team, and retail investors. In context of recent events, I was able to understand more about how this works. Without commenting on this too much, I think retaining a long-term investment mandate without getting caught up in cylical narrative-driven plays is the only method for sustainable growth as an investment fund. It’s just the right way to make and deliver profits. Tier 1 founders don’t sell secondaries and aren’t peer pressured to raise at unsustainable valuations. For an incredible description of a somewhat broken token market, read this [post](https://x.com/TheiaResearch/status/1907853469920407821) (s/o Felipe). Jokingly, I have titled this section Hindenburg Research as there is probably a lot of money to be made for someone shorting these narrative-driven projects with some obvious founder concerns or short-term outlooks upon TGE. New hedge fund strategy?

_These views/opinions don’t necessarily represent those of Placeholder Management LLC or its team._
