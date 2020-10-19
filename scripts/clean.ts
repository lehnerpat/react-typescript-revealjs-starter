import fs from "fs-extra";
import { outDirPath } from "./util/paths";
import { runAsyncMain } from "./util/runAsyncMain";

async function clean() {
  await fs.remove(outDirPath);
}

runAsyncMain(clean);
