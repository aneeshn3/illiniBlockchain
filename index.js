const ec = require("eth-crypto");

async function run() {
  const key =
    "8c0456ac31fb6f53a15ff1ad5555c71d96760f8119dc9a8a992f02c89ad226e1f0cf81273a8017c8409d210cf4969135bb53ea2be22fd3e2eab093830a5c2ad3";
  const message =
    "Aneesh Nagalkar\naneeshn3@illinois.edu\ngoogle.com\n0xF8F7C2B95DEd7dB7CD8B36feAb858e34D54AD396/https://gist.github.com/aneeshn3/976d63fdba140c19d0d3b78f28b4253e\n I like signature grill";
  const encrypted = await ec.encryptWithPublicKey(key, message);

  console.log("Encrypted: " + ec.cipher.stringify(encrypted));
}
run();
