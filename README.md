# feather-id-coding

Lightweight encoding and decoding for numberized ids to shorter url-approved string.

## Usage

```
import { encode, decode } from "number-id-coding"

const a = encode(5719739598897152)
// a is "KKXAd"

const b = decode("KKXAd")
// b is 5719739598897152
```
