export async function collect<T>(stream: AsyncGenerator<T>) {
  const buf: T[] = [];
  for await (const record of stream) {
    // Push record to buffer
    buf.push(record);
  }

  // Flush any remaining records in buffer
  return buf;
}

// Filter out messages based on predicate
export async function* filter<T>(
  stream: AsyncGenerator<T>,
  callback: (arg: T) => boolean | Promise<boolean>,
) {
  for await (const record of stream) {
    if (await callback(record)) yield record;
  }
}

// Map a message to another message
export async function* map<T, U>(stream: AsyncGenerator<T>, callback: (arg: T) => U | Promise<U>) {
  for await (const record of stream) {
    yield await callback(record);
  }
}
