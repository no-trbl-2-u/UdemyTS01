// Let's keep it simple and only add the following methods to the Map:
// setItem(key: string, item: T) // should create a new key-value pair
// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs
// The map should be usable like shown below:

class MyMap<T> {
  private collection: {[key: string]: T}= {};

  getItem(key: string): T {
    return this.collection[key]
  }

  setItem(key: string, item: T): void {
    this.collection[key] = item
  }

  clear(): void {
    this.collection = {}
  }

  printMap() {
    for(let item in this.collection){
      console.log(item, this.collection[item])
    }
  }

}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
console.log(numberMap) 

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();