type BankAccount = {
  money: number,
  deposit: (value: number) => void 
}

type Person = {
  name: string,
  bankAccount: BankAccount,
  hobbies: string[]
}

let bankAccount: BankAccount = {
  money: 2000,
  deposit(value: any) {
    this.money += value
  }
}

let myself: Person = {
  name: "TJ",
  bankAccount: bankAccount,
  hobbies: ["Programming", "Logic Puzzles"]
}

myself.bankAccount.deposit(3000)
console.log(myself)