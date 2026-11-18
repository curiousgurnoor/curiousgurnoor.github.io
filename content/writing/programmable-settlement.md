---
title: Programmable Settlement
---

Financial institutions continue to explore decentralized systems for securities settlement and clearing with heightened interest given the touted benefits: instant settlement, the (theoretical) elimination of all counterparty default risk, and the subsequent elimination of the need to post expensive and unproductive collateral. But is porting our financial clearing and settlement infrastructure on-chain the holy grail solution? While our current system is plagued with inefficiencies, radically shifting to instant settlement models is a regression. Instead, we should explore the common middle ground of precise settlement, taking advantage of programmable decentralized infrastructure to remove ‘arbitrariness’ from our current system while drawing on benefits from both sides of the spectrum.

On one side of our settlement spectrum is Central Clearing Party (CCP)-based multilateral clearing and settlement, which revolves around T+c (c denotes some constant 1, 2, 3) settlement. This delayed settlement time serves as a date of finality, allowing the counterparty to obtain said promised asset to transfer up to c days after the agreement of some trade. In this environment, (1) centralized clearinghouses can perform multilateral netting, thereby resolving accounts payable from accounts receivable with greater transaction efficiency, (2) investors exercise the opportunity to borrow against proofs of purchased assets, and in general, (3) we establish a trusted third-party to reduce counterparty risk while extending credit and margin.

On the other side of the spectrum, we have the proposed T+0, or instant, settlement. In this model, we transition from a market-wide settlement system to a transaction-by-transaction model. The instant settlement model (theoretically) improves the expressed shortcomings of the CCPbased model. It bilaterally settles each transaction between two parties that are (theoretically) not exposed to counterparty risk as settlement is programmed and completed synchronously with the trade agreement. Moreover, this (theoretically) circumvents the need for centralized third parties and unproductive collateral, as the source of counterparty reputation is guaranteed by programmable atomic settlement compared to staked funds.

Note the repeated use of ‘theoretically’, hinting at the fact that while this solution in all cases may sound like the desired end product, it has some critical implementation flaws.

The key value of CCPs interposing themselves as middlemen is to perform multilateral netting and decrease counterparty risk as a trusted anchor and trading partner. The key value in instant settlement is the elimination of involved financial risks, middlemen, and unproductive capital. In the spirit of balance, we meet in the middle with a proposed solution: precise settlement.

I extend to define precise settlement as T + x.xxx settlement, an opportunity for counterparties to perform programmable trades with optimal levels of staked collateral while permitting contractenabled ‘CCPs’ to conduct multilateral netting.

For example, instead of institutional trading partners locking into a T+2 settlement contract (common for equity trades) with a generic amount of staked collateral, they can agree to a programmable

T + 1.2 settlement contract (1.2 1 day and 5 hours, and this value can be further broken down into detailed time intervals) and utilize a precise calculation for the optimal collateral level to be staked.

How does this meet in the middle of the spectrum, combining strengths from both extreme models?

Continuing under the premise of our example, we can highlight a multitude of strengths:

- Precise asset delivery: The institutional trading partner responsible for delivering the asset knows exactly when they need to have the asset in possession, and the recipient knows exactly when they will receive the asset or a default payout. This is a step forward from the otherwise arbitrary trade agreements signed by CCP-based settlement contracts.

- Multilateral Netting: We retain the ability for our contract-based ‘CCP’ to perform multilateral netting instead of reverting to inefficient processes of bilateral, transaction-per-transaction trade netting.

- Proof of Purchased Assets: We also retain the ability for trade partners to utilize their Proof of Purchased Assets as assets within the secondary market as the precise time delay allows for the continuous use of promised assets, albeit not executed yet.

- Optimal staked collateral: Arbitrary contract terms = Arbitrary staked collateral amounts. Precise settlement models allow us to potentially derive optimal levels of collateral based on the selected time delays on the settlement contract, allowing for trade partners (especially smaller players) to effectively conduct trades without having to stake unproductive and expensive capital.

With reinvigorated interest in the space, many components are slowly coming together to make this possible. There is advancing research on compliant blockchain networks and permissioned token standards which is vital to building a programmable on-chain ‘CCP’. Efficient smart contract development will help unlock the concept of programmable and precise settlement contracts. We can also play with newer forms of decentralized on-chain identity, thereby establishing institutional trust anchors and recognized trade partners.

One concept that warrants research is optimal collateral levels. Thus far, collateral levels are determined by margin levels in the default pools of the CCP as well as the average position of the trade partners in the open market. However, these are frequently too expensive for smaller trade partners, leading to an unfavorable ‘no competition’ environment and arbitrary amounts of unproductive collateral. However, by deriving a model for optimal collateral levels as a function of the time delay x.xx as well as other factors, we can ensure a competitive trading environment while only staking the amount that needs to be staked.

It has become abundantly clear that decentralized crypto-networks are potential solutions to some existing inefficiencies, such as the current settlement and clearing system. That said, a complete overhaul, represented by moving from one end of the spectrum (CCP-based settlement) to the other extreme (instant settlement) is a step backward. However, I believe that meeting in the middle combines the best of both worlds.

_These views/opinions don’t necessarily represent those of Placeholder Management LLC or its team._
