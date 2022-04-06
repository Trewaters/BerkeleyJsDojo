# Tezos fundamentals

### CameLIGO Types

- Type aliasing creates a new name for a   type, to make your contracts more readable.

```OCaml
type storage = string
type parameter = string
type return = operation list * storage
let main (p, s : parameter * storage) :   return = 
(([] : operation list), s)  
```

- Constants are defined with the let keyword

`let my_name : string = "Alice"`

- String is a sequence of characters. can be concatenated with ^ operator.

`let my_name : string = "Alice"`

- Int Values of type `int` are integers. They can be positive, negative, or zero.

```OCaml
let a: int = 42
let b: int = -3
let c: int = 0
```

- Nat Values of type `nat` are natural integral numbers. They can’t have a negative value. Natural numbers are written as digits followed by the suffix (group of letters added at the end of a word) n.

```OCaml
let a : nat = 7n
let b : nat = 0n
```

- Tez Tezos tokens can be written as digits followed by the suffix `tez` or `tz` for the unit tez.

```OCaml
let a : tez = 1tez
let b : tez = 3tz
 
let c : tez = 1.3tez
let d : tez = 3.3tz
```

- Tezos tokens can be written as digits followed by the suffix `mutez` for the unit of millionth of tez.

`let e : tez = 1000000mutez`

- You can use underscores to improve readability when defining large numbers.

```OCaml
let f : tez = 1000_000mutez
```

- You can cast (convert) an `int` to a `nat` and the other way around.

```OCaml
let a : int = int (1n)
let b : nat = abs (1)
```

- You can check if a value is a `nat` with `Michelson.is_nat`. It accepts an `int` and returns an optional `nat`. If the input is not a `nat`, it returns none.

```OCaml
let is_a_nat : nat option = Michelson.is_nat (3)
```

- Boolean has one of two possible values: `true` or `false`.

`let admin : bool = false`

- Addresses consist of a string value and an `address` type.

```OCaml
let my_account : address =
 ("tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx" : address)
```

- Timestamp
You can obtain the starting time of the current block using the built-in function Tezos.now.

```OCaml
let today : timestamp = Tezos.now
```

- Timestamps can do arithmetical operations with integers. Please be aware that it is up to the baker (validator of a block) to set the current timestamp value.

```OCaml
let some_date : timestamp = ("2009-01-03t00:00:00Z" : timestamp)
let one_day : int = 86_400
let one_day_later : timestamp = some_date + one_day
```
- The unit type has only one value that carries no information; it is generally used as a placeholder.

`let n : unit = ()`

- The unit type is also used as an argument in functions that don’t need an input value.

`let time_now() : timestamp = Tezos.now`

### syntax

- In CameLIGO you define functions with the `let` keyword and the function name, in this case, the main function.

### CameLIGO functions

- Substrings can be extracted using the built-in function `String.sub`. The first character has the index 0.

```OCaml
let name  : string = "Alice"
let slice : string = String.sub 0n 3n name // "Ali"
```

- Length of a string can be found using a built-in function `String.length`.

```OCaml
let name : string = "Alice"
let length : nat = String.length name  // length = 5
```