---
title: Ethereum Protocol Call 1 Notes
---

Ethereum has long prevailed as the purposefully-moving whale of blockchain ecosystems. Smaller projects provide cyclical competition grounded in some combination of technical upgrades, but only a few achieve escape velocity. More often than not, marginal technical innovation at a faster speed is no guarantee of success against a successful legacy system. However, every so often, a project will combine a set of technical upgrades that enables a net-new primitive. This provides said project with the necessary jet fuel to achieve escape velocity and (loosely) compete with legacy players on the same footing.

Ethereum has faced credible competition from a more performant ecosystem in Solana, and even Celestia. Both have captured user attention by expanding the possibilities frontier of applications that can exist on the blockchain. While optimists applaud the more performant ecosystems, critics argue that the compromises to censorship-resistance, liveness, and decentralization will harm the ecosystems in the long-term. Regardless, Solana’s and Celestia’s incredibly performant capabilities have elicited a response from Ethereum: a mission of scaling the L1, blobs, and improving UX.

A part of this exploration is discussions about the prioritization of these topics on Ethereum Protocol Calls. I have shared my notes/thoughts from the first one below, and some comparisons to Celestia:

## 1 Focus Area 1 – Solo Stakers / Home Nodes
Usually, the roles of nodes are attestation (coming to consensus which guarantees security) and building (ordering transactions and blocks which guarantees scalability). A new role being proposed is inclusion using FOCIL for censorship-resistance (FOCIL is an inclusion list for transactions that builders and proposers have to abide by). Right now, solo stakes enjoy direct participation because they are sometime a part of the block building process, but this is a bottleneck on scalability and throughput. In the spirit of specialization, can we assign commercial high-resource nodes to build blocks (thereby having no caps on scalability) while home/local nodes focus on inclusion and maybe consensus? While local builders are touted as (1) reliable fallbacks to MEV Boost and (2) backbones of censorship-resistance, we could also implement (1) trusted, neutral relays (ePBS, APS), and (2) allow home nodes to construct Inclusion Lists, respectively. The major issue here would be guaranteeing liveness.

## 2 Focus Area 2 – Path to Single-Slot Finality and Considerations/Concerns
At a fundamental level, Single-Slot Finality is dependent on the consensus mechanism that the network chooses to implement. Celestia runs Tendermint consensus which guarantees single-slot finality, but doesn’t scale well beyond a few hundred nodes. On the flip side, Ethereum runs

GHOST with a Casper finality gadget, relying on probabilistic finality every couple of epochs, but with strong scalability guarantees given their vision of supporting >1 million validators. Now, to achieve Single-Slot Finality on Ethereum, you need a small and active validator set.

To do so, there are two paths, one much easier than the other:

### Capped validator set (Easy Path)
**Orbit (Hard Path):** Keep the general validator set uncapped, but rotate an active validator set where frequency of inclusion in this active set dependents on your stake weight.

There is some debate as to if Single-Slot Finality is the silver bullet solution for consensus, or if more relaxed proposals such as 3-Slot Finality are good enough.

**For SSF:** (1) we must keep the first confirmation on Ethereum or else the value move away to alternative soft confirmation layers like Espresso, (2) interoperability is as fast as finality on the base layer, and (3) SSF prevents reorgs

**Against SSF:** (1) tradeoffs between block time vs. the time to finality and the more important question, (2) While Orbit allows for an uncapped general validator set and allow for direct participation by home nodes, is this direct participation of solo stakers worth the time and cost of implementing Orbit to then implement SSF?

## 3 Comparison to Celestia
Succinctly put, Celestia’s roadmap is close to identical to Ethereum’s roadmap for blob throughput. While Ethereum has the ecosystem advantage, Celestia has the speed-of-development advantage. For example, while Celestia launched with light nodes equipped with erasure encoding that permits Data Availability Sampling, Ethereum is still figuring out the implementation of PeerDAS (their equivalent implementation) and it is far out on the roadmap. Based on this, is it even fair to compare Ethereum directly to Celestia?

_These views/opinions don’t necessarily represent those of Placeholder Management LLC or its team._
