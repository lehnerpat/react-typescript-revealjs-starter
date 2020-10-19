export function runAsyncMain(mainFunction: () => Promise<void>) {
  mainFunction().catch((reason) => {
    console.error(reason);
    process.exit(1);
  });
}
