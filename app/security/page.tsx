import React from 'react'

function page() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="font-inter text-[#007bff] text-[36px] font-bold text-center mb-6">Cybersecurity</h1>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="p-6 rounded-[4px] shadow-md">
            <h2 className="font-inter text-[24px] text-[#007bff] font-semibold mb-4">What is Cybersecurity?</h2>
            <p className="font-inter text-[18px] text-[#333333] font-normal">
              Cybersecurity refers to the practice of protecting systems, networks, and programs from digital attacks, data breaches, and unauthorized access. As more businesses and services move to digital platforms, cybersecurity has become critical in safeguarding sensitive information, ensuring privacy, and maintaining trust. Cybersecurity involves various techniques, technologies, and processes to ensure data integrity, confidentiality, and availability.
            </p>
          </div>

          {/* Cybersecurity Threats */}
          <div className="p-6 rounded-[4px] shadow-md">
            <h2 className="font-inter text-[24px] text-[#007bff] font-semibold mb-4">Cybersecurity Threats</h2>
            <p className="font-inter text-[18px] text-[#333333] font-normal">
              Cybersecurity threats come in many forms, ranging from simple malware attacks to sophisticated hacking attempts. Some of the most common cybersecurity threats include:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Malware:</strong> Malicious software like viruses, worms, and ransomware that can damage systems, steal data, or disrupt services.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Phishing:</strong> Fraudulent attempts to acquire sensitive information by pretending to be a trustworthy entity, usually through email or websites.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Man-in-the-Middle (MitM) Attacks:</strong> Attackers intercept and alter communication between two parties to steal or manipulate data.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Denial-of-Service (DoS) Attacks:</strong> Overloading a system or network with traffic, rendering it unavailable to legitimate users.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>SQL Injection:</strong> Attackers inject malicious SQL queries into a website`s input fields, which can compromise databases.
              </li>
            </ul>
          </div>

          {/* Types of Cybersecurity */}
          <div className="p-6 rounded-[4px] shadow-md">
            <h2 className="font-inter text-[24px] text-[#007bff] font-semibold mb-4">Types of Cybersecurity</h2>
            <p className="font-inter text-[18px] text-[#333333] font-normal">
              Cybersecurity is not a one-size-fits-all field; there are multiple types of cybersecurity that focus on different aspects of security. These include:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Network Security:</strong> Protecting the network infrastructure from attacks, unauthorized access, and vulnerabilities.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Information Security:</strong> Ensuring the confidentiality, integrity, and availability of data both in transit and at rest.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Application Security:</strong> Ensuring that applications are secure from threats that could exploit vulnerabilities in their code.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Endpoint Security:</strong> Protecting end-user devices such as smartphones, laptops, and desktops from cyber threats.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Cloud Security:</strong> Protecting cloud environments and services from potential breaches, data loss, and other cyber threats.
              </li>
            </ul>
          </div>

          {/* Cybersecurity Tools and Techniques */}
          <div className="p-6 rounded-[4px] shadow-md">
            <h2 className="font-inter text-[24px] text-[#007bff] font-semibold mb-4">Cybersecurity Tools and Techniques</h2>
            <p className="font-inter text-[18px] text-[#333333] font-normal">
              Various tools and techniques are used in cybersecurity to prevent, detect, and respond to threats. Some of the most commonly used tools and techniques include:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Firewalls:</strong> Network security systems that monitor and control incoming and outgoing network traffic based on predetermined security rules.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Encryption:</strong> The process of converting data into a code to prevent unauthorized access during transmission or storage.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Antivirus Software:</strong> Programs that detect, block, and remove malicious software from devices and systems.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Intrusion Detection Systems (IDS):</strong> Tools used to detect and respond to potential security breaches or malicious activities in real-time.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Multi-Factor Authentication (MFA):</strong> A security system that requires more than one method of authentication, such as a password and a one-time code, to verify users.
              </li>
            </ul>
          </div>

          {/* Benefits of Cybersecurity */}
          <div className="p-6 rounded-[4px] shadow-md">
            <h2 className="font-inter text-[24px] text-[#007bff] font-semibold mb-4">Benefits of Cybersecurity</h2>
            <p className="font-inter text-[18px] text-[#333333] font-normal">
              Investing in cybersecurity offers several benefits that can protect individuals, businesses, and organizations from potential attacks and ensure the integrity of their data. The main benefits of cybersecurity include:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Data Protection:</strong> Safeguarding sensitive information like personal data, financial records, and intellectual property from unauthorized access.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Prevention of Financial Loss:</strong> Cyberattacks can result in significant financial losses; cybersecurity helps minimize this risk.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Business Continuity:</strong> Protecting against data loss and system downtime ensures that business operations can continue without interruption.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Compliance with Regulations:</strong> Many industries have strict regulations around data protection; cybersecurity helps organizations comply with these regulations.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Improved Customer Trust:</strong> Businesses that demonstrate strong cybersecurity practices build trust with their customers by ensuring their data is safe.
              </li>
            </ul>
          </div>

          {/* Cybersecurity Best Practices */}
          <div className="p-6 rounded-[4px] shadow-md">
            <h2 className="font-inter text-[24px] text-[#007bff] font-semibold mb-4">Cybersecurity Best Practices</h2>
            <p className="font-inter text-[18px] text-[#333333] font-normal">
              To maintain robust cybersecurity, individuals and organizations must follow certain best practices, including:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Regular Software Updates:</strong> Keeping software, operating systems, and security patches up to date is essential for protecting against known vulnerabilities.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Strong Password Policies:</strong> Using strong, unique passwords and changing them regularly reduces the risk of unauthorized access.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Employee Training:</strong> Educating employees on cybersecurity awareness, phishing threats, and safe browsing practices can reduce human errors.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Backup and Recovery Plans:</strong> Regularly backing up important data and having a disaster recovery plan ensures business continuity in case of a cyberattack.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Limit Access to Sensitive Data:</strong> Implementing strict access controls to sensitive information reduces the risk of data breaches.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
