---
title: The Future of Money & Payments
date: January 7, 2026
---

## The Case for a New Floating Rate Treasury Note
[Link to Article](https://www.brookings.edu/articles/the-case-for-a-new-floating-rate-treasury-note/)
As more assets become tokenized, there is a need for a stable **settlement** asset. The proposed issue with current US Treasury-based stablecoins is that while they may offer daily redemption at their par value, the backing asset need not consistently trade close to par. If there occurs only one isolated event that leads to a loss of confidence in the par redeemability of assets of a dollar instrument, it could trigger large redemptions requests, causing tokenized instruments to break the buck.

The author proposes the creation of Perpetual Overnight Rate Treasury Securities (PORTS), that are defined to combine the safety of treasury credit, the liquidity of overnight funding from the Federal Reserve, and the transparency of a blockchain. These instruments, similar to US Treasuries, would also be issued through uniform price auctions.

My intuition is that PORTS are designed to be used as a settlement and collateral tool.

**Issuers of tokenized dollar instruments who are first to hold their assets onchain with minimal credit risk and with the most convincing track record for convertibility at par will win the adoption race.**

Here is where there may be an issue.

I understand that the most ”trustworthy” issuer will win adoption (trustworthy being defined as the issuer that minimized credit risk and demonstrates convertibility at par). I also understand that a majority of applications will want user interactions to settle in their own platform-specific stablecoin, whether the users physically have to swap into the currency or it happens on the backend. Now, if AMMs provide the ability to swap stablecoin pairs effectively, what is the point of having a specific settlement/collateral stablecoin?

After having a conversation with Prof. Duffie, I understand that yes, the above point does make sense, but for retail- or consumer-focused applications that are only responsible for their users. For core financial market applications, like securities trade settlements and securities lending collateral, the incentives are more focused on transparency, security, redemption value, and stability. Also regulators will also require extremely robust stablecoins for these applications (ex. commercial bank deposits are not recommended for core financial market infrastructure (IOSCO PFMI 9)).

A conversation with Prof. Lehar revealed that maybe the issuance of money is inherently a monopoly, and we can try with platform-specific stablecoins, but, you may always require some form of a wholesale CBDC.

## Payments Innovation Conference
[Link to YouTube Livestream](https://www.youtube.com/live/6ES6yRb2AaQ?si=8_GUp77iMFGvu8H6)
Governor Waller proposed a FED Payment Account for payment innovators that can connect directly to the FED rather than these independent payment companies having to route through a third-party bank with a FED Master Account. This would serve as a ”skinny” Master Account which will allow these payment innovators, many of which may be stablecoin issuers, to work directly with the FED’s finance rails.

Another point that was brought up, which relates to the previous section, was that banks and other financial intermediaries are to be large users of stablecoins and stablecoin wallets. The question becomes, which stablecoin? In the retail ↔ platform relationship, platforms hold the pricing power, and have an incentive to become platform-specific stablecoin issuers. Therefore, users will knowingly or unknowingly be forced to switch into the platform-specific stablecoin to interact with the platform. In the institutional ↔ stablecoin issuer relationship, the institutional players hold the power, and they demand a resilient stablecoin that has regulatory blessings, and is not that of a direct competitors. Would J.P Morgan really prefer a world in which they are having to settle all trades in the USDGoldman stablecoin? Probably not. Banks that do large transfers should have a safe brand-agnostic stablecoin that acts as an industry standard, and only a select few stablecoins will recieve the regulatory blessing to become these rails. Stablecoins for platforms develop moats through the positive feedback loop of depth of liquidity and the power of distirbution. The important question that comes up, then, is **what features, apart from the resiliency gained from the GENIUS Act, are important for stablecoins to serve as the settlement asset?**

An interesting debate that came up was the choice of infrastructure. We’ve seen the likes of Stripe, JP Morgan, Circle, etc. build proprietary chains. As of December 17th, 2025, we’ve seen the DTCC (a natural monopoly) tap the Canton Network to host their tokenization activity. What are the tradeoffs with building an independent gates permissioned L1, as compared to building a permissioned environment on top of a permissionless L1?
