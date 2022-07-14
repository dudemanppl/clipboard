const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when given the number '0'", () => {
    const trivialKey = deterministicPartitionKey(0);
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when given an event with a 'partitionKey' key set to the string '0'", () => {
    const mockEvent = { partitionKey: "0" };
    const trivialKey = deterministicPartitionKey(mockEvent);
    expect(trivialKey).toBe("0");
  });

  it("Returns the correct partitionKey when given an event with a 'partitionKey' key set to the number '0'", () => {
    const mockEvent = { partitionKey: 0 };
    const trivialKey = deterministicPartitionKey(mockEvent);
    expect(trivialKey).toBe(
      "e65a0cb83a95cae7eb0642da576cac881e397c0405c63577c977068f7892f69f1c315baa294124da2a67e0c486d340f9d357377f894d0c0fd850484f8984f2e7"
    );
  });

  it("Returns the correct partitionKey when given the string '0'", () => {
    const trivialKey = deterministicPartitionKey("0");
    expect(trivialKey).toBe(
      "5ae8f97ede3b9ae9f4b496c125d45d34edf13ce2f9e29c1c085ae0f499820173b86d731c4ca453d2e119b4ff63d3afd3ed5fdb9753fe222ef300d4f465f522ea"
    );
  });

  it("Returns the literal 'testKey' when given an event with a 'partitionKey' key set to the string 'testKey'", () => {
    const mockEvent = { partitionKey: "testKey" };
    const trivialKey = deterministicPartitionKey(mockEvent);
    expect(trivialKey).toBe("testKey");
  });

  it("Does not return the literal 'testKey' when given the string 'testKey'", () => {
    const trivialKey = deterministicPartitionKey("testKey");
    expect(trivialKey).not.toBe("testKey");
  });
});
