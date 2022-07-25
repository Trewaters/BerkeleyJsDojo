# Tezos katas

### Position 1: CameLIGO, Hell World smart contract

let main (p, s : string * string) : operation list * string = 
(([] : operation list), s)

### Position 2: CameLIGO, type alias Hell World

type storage = string
type parameter = string
type return = operation list * storage
 
let main (p, s : parameter * storage) : return = 
(([] : operation list), s)