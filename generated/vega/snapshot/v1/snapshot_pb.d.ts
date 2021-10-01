// package: vega.snapshot.v1
// file: vega/snapshot/v1/snapshot.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as vega_vega_pb from "../../../vega/vega_pb";
import * as vega_markets_pb from "../../../vega/markets_pb";
import * as vega_assets_pb from "../../../vega/assets_pb";
import * as vega_chain_events_pb from "../../../vega/chain_events_pb";
import * as vega_governance_pb from "../../../vega/governance_pb";
import * as vega_events_v1_events_pb from "../../../vega/events/v1/events_pb";

export class Snapshot extends jspb.Message {
    getHeight(): number;
    setHeight(value: number): Snapshot;
    getFormat(): Format;
    setFormat(value: Format): Snapshot;
    getChunks(): number;
    setChunks(value: number): Snapshot;
    getHash(): Uint8Array | string;
    getHash_asU8(): Uint8Array;
    getHash_asB64(): string;
    setHash(value: Uint8Array | string): Snapshot;
    getMetadata(): Uint8Array | string;
    getMetadata_asU8(): Uint8Array;
    getMetadata_asB64(): string;
    setMetadata(value: Uint8Array | string): Snapshot;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Snapshot.AsObject;
    static toObject(includeInstance: boolean, msg: Snapshot): Snapshot.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Snapshot, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Snapshot;
    static deserializeBinaryFromReader(message: Snapshot, reader: jspb.BinaryReader): Snapshot;
}

export namespace Snapshot {
    export type AsObject = {
        height: number,
        format: Format,
        chunks: number,
        hash: Uint8Array | string,
        metadata: Uint8Array | string,
    }
}

export class NodeHash extends jspb.Message {
    getFullKey(): string;
    setFullKey(value: string): NodeHash;
    getNamespace(): string;
    setNamespace(value: string): NodeHash;
    getKey(): string;
    setKey(value: string): NodeHash;
    getHash(): string;
    setHash(value: string): NodeHash;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeHash.AsObject;
    static toObject(includeInstance: boolean, msg: NodeHash): NodeHash.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeHash, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeHash;
    static deserializeBinaryFromReader(message: NodeHash, reader: jspb.BinaryReader): NodeHash;
}

export namespace NodeHash {
    export type AsObject = {
        fullKey: string,
        namespace: string,
        key: string,
        hash: string,
    }
}

export class Metadata extends jspb.Message {
    getVersion(): number;
    setVersion(value: number): Metadata;
    clearChunkHashesList(): void;
    getChunkHashesList(): Array<string>;
    setChunkHashesList(value: Array<string>): Metadata;
    addChunkHashes(value: string, index?: number): string;
    clearNodeHashesList(): void;
    getNodeHashesList(): Array<NodeHash>;
    setNodeHashesList(value: Array<NodeHash>): Metadata;
    addNodeHashes(value?: NodeHash, index?: number): NodeHash;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Metadata.AsObject;
    static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Metadata;
    static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
    export type AsObject = {
        version: number,
        chunkHashesList: Array<string>,
        nodeHashesList: Array<NodeHash.AsObject>,
    }
}

export class Chunk extends jspb.Message {
    clearDataList(): void;
    getDataList(): Array<Payload>;
    setDataList(value: Array<Payload>): Chunk;
    addData(value?: Payload, index?: number): Payload;
    getNr(): number;
    setNr(value: number): Chunk;
    getOf(): number;
    setOf(value: number): Chunk;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Chunk.AsObject;
    static toObject(includeInstance: boolean, msg: Chunk): Chunk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Chunk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Chunk;
    static deserializeBinaryFromReader(message: Chunk, reader: jspb.BinaryReader): Chunk;
}

export namespace Chunk {
    export type AsObject = {
        dataList: Array<Payload.AsObject>,
        nr: number,
        of: number,
    }
}

export class Payload extends jspb.Message {

    hasActiveAssets(): boolean;
    clearActiveAssets(): void;
    getActiveAssets(): ActiveAssets | undefined;
    setActiveAssets(value?: ActiveAssets): Payload;

    hasPendingAssets(): boolean;
    clearPendingAssets(): void;
    getPendingAssets(): PendingAssets | undefined;
    setPendingAssets(value?: PendingAssets): Payload;

    hasBankingWithdrawals(): boolean;
    clearBankingWithdrawals(): void;
    getBankingWithdrawals(): BankingWithdrawals | undefined;
    setBankingWithdrawals(value?: BankingWithdrawals): Payload;

    hasBankingDeposits(): boolean;
    clearBankingDeposits(): void;
    getBankingDeposits(): BankingDeposits | undefined;
    setBankingDeposits(value?: BankingDeposits): Payload;

    hasBankingSeen(): boolean;
    clearBankingSeen(): void;
    getBankingSeen(): BankingSeen | undefined;
    setBankingSeen(value?: BankingSeen): Payload;

    hasCheckpoint(): boolean;
    clearCheckpoint(): void;
    getCheckpoint(): Checkpoint | undefined;
    setCheckpoint(value?: Checkpoint): Payload;

    hasCollateralAccounts(): boolean;
    clearCollateralAccounts(): void;
    getCollateralAccounts(): CollateralAccounts | undefined;
    setCollateralAccounts(value?: CollateralAccounts): Payload;

    hasCollateralAssets(): boolean;
    clearCollateralAssets(): void;
    getCollateralAssets(): CollateralAssets | undefined;
    setCollateralAssets(value?: CollateralAssets): Payload;

    hasDelegationActive(): boolean;
    clearDelegationActive(): void;
    getDelegationActive(): DelegationActive | undefined;
    setDelegationActive(value?: DelegationActive): Payload;

    hasDelegationPending(): boolean;
    clearDelegationPending(): void;
    getDelegationPending(): DelegationPending | undefined;
    setDelegationPending(value?: DelegationPending): Payload;

    hasDelegationAuto(): boolean;
    clearDelegationAuto(): void;
    getDelegationAuto(): DelegationAuto | undefined;
    setDelegationAuto(value?: DelegationAuto): Payload;

    hasGovernanceActive(): boolean;
    clearGovernanceActive(): void;
    getGovernanceActive(): GovernanceActive | undefined;
    setGovernanceActive(value?: GovernanceActive): Payload;

    hasGovernanceEnacted(): boolean;
    clearGovernanceEnacted(): void;
    getGovernanceEnacted(): GovernanceEnacted | undefined;
    setGovernanceEnacted(value?: GovernanceEnacted): Payload;

    hasStakingAccounts(): boolean;
    clearStakingAccounts(): void;
    getStakingAccounts(): StakingAccounts | undefined;
    setStakingAccounts(value?: StakingAccounts): Payload;

    hasMatchingBook(): boolean;
    clearMatchingBook(): void;
    getMatchingBook(): MatchingBook | undefined;
    setMatchingBook(value?: MatchingBook): Payload;

    hasNetworkParameters(): boolean;
    clearNetworkParameters(): void;
    getNetworkParameters(): NetParams | undefined;
    setNetworkParameters(value?: NetParams): Payload;

    hasExecutionMarkets(): boolean;
    clearExecutionMarkets(): void;
    getExecutionMarkets(): ExecutionMarkets | undefined;
    setExecutionMarkets(value?: ExecutionMarkets): Payload;

    hasMarketPositions(): boolean;
    clearMarketPositions(): void;
    getMarketPositions(): MarketPositions | undefined;
    setMarketPositions(value?: MarketPositions): Payload;

    hasAppState(): boolean;
    clearAppState(): void;
    getAppState(): AppState | undefined;
    setAppState(value?: AppState): Payload;

    hasEpoch(): boolean;
    clearEpoch(): void;
    getEpoch(): EpochState | undefined;
    setEpoch(value?: EpochState): Payload;

    getDataCase(): Payload.DataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payload.AsObject;
    static toObject(includeInstance: boolean, msg: Payload): Payload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Payload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payload;
    static deserializeBinaryFromReader(message: Payload, reader: jspb.BinaryReader): Payload;
}

export namespace Payload {
    export type AsObject = {
        activeAssets?: ActiveAssets.AsObject,
        pendingAssets?: PendingAssets.AsObject,
        bankingWithdrawals?: BankingWithdrawals.AsObject,
        bankingDeposits?: BankingDeposits.AsObject,
        bankingSeen?: BankingSeen.AsObject,
        checkpoint?: Checkpoint.AsObject,
        collateralAccounts?: CollateralAccounts.AsObject,
        collateralAssets?: CollateralAssets.AsObject,
        delegationActive?: DelegationActive.AsObject,
        delegationPending?: DelegationPending.AsObject,
        delegationAuto?: DelegationAuto.AsObject,
        governanceActive?: GovernanceActive.AsObject,
        governanceEnacted?: GovernanceEnacted.AsObject,
        stakingAccounts?: StakingAccounts.AsObject,
        matchingBook?: MatchingBook.AsObject,
        networkParameters?: NetParams.AsObject,
        executionMarkets?: ExecutionMarkets.AsObject,
        marketPositions?: MarketPositions.AsObject,
        appState?: AppState.AsObject,
        epoch?: EpochState.AsObject,
    }

    export enum DataCase {
        DATA_NOT_SET = 0,
        ACTIVE_ASSETS = 1,
        PENDING_ASSETS = 2,
        BANKING_WITHDRAWALS = 3,
        BANKING_DEPOSITS = 4,
        BANKING_SEEN = 5,
        CHECKPOINT = 6,
        COLLATERAL_ACCOUNTS = 7,
        COLLATERAL_ASSETS = 8,
        DELEGATION_ACTIVE = 9,
        DELEGATION_PENDING = 10,
        DELEGATION_AUTO = 11,
        GOVERNANCE_ACTIVE = 12,
        GOVERNANCE_ENACTED = 13,
        STAKING_ACCOUNTS = 14,
        MATCHING_BOOK = 15,
        NETWORK_PARAMETERS = 16,
        EXECUTION_MARKETS = 17,
        MARKET_POSITIONS = 18,
        APP_STATE = 19,
        EPOCH = 20,
    }

}

export class CollateralAccounts extends jspb.Message {
    clearAccountsList(): void;
    getAccountsList(): Array<vega_vega_pb.Account>;
    setAccountsList(value: Array<vega_vega_pb.Account>): CollateralAccounts;
    addAccounts(value?: vega_vega_pb.Account, index?: number): vega_vega_pb.Account;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CollateralAccounts.AsObject;
    static toObject(includeInstance: boolean, msg: CollateralAccounts): CollateralAccounts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CollateralAccounts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CollateralAccounts;
    static deserializeBinaryFromReader(message: CollateralAccounts, reader: jspb.BinaryReader): CollateralAccounts;
}

export namespace CollateralAccounts {
    export type AsObject = {
        accountsList: Array<vega_vega_pb.Account.AsObject>,
    }
}

export class CollateralAssets extends jspb.Message {
    clearAssetsList(): void;
    getAssetsList(): Array<vega_assets_pb.Asset>;
    setAssetsList(value: Array<vega_assets_pb.Asset>): CollateralAssets;
    addAssets(value?: vega_assets_pb.Asset, index?: number): vega_assets_pb.Asset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CollateralAssets.AsObject;
    static toObject(includeInstance: boolean, msg: CollateralAssets): CollateralAssets.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CollateralAssets, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CollateralAssets;
    static deserializeBinaryFromReader(message: CollateralAssets, reader: jspb.BinaryReader): CollateralAssets;
}

export namespace CollateralAssets {
    export type AsObject = {
        assetsList: Array<vega_assets_pb.Asset.AsObject>,
    }
}

export class ActiveAssets extends jspb.Message {
    clearAssetsList(): void;
    getAssetsList(): Array<vega_assets_pb.Asset>;
    setAssetsList(value: Array<vega_assets_pb.Asset>): ActiveAssets;
    addAssets(value?: vega_assets_pb.Asset, index?: number): vega_assets_pb.Asset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActiveAssets.AsObject;
    static toObject(includeInstance: boolean, msg: ActiveAssets): ActiveAssets.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActiveAssets, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActiveAssets;
    static deserializeBinaryFromReader(message: ActiveAssets, reader: jspb.BinaryReader): ActiveAssets;
}

export namespace ActiveAssets {
    export type AsObject = {
        assetsList: Array<vega_assets_pb.Asset.AsObject>,
    }
}

export class PendingAssets extends jspb.Message {
    clearAssetsList(): void;
    getAssetsList(): Array<vega_assets_pb.Asset>;
    setAssetsList(value: Array<vega_assets_pb.Asset>): PendingAssets;
    addAssets(value?: vega_assets_pb.Asset, index?: number): vega_assets_pb.Asset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PendingAssets.AsObject;
    static toObject(includeInstance: boolean, msg: PendingAssets): PendingAssets.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PendingAssets, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PendingAssets;
    static deserializeBinaryFromReader(message: PendingAssets, reader: jspb.BinaryReader): PendingAssets;
}

export namespace PendingAssets {
    export type AsObject = {
        assetsList: Array<vega_assets_pb.Asset.AsObject>,
    }
}

export class Withdrawal extends jspb.Message {
    getRef(): string;
    setRef(value: string): Withdrawal;

    hasWithdrawal(): boolean;
    clearWithdrawal(): void;
    getWithdrawal(): vega_vega_pb.Withdrawal | undefined;
    setWithdrawal(value?: vega_vega_pb.Withdrawal): Withdrawal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Withdrawal.AsObject;
    static toObject(includeInstance: boolean, msg: Withdrawal): Withdrawal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Withdrawal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Withdrawal;
    static deserializeBinaryFromReader(message: Withdrawal, reader: jspb.BinaryReader): Withdrawal;
}

export namespace Withdrawal {
    export type AsObject = {
        ref: string,
        withdrawal?: vega_vega_pb.Withdrawal.AsObject,
    }
}

export class Deposit extends jspb.Message {
    getId(): string;
    setId(value: string): Deposit;

    hasDeposit(): boolean;
    clearDeposit(): void;
    getDeposit(): vega_vega_pb.Deposit | undefined;
    setDeposit(value?: vega_vega_pb.Deposit): Deposit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Deposit.AsObject;
    static toObject(includeInstance: boolean, msg: Deposit): Deposit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Deposit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Deposit;
    static deserializeBinaryFromReader(message: Deposit, reader: jspb.BinaryReader): Deposit;
}

export namespace Deposit {
    export type AsObject = {
        id: string,
        deposit?: vega_vega_pb.Deposit.AsObject,
    }
}

export class TxRef extends jspb.Message {
    getAsset(): string;
    setAsset(value: string): TxRef;
    getBlockNr(): number;
    setBlockNr(value: number): TxRef;
    getHash(): string;
    setHash(value: string): TxRef;
    getLogIndex(): number;
    setLogIndex(value: number): TxRef;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TxRef.AsObject;
    static toObject(includeInstance: boolean, msg: TxRef): TxRef.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TxRef, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TxRef;
    static deserializeBinaryFromReader(message: TxRef, reader: jspb.BinaryReader): TxRef;
}

export namespace TxRef {
    export type AsObject = {
        asset: string,
        blockNr: number,
        hash: string,
        logIndex: number,
    }
}

export class BankingWithdrawals extends jspb.Message {
    clearWithdrawalsList(): void;
    getWithdrawalsList(): Array<Withdrawal>;
    setWithdrawalsList(value: Array<Withdrawal>): BankingWithdrawals;
    addWithdrawals(value?: Withdrawal, index?: number): Withdrawal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BankingWithdrawals.AsObject;
    static toObject(includeInstance: boolean, msg: BankingWithdrawals): BankingWithdrawals.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BankingWithdrawals, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BankingWithdrawals;
    static deserializeBinaryFromReader(message: BankingWithdrawals, reader: jspb.BinaryReader): BankingWithdrawals;
}

export namespace BankingWithdrawals {
    export type AsObject = {
        withdrawalsList: Array<Withdrawal.AsObject>,
    }
}

export class BankingDeposits extends jspb.Message {
    clearDepositList(): void;
    getDepositList(): Array<Deposit>;
    setDepositList(value: Array<Deposit>): BankingDeposits;
    addDeposit(value?: Deposit, index?: number): Deposit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BankingDeposits.AsObject;
    static toObject(includeInstance: boolean, msg: BankingDeposits): BankingDeposits.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BankingDeposits, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BankingDeposits;
    static deserializeBinaryFromReader(message: BankingDeposits, reader: jspb.BinaryReader): BankingDeposits;
}

export namespace BankingDeposits {
    export type AsObject = {
        depositList: Array<Deposit.AsObject>,
    }
}

export class BankingSeen extends jspb.Message {
    clearRefsList(): void;
    getRefsList(): Array<TxRef>;
    setRefsList(value: Array<TxRef>): BankingSeen;
    addRefs(value?: TxRef, index?: number): TxRef;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BankingSeen.AsObject;
    static toObject(includeInstance: boolean, msg: BankingSeen): BankingSeen.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BankingSeen, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BankingSeen;
    static deserializeBinaryFromReader(message: BankingSeen, reader: jspb.BinaryReader): BankingSeen;
}

export namespace BankingSeen {
    export type AsObject = {
        refsList: Array<TxRef.AsObject>,
    }
}

export class Checkpoint extends jspb.Message {
    getNextCp(): number;
    setNextCp(value: number): Checkpoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Checkpoint.AsObject;
    static toObject(includeInstance: boolean, msg: Checkpoint): Checkpoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Checkpoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Checkpoint;
    static deserializeBinaryFromReader(message: Checkpoint, reader: jspb.BinaryReader): Checkpoint;
}

export namespace Checkpoint {
    export type AsObject = {
        nextCp: number,
    }
}

export class DelegationActive extends jspb.Message {
    clearDelegationsList(): void;
    getDelegationsList(): Array<vega_vega_pb.Delegation>;
    setDelegationsList(value: Array<vega_vega_pb.Delegation>): DelegationActive;
    addDelegations(value?: vega_vega_pb.Delegation, index?: number): vega_vega_pb.Delegation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DelegationActive.AsObject;
    static toObject(includeInstance: boolean, msg: DelegationActive): DelegationActive.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DelegationActive, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DelegationActive;
    static deserializeBinaryFromReader(message: DelegationActive, reader: jspb.BinaryReader): DelegationActive;
}

export namespace DelegationActive {
    export type AsObject = {
        delegationsList: Array<vega_vega_pb.Delegation.AsObject>,
    }
}

export class DelegationPending extends jspb.Message {
    clearDelegationsList(): void;
    getDelegationsList(): Array<vega_vega_pb.Delegation>;
    setDelegationsList(value: Array<vega_vega_pb.Delegation>): DelegationPending;
    addDelegations(value?: vega_vega_pb.Delegation, index?: number): vega_vega_pb.Delegation;
    clearUndelegationList(): void;
    getUndelegationList(): Array<vega_vega_pb.Delegation>;
    setUndelegationList(value: Array<vega_vega_pb.Delegation>): DelegationPending;
    addUndelegation(value?: vega_vega_pb.Delegation, index?: number): vega_vega_pb.Delegation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DelegationPending.AsObject;
    static toObject(includeInstance: boolean, msg: DelegationPending): DelegationPending.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DelegationPending, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DelegationPending;
    static deserializeBinaryFromReader(message: DelegationPending, reader: jspb.BinaryReader): DelegationPending;
}

export namespace DelegationPending {
    export type AsObject = {
        delegationsList: Array<vega_vega_pb.Delegation.AsObject>,
        undelegationList: Array<vega_vega_pb.Delegation.AsObject>,
    }
}

export class DelegationAuto extends jspb.Message {
    clearPartiesList(): void;
    getPartiesList(): Array<string>;
    setPartiesList(value: Array<string>): DelegationAuto;
    addParties(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DelegationAuto.AsObject;
    static toObject(includeInstance: boolean, msg: DelegationAuto): DelegationAuto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DelegationAuto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DelegationAuto;
    static deserializeBinaryFromReader(message: DelegationAuto, reader: jspb.BinaryReader): DelegationAuto;
}

export namespace DelegationAuto {
    export type AsObject = {
        partiesList: Array<string>,
    }
}

export class PendingProposal extends jspb.Message {

    hasProposal(): boolean;
    clearProposal(): void;
    getProposal(): vega_governance_pb.Proposal | undefined;
    setProposal(value?: vega_governance_pb.Proposal): PendingProposal;
    clearYesList(): void;
    getYesList(): Array<vega_governance_pb.Vote>;
    setYesList(value: Array<vega_governance_pb.Vote>): PendingProposal;
    addYes(value?: vega_governance_pb.Vote, index?: number): vega_governance_pb.Vote;
    clearNoList(): void;
    getNoList(): Array<vega_governance_pb.Vote>;
    setNoList(value: Array<vega_governance_pb.Vote>): PendingProposal;
    addNo(value?: vega_governance_pb.Vote, index?: number): vega_governance_pb.Vote;
    clearInvalidList(): void;
    getInvalidList(): Array<vega_governance_pb.Vote>;
    setInvalidList(value: Array<vega_governance_pb.Vote>): PendingProposal;
    addInvalid(value?: vega_governance_pb.Vote, index?: number): vega_governance_pb.Vote;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PendingProposal.AsObject;
    static toObject(includeInstance: boolean, msg: PendingProposal): PendingProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PendingProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PendingProposal;
    static deserializeBinaryFromReader(message: PendingProposal, reader: jspb.BinaryReader): PendingProposal;
}

export namespace PendingProposal {
    export type AsObject = {
        proposal?: vega_governance_pb.Proposal.AsObject,
        yesList: Array<vega_governance_pb.Vote.AsObject>,
        noList: Array<vega_governance_pb.Vote.AsObject>,
        invalidList: Array<vega_governance_pb.Vote.AsObject>,
    }
}

export class GovernanceEnacted extends jspb.Message {
    clearProposalsList(): void;
    getProposalsList(): Array<vega_governance_pb.Proposal>;
    setProposalsList(value: Array<vega_governance_pb.Proposal>): GovernanceEnacted;
    addProposals(value?: vega_governance_pb.Proposal, index?: number): vega_governance_pb.Proposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GovernanceEnacted.AsObject;
    static toObject(includeInstance: boolean, msg: GovernanceEnacted): GovernanceEnacted.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GovernanceEnacted, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GovernanceEnacted;
    static deserializeBinaryFromReader(message: GovernanceEnacted, reader: jspb.BinaryReader): GovernanceEnacted;
}

export namespace GovernanceEnacted {
    export type AsObject = {
        proposalsList: Array<vega_governance_pb.Proposal.AsObject>,
    }
}

export class GovernanceActive extends jspb.Message {
    clearProposalsList(): void;
    getProposalsList(): Array<PendingProposal>;
    setProposalsList(value: Array<PendingProposal>): GovernanceActive;
    addProposals(value?: PendingProposal, index?: number): PendingProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GovernanceActive.AsObject;
    static toObject(includeInstance: boolean, msg: GovernanceActive): GovernanceActive.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GovernanceActive, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GovernanceActive;
    static deserializeBinaryFromReader(message: GovernanceActive, reader: jspb.BinaryReader): GovernanceActive;
}

export namespace GovernanceActive {
    export type AsObject = {
        proposalsList: Array<PendingProposal.AsObject>,
    }
}

export class StakingAccount extends jspb.Message {
    getParty(): string;
    setParty(value: string): StakingAccount;
    getBalance(): string;
    setBalance(value: string): StakingAccount;
    clearEventsList(): void;
    getEventsList(): Array<vega_events_v1_events_pb.StakeLinking>;
    setEventsList(value: Array<vega_events_v1_events_pb.StakeLinking>): StakingAccount;
    addEvents(value?: vega_events_v1_events_pb.StakeLinking, index?: number): vega_events_v1_events_pb.StakeLinking;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakingAccount.AsObject;
    static toObject(includeInstance: boolean, msg: StakingAccount): StakingAccount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakingAccount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakingAccount;
    static deserializeBinaryFromReader(message: StakingAccount, reader: jspb.BinaryReader): StakingAccount;
}

export namespace StakingAccount {
    export type AsObject = {
        party: string,
        balance: string,
        eventsList: Array<vega_events_v1_events_pb.StakeLinking.AsObject>,
    }
}

export class StakingAccounts extends jspb.Message {
    clearAccountsList(): void;
    getAccountsList(): Array<StakingAccount>;
    setAccountsList(value: Array<StakingAccount>): StakingAccounts;
    addAccounts(value?: StakingAccount, index?: number): StakingAccount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakingAccounts.AsObject;
    static toObject(includeInstance: boolean, msg: StakingAccounts): StakingAccounts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakingAccounts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakingAccounts;
    static deserializeBinaryFromReader(message: StakingAccounts, reader: jspb.BinaryReader): StakingAccounts;
}

export namespace StakingAccounts {
    export type AsObject = {
        accountsList: Array<StakingAccount.AsObject>,
    }
}

export class MatchingBook extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): MatchingBook;
    clearBuyList(): void;
    getBuyList(): Array<vega_vega_pb.Order>;
    setBuyList(value: Array<vega_vega_pb.Order>): MatchingBook;
    addBuy(value?: vega_vega_pb.Order, index?: number): vega_vega_pb.Order;
    clearSellList(): void;
    getSellList(): Array<vega_vega_pb.Order>;
    setSellList(value: Array<vega_vega_pb.Order>): MatchingBook;
    addSell(value?: vega_vega_pb.Order, index?: number): vega_vega_pb.Order;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MatchingBook.AsObject;
    static toObject(includeInstance: boolean, msg: MatchingBook): MatchingBook.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MatchingBook, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MatchingBook;
    static deserializeBinaryFromReader(message: MatchingBook, reader: jspb.BinaryReader): MatchingBook;
}

export namespace MatchingBook {
    export type AsObject = {
        marketId: string,
        buyList: Array<vega_vega_pb.Order.AsObject>,
        sellList: Array<vega_vega_pb.Order.AsObject>,
    }
}

export class NetParams extends jspb.Message {
    clearParamsList(): void;
    getParamsList(): Array<vega_vega_pb.NetworkParameter>;
    setParamsList(value: Array<vega_vega_pb.NetworkParameter>): NetParams;
    addParams(value?: vega_vega_pb.NetworkParameter, index?: number): vega_vega_pb.NetworkParameter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetParams.AsObject;
    static toObject(includeInstance: boolean, msg: NetParams): NetParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetParams;
    static deserializeBinaryFromReader(message: NetParams, reader: jspb.BinaryReader): NetParams;
}

export namespace NetParams {
    export type AsObject = {
        paramsList: Array<vega_vega_pb.NetworkParameter.AsObject>,
    }
}

export class DecimalMap extends jspb.Message {
    getKey(): number;
    setKey(value: number): DecimalMap;
    getVal(): string;
    setVal(value: string): DecimalMap;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DecimalMap.AsObject;
    static toObject(includeInstance: boolean, msg: DecimalMap): DecimalMap.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DecimalMap, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DecimalMap;
    static deserializeBinaryFromReader(message: DecimalMap, reader: jspb.BinaryReader): DecimalMap;
}

export namespace DecimalMap {
    export type AsObject = {
        key: number,
        val: string,
    }
}

export class TimePrice extends jspb.Message {
    getTime(): number;
    setTime(value: number): TimePrice;
    getPrice(): string;
    setPrice(value: string): TimePrice;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimePrice.AsObject;
    static toObject(includeInstance: boolean, msg: TimePrice): TimePrice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimePrice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimePrice;
    static deserializeBinaryFromReader(message: TimePrice, reader: jspb.BinaryReader): TimePrice;
}

export namespace TimePrice {
    export type AsObject = {
        time: number,
        price: string,
    }
}

export class PriceVolume extends jspb.Message {
    getPrice(): string;
    setPrice(value: string): PriceVolume;
    getVolume(): number;
    setVolume(value: number): PriceVolume;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriceVolume.AsObject;
    static toObject(includeInstance: boolean, msg: PriceVolume): PriceVolume.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriceVolume, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriceVolume;
    static deserializeBinaryFromReader(message: PriceVolume, reader: jspb.BinaryReader): PriceVolume;
}

export namespace PriceVolume {
    export type AsObject = {
        price: string,
        volume: number,
    }
}

export class PriceRange extends jspb.Message {
    getMin(): string;
    setMin(value: string): PriceRange;
    getMax(): string;
    setMax(value: string): PriceRange;
    getRef(): string;
    setRef(value: string): PriceRange;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriceRange.AsObject;
    static toObject(includeInstance: boolean, msg: PriceRange): PriceRange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriceRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriceRange;
    static deserializeBinaryFromReader(message: PriceRange, reader: jspb.BinaryReader): PriceRange;
}

export namespace PriceRange {
    export type AsObject = {
        min: string,
        max: string,
        ref: string,
    }
}

export class PriceBound extends jspb.Message {
    getActive(): boolean;
    setActive(value: boolean): PriceBound;
    getUpFactor(): string;
    setUpFactor(value: string): PriceBound;
    getDownFactor(): string;
    setDownFactor(value: string): PriceBound;

    hasTrigger(): boolean;
    clearTrigger(): void;
    getTrigger(): vega_markets_pb.PriceMonitoringTrigger | undefined;
    setTrigger(value?: vega_markets_pb.PriceMonitoringTrigger): PriceBound;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriceBound.AsObject;
    static toObject(includeInstance: boolean, msg: PriceBound): PriceBound.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriceBound, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriceBound;
    static deserializeBinaryFromReader(message: PriceBound, reader: jspb.BinaryReader): PriceBound;
}

export namespace PriceBound {
    export type AsObject = {
        active: boolean,
        upFactor: string,
        downFactor: string,
        trigger?: vega_markets_pb.PriceMonitoringTrigger.AsObject,
    }
}

export class PriceRangeCache extends jspb.Message {

    hasBound(): boolean;
    clearBound(): void;
    getBound(): PriceBound | undefined;
    setBound(value?: PriceBound): PriceRangeCache;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): PriceRange | undefined;
    setRange(value?: PriceRange): PriceRangeCache;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriceRangeCache.AsObject;
    static toObject(includeInstance: boolean, msg: PriceRangeCache): PriceRangeCache.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriceRangeCache, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriceRangeCache;
    static deserializeBinaryFromReader(message: PriceRangeCache, reader: jspb.BinaryReader): PriceRangeCache;
}

export namespace PriceRangeCache {
    export type AsObject = {
        bound?: PriceBound.AsObject,
        range?: PriceRange.AsObject,
    }
}

export class PriceMonitor extends jspb.Message {
    getInitialised(): boolean;
    setInitialised(value: boolean): PriceMonitor;
    clearFpHorizonsList(): void;
    getFpHorizonsList(): Array<DecimalMap>;
    setFpHorizonsList(value: Array<DecimalMap>): PriceMonitor;
    addFpHorizons(value?: DecimalMap, index?: number): DecimalMap;
    getNow(): number;
    setNow(value: number): PriceMonitor;
    getUpdate(): number;
    setUpdate(value: number): PriceMonitor;
    clearBoundsList(): void;
    getBoundsList(): Array<PriceBound>;
    setBoundsList(value: Array<PriceBound>): PriceMonitor;
    addBounds(value?: PriceBound, index?: number): PriceBound;
    getPriceRangeCacheTime(): number;
    setPriceRangeCacheTime(value: number): PriceMonitor;
    clearPriceRangeCacheList(): void;
    getPriceRangeCacheList(): Array<PriceRangeCache>;
    setPriceRangeCacheList(value: Array<PriceRangeCache>): PriceMonitor;
    addPriceRangeCache(value?: PriceRangeCache, index?: number): PriceRangeCache;
    getRefPriceCacheTime(): number;
    setRefPriceCacheTime(value: number): PriceMonitor;
    clearRefPriceCacheList(): void;
    getRefPriceCacheList(): Array<DecimalMap>;
    setRefPriceCacheList(value: Array<DecimalMap>): PriceMonitor;
    addRefPriceCache(value?: DecimalMap, index?: number): DecimalMap;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriceMonitor.AsObject;
    static toObject(includeInstance: boolean, msg: PriceMonitor): PriceMonitor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriceMonitor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriceMonitor;
    static deserializeBinaryFromReader(message: PriceMonitor, reader: jspb.BinaryReader): PriceMonitor;
}

export namespace PriceMonitor {
    export type AsObject = {
        initialised: boolean,
        fpHorizonsList: Array<DecimalMap.AsObject>,
        now: number,
        update: number,
        boundsList: Array<PriceBound.AsObject>,
        priceRangeCacheTime: number,
        priceRangeCacheList: Array<PriceRangeCache.AsObject>,
        refPriceCacheTime: number,
        refPriceCacheList: Array<DecimalMap.AsObject>,
    }
}

export class AuctionState extends jspb.Message {
    getMode(): vega_markets_pb.Market.TradingMode;
    setMode(value: vega_markets_pb.Market.TradingMode): AuctionState;
    getDefaultMode(): vega_markets_pb.Market.TradingMode;
    setDefaultMode(value: vega_markets_pb.Market.TradingMode): AuctionState;
    getTrigger(): vega_vega_pb.AuctionTrigger;
    setTrigger(value: vega_vega_pb.AuctionTrigger): AuctionState;
    getBegin(): number;
    setBegin(value: number): AuctionState;

    hasEnd(): boolean;
    clearEnd(): void;
    getEnd(): vega_markets_pb.AuctionDuration | undefined;
    setEnd(value?: vega_markets_pb.AuctionDuration): AuctionState;
    getStart(): boolean;
    setStart(value: boolean): AuctionState;
    getStop(): boolean;
    setStop(value: boolean): AuctionState;
    getExtension$(): vega_vega_pb.AuctionTrigger;
    setExtension$(value: vega_vega_pb.AuctionTrigger): AuctionState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuctionState.AsObject;
    static toObject(includeInstance: boolean, msg: AuctionState): AuctionState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuctionState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuctionState;
    static deserializeBinaryFromReader(message: AuctionState, reader: jspb.BinaryReader): AuctionState;
}

export namespace AuctionState {
    export type AsObject = {
        mode: vega_markets_pb.Market.TradingMode,
        defaultMode: vega_markets_pb.Market.TradingMode,
        trigger: vega_vega_pb.AuctionTrigger,
        begin: number,
        end?: vega_markets_pb.AuctionDuration.AsObject,
        start: boolean,
        stop: boolean,
        extension: vega_vega_pb.AuctionTrigger,
    }
}

export class EquityShareLP extends jspb.Message {
    getId(): string;
    setId(value: string): EquityShareLP;
    getStake(): string;
    setStake(value: string): EquityShareLP;
    getShare(): string;
    setShare(value: string): EquityShareLP;
    getAvg(): string;
    setAvg(value: string): EquityShareLP;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EquityShareLP.AsObject;
    static toObject(includeInstance: boolean, msg: EquityShareLP): EquityShareLP.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EquityShareLP, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EquityShareLP;
    static deserializeBinaryFromReader(message: EquityShareLP, reader: jspb.BinaryReader): EquityShareLP;
}

export namespace EquityShareLP {
    export type AsObject = {
        id: string,
        stake: string,
        share: string,
        avg: string,
    }
}

export class EquityShare extends jspb.Message {
    getMvp(): string;
    setMvp(value: string): EquityShare;
    getOpeningAuctionEnded(): boolean;
    setOpeningAuctionEnded(value: boolean): EquityShare;
    clearLpsList(): void;
    getLpsList(): Array<EquityShareLP>;
    setLpsList(value: Array<EquityShareLP>): EquityShare;
    addLps(value?: EquityShareLP, index?: number): EquityShareLP;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EquityShare.AsObject;
    static toObject(includeInstance: boolean, msg: EquityShare): EquityShare.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EquityShare, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EquityShare;
    static deserializeBinaryFromReader(message: EquityShare, reader: jspb.BinaryReader): EquityShare;
}

export namespace EquityShare {
    export type AsObject = {
        mvp: string,
        openingAuctionEnded: boolean,
        lpsList: Array<EquityShareLP.AsObject>,
    }
}

export class Market extends jspb.Message {

    hasMarket(): boolean;
    clearMarket(): void;
    getMarket(): vega_markets_pb.Market | undefined;
    setMarket(value?: vega_markets_pb.Market): Market;

    hasPriceMonitor(): boolean;
    clearPriceMonitor(): void;
    getPriceMonitor(): PriceMonitor | undefined;
    setPriceMonitor(value?: PriceMonitor): Market;

    hasAuctionState(): boolean;
    clearAuctionState(): void;
    getAuctionState(): AuctionState | undefined;
    setAuctionState(value?: AuctionState): Market;
    clearPeggedOrdersList(): void;
    getPeggedOrdersList(): Array<vega_vega_pb.Order>;
    setPeggedOrdersList(value: Array<vega_vega_pb.Order>): Market;
    addPeggedOrders(value?: vega_vega_pb.Order, index?: number): vega_vega_pb.Order;
    clearExpiringOrdersList(): void;
    getExpiringOrdersList(): Array<vega_vega_pb.Order>;
    setExpiringOrdersList(value: Array<vega_vega_pb.Order>): Market;
    addExpiringOrders(value?: vega_vega_pb.Order, index?: number): vega_vega_pb.Order;
    getLastBestBid(): string;
    setLastBestBid(value: string): Market;
    getLastBestAsk(): string;
    setLastBestAsk(value: string): Market;
    getLastMidBid(): string;
    setLastMidBid(value: string): Market;
    getLastMidAsk(): string;
    setLastMidAsk(value: string): Market;
    getLastMarketValueProxy(): string;
    setLastMarketValueProxy(value: string): Market;
    getLastEquityShareDistributed(): number;
    setLastEquityShareDistributed(value: number): Market;

    hasEquityShare(): boolean;
    clearEquityShare(): void;
    getEquityShare(): EquityShare | undefined;
    setEquityShare(value?: EquityShare): Market;
    getCurrentMarkPrice(): string;
    setCurrentMarkPrice(value: string): Market;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Market.AsObject;
    static toObject(includeInstance: boolean, msg: Market): Market.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Market, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Market;
    static deserializeBinaryFromReader(message: Market, reader: jspb.BinaryReader): Market;
}

export namespace Market {
    export type AsObject = {
        market?: vega_markets_pb.Market.AsObject,
        priceMonitor?: PriceMonitor.AsObject,
        auctionState?: AuctionState.AsObject,
        peggedOrdersList: Array<vega_vega_pb.Order.AsObject>,
        expiringOrdersList: Array<vega_vega_pb.Order.AsObject>,
        lastBestBid: string,
        lastBestAsk: string,
        lastMidBid: string,
        lastMidAsk: string,
        lastMarketValueProxy: string,
        lastEquityShareDistributed: number,
        equityShare?: EquityShare.AsObject,
        currentMarkPrice: string,
    }
}

export class ExecutionMarkets extends jspb.Message {
    clearMarketsList(): void;
    getMarketsList(): Array<Market>;
    setMarketsList(value: Array<Market>): ExecutionMarkets;
    addMarkets(value?: Market, index?: number): Market;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecutionMarkets.AsObject;
    static toObject(includeInstance: boolean, msg: ExecutionMarkets): ExecutionMarkets.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecutionMarkets, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecutionMarkets;
    static deserializeBinaryFromReader(message: ExecutionMarkets, reader: jspb.BinaryReader): ExecutionMarkets;
}

export namespace ExecutionMarkets {
    export type AsObject = {
        marketsList: Array<Market.AsObject>,
    }
}

export class Position extends jspb.Message {
    getPartyId(): string;
    setPartyId(value: string): Position;
    getSize(): number;
    setSize(value: number): Position;
    getBuy(): number;
    setBuy(value: number): Position;
    getSell(): number;
    setSell(value: number): Position;
    getPrice(): string;
    setPrice(value: string): Position;
    getVwBuyPrice(): string;
    setVwBuyPrice(value: string): Position;
    getVwSellPrice(): string;
    setVwSellPrice(value: string): Position;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Position.AsObject;
    static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Position;
    static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
}

export namespace Position {
    export type AsObject = {
        partyId: string,
        size: number,
        buy: number,
        sell: number,
        price: string,
        vwBuyPrice: string,
        vwSellPrice: string,
    }
}

export class MarketPositions extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): MarketPositions;
    clearPositionsList(): void;
    getPositionsList(): Array<Position>;
    setPositionsList(value: Array<Position>): MarketPositions;
    addPositions(value?: Position, index?: number): Position;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketPositions.AsObject;
    static toObject(includeInstance: boolean, msg: MarketPositions): MarketPositions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketPositions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketPositions;
    static deserializeBinaryFromReader(message: MarketPositions, reader: jspb.BinaryReader): MarketPositions;
}

export namespace MarketPositions {
    export type AsObject = {
        marketId: string,
        positionsList: Array<Position.AsObject>,
    }
}

export class AppState extends jspb.Message {
    getHeight(): number;
    setHeight(value: number): AppState;
    getBlock(): string;
    setBlock(value: string): AppState;
    getTime(): number;
    setTime(value: number): AppState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppState.AsObject;
    static toObject(includeInstance: boolean, msg: AppState): AppState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppState;
    static deserializeBinaryFromReader(message: AppState, reader: jspb.BinaryReader): AppState;
}

export namespace AppState {
    export type AsObject = {
        height: number,
        block: string,
        time: number,
    }
}

export class EpochState extends jspb.Message {
    getSeq(): number;
    setSeq(value: number): EpochState;
    getStartTime(): number;
    setStartTime(value: number): EpochState;
    getExpireTime(): number;
    setExpireTime(value: number): EpochState;
    getReadyToStartNewEpoch(): boolean;
    setReadyToStartNewEpoch(value: boolean): EpochState;
    getReadyToEndEpoch(): boolean;
    setReadyToEndEpoch(value: boolean): EpochState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EpochState.AsObject;
    static toObject(includeInstance: boolean, msg: EpochState): EpochState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EpochState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EpochState;
    static deserializeBinaryFromReader(message: EpochState, reader: jspb.BinaryReader): EpochState;
}

export namespace EpochState {
    export type AsObject = {
        seq: number,
        startTime: number,
        expireTime: number,
        readyToStartNewEpoch: boolean,
        readyToEndEpoch: boolean,
    }
}

export enum Format {
    FORMAT_UNSPECIFIED = 0,
    FORMAT_PROTO = 1,
    FORMAT_PROTO_COMPRESSED = 2,
    FORMAT_JSON = 3,
}
