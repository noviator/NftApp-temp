
// Base URI + tokenId
// BaseURI = https://example.com
// tokenId = 1
// tokenURI(1) => https://example.com/1


export default function handler(req, res) {
  const tokenId = req.query.tokenId;

  const name = `MyNFT ${tokenId}`;
  const description = `A new NFT collection`;
  const image ="";

}
