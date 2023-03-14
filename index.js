const fs = require("fs/promises")

const getText = async () => {
  try {
    const data = await fs.readFile(__dirname + "/text.txt", "utf-8")
    const res = data
      .split(", ")
      .map((item) => item + "\n")
      .join("")

    await fs.writeFile(__dirname + "/text.txt", res)
  } catch (error) {
    console.log("Check Your file is exist on root dir")
    console.log("check your name of file include Extension .txt  or .doc ...")
    console.log(error.message)
  }
}
getText()
