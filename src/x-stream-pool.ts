import {
  FlowEndMessage as FlowEndMessageEvent,
  FlowStartMessage as FlowStartMessageEvent,
  FlowTopupMessage as FlowTopupMessageEvent,
  RebalanceMessageSent as RebalanceMessageSentEvent,
  StreamDelete as StreamDeleteEvent,
  StreamStart as StreamStartEvent,
  StreamUpdate as StreamUpdateEvent,
  UpgradeToken as UpgradeTokenEvent,
  XReceiveData as XReceiveDataEvent,
  XStreamFlowTrigger as XStreamFlowTriggerEvent
} from "../generated/XStreamPool/XStreamPool"
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
} from "../generated/schema"

export function handleFlowEndMessage(event: FlowEndMessageEvent): void {
  let entity = new FlowEndMessage(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.receiver = event.params.receiver
  entity.flowRate = event.params.flowRate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFlowStartMessage(event: FlowStartMessageEvent): void {
  let entity = new FlowStartMessage(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.receiver = event.params.receiver
  entity.flowRate = event.params.flowRate
  entity.startTime = event.params.startTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFlowTopupMessage(event: FlowTopupMessageEvent): void {
  let entity = new FlowTopupMessage(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.receiver = event.params.receiver
  entity.newFlowRate = event.params.newFlowRate
  entity.topupTime = event.params.topupTime
  entity.endTime = event.params.endTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRebalanceMessageSent(
  event: RebalanceMessageSentEvent
): void {
  let entity = new RebalanceMessageSent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStreamDelete(event: StreamDeleteEvent): void {
  let entity = new StreamDelete(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.receiver = event.params.receiver

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStreamStart(event: StreamStartEvent): void {
  let entity = new StreamStart(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.receiver = event.params.receiver
  entity.flowRate = event.params.flowRate
  entity.startTime = event.params.startTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStreamUpdate(event: StreamUpdateEvent): void {
  let entity = new StreamUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.receiver = event.params.receiver
  entity.flowRate = event.params.flowRate
  entity.startTime = event.params.startTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpgradeToken(event: UpgradeTokenEvent): void {
  let entity = new UpgradeToken(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.baseToken = event.params.baseToken
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleXReceiveData(event: XReceiveDataEvent): void {
  let entity = new XReceiveData(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.originSender = event.params.originSender
  entity.origin = event.params.origin
  entity.asset = event.params.asset
  entity.amount = event.params.amount
  entity.transferId = event.params.transferId
  entity.receiveTimestamp = event.params.receiveTimestamp
  entity.senderAccount = event.params.senderAccount
  entity.receiverAccount = event.params.receiverAccount
  entity.flowRate = event.params.flowRate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleXStreamFlowTrigger(event: XStreamFlowTriggerEvent): void {
  let entity = new XStreamFlowTrigger(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.receiver = event.params.receiver
  entity.selectedToken = event.params.selectedToken
  entity.flowRate = event.params.flowRate
  entity.amount = event.params.amount
  entity.streamStatus = event.params.streamStatus
  entity.startTime = event.params.startTime
  entity.bufferFee = event.params.bufferFee
  entity.networkFee = event.params.networkFee
  entity.destinationDomain = event.params.destinationDomain

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
