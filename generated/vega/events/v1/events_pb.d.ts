// package: vega.events.v1
// file: vega/events/v1/events.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as vega_markets_pb from "../../../vega/markets_pb";
import * as vega_assets_pb from "../../../vega/assets_pb";
import * as vega_governance_pb from "../../../vega/governance_pb";
import * as vega_vega_pb from "../../../vega/vega_pb";
import * as vega_oracles_v1_spec_pb from "../../../vega/oracles/v1/spec_pb";
import * as vega_oracles_v1_data_pb from "../../../vega/oracles/v1/data_pb";
import * as vega_commands_v1_commands_pb from "../../../vega/commands/v1/commands_pb";
import * as vega_commands_v1_validator_commands_pb from "../../../vega/commands/v1/validator_commands_pb";

export class StakeLinking extends jspb.Message {
    getId(): string;
    setId(value: string): StakeLinking;
    getType(): StakeLinking.Type;
    setType(value: StakeLinking.Type): StakeLinking;
    getTs(): number;
    setTs(value: number): StakeLinking;
    getParty(): string;
    setParty(value: string): StakeLinking;
    getAmount(): string;
    setAmount(value: string): StakeLinking;
    getStatus(): StakeLinking.Status;
    setStatus(value: StakeLinking.Status): StakeLinking;
    getFinalizedAt(): number;
    setFinalizedAt(value: number): StakeLinking;
    getTxHash(): string;
    setTxHash(value: string): StakeLinking;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakeLinking.AsObject;
    static toObject(includeInstance: boolean, msg: StakeLinking): StakeLinking.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakeLinking, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakeLinking;
    static deserializeBinaryFromReader(message: StakeLinking, reader: jspb.BinaryReader): StakeLinking;
}

export namespace StakeLinking {
    export type AsObject = {
        id: string,
        type: StakeLinking.Type,
        ts: number,
        party: string,
        amount: string,
        status: StakeLinking.Status,
        finalizedAt: number,
        txHash: string,
    }

    export enum Type {
    TYPE_UNSPECIFIED = 0,
    TYPE_LINK = 1,
    TYPE_UNLINK = 2,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    STATUS_PENDING = 1,
    STATUS_ACCEPTED = 2,
    STATUS_REJECTED = 3,
    }

}

export class CheckpointEvent extends jspb.Message {
    getHash(): string;
    setHash(value: string): CheckpointEvent;
    getBlockHash(): string;
    setBlockHash(value: string): CheckpointEvent;
    getBlockHeight(): number;
    setBlockHeight(value: number): CheckpointEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckpointEvent.AsObject;
    static toObject(includeInstance: boolean, msg: CheckpointEvent): CheckpointEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckpointEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckpointEvent;
    static deserializeBinaryFromReader(message: CheckpointEvent, reader: jspb.BinaryReader): CheckpointEvent;
}

export namespace CheckpointEvent {
    export type AsObject = {
        hash: string,
        blockHash: string,
        blockHeight: number,
    }
}

export class RewardPayoutEvent extends jspb.Message {
    getParty(): string;
    setParty(value: string): RewardPayoutEvent;
    getEpochSeq(): string;
    setEpochSeq(value: string): RewardPayoutEvent;
    getAsset(): string;
    setAsset(value: string): RewardPayoutEvent;
    getAmount(): string;
    setAmount(value: string): RewardPayoutEvent;
    getPercentOfTotalReward(): string;
    setPercentOfTotalReward(value: string): RewardPayoutEvent;
    getTimestamp(): number;
    setTimestamp(value: number): RewardPayoutEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RewardPayoutEvent.AsObject;
    static toObject(includeInstance: boolean, msg: RewardPayoutEvent): RewardPayoutEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RewardPayoutEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RewardPayoutEvent;
    static deserializeBinaryFromReader(message: RewardPayoutEvent, reader: jspb.BinaryReader): RewardPayoutEvent;
}

export namespace RewardPayoutEvent {
    export type AsObject = {
        party: string,
        epochSeq: string,
        asset: string,
        amount: string,
        percentOfTotalReward: string,
        timestamp: number,
    }
}

export class ValidatorScoreEvent extends jspb.Message {
    getNodeId(): string;
    setNodeId(value: string): ValidatorScoreEvent;
    getEpochSeq(): string;
    setEpochSeq(value: string): ValidatorScoreEvent;
    getValidatorScore(): string;
    setValidatorScore(value: string): ValidatorScoreEvent;
    getNormalisedScore(): string;
    setNormalisedScore(value: string): ValidatorScoreEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidatorScoreEvent.AsObject;
    static toObject(includeInstance: boolean, msg: ValidatorScoreEvent): ValidatorScoreEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidatorScoreEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidatorScoreEvent;
    static deserializeBinaryFromReader(message: ValidatorScoreEvent, reader: jspb.BinaryReader): ValidatorScoreEvent;
}

export namespace ValidatorScoreEvent {
    export type AsObject = {
        nodeId: string,
        epochSeq: string,
        validatorScore: string,
        normalisedScore: string,
    }
}

export class DelegationBalanceEvent extends jspb.Message {
    getParty(): string;
    setParty(value: string): DelegationBalanceEvent;
    getNodeId(): string;
    setNodeId(value: string): DelegationBalanceEvent;
    getAmount(): string;
    setAmount(value: string): DelegationBalanceEvent;
    getEpochSeq(): string;
    setEpochSeq(value: string): DelegationBalanceEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DelegationBalanceEvent.AsObject;
    static toObject(includeInstance: boolean, msg: DelegationBalanceEvent): DelegationBalanceEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DelegationBalanceEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DelegationBalanceEvent;
    static deserializeBinaryFromReader(message: DelegationBalanceEvent, reader: jspb.BinaryReader): DelegationBalanceEvent;
}

export namespace DelegationBalanceEvent {
    export type AsObject = {
        party: string,
        nodeId: string,
        amount: string,
        epochSeq: string,
    }
}

export class MarketEvent extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): MarketEvent;
    getPayload(): string;
    setPayload(value: string): MarketEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketEvent.AsObject;
    static toObject(includeInstance: boolean, msg: MarketEvent): MarketEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketEvent;
    static deserializeBinaryFromReader(message: MarketEvent, reader: jspb.BinaryReader): MarketEvent;
}

export namespace MarketEvent {
    export type AsObject = {
        marketId: string,
        payload: string,
    }
}

export class TxErrorEvent extends jspb.Message {
    getPartyId(): string;
    setPartyId(value: string): TxErrorEvent;
    getErrMsg(): string;
    setErrMsg(value: string): TxErrorEvent;

    hasOrderSubmission(): boolean;
    clearOrderSubmission(): void;
    getOrderSubmission(): vega_commands_v1_commands_pb.OrderSubmission | undefined;
    setOrderSubmission(value?: vega_commands_v1_commands_pb.OrderSubmission): TxErrorEvent;

    hasOrderAmendment(): boolean;
    clearOrderAmendment(): void;
    getOrderAmendment(): vega_commands_v1_commands_pb.OrderAmendment | undefined;
    setOrderAmendment(value?: vega_commands_v1_commands_pb.OrderAmendment): TxErrorEvent;

    hasOrderCancellation(): boolean;
    clearOrderCancellation(): void;
    getOrderCancellation(): vega_commands_v1_commands_pb.OrderCancellation | undefined;
    setOrderCancellation(value?: vega_commands_v1_commands_pb.OrderCancellation): TxErrorEvent;

    hasProposal(): boolean;
    clearProposal(): void;
    getProposal(): vega_commands_v1_commands_pb.ProposalSubmission | undefined;
    setProposal(value?: vega_commands_v1_commands_pb.ProposalSubmission): TxErrorEvent;

    hasVoteSubmission(): boolean;
    clearVoteSubmission(): void;
    getVoteSubmission(): vega_commands_v1_commands_pb.VoteSubmission | undefined;
    setVoteSubmission(value?: vega_commands_v1_commands_pb.VoteSubmission): TxErrorEvent;

    hasLiquidityProvisionSubmission(): boolean;
    clearLiquidityProvisionSubmission(): void;
    getLiquidityProvisionSubmission(): vega_commands_v1_commands_pb.LiquidityProvisionSubmission | undefined;
    setLiquidityProvisionSubmission(value?: vega_commands_v1_commands_pb.LiquidityProvisionSubmission): TxErrorEvent;

    hasWithdrawSubmission(): boolean;
    clearWithdrawSubmission(): void;
    getWithdrawSubmission(): vega_commands_v1_commands_pb.WithdrawSubmission | undefined;
    setWithdrawSubmission(value?: vega_commands_v1_commands_pb.WithdrawSubmission): TxErrorEvent;

    hasDelegateSubmission(): boolean;
    clearDelegateSubmission(): void;
    getDelegateSubmission(): vega_commands_v1_commands_pb.DelegateSubmission | undefined;
    setDelegateSubmission(value?: vega_commands_v1_commands_pb.DelegateSubmission): TxErrorEvent;

    hasUndelegateSubmission(): boolean;
    clearUndelegateSubmission(): void;
    getUndelegateSubmission(): vega_commands_v1_commands_pb.UndelegateSubmission | undefined;
    setUndelegateSubmission(value?: vega_commands_v1_commands_pb.UndelegateSubmission): TxErrorEvent;

    hasRestoreSnapshot(): boolean;
    clearRestoreSnapshot(): void;
    getRestoreSnapshot(): vega_commands_v1_commands_pb.RestoreSnapshot | undefined;
    setRestoreSnapshot(value?: vega_commands_v1_commands_pb.RestoreSnapshot): TxErrorEvent;

    getTransactionCase(): TxErrorEvent.TransactionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TxErrorEvent.AsObject;
    static toObject(includeInstance: boolean, msg: TxErrorEvent): TxErrorEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TxErrorEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TxErrorEvent;
    static deserializeBinaryFromReader(message: TxErrorEvent, reader: jspb.BinaryReader): TxErrorEvent;
}

export namespace TxErrorEvent {
    export type AsObject = {
        partyId: string,
        errMsg: string,
        orderSubmission?: vega_commands_v1_commands_pb.OrderSubmission.AsObject,
        orderAmendment?: vega_commands_v1_commands_pb.OrderAmendment.AsObject,
        orderCancellation?: vega_commands_v1_commands_pb.OrderCancellation.AsObject,
        proposal?: vega_commands_v1_commands_pb.ProposalSubmission.AsObject,
        voteSubmission?: vega_commands_v1_commands_pb.VoteSubmission.AsObject,
        liquidityProvisionSubmission?: vega_commands_v1_commands_pb.LiquidityProvisionSubmission.AsObject,
        withdrawSubmission?: vega_commands_v1_commands_pb.WithdrawSubmission.AsObject,
        delegateSubmission?: vega_commands_v1_commands_pb.DelegateSubmission.AsObject,
        undelegateSubmission?: vega_commands_v1_commands_pb.UndelegateSubmission.AsObject,
        restoreSnapshot?: vega_commands_v1_commands_pb.RestoreSnapshot.AsObject,
    }

    export enum TransactionCase {
        TRANSACTION_NOT_SET = 0,
        ORDER_SUBMISSION = 101,
        ORDER_AMENDMENT = 102,
        ORDER_CANCELLATION = 103,
        PROPOSAL = 104,
        VOTE_SUBMISSION = 105,
        LIQUIDITY_PROVISION_SUBMISSION = 106,
        WITHDRAW_SUBMISSION = 107,
        DELEGATE_SUBMISSION = 108,
        UNDELEGATE_SUBMISSION = 109,
        RESTORE_SNAPSHOT = 110,
    }

}

export class TimeUpdate extends jspb.Message {
    getTimestamp(): number;
    setTimestamp(value: number): TimeUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: TimeUpdate): TimeUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeUpdate;
    static deserializeBinaryFromReader(message: TimeUpdate, reader: jspb.BinaryReader): TimeUpdate;
}

export namespace TimeUpdate {
    export type AsObject = {
        timestamp: number,
    }
}

export class EpochEvent extends jspb.Message {
    getSeq(): number;
    setSeq(value: number): EpochEvent;
    getAction(): vega_vega_pb.EpochAction;
    setAction(value: vega_vega_pb.EpochAction): EpochEvent;
    getStartTime(): number;
    setStartTime(value: number): EpochEvent;
    getExpireTime(): number;
    setExpireTime(value: number): EpochEvent;
    getEndTime(): number;
    setEndTime(value: number): EpochEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EpochEvent.AsObject;
    static toObject(includeInstance: boolean, msg: EpochEvent): EpochEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EpochEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EpochEvent;
    static deserializeBinaryFromReader(message: EpochEvent, reader: jspb.BinaryReader): EpochEvent;
}

export namespace EpochEvent {
    export type AsObject = {
        seq: number,
        action: vega_vega_pb.EpochAction,
        startTime: number,
        expireTime: number,
        endTime: number,
    }
}

export class TransferResponses extends jspb.Message {
    clearResponsesList(): void;
    getResponsesList(): Array<vega_vega_pb.TransferResponse>;
    setResponsesList(value: Array<vega_vega_pb.TransferResponse>): TransferResponses;
    addResponses(value?: vega_vega_pb.TransferResponse, index?: number): vega_vega_pb.TransferResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransferResponses.AsObject;
    static toObject(includeInstance: boolean, msg: TransferResponses): TransferResponses.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferResponses, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferResponses;
    static deserializeBinaryFromReader(message: TransferResponses, reader: jspb.BinaryReader): TransferResponses;
}

export namespace TransferResponses {
    export type AsObject = {
        responsesList: Array<vega_vega_pb.TransferResponse.AsObject>,
    }
}

export class PositionResolution extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): PositionResolution;
    getDistressed(): number;
    setDistressed(value: number): PositionResolution;
    getClosed(): number;
    setClosed(value: number): PositionResolution;
    getMarkPrice(): number;
    setMarkPrice(value: number): PositionResolution;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionResolution.AsObject;
    static toObject(includeInstance: boolean, msg: PositionResolution): PositionResolution.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionResolution, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionResolution;
    static deserializeBinaryFromReader(message: PositionResolution, reader: jspb.BinaryReader): PositionResolution;
}

export namespace PositionResolution {
    export type AsObject = {
        marketId: string,
        distressed: number,
        closed: number,
        markPrice: number,
    }
}

export class LossSocialization extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): LossSocialization;
    getPartyId(): string;
    setPartyId(value: string): LossSocialization;
    getAmount(): number;
    setAmount(value: number): LossSocialization;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LossSocialization.AsObject;
    static toObject(includeInstance: boolean, msg: LossSocialization): LossSocialization.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LossSocialization, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LossSocialization;
    static deserializeBinaryFromReader(message: LossSocialization, reader: jspb.BinaryReader): LossSocialization;
}

export namespace LossSocialization {
    export type AsObject = {
        marketId: string,
        partyId: string,
        amount: number,
    }
}

export class TradeSettlement extends jspb.Message {
    getSize(): number;
    setSize(value: number): TradeSettlement;
    getPrice(): number;
    setPrice(value: number): TradeSettlement;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradeSettlement.AsObject;
    static toObject(includeInstance: boolean, msg: TradeSettlement): TradeSettlement.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradeSettlement, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradeSettlement;
    static deserializeBinaryFromReader(message: TradeSettlement, reader: jspb.BinaryReader): TradeSettlement;
}

export namespace TradeSettlement {
    export type AsObject = {
        size: number,
        price: number,
    }
}

export class SettlePosition extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): SettlePosition;
    getPartyId(): string;
    setPartyId(value: string): SettlePosition;
    getPrice(): number;
    setPrice(value: number): SettlePosition;
    clearTradeSettlementsList(): void;
    getTradeSettlementsList(): Array<TradeSettlement>;
    setTradeSettlementsList(value: Array<TradeSettlement>): SettlePosition;
    addTradeSettlements(value?: TradeSettlement, index?: number): TradeSettlement;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SettlePosition.AsObject;
    static toObject(includeInstance: boolean, msg: SettlePosition): SettlePosition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SettlePosition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SettlePosition;
    static deserializeBinaryFromReader(message: SettlePosition, reader: jspb.BinaryReader): SettlePosition;
}

export namespace SettlePosition {
    export type AsObject = {
        marketId: string,
        partyId: string,
        price: number,
        tradeSettlementsList: Array<TradeSettlement.AsObject>,
    }
}

export class SettleDistressed extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): SettleDistressed;
    getPartyId(): string;
    setPartyId(value: string): SettleDistressed;
    getMargin(): number;
    setMargin(value: number): SettleDistressed;
    getPrice(): number;
    setPrice(value: number): SettleDistressed;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SettleDistressed.AsObject;
    static toObject(includeInstance: boolean, msg: SettleDistressed): SettleDistressed.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SettleDistressed, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SettleDistressed;
    static deserializeBinaryFromReader(message: SettleDistressed, reader: jspb.BinaryReader): SettleDistressed;
}

export namespace SettleDistressed {
    export type AsObject = {
        marketId: string,
        partyId: string,
        margin: number,
        price: number,
    }
}

export class MarketTick extends jspb.Message {
    getId(): string;
    setId(value: string): MarketTick;
    getTime(): number;
    setTime(value: number): MarketTick;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketTick.AsObject;
    static toObject(includeInstance: boolean, msg: MarketTick): MarketTick.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketTick, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketTick;
    static deserializeBinaryFromReader(message: MarketTick, reader: jspb.BinaryReader): MarketTick;
}

export namespace MarketTick {
    export type AsObject = {
        id: string,
        time: number,
    }
}

export class AuctionEvent extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): AuctionEvent;
    getOpeningAuction(): boolean;
    setOpeningAuction(value: boolean): AuctionEvent;
    getLeave(): boolean;
    setLeave(value: boolean): AuctionEvent;
    getStart(): number;
    setStart(value: number): AuctionEvent;
    getEnd(): number;
    setEnd(value: number): AuctionEvent;
    getTrigger(): vega_vega_pb.AuctionTrigger;
    setTrigger(value: vega_vega_pb.AuctionTrigger): AuctionEvent;
    getExtensionTrigger(): vega_vega_pb.AuctionTrigger;
    setExtensionTrigger(value: vega_vega_pb.AuctionTrigger): AuctionEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuctionEvent.AsObject;
    static toObject(includeInstance: boolean, msg: AuctionEvent): AuctionEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuctionEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuctionEvent;
    static deserializeBinaryFromReader(message: AuctionEvent, reader: jspb.BinaryReader): AuctionEvent;
}

export namespace AuctionEvent {
    export type AsObject = {
        marketId: string,
        openingAuction: boolean,
        leave: boolean,
        start: number,
        end: number,
        trigger: vega_vega_pb.AuctionTrigger,
        extensionTrigger: vega_vega_pb.AuctionTrigger,
    }
}

export class ValidatorUpdate extends jspb.Message {
    getNodeId(): string;
    setNodeId(value: string): ValidatorUpdate;
    getVegaPubKey(): string;
    setVegaPubKey(value: string): ValidatorUpdate;
    getEthereumAddress(): string;
    setEthereumAddress(value: string): ValidatorUpdate;
    getTmPubKey(): string;
    setTmPubKey(value: string): ValidatorUpdate;
    getInfoUrl(): string;
    setInfoUrl(value: string): ValidatorUpdate;
    getCountry(): string;
    setCountry(value: string): ValidatorUpdate;
    getName(): string;
    setName(value: string): ValidatorUpdate;
    getAvatarUrl(): string;
    setAvatarUrl(value: string): ValidatorUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidatorUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: ValidatorUpdate): ValidatorUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidatorUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidatorUpdate;
    static deserializeBinaryFromReader(message: ValidatorUpdate, reader: jspb.BinaryReader): ValidatorUpdate;
}

export namespace ValidatorUpdate {
    export type AsObject = {
        nodeId: string,
        vegaPubKey: string,
        ethereumAddress: string,
        tmPubKey: string,
        infoUrl: string,
        country: string,
        name: string,
        avatarUrl: string,
    }
}

export class BusEvent extends jspb.Message {
    getId(): string;
    setId(value: string): BusEvent;
    getBlock(): string;
    setBlock(value: string): BusEvent;
    getType(): BusEventType;
    setType(value: BusEventType): BusEvent;

    hasTimeUpdate(): boolean;
    clearTimeUpdate(): void;
    getTimeUpdate(): TimeUpdate | undefined;
    setTimeUpdate(value?: TimeUpdate): BusEvent;

    hasTransferResponses(): boolean;
    clearTransferResponses(): void;
    getTransferResponses(): TransferResponses | undefined;
    setTransferResponses(value?: TransferResponses): BusEvent;

    hasPositionResolution(): boolean;
    clearPositionResolution(): void;
    getPositionResolution(): PositionResolution | undefined;
    setPositionResolution(value?: PositionResolution): BusEvent;

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): vega_vega_pb.Order | undefined;
    setOrder(value?: vega_vega_pb.Order): BusEvent;

    hasAccount(): boolean;
    clearAccount(): void;
    getAccount(): vega_vega_pb.Account | undefined;
    setAccount(value?: vega_vega_pb.Account): BusEvent;

    hasParty(): boolean;
    clearParty(): void;
    getParty(): vega_vega_pb.Party | undefined;
    setParty(value?: vega_vega_pb.Party): BusEvent;

    hasTrade(): boolean;
    clearTrade(): void;
    getTrade(): vega_vega_pb.Trade | undefined;
    setTrade(value?: vega_vega_pb.Trade): BusEvent;

    hasMarginLevels(): boolean;
    clearMarginLevels(): void;
    getMarginLevels(): vega_vega_pb.MarginLevels | undefined;
    setMarginLevels(value?: vega_vega_pb.MarginLevels): BusEvent;

    hasProposal(): boolean;
    clearProposal(): void;
    getProposal(): vega_governance_pb.Proposal | undefined;
    setProposal(value?: vega_governance_pb.Proposal): BusEvent;

    hasVote(): boolean;
    clearVote(): void;
    getVote(): vega_governance_pb.Vote | undefined;
    setVote(value?: vega_governance_pb.Vote): BusEvent;

    hasMarketData(): boolean;
    clearMarketData(): void;
    getMarketData(): vega_vega_pb.MarketData | undefined;
    setMarketData(value?: vega_vega_pb.MarketData): BusEvent;

    hasNodeSignature(): boolean;
    clearNodeSignature(): void;
    getNodeSignature(): vega_commands_v1_validator_commands_pb.NodeSignature | undefined;
    setNodeSignature(value?: vega_commands_v1_validator_commands_pb.NodeSignature): BusEvent;

    hasLossSocialization(): boolean;
    clearLossSocialization(): void;
    getLossSocialization(): LossSocialization | undefined;
    setLossSocialization(value?: LossSocialization): BusEvent;

    hasSettlePosition(): boolean;
    clearSettlePosition(): void;
    getSettlePosition(): SettlePosition | undefined;
    setSettlePosition(value?: SettlePosition): BusEvent;

    hasSettleDistressed(): boolean;
    clearSettleDistressed(): void;
    getSettleDistressed(): SettleDistressed | undefined;
    setSettleDistressed(value?: SettleDistressed): BusEvent;

    hasMarketCreated(): boolean;
    clearMarketCreated(): void;
    getMarketCreated(): vega_markets_pb.Market | undefined;
    setMarketCreated(value?: vega_markets_pb.Market): BusEvent;

    hasAsset(): boolean;
    clearAsset(): void;
    getAsset(): vega_assets_pb.Asset | undefined;
    setAsset(value?: vega_assets_pb.Asset): BusEvent;

    hasMarketTick(): boolean;
    clearMarketTick(): void;
    getMarketTick(): MarketTick | undefined;
    setMarketTick(value?: MarketTick): BusEvent;

    hasWithdrawal(): boolean;
    clearWithdrawal(): void;
    getWithdrawal(): vega_vega_pb.Withdrawal | undefined;
    setWithdrawal(value?: vega_vega_pb.Withdrawal): BusEvent;

    hasDeposit(): boolean;
    clearDeposit(): void;
    getDeposit(): vega_vega_pb.Deposit | undefined;
    setDeposit(value?: vega_vega_pb.Deposit): BusEvent;

    hasAuction(): boolean;
    clearAuction(): void;
    getAuction(): AuctionEvent | undefined;
    setAuction(value?: AuctionEvent): BusEvent;

    hasRiskFactor(): boolean;
    clearRiskFactor(): void;
    getRiskFactor(): vega_vega_pb.RiskFactor | undefined;
    setRiskFactor(value?: vega_vega_pb.RiskFactor): BusEvent;

    hasNetworkParameter(): boolean;
    clearNetworkParameter(): void;
    getNetworkParameter(): vega_vega_pb.NetworkParameter | undefined;
    setNetworkParameter(value?: vega_vega_pb.NetworkParameter): BusEvent;

    hasLiquidityProvision(): boolean;
    clearLiquidityProvision(): void;
    getLiquidityProvision(): vega_vega_pb.LiquidityProvision | undefined;
    setLiquidityProvision(value?: vega_vega_pb.LiquidityProvision): BusEvent;

    hasMarketUpdated(): boolean;
    clearMarketUpdated(): void;
    getMarketUpdated(): vega_markets_pb.Market | undefined;
    setMarketUpdated(value?: vega_markets_pb.Market): BusEvent;

    hasOracleSpec(): boolean;
    clearOracleSpec(): void;
    getOracleSpec(): vega_oracles_v1_spec_pb.OracleSpec | undefined;
    setOracleSpec(value?: vega_oracles_v1_spec_pb.OracleSpec): BusEvent;

    hasOracleData(): boolean;
    clearOracleData(): void;
    getOracleData(): vega_oracles_v1_data_pb.OracleData | undefined;
    setOracleData(value?: vega_oracles_v1_data_pb.OracleData): BusEvent;

    hasDelegationBalance(): boolean;
    clearDelegationBalance(): void;
    getDelegationBalance(): DelegationBalanceEvent | undefined;
    setDelegationBalance(value?: DelegationBalanceEvent): BusEvent;

    hasValidatorScore(): boolean;
    clearValidatorScore(): void;
    getValidatorScore(): ValidatorScoreEvent | undefined;
    setValidatorScore(value?: ValidatorScoreEvent): BusEvent;

    hasEpochEvent(): boolean;
    clearEpochEvent(): void;
    getEpochEvent(): EpochEvent | undefined;
    setEpochEvent(value?: EpochEvent): BusEvent;

    hasValidatorUpdate(): boolean;
    clearValidatorUpdate(): void;
    getValidatorUpdate(): ValidatorUpdate | undefined;
    setValidatorUpdate(value?: ValidatorUpdate): BusEvent;

    hasStakeLinking(): boolean;
    clearStakeLinking(): void;
    getStakeLinking(): StakeLinking | undefined;
    setStakeLinking(value?: StakeLinking): BusEvent;

    hasRewardPayout(): boolean;
    clearRewardPayout(): void;
    getRewardPayout(): RewardPayoutEvent | undefined;
    setRewardPayout(value?: RewardPayoutEvent): BusEvent;

    hasCheckpoint(): boolean;
    clearCheckpoint(): void;
    getCheckpoint(): CheckpointEvent | undefined;
    setCheckpoint(value?: CheckpointEvent): BusEvent;

    hasMarket(): boolean;
    clearMarket(): void;
    getMarket(): MarketEvent | undefined;
    setMarket(value?: MarketEvent): BusEvent;

    hasTxErrEvent(): boolean;
    clearTxErrEvent(): void;
    getTxErrEvent(): TxErrorEvent | undefined;
    setTxErrEvent(value?: TxErrorEvent): BusEvent;
    getVersion(): number;
    setVersion(value: number): BusEvent;

    getEventCase(): BusEvent.EventCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BusEvent.AsObject;
    static toObject(includeInstance: boolean, msg: BusEvent): BusEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BusEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BusEvent;
    static deserializeBinaryFromReader(message: BusEvent, reader: jspb.BinaryReader): BusEvent;
}

export namespace BusEvent {
    export type AsObject = {
        id: string,
        block: string,
        type: BusEventType,
        timeUpdate?: TimeUpdate.AsObject,
        transferResponses?: TransferResponses.AsObject,
        positionResolution?: PositionResolution.AsObject,
        order?: vega_vega_pb.Order.AsObject,
        account?: vega_vega_pb.Account.AsObject,
        party?: vega_vega_pb.Party.AsObject,
        trade?: vega_vega_pb.Trade.AsObject,
        marginLevels?: vega_vega_pb.MarginLevels.AsObject,
        proposal?: vega_governance_pb.Proposal.AsObject,
        vote?: vega_governance_pb.Vote.AsObject,
        marketData?: vega_vega_pb.MarketData.AsObject,
        nodeSignature?: vega_commands_v1_validator_commands_pb.NodeSignature.AsObject,
        lossSocialization?: LossSocialization.AsObject,
        settlePosition?: SettlePosition.AsObject,
        settleDistressed?: SettleDistressed.AsObject,
        marketCreated?: vega_markets_pb.Market.AsObject,
        asset?: vega_assets_pb.Asset.AsObject,
        marketTick?: MarketTick.AsObject,
        withdrawal?: vega_vega_pb.Withdrawal.AsObject,
        deposit?: vega_vega_pb.Deposit.AsObject,
        auction?: AuctionEvent.AsObject,
        riskFactor?: vega_vega_pb.RiskFactor.AsObject,
        networkParameter?: vega_vega_pb.NetworkParameter.AsObject,
        liquidityProvision?: vega_vega_pb.LiquidityProvision.AsObject,
        marketUpdated?: vega_markets_pb.Market.AsObject,
        oracleSpec?: vega_oracles_v1_spec_pb.OracleSpec.AsObject,
        oracleData?: vega_oracles_v1_data_pb.OracleData.AsObject,
        delegationBalance?: DelegationBalanceEvent.AsObject,
        validatorScore?: ValidatorScoreEvent.AsObject,
        epochEvent?: EpochEvent.AsObject,
        validatorUpdate?: ValidatorUpdate.AsObject,
        stakeLinking?: StakeLinking.AsObject,
        rewardPayout?: RewardPayoutEvent.AsObject,
        checkpoint?: CheckpointEvent.AsObject,
        market?: MarketEvent.AsObject,
        txErrEvent?: TxErrorEvent.AsObject,
        version: number,
    }

    export enum EventCase {
        EVENT_NOT_SET = 0,
        TIME_UPDATE = 101,
        TRANSFER_RESPONSES = 102,
        POSITION_RESOLUTION = 103,
        ORDER = 104,
        ACCOUNT = 105,
        PARTY = 106,
        TRADE = 107,
        MARGIN_LEVELS = 108,
        PROPOSAL = 109,
        VOTE = 110,
        MARKET_DATA = 111,
        NODE_SIGNATURE = 112,
        LOSS_SOCIALIZATION = 113,
        SETTLE_POSITION = 114,
        SETTLE_DISTRESSED = 115,
        MARKET_CREATED = 116,
        ASSET = 117,
        MARKET_TICK = 118,
        WITHDRAWAL = 119,
        DEPOSIT = 120,
        AUCTION = 121,
        RISK_FACTOR = 122,
        NETWORK_PARAMETER = 123,
        LIQUIDITY_PROVISION = 124,
        MARKET_UPDATED = 125,
        ORACLE_SPEC = 126,
        ORACLE_DATA = 127,
        DELEGATION_BALANCE = 129,
        VALIDATOR_SCORE = 130,
        EPOCH_EVENT = 131,
        VALIDATOR_UPDATE = 132,
        STAKE_LINKING = 133,
        REWARD_PAYOUT = 134,
        CHECKPOINT = 135,
        MARKET = 1001,
        TX_ERR_EVENT = 2001,
    }

}

export enum BusEventType {
    BUS_EVENT_TYPE_UNSPECIFIED = 0,
    BUS_EVENT_TYPE_ALL = 1,
    BUS_EVENT_TYPE_TIME_UPDATE = 2,
    BUS_EVENT_TYPE_TRANSFER_RESPONSES = 3,
    BUS_EVENT_TYPE_POSITION_RESOLUTION = 4,
    BUS_EVENT_TYPE_ORDER = 5,
    BUS_EVENT_TYPE_ACCOUNT = 6,
    BUS_EVENT_TYPE_PARTY = 7,
    BUS_EVENT_TYPE_TRADE = 8,
    BUS_EVENT_TYPE_MARGIN_LEVELS = 9,
    BUS_EVENT_TYPE_PROPOSAL = 10,
    BUS_EVENT_TYPE_VOTE = 11,
    BUS_EVENT_TYPE_MARKET_DATA = 12,
    BUS_EVENT_TYPE_NODE_SIGNATURE = 13,
    BUS_EVENT_TYPE_LOSS_SOCIALIZATION = 14,
    BUS_EVENT_TYPE_SETTLE_POSITION = 15,
    BUS_EVENT_TYPE_SETTLE_DISTRESSED = 16,
    BUS_EVENT_TYPE_MARKET_CREATED = 17,
    BUS_EVENT_TYPE_ASSET = 18,
    BUS_EVENT_TYPE_MARKET_TICK = 19,
    BUS_EVENT_TYPE_WITHDRAWAL = 20,
    BUS_EVENT_TYPE_DEPOSIT = 21,
    BUS_EVENT_TYPE_AUCTION = 22,
    BUS_EVENT_TYPE_RISK_FACTOR = 23,
    BUS_EVENT_TYPE_NETWORK_PARAMETER = 24,
    BUS_EVENT_TYPE_LIQUIDITY_PROVISION = 25,
    BUS_EVENT_TYPE_MARKET_UPDATED = 26,
    BUS_EVENT_TYPE_ORACLE_SPEC = 27,
    BUS_EVENT_TYPE_ORACLE_DATA = 28,
    BUS_EVENT_TYPE_DELEGATION_BALANCE = 29,
    BUS_EVENT_TYPE_VALIDATOR_SCORE = 30,
    BUS_EVENT_TYPE_EPOCH_UPDATE = 31,
    BUS_EVENT_TYPE_VALIDATOR_UPDATE = 32,
    BUS_EVENT_TYPE_STAKE_LINKING = 33,
    BUS_EVENT_TYPE_REWARD_PAYOUT_EVENT = 34,
    BUS_EVENT_TYPE_CHECKPOINT = 35,
    BUS_EVENT_TYPE_MARKET = 101,
    BUS_EVENT_TYPE_TX_ERROR = 201,
}
