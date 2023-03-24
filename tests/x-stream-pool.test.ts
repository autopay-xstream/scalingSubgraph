import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { FlowEndMessage } from "../generated/schema"
import { FlowEndMessage as FlowEndMessageEvent } from "../generated/XStreamPool/XStreamPool"
import { handleFlowEndMessage } from "../src/x-stream-pool"
import { createFlowEndMessageEvent } from "./x-stream-pool-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let sender = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let receiver = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let flowRate = BigInt.fromI32(234)
    let newFlowEndMessageEvent = createFlowEndMessageEvent(
      sender,
      receiver,
      flowRate
    )
    handleFlowEndMessage(newFlowEndMessageEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("FlowEndMessage created and stored", () => {
    assert.entityCount("FlowEndMessage", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "FlowEndMessage",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sender",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "FlowEndMessage",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "receiver",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "FlowEndMessage",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "flowRate",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
