"use client"

import Link from "next/link"

interface Article {
  title: string
  link: string
}

export default function BlogPage() {
  const articles: Article[] = [
    {
      title: "Thoughts on Venture Capital Investment Theses",
      link: "https://ipfs.io/ipfs/bafkreiaoj7j56asofimdzxvqpzpc3xz5zqi66vi5kl66rdas4coaeoikqa",
    },
    {
      title: "Leveling the Stakes on Solana",
      link: "https://ipfs.io/ipfs/bafkreigqigbbfmjwovgj3ko6qzqpdkze2kyuzvmiavpppd5sgeboh6g7cu",
    },
    {
      title: "Introducing The Sequencing Value Accrual Simulator",
      link: "https://ipfs.io/ipfs/bafkreibs4rsqhp2mkctnwh6yr34vtw5ibh2jz4wwxkqhl6xxvx6zixveg4",
    },
    {
      title: "A Visual Guide to Sequencing Mechanisms",
      link: "https://ipfs.io/ipfs/bafkreigtlytteud5pq3ykz7qgozwh4g7evcoeaejtnj3g2u4wfx7jg5aua",
    },
    {
      title: "David Goliath: How Web3 Can Compete in AI",
      link: "https://ipfs.io/ipfs/bafkreicca44uuickvf53yr6koxc4mdphpqrbn4lfuemw66di43fzrwzime",
    },
    {
      title: "AI Agents as Animated Memecoins",
      link: "https://ipfs.io/ipfs/bafkreihntijohcuw4t4lwyb5ggds3fl7dmhag5ggywibsfarwaunl4exca",
    },
    {
      title: "Beware of Tokenizing Everything",
      link: "https://ipfs.io/ipfs/bafkreibai5fieihmdcjzcmabiggzls4kjbectyicxmpowscyef24vtdj3e",
    },
    {
      title: "Decisions, Decisions, Decisions...",
      link: "https://ipfs.io/ipfs/bafkreibkndubbyazv7snkgmrdzv74udx47t3o3qkcdlssvpfh5dndxisle",
    },
    {
      title: "Ethereum Protocol Call 1 Notes",
      link: "https://ipfs.io/ipfs/bafkreieurhiuf7m5pr6rngjtbuzvswkpuutfi6i3t2n2pekl4u6snngvhy",
    },
    {
      title: "Ethereum Protocol Call 2 Notes",
      link: "https://ipfs.io/ipfs/bafkreihltluwkhtcc6tjx3zmyyketphw7ez3x6gddr3w5zec3uumxe3fpm",
    },
    {
      title: "DBA Research Day Highlights",
      link: "https://ipfs.io/ipfs/bafkreihycf2itwhov6f75qnfpem4hznfw66lqm4tj364uyfkf2n4he6oh4",
    },
    {
      title: "Flexible Programmable Sequencing",
      link: "https://ipfs.io/ipfs/bafkreiejehvfrha4a6gd5mj256ie7ybewpckfrwvmxtt7uexocejghfmqm",
    },
    {
      title: "Is Privacy a Commodity?",
      link: "https://ipfs.io/ipfs/bafkreibaz7ilt3jxum4nbypz54tvsqfw3hvrcq266q7wumb4cv3vtifq2q",
    },
    {
      title: "Let's Build Something People Can Use",
      link: "https://ipfs.io/ipfs/bafkreieseh5c7ha6eutw4yewnudiqnqiv5mfug5oijtvtu45bfuqjcf6ia",
    },
    {
      title: "Marginal Improvements Aren't Enough",
      link: "https://ipfs.io/ipfs/bafkreibi3fuaitbo3gia4s26kwx2qhj6joqtjssagkctbn2isgmucg6qkq",
    },
    {
      title: "Memecoins are the First Crypto-Native Videogame",
      link: "https://ipfs.io/ipfs/bafkreiawyy2cflyf7wf3oabrbzdwq5vcycq6ganee3jpbwwiq5nr2awjum",
    },
    {
      title: "Programmable Settlement",
      link: "https://ipfs.io/ipfs/bafkreicv3smc7rw2bazfw3h4p75jy4nsmu6k2wp7pu4thwnycbmw4ke2v4",
    },
    {
      title: "Short Everything? Field Notes from Dubai",
      link: "https://ipfs.io/ipfs/bafkreihbruhc6ywelkywt76c3btkzekrt6khiurk4og4pl6nwvx36gy5gq",
    },
    {
      title: "Solana Seeker Phone Review",
      link: "https://ipfs.io/ipfs/bafkreih5mat6v62aqi5klodkz5mq7zcbt7gkp3bok5ehfn7vpmrwuc27wa",
    },
    {
      title: "The Stablecoin Paradox",
      link: "https://ipfs.io/ipfs/bafkreiav7nw256gxjvxbvqarr6gzqqzkewqtarih6gxnmdhs6ywzg5rihm",
    },
    {
      title: "Thoughts on Solana's Alpenglow",
      link: "https://ipfs.io/ipfs/bafkreiddwfjg26ale5r4ttcxxb6o7owtx4h43mj3nhfllcsb2kapxvx4xy",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <header className="mb-8">
          <Link href="/" className="text-blue-600 underline text-sm">
            ← back to home
          </Link>
          <h1 className="text-2xl font-mono font-bold text-black mt-4 mb-6">writings</h1>
        </header>

        <main className="space-y-6 text-sm leading-relaxed">
          <div className="space-y-3">
            {articles.map((article) => (
              <p key={article.title}>
                <a href={article.link} className="text-blue-600 underline">
                  {article.title}
                </a>
              </p>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
