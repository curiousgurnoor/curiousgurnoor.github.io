---
title: A Tokenized Fast Path
date: January 26, 2026
---

## Notes
### The New Fast Path
The New York Stock Exchange is introducing a tokenized fast-path for 24/7 trade execution and real-time settlement using tokenized wrappers of traditional assets and utilizing digital monies for cash legs. In this system, investors and brokers can send, execute, and settle orders instantly.

Instant settlement would happen in three increasingly complex layers:

- Instant trade match and execution

- Instant token movement for ownership purposes, such that the trade finalizes instantly on the _NYSE chain_ rather than experiencing traditional end-of-day delays

- Instant legal finality with DvP

This parallel system is an add-on wherein the tokens link back to the legacy post-trade infrastructure stack for compatibility and legality reasons. The parallel system is tethered to the DTCC and its subsidiaries DTC/NSCC, involved custodians, and bank money. I suspect this connection happens in a **Mirrored Token Model** . Under this model, the _real_ asset lives at the DTC, and the token is issued on the _NYSE chain_ as a claim to those assets. The digital ledger is automatically updated per trade, whereas the _true_ DTC ledger is updated in net. The insight here is that similar to existing tokenization models, the token is always convertible into and reconciled with traditional records.

Ideally, we would like a completely onchain infrastructure. This migration involves certain hurdles:

- The DTC + NSCC infrastructure remains the legal tender, and we don’t have ”chain is law”

- There are numerous financial activities that exist on legacy systems, and we require legacy comparability as we move onchain

- There are certain risks with scale and risk management. A purely onchain world with no CCP and no netting would require incredibly high levels of intraday liquidity, and this world is not more efficient outright.

### Legacy Systems
The legacy process includes the NYSE accepting and collecting order, netting them, and sending them to the DTCC for processing. The post-trade infrastructure is the DTCC, which is composed of the NSCC for clearing, the DTC for custody, and the Fed for settlement via the NSS. The NSCC matches buy and sell orders and nets them, which according to the DTCC, decreases payment and settlement by 98%. The DTC holds securities electronically, moves ownership rights in a book-entry style manner, and settles net funds per broker.

## Questions
- Is real-time gross settlement strictly better than multilateral netting? Are parallel systems where both of these types of netting exist better, and for which use cases?

- What is the venue this will happen on?

- Will a token itself ever be recognized as a legal official share of record?

- Do we even require a Centralized Securities Depository or Clearing Partner?
