import React from "react";

function page() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="font-inter text-[#007bff] text-[36px] font-bold text-center mb-6">
          Blockchain and Web3
        </h1>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="p-6 rounded-[4px] shadow-md">
            <h2 className="font-inter text-[24px] text-[#007bff] font-semibold mb-4">
              What is Blockchain?
            </h2>
            <p className="font-inter text-[18px] text-[#333333] font-normal">
              Blockchain is a decentralized, distributed ledger technology that
              records transactions across many computers in a way that ensures
              security and transparency. Each transaction is linked to the
              previous one, forming a chain of blocks, making it
              tamper-resistant. Blockchain`s ability to provide secure,
              transparent, and immutable records is what makes it highly
              suitable for applications like cryptocurrency, supply chain
              management, and more.
            </p>
          </div>

          {/* Blockchain Applications */}
          <div className="p-6 rounded-[4px] shadow-md">
            <h2 className="font-inter text-[24px] text-[#007bff] font-semibold mb-4">
              Blockchain Applications
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Cryptocurrency:</strong> The most popular use of
                blockchain, cryptocurrencies like Bitcoin and Ethereum rely on
                blockchain for secure and transparent transactions.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Supply Chain Management:</strong> Blockchain ensures
                transparency and traceability in supply chains, enabling
                businesses to track products from origin to delivery.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Smart Contracts:</strong> Self-executing contracts with
                predefined rules and conditions, eliminating the need for
                intermediaries.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Voting Systems:</strong> Blockchain can ensure secure
                and tamper-proof voting systems, increasing trust and reducing
                fraud in elections.
              </li>
            </ul>
          </div>

          {/* What is Web3? */}
          <div className="p-6 rounded-[4px] shadow-md">
            <h2 className="font-inter text-[24px] text-[#007bff] font-semibold mb-4">
              What is Web3?
            </h2>
            <p className="font-inter text-[18px] text-[#333333] font-normal">
              Web3 is the next evolution of the internet, moving from
              centralized platforms to decentralized systems powered by
              blockchain. Unlike Web2, which is dominated by centralized
              companies (e.g., Google, Facebook), Web3 allows users to control
              their data and interact with decentralized applications (dApps) on
              blockchain networks. Web3 aims to create a more open, transparent,
              and user-empowered internet.
            </p>
          </div>

          {/* Web3 Applications */}
          <div className="p-6 rounded-[4px] shadow-md">
            <h2 className="font-inter text-[24px] text-[#007bff] font-semibold mb-4">
              Web3 Applications
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Decentralized Finance (DeFi):</strong> Web3 allows users
                to engage in financial activities like lending, borrowing, and
                trading without intermediaries, making financial systems more
                inclusive.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Decentralized Applications (dApps):</strong> These apps
                run on blockchain networks rather than centralized servers,
                providing more control and security to users.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Non-Fungible Tokens (NFTs):</strong> NFTs are unique
                digital assets on the blockchain, allowing creators to monetize
                their art, music, and content.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Decentralized Autonomous Organizations (DAOs):</strong>{" "}
                Web3 allows for decentralized governance where decisions are
                made by token holders instead of a central authority.
              </li>
            </ul>
          </div>

          {/* Blockchain Benefits */}
          <div className="p-6 rounded-[4px] shadow-md">
            <h2 className="font-inter text-[24px] text-[#007bff] font-semibold mb-4">
              Benefits of Blockchain
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-lg">
                <strong>Security:</strong> Blockchain`s decentralized nature
                ensures data integrity and reduces the risk of hacking and
                fraud.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Transparency:</strong> Every transaction is publicly
                recorded, making the system more transparent and traceable.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Reduced Costs:</strong> Blockchain reduces the need for
                intermediaries and manual processing, lowering transaction and
                operational costs.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Speed:</strong> Blockchain can speed up transactions,
                eliminating delays caused by traditional banking or
                administrative systems.
              </li>
            </ul>
          </div>

          {/* Web3 Benefits */}
          <div className="p-6 rounded-[4px] shadow-md">
            <h2 className="font-inter text-[24px] text-[#007bff] font-semibold mb-4">
              Benefits of Web3
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Ownership and Control:</strong> Web3 empowers users to
                have ownership over their data and digital assets, unlike
                centralized platforms.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Interoperability:</strong> Web3 enables seamless
                interaction between different dApps and blockchain networks,
                enhancing the user experience.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Financial Inclusion:</strong> Web3 can provide access to
                decentralized financial services for people who are unbanked or
                underbanked.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Privacy and Security:</strong> Users have better control
                over their personal data, ensuring greater privacy and
                protection from data breaches.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
