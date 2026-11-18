---
title: Flexible Programmable Sequencing
---

Much of this piece is inspired by and, in part, a reflection of “SoK: Cross-Domain MEV” by Conor McMenamin.

There is an obvious rise of shared sequencers, settlement layers, and superbuilders. This shift has brought the concept of cross-chain extractable value to the forefront, challenging us to quantify and mitigate its impact across multiple domains. I wanted to utilize this piece to document and discuss some key learning from Conor’s piece, “SoK: Cross-Domain MEV”.

One of the most pressing issues in this space is time-dependent extractable value. The naive solution of simply decreasing block confirmation times comes with its own set of challenges. Increasing base chain throughput risks centralization, while fast inclusion confirmations on slower chains face technical hurdles. However, the idea of a decentralized shared sequencer network (see Astria) with immediate soft commitments and atomic cross-chain transactions is pretty interesting. Under ideal conditions such as immediate soft commitments (Astria clock in at 1 second) as well as atomic crosschain transactions, the system could potentially mitigate much of the signal and time-dependent extractable value we currently grapple with.

Yet, there are a couple of persistent questions to address. How do we ensure that pre-sequenced bundles from various rollups are built in the correct order? What’s the best approach for validating cross-dependent transactions across multiple rollups? The need for verifiable builders and accurate sequencing of cross-rollup transactions adds another layer of complexity to an already intricate system.

Interestingly, the introduction of programmable intents with embedded cross-chain dependencies might level the playing field between single-domain and shared sequencers. Meanwhile, app-chains offer a promising solution to the state staleness problem, potentially providing a superior experience for certain applications. However, they come with their own cross-chain limitations.

Another interesting point was slot auctions for builders. The idea of a secondary market for building rights presents both opportunities and challenges. While it could help distribute centralization risks, the already oligopolistic nature of cross-domain building raises concerns about creating new single points of failure.

It’ll be interesting to see the quantification of cross-chain extractable value as we develop shared interoperable domains. However, the line continues to blur, and I think we will soon see flexible domains of verifiable and programmable sequencing rules. This’ll enable everything from application-specific ordering rules for priority interaction to based rollups with fast confirmation and asynchronous composability.

_These views/opinions don’t necessarily represent those of Placeholder Management LLC or its team._
