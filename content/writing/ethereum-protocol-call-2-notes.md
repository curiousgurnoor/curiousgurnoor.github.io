---
title: Ethereum Protocol Call 2 Notes
---

The focus this time was on scaling the Ethereum execution layer in the short-term. The technology necessary to do this is almost ready. zkVMs with real-time proving and data availability sampling with PeerDAS will be shipped in the next 6-12 months. Implementing this technology to scale the L1 execution is important because execution fees are the most proven source of revenue, and contentious execution state has an obvious moat that, for example, the data availability layer doesn’t have. DeFi liquidity is tied to the state, and cannot be accessed without access to said state, so most DeFi liquidity should exist on the L1.

What are the primary limits on execution?

1. The amount of state

2. The amount of size of data

3. The resources for execution

The big research proposals explored during the call were Delayed Execution and Block Level Access Lists.

- Delayed Execution allows Ethereum to decrease its block times by asynchronously allowing for execution to take place, and permits validators to attest to the validity of a block before it has been executed. Instead of a block time looking like block is proposed → block is propagated → block is executed → block is attested to, the path becomes block is proposed → block is propagated → block is optimistically attested to, and asynchronously, the block will be executed. Now, this raises issues of its own (spam attacks through the free DA problem), but there are teams that already implement asynchronous, or delayed, execution.

- Block Level Access Lists proposes a snapshot of the block that the validators can use to parallelize transactions themselves, and parallelize state read/writes and execution of a single transaction. This is a very new proposal and needs to figure out how it will be composable with FOCIL, which is a slated proposal that allows for the censorship-resistant inclusion of transactions.

Ethereum researchers (Justin Drake) also proposed a new branding for Ethereum: the lean Ethereum, with focuses on simplifying principles of robustness and censorship-resistance at the DL, CL, and EL (data layer, consensus layer, and execution layer). Furthermore, Vitalik proposed that we adopt principles from existing successful open-source self-hosted ecosystems (for example, the self-hosted AI model community) when trying to become less reliant on RPC services.

_These views/opinions don’t necessarily represent those of Placeholder Management LLC or its team._
