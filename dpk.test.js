const { deterministicPartitionKey } = require("./dpk");

const DEFAULT_HASH_CONFIG = {
  value: "1234",
  hash: "339a534179f99e659d57c72d6ca21a26f36c09a482524e081fd4fc2b1abc4291354aa71d7be0e9f609d112354a31208a2d69c2540974c7f48846dd8d3b44baa2",
};

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the applicable hash when given input", () => {
    const trivialKey = deterministicPartitionKey(DEFAULT_HASH_CONFIG.value);
    expect(trivialKey).toBe(DEFAULT_HASH_CONFIG.hash);
  });

  it("Returns same hash when given hash as partitionKey under the limit", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: DEFAULT_HASH_CONFIG.hash,
    });
    expect(trivialKey).toBe(DEFAULT_HASH_CONFIG.hash);
  });

  it("Returns new hash when given hash as partitionKey exceeding length limit", () => {
    const newHash =
      "151d340fc033a5ca4ebedd29784f3cb99eddf817c677d1953c1f3e6fa3162a382a91e810b867ff6d3ae120dd7a8abdb6134e67e7385f073c647c6c53de6bb8b4";
    const trivialKey = deterministicPartitionKey({
      partitionKey: `${DEFAULT_HASH_CONFIG.hash}${DEFAULT_HASH_CONFIG.hash}${DEFAULT_HASH_CONFIG.hash}${DEFAULT_HASH_CONFIG.hash}`,
    });
    expect(trivialKey).toBe(newHash);
  });
});
