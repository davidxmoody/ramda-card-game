import * as R from "ramda"
import * as readline from "readline"

function randomPick<T>(list: T[], num: number): T[] {
  return R.sortBy(() => Math.random(), list).slice(0, num)
}

const startingConstants = randomPick(R.range(-20, 21), 3)
const targetConstants = randomPick(R.range(-20, 21), 3)

const handConstants = randomPick(R.range(-10, 11), 12)

const mathFunctionNames: Array<keyof typeof R> = [
  "add",
  "always",
  "dec",
  "divide",
  "inc",
  // "mathMod", // Too similar to mathMod
  // "mean",
  // "median",
  "modulo",
  "multiply",
  "negate",
  // "product",
  "subtract",
  // "sum",
  "clamp",
  "min",
  "max",
]

let hand = randomPick([...mathFunctionNames, ...handConstants], 3)

function printHand() {
  console.log("Starting constants:")
  console.log(startingConstants)
  console.log("")

  console.log("Target constants:")
  console.log(targetConstants)
  console.log("")

  console.log("Functions and constants:")
  console.log(hand)
  console.log("")
  console.log("")
  console.log("")
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
})

rl.on("line", () => {
  hand = hand.concat(
    randomPick(R.difference([...mathFunctionNames, ...handConstants], hand), 1),
  )
  printHand()
})

printHand()
