---
title: Tokenization, Market Inefficiencies, & Alternative Assets
date: January 12, 2026
---

## Tokenization and Financial Market Inefficiencies
[Link to Article](https://www.elibrary.imf.org/view/journals/063/2025/001/article-A001-en.xml)
The primary inefficiencies in current financial systems include information asymmetry between traders, search problems and exhaustion for prospective investors, high transaction costs for alternative assets, and unknown counter-party risks. In addition, there exist externalities, internalities, and market powers that cause inefficiencies. Furthermore, these inefficiencies exist across the asset life-cycle: issuance, exchange, servicing, and redemption.

In broad strokes, tokenization introduces shared-ness, trust, and programmability to this system. Trust is a necessary condition to utilize any financial services ledger, so the true benefits lie in the programmability of financial assets and the shared-ness of the ledger itself. Further, within a single shared ledger, applications are composable (can be reused and combined) and atomic (multiple steps can be executed in a single inseparable transaction).

While tokenization may lessen the need for certain intermediaries, it is more likely to reduce the costs of processes performed by intermediaries rather than rendering them obsolete. Whether many of these cost savings will be passed on to investors depends on the degree of market competition.

What constitutes an asset’s lifecycle?

- **Asset Issuance** is the process of creating and selling new financial assets

- **Asset Exchange** is the buying and selling of financial assets

- **Asset Servicing** is the payment of interest or dividend on financial assets

- **Asset Redemption** is the process of returning assets to issuers in exchange for cash

What are some of the inefficiencies that exist?

- **Asymmetric Information** is when one party has more information relevant to a transaction that its counterparty

- **Search Frictions** are impediments to an agreement between two parties to a transaction, resulting in unrealized trades

- **Transaction Costs** include the costs of trade and the opportunity cost of time

- **Counterparty Risk** is when a party on a contracted trade doesn’t deliver.

Specialized intermediaries are designed to ideally reduce market frictions at different stages of the asset lifecycle. **Centralized Securities Deposits and Clearinghouses?** We’ve seen, however, that the incentives of these intermediaries is profit-maximization, not the minimization of financial inefficiencies. In the case of a divergence between these two factors, these specialized intermediaries behave in a counterproductive way to their intended purpose.

Tokenization can help reduce some inefficiencies that exist within the asset lifecycle.

### Asset Issuance
Old Structure: Issuance requires registrars.

With Tokenization: Ledgers can decrease issuing costs as we don’t require a separate record of asset owners from a specialized registrar, nor would we require expensive trusted custodian services if the asset is issued natively on-chain. For example, smart contracts could automatically execute auctions for issuing new shares.

### Asset Trading
Old Structure: Trading is dependent on CCHs and CSDs.

With Tokenization: Ledgers can decrease issuing costs as we don’t require a separate record of asset owners from a specialized registrar, nor would we require expensive trusted custodian services if the asset is issued natively on-chain. For example, smart contracts could automatically execute auctions for issuing new shares. Furthermore, since asset trading is dependent on CCHs and CSDs to mitigate or limit counterparty risk, immediate simultaneous settlement on ledgers could remove the need for counterparty risk on immediate trades. The lack of instantaneous settlement in the current financial system stems form the manual processes, costs, and time that comes with the synchronization of multiple ledgers.

There are potential consequences to a tokenized financial system. In general, high leverage, low funding liquidity (aka availability of funds), and interconnectedness amplify the transmission of shock. A shared ledger allows for more interconnected assets, and the higher velocity of trading could case a quicker spread of financial shocks. Naturally, retail investors may be more likely to insufficiently diversify away risk. A shared ledger also reduces the cost of leverage, strengthening the incentive for institutions to utilize leverage in a riskier way. Programmability could further facilitate the leverage of intermediary balance sheets through rehypothecation, which could have negative consequences.

Banks are usually funded by sticky retail deposits, and partially by wholesale funding. Retail deposits are sticky, which professional wholesale capital is cylical. Tokenization reduces the frictions that keep money stationary, so bank funds become more fragile.

## How Tokenization Can Fuel a $400 Billion Opportunity in Distributing Alternative Investments to Individuals
[Link to Article](https://www.jpmorgan.com/kinexys/documents/how_tokenization_can_fuel_a_400_billion_opportunity_in_distributing_alternative_investments_to_individuals.pdf)
### Frictions and Inefficiencies with Alternative Assets
Given that alternative assets are cumbersome to manage, asset managers only accept a limited number of large-ticket long-horizon checks. Further, these managers are also facing growing challenges in fundraising from institutional investors as supply outpaces demand. There is a limited set of institutional investors to raise from, and a limited incentive or distribution method to raise from other investing classes. The barriers for investors investing in alternative assets include education the financial asset they are investing in, access to these assets can be opaque, there are high investment minimums to justify the issuance and management costs, liquidity is locked up for a longer horizon, and the legal process of investing is cumbersome. In addition, workflows involving alternatives are siloed and require handoffs from many participants, raising administrative and operational costs.

### Breaking down the key actors in an alternative asset product
- Alternative Asset Managers create and structure investment products, and set the distribution and servicing strategy

- Wealth Managers & Distributors identify alternative offerings, performing due diligence to assess their quality, and market these to investors

- High-New-Worth investors invest in these based on wealth manager recommendations while institutional investors have their own investment management teams

- Fund Administrators and Transfer Agents maintain books/records of the fund, process subscriptions, redemption, distributions, KYC, etc.

### How can tokenization make an impact?
The assets we are tokenizing here are the limited partnership interests in an alternative asset fund. The tokens themselves record ownership of the LP interests and rules with which these tokens can be transferred. These tokens should include components such as but not limited to: Identifiers and Encoded Data (NAV, Shares Issued, Holders + Commitments, etc.), Logic (Subscribe, Redeem, Transfer, Drawdown)

The benefits of tokenization is (1) Data Management becomes more streamlined especially benefiting reconciliation and ownership transfers, (2) Liquidity as alternatives become a more cash-convertible asset, (3) Collateralization becomes more smart and productive. 2 other transformations include **automated capital calls** which could be huge for decreasing the opportunity cost of cash. An extension of this becomes a consistently liquid and invested investment account which is redeemed to cash on command.

## Scaling alternatives with tokenized fund structures
[Link to Article](https://www.aima.org/article/scaling-alternatives-with-tokenised-fund-structures.html)
Programmable settlement leads to reduced counterparty risk and releases trapped collateral through rehypothecation while allowing for easier fractionalization. While promising, the current standards include fragmented platforms, thin liquidity, and a lack of standards for cross-chain settlement.

The primary considerations while building in this space are:

- How to you value hard-to-price assets?

- How do we encode side letters and transfer rights?

- How do you manage redemption, capital calls, defaults, cross-fund set-offs, etc.?

- How do you consistently ensure deep liquidity?

- What are the benefits of continuous or periodic window trading?

- How do you ensure clear rules on tokenized LP deposits, transfer restrictions, recognition of on-chain registers, and the enforcability of digital waterfalls and side letters?

- How to you ensure the consistent availability and use of digital cash to allow for atomic DvP?

## The Future of Wealth Management
[Link to Article](https://www.jpmorgan.com/kinexys/documents/portfolio-management-powered-by-tokenization.pdf)
Alternative assets are an interesting yet under-invested asset class due to a lack of available liquidity, limited access, and a lack of education about the investment vertical. Tokenization for alternative assets will allow wealth managers and institutional allocators to better deliver high-quality portfolios more efficiently, help create better capabilities in operational processing, will allow for access to secondary liquidity by tokenizing fund positions, and introduce the availability of detailed reporting and registries.

While this sounds great, some major question marks include (1) the efficiency and scalability of order execution and settlement across asset classes and ownership registries, (2) how alternative investments will git into model portfolios, (3) the fragmentation and interoperability challenges across different registries, and (4) the UI/UX of multi-asset registries.

The current state is riddled with inefficiencies and problem statements. (1) Adjusting portfolio allocations across asset types requires multiple systems, manual processes, and multi-party reconciliation. Further, intermediaries have cash on hand that they need for reconciliation which incurs its own opportunity cost. (2) Alternative investment funds are not included in model portfolios due to operational processing requirements and limited liquidity. (3) Access to and distribution of tokenized assets is fragments across networks.

The thesis, then, is that tokenization of alternative assets can increase access by simplifying downstream processes and reducing cumbersome operational workflows, while guaranteeing better liquidity as a result. Some potential benefits include (1) trading PMs and ops roles would become simplified automated processes, (2) there is better liquidity for alternative asset markets, (3) there is less cash drag and opportunity cost, automatic rebalancing and better investment risk/return profiles, combined efficiency or robo-advisory with active management alpha, and inclusion of digital-native exotic products.

How does one create liquidity for tokenized alternative assets? (1) Direct redemption encoded instructions, transfer available @ NAV, liquidity netting, secondary sales, and programmable redemption terms.
