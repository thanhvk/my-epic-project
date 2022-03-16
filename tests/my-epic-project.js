const anchor = require('@project-serum/anchor');

const main = async() => {
  console.log("🚀 Starting test...")

  anchor.setProvider(anchor.Provider.env());
  console.log(anchor.workspace, "=============================");
  const program = anchor.workspace.my-epic-project;
  const tx = await program.rpc.startStuffOff();

  console.log("📝 Your transaction signature", tx);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();