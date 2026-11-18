---
title: Beware of Tokenizing Everything
---

Chasing the goal of tokenizing every “real-world” asset relegates blockchains as secondary ledgers of truth rather than fulfilling their greater potential as the foundation for the future of internet finance. The attempt to tokenize everything is futile because we are in the business of developing net-new financial products that take advantage of being onchain rather than replicating existing assets. Furthermore, we should tokenize assets that supply some inherent value in being onchain – assets that actually have expressed demand from onchain investors.

In its current form, the tokenization space is primarily focused on treasuries, equities, commodities, and private credit. While these subsectors might experience some success with fringe retail investors onchain, I argue that we have already seen the strongest contenders for onchain tokenized success – stablecoins and tokenized treasuries.

## 1 Tokenization of U.S. Treasuries
There seem to be 3 fundamental inefficiencies in the traditional treasury market:

### 1.1 Settlement Delays
Advocates for tokenizing treasuries tout the benefits of instant settlement onchain, but I would argue that you forgo the benefits of multilateral netting. Maybe programmable settlement is a better term here. I’ve argue more about this in another piece.

### 1.2 Excessive Intermediation
This is ideally “solved” by being onchain, but I’m not sure this is true because current-day tokenization platforms are mostly nice frontends to represent the token, but the same messy backend filled with intermediary custodians, clearinghouses, etc. If anything, they add risk by introducing a centralized oracle network to report prices onchain.

### 1.3 Fragmented Access & Inconsistent Reporting
While some of these issues may be resolved through tokenization, the real added risk is that of oracle risk, and we need to eliminate this risk by keeping everything onchain. This happens by either tightly integrating tokenized treasury products with onchian price feeds, or enabling thicker liquidity of these tokenized treasuries onchain. We can then create a countercyclical hedge for DeFi because the inverse relationship between risk-free treasury yield rate and demand for stablecoins on-chain (cost of borrowing on-chain) – as risk-free rates rise, tokenized treasuries can absorb capital from pure stablecoins. when rates fall, capital flows back to DeFi lending and other onchain opportunities.

## 2 Tokenization of Equities
I understand the importance and demand of tokenizing U.S. treasuries as it provides risk-free yield in an otherwise volatile on-chain economy. However, I’m not sure what the demand for tokenized equities are, beyond just having it available on-chain. Given how yield-motivated the on-chain economy is, it seems like there are on-chain assets available with a similar risk profile as equities. This implies that the demand for a tokenized equity for an onchain investor is essentially zero.

This is further emphasized by the 10x principle: is purchasing a tokenized equity onchain 10x better for the end user than utilize an app on their phone or a trusted trading platform that they are familiar with? Not necessarily.

## 3 Tokenization of Commodities
Most folks view the tokenization of commodities markets optimistically because regulations don’t define commodities as securities, so they become inherently much easier to tokenize and trade onchain. Furthermore, regulations emphasize custodianship and physical asset transparency, which plays well for tokenization. However, a major factor that is overlooked, yet obvious in hindsight, is that there is clear demand-side inertia in trading these commodity tokens on-chain. For retail crypto traders, they have shown limited interest in holding tokenized commodities, preferring Bitcoin as their store of value. For institutional players, they already dominate traditional commodities markets with access to sophisticated trading infrastructures and deep liquidity, so they don’t have a clear 10x reason to move to on-chain platforms.

The most popular on-chain commodity right now is gold, but there are markedly lower volumes and liquidity depths on digital exchanges. This under-performance can be credited to large price volatility and associated arbitrage onchain, which causes limited uptake on composable DeFi platforms like Uniswap or Morpho. Some of the more prominent issues these products have faced include sudden dips in unchain liquidity or rapid premium fluctuations can trigger liquidations even when realworld gold price is stable. If an oracle price is used, custodian failures could allow attackers to purchase onchain gold at mis-priced levels. Instead of dealing with these issues that arise when catering to institutions who want physical asset settlement too, projects like Ostium are targeting purely synthetic commodity exposure that forgoe physical redemption. This approach is designed for margin retail traders, but experiences the pitfall of the actual demand for such an asset. They made capture short-term speculative demand, but it doesn’t seem like providing leveraged trading on commodity assets is a revolutionary financial product offering in an already volatile and high-yield on-chain economy.

## 4 Tokenization of Private Credit
Tokenized private credit has seen the most adoption behind stablecoins and U.S. treasuries, with large tokenized funds from BlockTower Capital, KKR, Hamilton Lane, etc. This is partially motivated by the plethora of issues that private credit markets face with illiquid secondary markets, inefficient price discovery until maturity, and limited access to investment opportunities. These issues frame tokenization of private credit as a silver-bullet solution, but the major roadblock here is strict regulation surrounding private credit.

Projects that tokenize private credit quickly face issues of being termed as being investment companies or offering securities in the form of tokens. This is broken down further below as there are two main approaches of tokenizing private credit in the market today:

- Loan-Specific Tokens: Each private credit loan is tokenized to represent an investor’s claim on the asset’s underlying cash flow. The issue with this approach is that these tokens can constitute securities and must be offered under exemptions. While possible to implement onchain, this raises the question of why someone would want to conduct said transaction onchain if they face the same, if not harder, hurdles to purchase the asset – they might as well do it off chain with more established trading infrastructure.

- Lending Pool Model: Lenders contribute liquidity to a general managed lending pool, and Pool Delegates allocate loans to borrowers. These Pool Delegates are usually KYC’d specialized banks or institutions. The issue here is that pool tokens form a lending pool may constitute an investment company.

I think the major upside here is for institutions who want to leverage onchain rails on the backend to decrease their operational and management costs of private credit financial products. Therefore, the big winners here will be infrastructure companies providing these services, and these institutions are responsible for providing these tokenized financial products to their investors with minimal additional overhead to the investors to make said investment. If there is additional user friction, staying off chain is just easier.

## 5 Conclusion
This gap between the onchain and offchain economy will continue to exist until a blockchain is recognized as a regulated source of truth. Until then, this distinction creates two distinct financial systems. I strongly believe that we should utilize the tools at our disposal to create net-new financial products that advance the internet economy rather than tokenizing “real-world” assets that relegate blockchains as secondary sources of truth.

_These views/opinions don’t necessarily represent those of Placeholder Management LLC or its team._
