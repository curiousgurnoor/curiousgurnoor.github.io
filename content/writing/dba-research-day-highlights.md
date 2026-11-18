---
title: DBA Research Day Highlights
---

DBA Research Day was quite insightful, and below I have highlighted a couple of talks (and my notes/thoughts). All make for some very interesting discussions!

## 1 Tokens Are Broken
In this talk, Felipe discusses how tokens are currently like lemon markets in that investors have asymmetric information about the token value due to insider market maker deals, etc., so they are pricing all tokens much lower and with a higher risk premium. These weak token offerings leads investors do demand higher return which increases the cops of capital for tokens, leading teams to forgo launching tokens, causing investors to demand more from a limited set of tokens, and the death spiral continues. Currently, the feedback loop for capital allocators hasn’t been with paying customers (who provide indication of product-market fit), but with sophisticated mercenary investors that help “pump” the token for long enough. Speculative token dynamics create the illusion of product-market fit. The solution is found through an example of Spence’s Frogs. Let’s say that the alpha frog (most likely to mate) elicits a deep croak. Suddenly, the average frogs are incentivized to recreate the deep croak because that is the most successful, and this trickles down. This applies to token market right now, where, if one or a couple of tokens begin to adopt, say, transparency frameworks, disclosure requirements, transparent token holders, development roadmaps, etc., we may see investor activity flock there, incentivizing all assets to adopt these frameworks. Hester Pierce is working on this with the Tokens Safe Harbor Proposal.

## 2 Eclipse & GigaCompute
Ben presented about Eclipse’s pioneering approach to leverage advanced distributed systems and AI training principles to increase performance of blockchain systems, in line with the Eclipse Performance Thesis. This was centered around 4 areas of innovation: Network, Hardware, Runtime, and Database. On the network side, Eclipse is working to implement probabilistic execution preconfirmations, performance- and app-specific sequencing, and latency-optimized transaction routing. For hardware, Ben proposed taking a serious look at more performant off-the-shelf hardware as well as AI accelerators that can beef up L1/L2 performance. With the obvious price of these hardware components, I’m wondering if it’s time we accept that specialization of node functions is vital to a performant ecosystem. Maybe there is a way where we intentionally allow, say, sequencers, block builders, provers, etc. to be fat, computationally-intensive, and limited, but introduce a “checksand-balances” feature amongst all other participating nodes to ensure they don’t act maliciously? On the runtime side, Ben proposed a self-improving runtime environment based on reinforcement learning and a hybrid model of parallelization that optimistically parallelizes transactions, but with hints about the state they touch to prevent interference. Lastly, for the database, Eclipse is focusing on fast state commitments for light clients and optimized caching.

Their end goal with all of these improvements is to be the first chain to support a new class of highlyperformant applications in the gaming, on-chain AI training/inferencing, and DePIN domains.

## 3 MPC and Polaris
Dev Ohja shared his vision for how MPC is an incredibly underrated technology right now, and how it can be utilized to ensure (private) custody of user funds/data, and how it can be used for applications to understand user behavior without too much leakage. The end goal for user experience onchain should be:

- Money is interoperable anywhere

- Custody logic is interoperable anywhere

- Apps feature low-latency interactions

- Users own and custody data, and can selectively share with apps that shouldn’t know user history

We can leverage global, local, and shared MPC committees to provide users with (private) selfcustody of funds while making actions slash able (similar to PoS), while we can utilize local fast MPC subcommittees to perform real-time tasks (inclusion preconfirmations, bridging and routing, etc.). This is interesting because of its applications to the onchain agentic interactions world (how can we delegate funds to an onchain agent to trade with appropriately, while retaining access privileges and authentication details?).

_These views/opinions don’t necessarily represent those of Placeholder Management LLC or its team._
