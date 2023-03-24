import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  FlowEndMessage,
  FlowStartMessage,
  FlowTopupMessage,
  RebalanceMessageSent,
  StreamDelete,
  StreamStart,
  StreamUpdate,
  UpgradeToken,
  XReceiveData,
  XStreamFlowTrigger
} from "../generated/XStreamPool/XStreamPool"

export function createFlowEndMessageEvent(
  sender: Address,
  receiver: Address,
  flowRate: BigInt
): FlowEndMessage {
  let flowEndMessageEvent = changetype<FlowEndMessage>(newMockEvent())

  flowEndMessageEvent.parameters = new Array()

  flowEndMessageEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  flowEndMessageEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  flowEndMessageEvent.parameters.push(
    new ethereum.EventParam(
      "flowRate",
      ethereum.Value.fromSignedBigInt(flowRate)
    )
  )

  return flowEndMessageEvent
}

export function createFlowStartMessageEvent(
  sender: Address,
  receiver: Address,
  flowRate: BigInt,
  startTime: BigInt
): FlowStartMessage {
  let flowStartMessageEvent = changetype<FlowStartMessage>(newMockEvent())

  flowStartMessageEvent.parameters = new Array()

  flowStartMessageEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  flowStartMessageEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  flowStartMessageEvent.parameters.push(
    new ethereum.EventParam(
      "flowRate",
      ethereum.Value.fromSignedBigInt(flowRate)
    )
  )
  flowStartMessageEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )

  return flowStartMessageEvent
}

export function createFlowTopupMessageEvent(
  sender: Address,
  receiver: Address,
  newFlowRate: BigInt,
  topupTime: BigInt,
  endTime: BigInt
): FlowTopupMessage {
  let flowTopupMessageEvent = changetype<FlowTopupMessage>(newMockEvent())

  flowTopupMessageEvent.parameters = new Array()

  flowTopupMessageEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  flowTopupMessageEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  flowTopupMessageEvent.parameters.push(
    new ethereum.EventParam(
      "newFlowRate",
      ethereum.Value.fromSignedBigInt(newFlowRate)
    )
  )
  flowTopupMessageEvent.parameters.push(
    new ethereum.EventParam(
      "topupTime",
      ethereum.Value.fromUnsignedBigInt(topupTime)
    )
  )
  flowTopupMessageEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )

  return flowTopupMessageEvent
}

export function createRebalanceMessageSentEvent(
  amount: BigInt
): RebalanceMessageSent {
  let rebalanceMessageSentEvent = changetype<RebalanceMessageSent>(
    newMockEvent()
  )

  rebalanceMessageSentEvent.parameters = new Array()

  rebalanceMessageSentEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return rebalanceMessageSentEvent
}

export function createStreamDeleteEvent(
  sender: Address,
  receiver: Address
): StreamDelete {
  let streamDeleteEvent = changetype<StreamDelete>(newMockEvent())

  streamDeleteEvent.parameters = new Array()

  streamDeleteEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  streamDeleteEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )

  return streamDeleteEvent
}

export function createStreamStartEvent(
  sender: Address,
  receiver: Address,
  flowRate: BigInt,
  startTime: BigInt
): StreamStart {
  let streamStartEvent = changetype<StreamStart>(newMockEvent())

  streamStartEvent.parameters = new Array()

  streamStartEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  streamStartEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  streamStartEvent.parameters.push(
    new ethereum.EventParam(
      "flowRate",
      ethereum.Value.fromSignedBigInt(flowRate)
    )
  )
  streamStartEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )

  return streamStartEvent
}

export function createStreamUpdateEvent(
  sender: Address,
  receiver: Address,
  flowRate: BigInt,
  startTime: BigInt
): StreamUpdate {
  let streamUpdateEvent = changetype<StreamUpdate>(newMockEvent())

  streamUpdateEvent.parameters = new Array()

  streamUpdateEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  streamUpdateEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  streamUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "flowRate",
      ethereum.Value.fromSignedBigInt(flowRate)
    )
  )
  streamUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )

  return streamUpdateEvent
}

export function createUpgradeTokenEvent(
  baseToken: Address,
  amount: BigInt
): UpgradeToken {
  let upgradeTokenEvent = changetype<UpgradeToken>(newMockEvent())

  upgradeTokenEvent.parameters = new Array()

  upgradeTokenEvent.parameters.push(
    new ethereum.EventParam("baseToken", ethereum.Value.fromAddress(baseToken))
  )
  upgradeTokenEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return upgradeTokenEvent
}

export function createXReceiveDataEvent(
  originSender: Address,
  origin: BigInt,
  asset: Address,
  amount: BigInt,
  transferId: Bytes,
  receiveTimestamp: BigInt,
  senderAccount: Address,
  receiverAccount: Address,
  flowRate: BigInt
): XReceiveData {
  let xReceiveDataEvent = changetype<XReceiveData>(newMockEvent())

  xReceiveDataEvent.parameters = new Array()

  xReceiveDataEvent.parameters.push(
    new ethereum.EventParam(
      "originSender",
      ethereum.Value.fromAddress(originSender)
    )
  )
  xReceiveDataEvent.parameters.push(
    new ethereum.EventParam("origin", ethereum.Value.fromUnsignedBigInt(origin))
  )
  xReceiveDataEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  xReceiveDataEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  xReceiveDataEvent.parameters.push(
    new ethereum.EventParam(
      "transferId",
      ethereum.Value.fromFixedBytes(transferId)
    )
  )
  xReceiveDataEvent.parameters.push(
    new ethereum.EventParam(
      "receiveTimestamp",
      ethereum.Value.fromUnsignedBigInt(receiveTimestamp)
    )
  )
  xReceiveDataEvent.parameters.push(
    new ethereum.EventParam(
      "senderAccount",
      ethereum.Value.fromAddress(senderAccount)
    )
  )
  xReceiveDataEvent.parameters.push(
    new ethereum.EventParam(
      "receiverAccount",
      ethereum.Value.fromAddress(receiverAccount)
    )
  )
  xReceiveDataEvent.parameters.push(
    new ethereum.EventParam(
      "flowRate",
      ethereum.Value.fromSignedBigInt(flowRate)
    )
  )

  return xReceiveDataEvent
}

export function createXStreamFlowTriggerEvent(
  sender: Address,
  receiver: Address,
  selectedToken: Address,
  flowRate: BigInt,
  amount: BigInt,
  streamStatus: BigInt,
  startTime: BigInt,
  bufferFee: BigInt,
  networkFee: BigInt,
  destinationDomain: BigInt
): XStreamFlowTrigger {
  let xStreamFlowTriggerEvent = changetype<XStreamFlowTrigger>(newMockEvent())

  xStreamFlowTriggerEvent.parameters = new Array()

  xStreamFlowTriggerEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  xStreamFlowTriggerEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  xStreamFlowTriggerEvent.parameters.push(
    new ethereum.EventParam(
      "selectedToken",
      ethereum.Value.fromAddress(selectedToken)
    )
  )
  xStreamFlowTriggerEvent.parameters.push(
    new ethereum.EventParam(
      "flowRate",
      ethereum.Value.fromSignedBigInt(flowRate)
    )
  )
  xStreamFlowTriggerEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  xStreamFlowTriggerEvent.parameters.push(
    new ethereum.EventParam(
      "streamStatus",
      ethereum.Value.fromUnsignedBigInt(streamStatus)
    )
  )
  xStreamFlowTriggerEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  xStreamFlowTriggerEvent.parameters.push(
    new ethereum.EventParam(
      "bufferFee",
      ethereum.Value.fromUnsignedBigInt(bufferFee)
    )
  )
  xStreamFlowTriggerEvent.parameters.push(
    new ethereum.EventParam(
      "networkFee",
      ethereum.Value.fromUnsignedBigInt(networkFee)
    )
  )
  xStreamFlowTriggerEvent.parameters.push(
    new ethereum.EventParam(
      "destinationDomain",
      ethereum.Value.fromUnsignedBigInt(destinationDomain)
    )
  )

  return xStreamFlowTriggerEvent
}
