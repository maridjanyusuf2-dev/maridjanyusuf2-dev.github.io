window.labEvidence = {
  "rack": {
    "sections": [
      [
        "Equipment and cabling",
        "I worked with rack-mounted Cisco routers, switches, a patch panel, and Windows lab PCs. I identified the devices by their rack labels, traced the Ethernet runs, and used patch and crossover cables as required by the topology."
      ],
      [
        "Link checks",
        "I checked router and switch interface status before testing end-to-end connectivity. Ping, traceroute, and the routing table helped distinguish physical link problems from addressing and routing problems."
      ]
    ],
    "images": []
  },
  "ipv6": {
    "sections": [
      [
        "Console troubleshooting",
        "I used PuTTY over a serial connection to inspect GigabitEthernet link messages and configure IPv6. The router rejected a /64 on one routed port because the same prefix was already assigned to another port."
      ],
      [
        "Connectivity result",
        "One Windows lab PC could ping the other, while the reverse test failed. I checked inbound ICMPv6 policy on the lab PCs and compared that behavior with the router configuration. The notes record the asymmetry and prefix conflict."
      ]
    ],
    "images": [
      [
        "ipv6-router-console.jpeg",
        "PuTTY serial console showing link state changes and the overlapping IPv6 prefix error.",
        1080,
        1440
      ]
    ]
  },
  "hardware-static": {
    "sections": [
      [
        "Setup",
        "The physical topology connected three Cisco routers over routed transit links. A router provided VLAN gateways for Windows PCs on separate access VLANs."
      ],
      [
        "Verification",
        "The Windows PC reached its local gateway. A separate router-to-router ping timed out even though the sending router had a forward route."
      ],
      [
        "Diagnosis",
        "Comparing the IOS routing tables showed a missing return path to the source transit subnet. A successful ping to a router’s own interface address did not establish that the neighboring router or remote LAN was reachable."
      ]
    ],
    "images": [
      [
        "physical-static-routing-console.jpeg",
        "Physical console showing the failed remote ping and the routing tables used to diagnose the return path.",
        1080,
        1440
      ]
    ]
  },
  "windows-hardening": {
    "sections": [
      [
        "Baseline and password policy",
        "I recorded the Windows VM baseline, confirmed UEFI and Secure Boot, and configured a 12-character minimum and complexity requirements in Local Security Policy."
      ],
      [
        "Endpoint protection and services",
        "I checked Microsoft Defender Tamper Protection and Protection History. Defender detected and removed the harmless EICAR test file. I also reviewed the Print Spooler and Remote Registry services and documented their hardening."
      ],
      [
        "Policy verification and auditing",
        "Group Policy successfully blocked Registry Editor. After removing the test restriction, Registry Editor opened again. The lab notes record failed logon event 4625, file access event 4663, and object deletion event 4660. Defender recorded detection event 1116."
      ]
    ],
    "images": [
      [
        "evidence-endpoint-1.png",
        "System Information showing VirtualBox, UEFI mode, and Secure Boot enabled.",
        1023,
        707
      ],
      [
        "evidence-endpoint-2.png",
        "Local Security Policy baseline.",
        982,
        698
      ],
      [
        "evidence-endpoint-3.png",
        "Password policy before applying the hardening changes.",
        982,
        698
      ],
      [
        "evidence-endpoint-4.png",
        "A minimum password length of 12 characters and complexity enabled.",
        982,
        698
      ],
      [
        "evidence-endpoint-5.png",
        "Microsoft Defender Tamper Protection enabled.",
        627,
        667
      ],
      [
        "evidence-endpoint-6.png",
        "Group Policy configured to restrict Registry Editor.",
        1023,
        707
      ],
      [
        "evidence-endpoint-7.png",
        "Registry Editor blocked by the policy.",
        471,
        156
      ],
      [
        "evidence-endpoint-8.png",
        "Registry Editor restriction disabled after the test.",
        1023,
        707
      ],
      [
        "evidence-endpoint-9.png",
        "Registry Editor available after removing the test restriction.",
        752,
        497
      ],
      [
        "evidence-endpoint-10.png",
        "Print Spooler running with Automatic startup before hardening.",
        1006,
        698
      ]
    ]
  },
  "opnsense": {
    "sections": [
      [
        "Lab setup",
        "I used VirtualBox to run OPNsense with separate WAN and LAN interfaces and applied firewall rules inside the lab environment."
      ],
      [
        "Verification method",
        "I compared rule behavior with firewall logs and packet captures. In Wireshark, the TCP SYN flag identified an attempted connection, and the response or lack of response helped interpret the result alongside the firewall log."
      ]
    ],
    "images": []
  },
  "packet-tracer-static": {
    "sections": [
      [
        "Topology",
        "I connected two switched IPv4 LANs across a chain of Cisco routers in Packet Tracer and configured static routes for the remote networks."
      ],
      [
        "Troubleshooting and validation",
        "Initial pings timed out. I investigated a /24 versus /30 mask mismatch on a transit link and checked the routing tables. The final captures show successful tests in both directions."
      ]
    ],
    "images": [
      [
        "evidence-ssh-static-8.png",
        "Packet Tracer topology showing both switched LANs and the routed transit links.",
        2048,
        1280
      ],
      [
        "evidence-ssh-static-6.png",
        "Ping retries from the first LAN. The last test received all four replies.",
        2048,
        1280
      ],
      [
        "evidence-ssh-static-7.png",
        "Successful ping from the second LAN to the first.",
        2048,
        1280
      ]
    ]
  },
  "cisco-ssh": {
    "sections": [
      [
        "Configuration",
        "I set up SSH version 2 and local authentication on a simulated Cisco 2911. The Packet Tracer PC served as the SSH client."
      ],
      [
        "Verification",
        "The client first reported an invalid login. A subsequent attempt reached the IOS router prompt, confirming that the remote management session worked."
      ]
    ],
    "images": [
      [
        "packet-tracer-ssh.png",
        "Packet Tracer SSH client showing the rejected login followed by successful access to the IOS prompt.",
        1974,
        2048
      ]
    ]
  },
  "router-on-a-stick": {
    "sections": [
      [
        "Configuration",
        "I used 802.1Q subinterfaces on the router and a trunk to the access switch to connect two VLANs. The hosts used their respective router subinterfaces as default gateways."
      ],
      [
        "Verification",
        "I investigated a forwarding event in Simulation mode, then tested from the PCs in Realtime mode. The cross-VLAN ping succeeded."
      ]
    ],
    "images": []
  },
  "vlan-propagation": {
    "sections": [
      [
        "Exercise",
        "I worked with multiple Packet Tracer switches and investigated why some switches learned VLANs while others did not. I checked DTP trunk negotiation, VTP server and client roles, and STP port states."
      ],
      [
        "Checks",
        "Trunk status showed which VLANs could cross each link. VTP status and spanning-tree output helped distinguish a VLAN propagation issue from a forwarding-path issue."
      ]
    ],
    "images": []
  },
  "spanning-tree": {
    "sections": [
      [
        "Topology and observation",
        "I connected three Cisco 2960 switches in a triangle with two PCs. I used spanning-tree output to identify the root bridge, forwarding ports, and the port that blocked the redundant path."
      ],
      [
        "Bridge priority",
        "The exercise showed how changing bridge priority affects root election on a redundant Layer 2 topology."
      ]
    ],
    "images": []
  },
  "svi": {
    "sections": [
      [
        "Troubleshooting exercise",
        "I worked through gateway reachability and DHCP relay scenarios in a Layer 3 switching lab. I checked access VLAN membership, SVI state, IP routing, and whether the trunks permitted the required VLANs."
      ],
      [
        "Diagnosis",
        "A host that could not reach its own SVI required a different first check from a host that reached its gateway but received an automatic private address instead of a DHCP lease."
      ]
    ],
    "images": []
  },
  "vlsm": {
    "sections": [
      [
        "Address plan",
        "I planned four differently sized LANs from a single IPv4 address block. I matched each prefix size to its host requirement and identified the network address, usable range, broadcast address, and gateway."
      ],
      [
        "Topology",
        "The Packet Tracer exercise used a Cisco 2911, four switches, and four PCs. The plan assigned each LAN its own nonoverlapping subnet."
      ]
    ],
    "images": []
  },
  "flsm": {
    "sections": [
      [
        "Departmental design",
        "I built four equal-size IPv4 subnets for HR, Finance, IT, and Security. Each department had an access switch and two PCs, while trunk links and a router provided connectivity across the topology."
      ],
      [
        "Verification",
        "I corrected VLAN, trunk, and access-port configuration and verified that endpoints in the departments could ping each other."
      ]
    ],
    "images": [
      [
        "evidence-flsm-1.png",
        "Packet Tracer topology with four departmental switches, eight PCs, and a Cisco router.",
        1920,
        1080
      ]
    ]
  },
  "network-services": {
    "sections": [
      [
        "Network setup",
        "I configured DHCP, DNS, HTTP, email, FTP, and SSH in Packet Tracer. The router and two simulated servers were connected to a switch with a PC and laptop."
      ],
      [
        "Client tests",
        "The lab captures show a web page loading, a successful FTP login, and an SSH session reaching the router prompt. The mail client also recorded a successful send."
      ],
      [
        "Protocol check",
        "I used Simulation mode to distinguish SMTP over TCP from the supporting DNS or DHCP traffic over UDP."
      ]
    ],
    "images": [
      [
        "evidence-services-1.jpg",
        "Packet Tracer layout for the network services lab.",
        960,
        1280
      ],
      [
        "evidence-services-2.jpg",
        "The lab web page loaded in the Packet Tracer browser.",
        960,
        1280
      ],
      [
        "evidence-services-4.jpg",
        "SSH troubleshooting followed by access to the router prompt.",
        960,
        1280
      ],
      [
        "evidence-services-5.jpg",
        "FTP client receiving a successful login response and entering the FTP prompt.",
        960,
        1280
      ]
    ]
  },
  "ospf": {
    "sections": [
      [
        "Objective and topology",
        "I configured OSPFv2 Area 0 on three Cisco 2911 routers in Packet Tracer. The routers shared an Ethernet segment through a switch for designated router (DR) and backup designated router (BDR) election. R1 and R3 served PCs, while R2 used a loopback as a routed LAN."
      ],
      [
        "Configuration",
        "I assigned fixed router IDs, advertised the transit network and LAN prefixes, and made LAN-facing interfaces passive so they could advertise their networks without forming adjacencies with user devices."
      ],
      [
        "Election and failover",
        "R1 started first and retained its initial DR role as the remaining routers joined. I then set explicit interface priorities and restarted the OSPF process to test a controlled election. When the DR interface went down, the BDR took over. The original DR did not reclaim the role when it returned."
      ],
      [
        "Troubleshooting and end-to-end validation",
        "The neighbors reached FULL, but R1’s router LSA showed a missing LAN. I added the missing network statement and used the OSPF routes and a final four-reply ping to verify reachability."
      ],
      [
        "Further tests",
        "I added a fourth router to observe the 2-WAY state between two DROTHER routers. I then changed the network type on only one router to observe the mismatch and restored the broadcast type after the test."
      ]
    ],
    "images": [
      [
        "evidence-ospf-image1.png",
        "Packet Tracer topology for the shared Area 0 segment and endpoint LANs.",
        2000,
        1194
      ],
      [
        "evidence-ospf-image2.png",
        "R1 setup and local gateway test before the missing network statement was added.",
        2000,
        1250
      ],
      [
        "evidence-ospf-image3.png",
        "R2 loopback configuration and its FULL adjacency with R1.",
        2000,
        1250
      ],
      [
        "evidence-ospf-image5.png",
        "Default election, with R1 as DR and its neighbors identified in the table.",
        2000,
        1250
      ],
      [
        "evidence-ospf-image6.png",
        "Neighbor status after setting explicit interface priorities.",
        2000,
        1250
      ],
      [
        "evidence-ospf-image7.png",
        "DR/BDR failover and the roles after the original DR returned.",
        2000,
        1250
      ],
      [
        "evidence-ospf-image8.png",
        "OSPF link-state database used to identify the missing LAN advertisement.",
        2000,
        1250
      ],
      [
        "evidence-ospf-image9.png",
        "Routing and neighbor output after the configuration correction.",
        2000,
        1195
      ],
      [
        "evidence-ospf-image10.png",
        "Final PC-to-PC ping with four replies and zero loss.",
        2000,
        1194
      ],
      [
        "evidence-ospf-image11.png",
        "Neighbor table after adding a fourth router, including 2-WAY/DROTHER.",
        2000,
        1195
      ],
      [
        "evidence-ospf-image12.png",
        "Test of a mismatched point-to-point network type and resulting adjacency changes.",
        2000,
        1250
      ]
    ]
  },
  "pki": {
    "sections": [
      [
        "Objective and environment",
        "I used OpenSSL and an Apache web server on one Kali Linux host to test asymmetric encryption, digital signatures, and a local certificate chain."
      ],
      [
        "RSA encryption and decryption",
        "I generated a lab key pair, encrypted a short message with the public key using OAEP padding, inspected the ciphertext, and decrypted it with the private key. The output matched the original message."
      ],
      [
        "Digital signature and tamper test",
        "I signed the message with SHA-256 and verified it with the matching public key. Verification succeeded on the original message and failed after I changed its contents."
      ],
      [
        "Certificate chain",
        "I created a server key and certificate signing request for localhost, tested a self-signed certificate, and then issued a replacement certificate from the lab root CA. The replacement included localhost as a Subject Alternative Name and passed OpenSSL verification against the lab root."
      ],
      [
        "Apache and browser validation",
        "I corrected a certificate-path error using Apache’s configuration test and restarted the service. Firefox showed a trust warning before the isolated browser trusted the lab root CA. After that test configuration, the Apache page loaded over HTTPS on localhost."
      ]
    ],
    "images": [
      [
        "evidence-pki-topology.png",
        "Diagram of the RSA message flow and the localhost certificate chain.",
        1800,
        900
      ],
      [
        "evidence-pki-fig01.png",
        "Creation of an RSA lab key pair and its public key.",
        1000,
        292
      ],
      [
        "evidence-pki-fig02.png",
        "Ciphertext displayed as hexadecimal after encrypting the test message.",
        1000,
        794
      ],
      [
        "evidence-pki-fig03.png",
        "Recovered plaintext after correcting the decryption command.",
        935,
        545
      ],
      [
        "evidence-pki-fig04.png",
        "Successful signature verification and failure after the message was modified.",
        1000,
        824
      ],
      [
        "evidence-pki-fig05.png",
        "Generation of the Apache server’s key pair.",
        1000,
        312
      ],
      [
        "evidence-pki-fig06.png",
        "Certificate signing request and initial self-signed certificate for localhost.",
        1000,
        172
      ],
      [
        "evidence-pki-fig07.png",
        "Creation of the root certificate authority for the isolated lab.",
        1000,
        202
      ],
      [
        "evidence-pki-fig08.png",
        "Certificate signing after correcting the extensions file, followed by successful verification.",
        1400,
        452
      ],
      [
        "evidence-pki-fig09.png",
        "Issuer and subject of the signed localhost certificate.",
        1000,
        227
      ],
      [
        "evidence-pki-fig10.png",
        "Apache syntax check and service restart after correcting the SSL configuration.",
        1000,
        308
      ],
      [
        "evidence-pki-fig11.png",
        "Firefox warning before the test browser trusted the lab root certificate.",
        2000,
        828
      ],
      [
        "evidence-pki-fig12.png",
        "Apache page loaded over HTTPS on localhost after the trust test.",
        2000,
        728
      ]
    ]
  }
};
