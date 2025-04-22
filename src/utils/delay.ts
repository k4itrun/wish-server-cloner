export function delay(time: number = 1): Promise<number> {
  return new Promise((r, _) => setTimeout(() => r(2), time * 1000));
}
