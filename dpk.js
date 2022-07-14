const crypto = require("crypto");

const createHash = (data) => {
  return crypto.createHash("sha3-512").update(data).digest("hex");
};

const createPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";

  if (!event) return TRIVIAL_PARTITION_KEY;

  const { partitionKey = null } = event;

  if (partitionKey) return partitionKey;

  const data = JSON.stringify(event);

  return createHash(data);
};

const stringifyPartitionKey = (partitionKey) => {
  if (typeof partitionKey !== "string") {
    return JSON.stringify(partitionKey);
  }

  return partitionKey;
};

const shortenPartitionKey = (partitionKey) => {
  const MAX_PARTITION_KEY_LENGTH = 256;

  if (partitionKeyAsString.length > MAX_PARTITION_KEY_LENGTH) {
    return createHash(partitionKey);
  }
};

exports.deterministicPartitionKey = (event = null) => {
  const partitionKey = createPartitionKey(event);
  const partitionKeyAsString = stringifyPartitionKey(partitionKey);
  const shortenedPartitionKey = shortenPartitionKey(partitionKeyAsString);

  return shortenedPartitionKey;
};
