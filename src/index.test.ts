import { encode, decode } from "./"

describe("coding", () => {
  it("should encode", () => {
    expect(encode(0)).toEqual("0~")
    expect(encode(1)).toEqual("1~")
    expect(encode(9)).toEqual("9~")
    expect(encode(10)).toEqual("A~")
    expect(encode(5719739598897152)).toEqual("KKXAd")
    expect(encode(6050328667488256)).toEqual("LVhth")
    expect(encode(5800605981343744)).toEqual("KcvxJ")
    expect(encode(6247984203300864)).toEqual("MCe8l")
    expect(encode(5176276851621888)).toEqual("IOylV")
    expect(encode(5669304938790912)).toEqual("K93Fh")
    expect(encode(5315863892721664)).toEqual("Iui03")
    expect(encode(5315863842390016)).toEqual("Iui00")
    expect(encode(5673428107395072)).toEqual("K9-Fh")
    expect(encode(5906524572483584)).toEqual("K_-Fh")
    expect(encode(4546031362506752)).toEqual("G9fTeW0.")
  })
  it("should throw on negative", () => {
    expect(() => encode(-1)).toThrow()
  })

  it("should decode", () => {
    expect(decode("0~")).toEqual(0)
    expect(decode("1~")).toEqual(1)
    expect(decode("9~")).toEqual(9)
    expect(decode("A~")).toEqual(10)
    expect(decode("KKXAd")).toEqual(5719739598897152)
    expect(decode("LVhth")).toEqual(6050328667488256)
    expect(decode("KcvxJ")).toEqual(5800605981343744)
    expect(decode("MCe8l")).toEqual(6247984203300864)
    expect(decode("IOylV")).toEqual(5176276851621888)
    expect(decode("K93Fh")).toEqual(5669304938790912)
    expect(decode("Iui03")).toEqual(5315863892721664)
    expect(decode("Iui00")).toEqual(5315863842390016)
    expect(decode("K9-Fh")).toEqual(5673428107395072)
    expect(decode("K_-Fh")).toEqual(5906524572483584)
    expect(decode("G9fTeW000~")).toEqual(4546031362506752)
    expect(decode("G9fTeW0.")).toEqual(4546031362506752)
  })
})
