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
import * as vega_commands_v1_validator_commands_pb from "../../../vega/commands/v1/validator_commands_pb";

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

    hasBankingAssetActions(): boolean;
    clearBankingAssetActions(): void;
    getBankingAssetActions(): BankingAssetActions | undefined;
    setBankingAssetActions(value?: BankingAssetActions): Payload;

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

    hasRewardsPendingPayouts(): boolean;
    clearRewardsPendingPayouts(): void;
    getRewardsPendingPayouts(): RewardsPendingPayouts | undefined;
    setRewardsPendingPayouts(value?: RewardsPendingPayouts): Payload;

    hasGovernanceNode(): boolean;
    clearGovernanceNode(): void;
    getGovernanceNode(): GovernanceNode | undefined;
    setGovernanceNode(value?: GovernanceNode): Payload;

    hasLimitState(): boolean;
    clearLimitState(): void;
    getLimitState(): LimitState | undefined;
    setLimitState(value?: LimitState): Payload;

    hasVoteSpamPolicy(): boolean;
    clearVoteSpamPolicy(): void;
    getVoteSpamPolicy(): VoteSpamPolicy | undefined;
    setVoteSpamPolicy(value?: VoteSpamPolicy): Payload;

    hasSimpleSpamPolicy(): boolean;
    clearSimpleSpamPolicy(): void;
    getSimpleSpamPolicy(): SimpleSpamPolicy | undefined;
    setSimpleSpamPolicy(value?: SimpleSpamPolicy): Payload;

    hasNotary(): boolean;
    clearNotary(): void;
    getNotary(): Notary | undefined;
    setNotary(value?: Notary): Payload;

    hasReplayProtection(): boolean;
    clearReplayProtection(): void;
    getReplayProtection(): ReplayProtection | undefined;
    setReplayProtection(value?: ReplayProtection): Payload;

    hasFutureState(): boolean;
    clearFutureState(): void;
    getFutureState(): FutureState | undefined;
    setFutureState(value?: FutureState): Payload;

    hasEventForwarder(): boolean;
    clearEventForwarder(): void;
    getEventForwarder(): EventForwarder | undefined;
    setEventForwarder(value?: EventForwarder): Payload;

    hasStakeVerifierDeposited(): boolean;
    clearStakeVerifierDeposited(): void;
    getStakeVerifierDeposited(): StakeVerifierDeposited | undefined;
    setStakeVerifierDeposited(value?: StakeVerifierDeposited): Payload;

    hasStakeVerifierRemoved(): boolean;
    clearStakeVerifierRemoved(): void;
    getStakeVerifierRemoved(): StakeVerifierRemoved | undefined;
    setStakeVerifierRemoved(value?: StakeVerifierRemoved): Payload;

    hasWitness(): boolean;
    clearWitness(): void;
    getWitness(): Witness | undefined;
    setWitness(value?: Witness): Payload;

    hasDelegationLastReconciliationTime(): boolean;
    clearDelegationLastReconciliationTime(): void;
    getDelegationLastReconciliationTime(): DelegationLastReconciliationTime | undefined;
    setDelegationLastReconciliationTime(value?: DelegationLastReconciliationTime): Payload;

    hasTopology(): boolean;
    clearTopology(): void;
    getTopology(): Topology | undefined;
    setTopology(value?: Topology): Payload;

    hasOracleData(): boolean;
    clearOracleData(): void;
    getOracleData(): OracleDataBatch | undefined;
    setOracleData(value?: OracleDataBatch): Payload;

    hasLiquidityParameters(): boolean;
    clearLiquidityParameters(): void;
    getLiquidityParameters(): LiquidityParameters | undefined;
    setLiquidityParameters(value?: LiquidityParameters): Payload;

    hasLiquidityPendingProvisions(): boolean;
    clearLiquidityPendingProvisions(): void;
    getLiquidityPendingProvisions(): LiquidityPendingProvisions | undefined;
    setLiquidityPendingProvisions(value?: LiquidityPendingProvisions): Payload;

    hasLiquidityPartiesLiquidityOrders(): boolean;
    clearLiquidityPartiesLiquidityOrders(): void;
    getLiquidityPartiesLiquidityOrders(): LiquidityPartiesLiquidityOrders | undefined;
    setLiquidityPartiesLiquidityOrders(value?: LiquidityPartiesLiquidityOrders): Payload;

    hasLiquidityPartiesOrders(): boolean;
    clearLiquidityPartiesOrders(): void;
    getLiquidityPartiesOrders(): LiquidityPartiesOrders | undefined;
    setLiquidityPartiesOrders(value?: LiquidityPartiesOrders): Payload;

    hasLiquidityProvisions(): boolean;
    clearLiquidityProvisions(): void;
    getLiquidityProvisions(): LiquidityProvisions | undefined;
    setLiquidityProvisions(value?: LiquidityProvisions): Payload;

    hasLiquiditySupplied(): boolean;
    clearLiquiditySupplied(): void;
    getLiquiditySupplied(): LiquiditySupplied | undefined;
    setLiquiditySupplied(value?: LiquiditySupplied): Payload;

    hasLiquidityTarget(): boolean;
    clearLiquidityTarget(): void;
    getLiquidityTarget(): LiquidityTarget | undefined;
    setLiquidityTarget(value?: LiquidityTarget): Payload;

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
        bankingAssetActions?: BankingAssetActions.AsObject,
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
        rewardsPendingPayouts?: RewardsPendingPayouts.AsObject,
        governanceNode?: GovernanceNode.AsObject,
        limitState?: LimitState.AsObject,
        voteSpamPolicy?: VoteSpamPolicy.AsObject,
        simpleSpamPolicy?: SimpleSpamPolicy.AsObject,
        notary?: Notary.AsObject,
        replayProtection?: ReplayProtection.AsObject,
        futureState?: FutureState.AsObject,
        eventForwarder?: EventForwarder.AsObject,
        stakeVerifierDeposited?: StakeVerifierDeposited.AsObject,
        stakeVerifierRemoved?: StakeVerifierRemoved.AsObject,
        witness?: Witness.AsObject,
        delegationLastReconciliationTime?: DelegationLastReconciliationTime.AsObject,
        topology?: Topology.AsObject,
        oracleData?: OracleDataBatch.AsObject,
        liquidityParameters?: LiquidityParameters.AsObject,
        liquidityPendingProvisions?: LiquidityPendingProvisions.AsObject,
        liquidityPartiesLiquidityOrders?: LiquidityPartiesLiquidityOrders.AsObject,
        liquidityPartiesOrders?: LiquidityPartiesOrders.AsObject,
        liquidityProvisions?: LiquidityProvisions.AsObject,
        liquiditySupplied?: LiquiditySupplied.AsObject,
        liquidityTarget?: LiquidityTarget.AsObject,
    }

    export enum DataCase {
        DATA_NOT_SET = 0,
        ACTIVE_ASSETS = 1,
        PENDING_ASSETS = 2,
        BANKING_WITHDRAWALS = 3,
        BANKING_DEPOSITS = 4,
        BANKING_SEEN = 5,
        BANKING_ASSET_ACTIONS = 6,
        CHECKPOINT = 7,
        COLLATERAL_ACCOUNTS = 8,
        COLLATERAL_ASSETS = 9,
        DELEGATION_ACTIVE = 10,
        DELEGATION_PENDING = 11,
        DELEGATION_AUTO = 12,
        GOVERNANCE_ACTIVE = 13,
        GOVERNANCE_ENACTED = 14,
        STAKING_ACCOUNTS = 15,
        MATCHING_BOOK = 16,
        NETWORK_PARAMETERS = 17,
        EXECUTION_MARKETS = 18,
        MARKET_POSITIONS = 19,
        APP_STATE = 20,
        EPOCH = 21,
        REWARDS_PENDING_PAYOUTS = 23,
        GOVERNANCE_NODE = 24,
        LIMIT_STATE = 25,
        VOTE_SPAM_POLICY = 26,
        SIMPLE_SPAM_POLICY = 27,
        NOTARY = 28,
        REPLAY_PROTECTION = 29,
        FUTURE_STATE = 30,
        EVENT_FORWARDER = 31,
        STAKE_VERIFIER_DEPOSITED = 32,
        STAKE_VERIFIER_REMOVED = 33,
        WITNESS = 34,
        DELEGATION_LAST_RECONCILIATION_TIME = 35,
        TOPOLOGY = 36,
        ORACLE_DATA = 37,
        LIQUIDITY_PARAMETERS = 38,
        LIQUIDITY_PENDING_PROVISIONS = 39,
        LIQUIDITY_PARTIES_LIQUIDITY_ORDERS = 40,
        LIQUIDITY_PARTIES_ORDERS = 41,
        LIQUIDITY_PROVISIONS = 42,
        LIQUIDITY_SUPPLIED = 43,
        LIQUIDITY_TARGET = 44,
    }

}

export class TimestampedOpenInterest extends jspb.Message {
    getOpenInterest(): number;
    setOpenInterest(value: number): TimestampedOpenInterest;
    getTime(): number;
    setTime(value: number): TimestampedOpenInterest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimestampedOpenInterest.AsObject;
    static toObject(includeInstance: boolean, msg: TimestampedOpenInterest): TimestampedOpenInterest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimestampedOpenInterest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimestampedOpenInterest;
    static deserializeBinaryFromReader(message: TimestampedOpenInterest, reader: jspb.BinaryReader): TimestampedOpenInterest;
}

export namespace TimestampedOpenInterest {
    export type AsObject = {
        openInterest: number,
        time: number,
    }
}

export class LiquidityTarget extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): LiquidityTarget;
    getCurrentTime(): number;
    setCurrentTime(value: number): LiquidityTarget;
    getScheduledTruncate(): number;
    setScheduledTruncate(value: number): LiquidityTarget;
    clearCurrentOpenInterestsList(): void;
    getCurrentOpenInterestsList(): Array<number>;
    setCurrentOpenInterestsList(value: Array<number>): LiquidityTarget;
    addCurrentOpenInterests(value: number, index?: number): number;
    clearPreviousOpenInterestsList(): void;
    getPreviousOpenInterestsList(): Array<TimestampedOpenInterest>;
    setPreviousOpenInterestsList(value: Array<TimestampedOpenInterest>): LiquidityTarget;
    addPreviousOpenInterests(value?: TimestampedOpenInterest, index?: number): TimestampedOpenInterest;

    hasMaxOpenInterests(): boolean;
    clearMaxOpenInterests(): void;
    getMaxOpenInterests(): TimestampedOpenInterest | undefined;
    setMaxOpenInterests(value?: TimestampedOpenInterest): LiquidityTarget;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiquidityTarget.AsObject;
    static toObject(includeInstance: boolean, msg: LiquidityTarget): LiquidityTarget.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiquidityTarget, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiquidityTarget;
    static deserializeBinaryFromReader(message: LiquidityTarget, reader: jspb.BinaryReader): LiquidityTarget;
}

export namespace LiquidityTarget {
    export type AsObject = {
        marketId: string,
        currentTime: number,
        scheduledTruncate: number,
        currentOpenInterestsList: Array<number>,
        previousOpenInterestsList: Array<TimestampedOpenInterest.AsObject>,
        maxOpenInterests?: TimestampedOpenInterest.AsObject,
    }
}

export class LiquidityPriceProbabilityPair extends jspb.Message {
    getPrice(): string;
    setPrice(value: string): LiquidityPriceProbabilityPair;
    getProbability(): string;
    setProbability(value: string): LiquidityPriceProbabilityPair;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiquidityPriceProbabilityPair.AsObject;
    static toObject(includeInstance: boolean, msg: LiquidityPriceProbabilityPair): LiquidityPriceProbabilityPair.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiquidityPriceProbabilityPair, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiquidityPriceProbabilityPair;
    static deserializeBinaryFromReader(message: LiquidityPriceProbabilityPair, reader: jspb.BinaryReader): LiquidityPriceProbabilityPair;
}

export namespace LiquidityPriceProbabilityPair {
    export type AsObject = {
        price: string,
        probability: string,
    }
}

export class LiquiditySupplied extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): LiquiditySupplied;
    getCachedMin(): string;
    setCachedMin(value: string): LiquiditySupplied;
    getCachedMax(): string;
    setCachedMax(value: string): LiquiditySupplied;
    clearBidCacheList(): void;
    getBidCacheList(): Array<LiquidityPriceProbabilityPair>;
    setBidCacheList(value: Array<LiquidityPriceProbabilityPair>): LiquiditySupplied;
    addBidCache(value?: LiquidityPriceProbabilityPair, index?: number): LiquidityPriceProbabilityPair;
    clearAskCacheList(): void;
    getAskCacheList(): Array<LiquidityPriceProbabilityPair>;
    setAskCacheList(value: Array<LiquidityPriceProbabilityPair>): LiquiditySupplied;
    addAskCache(value?: LiquidityPriceProbabilityPair, index?: number): LiquidityPriceProbabilityPair;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiquiditySupplied.AsObject;
    static toObject(includeInstance: boolean, msg: LiquiditySupplied): LiquiditySupplied.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiquiditySupplied, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiquiditySupplied;
    static deserializeBinaryFromReader(message: LiquiditySupplied, reader: jspb.BinaryReader): LiquiditySupplied;
}

export namespace LiquiditySupplied {
    export type AsObject = {
        marketId: string,
        cachedMin: string,
        cachedMax: string,
        bidCacheList: Array<LiquidityPriceProbabilityPair.AsObject>,
        askCacheList: Array<LiquidityPriceProbabilityPair.AsObject>,
    }
}

export class OracleDataBatch extends jspb.Message {
    clearOracleDataList(): void;
    getOracleDataList(): Array<OracleData>;
    setOracleDataList(value: Array<OracleData>): OracleDataBatch;
    addOracleData(value?: OracleData, index?: number): OracleData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OracleDataBatch.AsObject;
    static toObject(includeInstance: boolean, msg: OracleDataBatch): OracleDataBatch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OracleDataBatch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OracleDataBatch;
    static deserializeBinaryFromReader(message: OracleDataBatch, reader: jspb.BinaryReader): OracleDataBatch;
}

export namespace OracleDataBatch {
    export type AsObject = {
        oracleDataList: Array<OracleData.AsObject>,
    }
}

export class OracleData extends jspb.Message {
    clearPubKeysList(): void;
    getPubKeysList(): Array<string>;
    setPubKeysList(value: Array<string>): OracleData;
    addPubKeys(value: string, index?: number): string;
    clearDataList(): void;
    getDataList(): Array<OracleDataPair>;
    setDataList(value: Array<OracleDataPair>): OracleData;
    addData(value?: OracleDataPair, index?: number): OracleDataPair;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OracleData.AsObject;
    static toObject(includeInstance: boolean, msg: OracleData): OracleData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OracleData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OracleData;
    static deserializeBinaryFromReader(message: OracleData, reader: jspb.BinaryReader): OracleData;
}

export namespace OracleData {
    export type AsObject = {
        pubKeysList: Array<string>,
        dataList: Array<OracleDataPair.AsObject>,
    }
}

export class OracleDataPair extends jspb.Message {
    getKey(): string;
    setKey(value: string): OracleDataPair;
    getValue(): string;
    setValue(value: string): OracleDataPair;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OracleDataPair.AsObject;
    static toObject(includeInstance: boolean, msg: OracleDataPair): OracleDataPair.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OracleDataPair, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OracleDataPair;
    static deserializeBinaryFromReader(message: OracleDataPair, reader: jspb.BinaryReader): OracleDataPair;
}

export namespace OracleDataPair {
    export type AsObject = {
        key: string,
        value: string,
    }
}

export class Witness extends jspb.Message {
    clearResourcesList(): void;
    getResourcesList(): Array<Resource>;
    setResourcesList(value: Array<Resource>): Witness;
    addResources(value?: Resource, index?: number): Resource;
    clearNeedResendResourcesList(): void;
    getNeedResendResourcesList(): Array<string>;
    setNeedResendResourcesList(value: Array<string>): Witness;
    addNeedResendResources(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Witness.AsObject;
    static toObject(includeInstance: boolean, msg: Witness): Witness.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Witness, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Witness;
    static deserializeBinaryFromReader(message: Witness, reader: jspb.BinaryReader): Witness;
}

export namespace Witness {
    export type AsObject = {
        resourcesList: Array<Resource.AsObject>,
        needResendResourcesList: Array<string>,
    }
}

export class Resource extends jspb.Message {
    getId(): string;
    setId(value: string): Resource;
    getCheckUntil(): number;
    setCheckUntil(value: number): Resource;
    clearVotesList(): void;
    getVotesList(): Array<string>;
    setVotesList(value: Array<string>): Resource;
    addVotes(value: string, index?: number): string;
    getState(): number;
    setState(value: number): Resource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Resource.AsObject;
    static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Resource;
    static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
}

export namespace Resource {
    export type AsObject = {
        id: string,
        checkUntil: number,
        votesList: Array<string>,
        state: number,
    }
}

export class EventForwarder extends jspb.Message {
    clearAckedEventsList(): void;
    getAckedEventsList(): Array<vega_commands_v1_validator_commands_pb.ChainEvent>;
    setAckedEventsList(value: Array<vega_commands_v1_validator_commands_pb.ChainEvent>): EventForwarder;
    addAckedEvents(value?: vega_commands_v1_validator_commands_pb.ChainEvent, index?: number): vega_commands_v1_validator_commands_pb.ChainEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventForwarder.AsObject;
    static toObject(includeInstance: boolean, msg: EventForwarder): EventForwarder.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventForwarder, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventForwarder;
    static deserializeBinaryFromReader(message: EventForwarder, reader: jspb.BinaryReader): EventForwarder;
}

export namespace EventForwarder {
    export type AsObject = {
        ackedEventsList: Array<vega_commands_v1_validator_commands_pb.ChainEvent.AsObject>,
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

export class AssetAction extends jspb.Message {
    getId(): string;
    setId(value: string): AssetAction;
    getState(): number;
    setState(value: number): AssetAction;
    getAsset(): string;
    setAsset(value: string): AssetAction;
    getBlockNumber(): number;
    setBlockNumber(value: number): AssetAction;
    getTxIndex(): number;
    setTxIndex(value: number): AssetAction;
    getHash(): string;
    setHash(value: string): AssetAction;

    hasBuiltinDeposit(): boolean;
    clearBuiltinDeposit(): void;
    getBuiltinDeposit(): vega_chain_events_pb.BuiltinAssetDeposit | undefined;
    setBuiltinDeposit(value?: vega_chain_events_pb.BuiltinAssetDeposit): AssetAction;

    hasErc20Deposit(): boolean;
    clearErc20Deposit(): void;
    getErc20Deposit(): vega_chain_events_pb.ERC20Deposit | undefined;
    setErc20Deposit(value?: vega_chain_events_pb.ERC20Deposit): AssetAction;

    hasAssetList(): boolean;
    clearAssetList(): void;
    getAssetList(): vega_chain_events_pb.ERC20AssetList | undefined;
    setAssetList(value?: vega_chain_events_pb.ERC20AssetList): AssetAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetAction.AsObject;
    static toObject(includeInstance: boolean, msg: AssetAction): AssetAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetAction;
    static deserializeBinaryFromReader(message: AssetAction, reader: jspb.BinaryReader): AssetAction;
}

export namespace AssetAction {
    export type AsObject = {
        id: string,
        state: number,
        asset: string,
        blockNumber: number,
        txIndex: number,
        hash: string,
        builtinDeposit?: vega_chain_events_pb.BuiltinAssetDeposit.AsObject,
        erc20Deposit?: vega_chain_events_pb.ERC20Deposit.AsObject,
        assetList?: vega_chain_events_pb.ERC20AssetList.AsObject,
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

export class BankingAssetActions extends jspb.Message {
    clearAssetActionList(): void;
    getAssetActionList(): Array<AssetAction>;
    setAssetActionList(value: Array<AssetAction>): BankingAssetActions;
    addAssetAction(value?: AssetAction, index?: number): AssetAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BankingAssetActions.AsObject;
    static toObject(includeInstance: boolean, msg: BankingAssetActions): BankingAssetActions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BankingAssetActions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BankingAssetActions;
    static deserializeBinaryFromReader(message: BankingAssetActions, reader: jspb.BinaryReader): BankingAssetActions;
}

export namespace BankingAssetActions {
    export type AsObject = {
        assetActionList: Array<AssetAction.AsObject>,
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

export class DelegationLastReconciliationTime extends jspb.Message {
    getLastReconciliationTime(): number;
    setLastReconciliationTime(value: number): DelegationLastReconciliationTime;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DelegationLastReconciliationTime.AsObject;
    static toObject(includeInstance: boolean, msg: DelegationLastReconciliationTime): DelegationLastReconciliationTime.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DelegationLastReconciliationTime, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DelegationLastReconciliationTime;
    static deserializeBinaryFromReader(message: DelegationLastReconciliationTime, reader: jspb.BinaryReader): DelegationLastReconciliationTime;
}

export namespace DelegationLastReconciliationTime {
    export type AsObject = {
        lastReconciliationTime: number,
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

export class GovernanceNode extends jspb.Message {
    clearProposalsList(): void;
    getProposalsList(): Array<vega_governance_pb.Proposal>;
    setProposalsList(value: Array<vega_governance_pb.Proposal>): GovernanceNode;
    addProposals(value?: vega_governance_pb.Proposal, index?: number): vega_governance_pb.Proposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GovernanceNode.AsObject;
    static toObject(includeInstance: boolean, msg: GovernanceNode): GovernanceNode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GovernanceNode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GovernanceNode;
    static deserializeBinaryFromReader(message: GovernanceNode, reader: jspb.BinaryReader): GovernanceNode;
}

export namespace GovernanceNode {
    export type AsObject = {
        proposalsList: Array<vega_governance_pb.Proposal.AsObject>,
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
    getLastTradedPrice(): string;
    setLastTradedPrice(value: string): MatchingBook;
    getAuction(): boolean;
    setAuction(value: boolean): MatchingBook;
    getBatchId(): number;
    setBatchId(value: number): MatchingBook;

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
        lastTradedPrice: string,
        auction: boolean,
        batchId: number,
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

export class CurrentPrice extends jspb.Message {
    getPrice(): string;
    setPrice(value: string): CurrentPrice;
    getVolume(): number;
    setVolume(value: number): CurrentPrice;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CurrentPrice.AsObject;
    static toObject(includeInstance: boolean, msg: CurrentPrice): CurrentPrice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CurrentPrice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CurrentPrice;
    static deserializeBinaryFromReader(message: CurrentPrice, reader: jspb.BinaryReader): CurrentPrice;
}

export namespace CurrentPrice {
    export type AsObject = {
        price: string,
        volume: number,
    }
}

export class PastPrice extends jspb.Message {
    getTime(): number;
    setTime(value: number): PastPrice;
    getVolumeWeightedPrice(): string;
    setVolumeWeightedPrice(value: string): PastPrice;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PastPrice.AsObject;
    static toObject(includeInstance: boolean, msg: PastPrice): PastPrice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PastPrice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PastPrice;
    static deserializeBinaryFromReader(message: PastPrice, reader: jspb.BinaryReader): PastPrice;
}

export namespace PastPrice {
    export type AsObject = {
        time: number,
        volumeWeightedPrice: string,
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
    clearPricesNowList(): void;
    getPricesNowList(): Array<CurrentPrice>;
    setPricesNowList(value: Array<CurrentPrice>): PriceMonitor;
    addPricesNow(value?: CurrentPrice, index?: number): CurrentPrice;
    clearPricesPastList(): void;
    getPricesPastList(): Array<PastPrice>;
    setPricesPastList(value: Array<PastPrice>): PriceMonitor;
    addPricesPast(value?: PastPrice, index?: number): PastPrice;

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
        pricesNowList: Array<CurrentPrice.AsObject>,
        pricesPastList: Array<PastPrice.AsObject>,
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
    getBatches(): number;
    setBatches(value: number): ExecutionMarkets;
    getOrders(): number;
    setOrders(value: number): ExecutionMarkets;
    getProposals(): number;
    setProposals(value: number): ExecutionMarkets;

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
        batches: number,
        orders: number,
        proposals: number,
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

export class RewardsPendingPayouts extends jspb.Message {
    clearScheduledRewardsPayoutList(): void;
    getScheduledRewardsPayoutList(): Array<ScheduledRewardsPayout>;
    setScheduledRewardsPayoutList(value: Array<ScheduledRewardsPayout>): RewardsPendingPayouts;
    addScheduledRewardsPayout(value?: ScheduledRewardsPayout, index?: number): ScheduledRewardsPayout;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RewardsPendingPayouts.AsObject;
    static toObject(includeInstance: boolean, msg: RewardsPendingPayouts): RewardsPendingPayouts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RewardsPendingPayouts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RewardsPendingPayouts;
    static deserializeBinaryFromReader(message: RewardsPendingPayouts, reader: jspb.BinaryReader): RewardsPendingPayouts;
}

export namespace RewardsPendingPayouts {
    export type AsObject = {
        scheduledRewardsPayoutList: Array<ScheduledRewardsPayout.AsObject>,
    }
}

export class ScheduledRewardsPayout extends jspb.Message {
    getPayoutTime(): number;
    setPayoutTime(value: number): ScheduledRewardsPayout;
    clearRewardsPayoutList(): void;
    getRewardsPayoutList(): Array<RewardsPayout>;
    setRewardsPayoutList(value: Array<RewardsPayout>): ScheduledRewardsPayout;
    addRewardsPayout(value?: RewardsPayout, index?: number): RewardsPayout;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScheduledRewardsPayout.AsObject;
    static toObject(includeInstance: boolean, msg: ScheduledRewardsPayout): ScheduledRewardsPayout.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScheduledRewardsPayout, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScheduledRewardsPayout;
    static deserializeBinaryFromReader(message: ScheduledRewardsPayout, reader: jspb.BinaryReader): ScheduledRewardsPayout;
}

export namespace ScheduledRewardsPayout {
    export type AsObject = {
        payoutTime: number,
        rewardsPayoutList: Array<RewardsPayout.AsObject>,
    }
}

export class RewardsPayout extends jspb.Message {
    getFromAccount(): string;
    setFromAccount(value: string): RewardsPayout;
    getAsset(): string;
    setAsset(value: string): RewardsPayout;
    clearRewardPartyAmountList(): void;
    getRewardPartyAmountList(): Array<RewardsPartyAmount>;
    setRewardPartyAmountList(value: Array<RewardsPartyAmount>): RewardsPayout;
    addRewardPartyAmount(value?: RewardsPartyAmount, index?: number): RewardsPartyAmount;
    getTotalReward(): string;
    setTotalReward(value: string): RewardsPayout;
    getEpochSeq(): string;
    setEpochSeq(value: string): RewardsPayout;
    getTimestamp(): number;
    setTimestamp(value: number): RewardsPayout;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RewardsPayout.AsObject;
    static toObject(includeInstance: boolean, msg: RewardsPayout): RewardsPayout.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RewardsPayout, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RewardsPayout;
    static deserializeBinaryFromReader(message: RewardsPayout, reader: jspb.BinaryReader): RewardsPayout;
}

export namespace RewardsPayout {
    export type AsObject = {
        fromAccount: string,
        asset: string,
        rewardPartyAmountList: Array<RewardsPartyAmount.AsObject>,
        totalReward: string,
        epochSeq: string,
        timestamp: number,
    }
}

export class RewardsPartyAmount extends jspb.Message {
    getParty(): string;
    setParty(value: string): RewardsPartyAmount;
    getAmount(): string;
    setAmount(value: string): RewardsPartyAmount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RewardsPartyAmount.AsObject;
    static toObject(includeInstance: boolean, msg: RewardsPartyAmount): RewardsPartyAmount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RewardsPartyAmount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RewardsPartyAmount;
    static deserializeBinaryFromReader(message: RewardsPartyAmount, reader: jspb.BinaryReader): RewardsPartyAmount;
}

export namespace RewardsPartyAmount {
    export type AsObject = {
        party: string,
        amount: string,
    }
}

export class LimitState extends jspb.Message {
    getBlockCount(): number;
    setBlockCount(value: number): LimitState;
    getCanProposeMarket(): boolean;
    setCanProposeMarket(value: boolean): LimitState;
    getCanProposeAsset(): boolean;
    setCanProposeAsset(value: boolean): LimitState;
    getGenesisLoaded(): boolean;
    setGenesisLoaded(value: boolean): LimitState;
    getProposeMarketEnabled(): boolean;
    setProposeMarketEnabled(value: boolean): LimitState;
    getProposeAssetEnabled(): boolean;
    setProposeAssetEnabled(value: boolean): LimitState;
    getProposeMarketEnabledFrom(): number;
    setProposeMarketEnabledFrom(value: number): LimitState;
    getProposeAssetEnabledFrom(): number;
    setProposeAssetEnabledFrom(value: number): LimitState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LimitState.AsObject;
    static toObject(includeInstance: boolean, msg: LimitState): LimitState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LimitState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LimitState;
    static deserializeBinaryFromReader(message: LimitState, reader: jspb.BinaryReader): LimitState;
}

export namespace LimitState {
    export type AsObject = {
        blockCount: number,
        canProposeMarket: boolean,
        canProposeAsset: boolean,
        genesisLoaded: boolean,
        proposeMarketEnabled: boolean,
        proposeAssetEnabled: boolean,
        proposeMarketEnabledFrom: number,
        proposeAssetEnabledFrom: number,
    }
}

export class VoteSpamPolicy extends jspb.Message {
    clearPartyToVoteList(): void;
    getPartyToVoteList(): Array<PartyProposalVoteCount>;
    setPartyToVoteList(value: Array<PartyProposalVoteCount>): VoteSpamPolicy;
    addPartyToVote(value?: PartyProposalVoteCount, index?: number): PartyProposalVoteCount;
    clearBannedPartiesList(): void;
    getBannedPartiesList(): Array<BannedParty>;
    setBannedPartiesList(value: Array<BannedParty>): VoteSpamPolicy;
    addBannedParties(value?: BannedParty, index?: number): BannedParty;
    clearTokenBalanceList(): void;
    getTokenBalanceList(): Array<PartyTokenBalance>;
    setTokenBalanceList(value: Array<PartyTokenBalance>): VoteSpamPolicy;
    addTokenBalance(value?: PartyTokenBalance, index?: number): PartyTokenBalance;
    clearRecentBlocksRejectStatsList(): void;
    getRecentBlocksRejectStatsList(): Array<BlockRejectStats>;
    setRecentBlocksRejectStatsList(value: Array<BlockRejectStats>): VoteSpamPolicy;
    addRecentBlocksRejectStats(value?: BlockRejectStats, index?: number): BlockRejectStats;
    getCurrentBlockIndex(): number;
    setCurrentBlockIndex(value: number): VoteSpamPolicy;
    getLastIncreaseBlock(): number;
    setLastIncreaseBlock(value: number): VoteSpamPolicy;
    getCurrentEpochSeq(): number;
    setCurrentEpochSeq(value: number): VoteSpamPolicy;
    getMinVotingTokensFactor(): string;
    setMinVotingTokensFactor(value: string): VoteSpamPolicy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VoteSpamPolicy.AsObject;
    static toObject(includeInstance: boolean, msg: VoteSpamPolicy): VoteSpamPolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VoteSpamPolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VoteSpamPolicy;
    static deserializeBinaryFromReader(message: VoteSpamPolicy, reader: jspb.BinaryReader): VoteSpamPolicy;
}

export namespace VoteSpamPolicy {
    export type AsObject = {
        partyToVoteList: Array<PartyProposalVoteCount.AsObject>,
        bannedPartiesList: Array<BannedParty.AsObject>,
        tokenBalanceList: Array<PartyTokenBalance.AsObject>,
        recentBlocksRejectStatsList: Array<BlockRejectStats.AsObject>,
        currentBlockIndex: number,
        lastIncreaseBlock: number,
        currentEpochSeq: number,
        minVotingTokensFactor: string,
    }
}

export class PartyProposalVoteCount extends jspb.Message {
    getParty(): string;
    setParty(value: string): PartyProposalVoteCount;
    getProposal(): string;
    setProposal(value: string): PartyProposalVoteCount;
    getCount(): number;
    setCount(value: number): PartyProposalVoteCount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PartyProposalVoteCount.AsObject;
    static toObject(includeInstance: boolean, msg: PartyProposalVoteCount): PartyProposalVoteCount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PartyProposalVoteCount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PartyProposalVoteCount;
    static deserializeBinaryFromReader(message: PartyProposalVoteCount, reader: jspb.BinaryReader): PartyProposalVoteCount;
}

export namespace PartyProposalVoteCount {
    export type AsObject = {
        party: string,
        proposal: string,
        count: number,
    }
}

export class BannedParty extends jspb.Message {
    getParty(): string;
    setParty(value: string): BannedParty;
    getUntilEpoch(): number;
    setUntilEpoch(value: number): BannedParty;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BannedParty.AsObject;
    static toObject(includeInstance: boolean, msg: BannedParty): BannedParty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BannedParty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BannedParty;
    static deserializeBinaryFromReader(message: BannedParty, reader: jspb.BinaryReader): BannedParty;
}

export namespace BannedParty {
    export type AsObject = {
        party: string,
        untilEpoch: number,
    }
}

export class PartyTokenBalance extends jspb.Message {
    getParty(): string;
    setParty(value: string): PartyTokenBalance;
    getBalance(): string;
    setBalance(value: string): PartyTokenBalance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PartyTokenBalance.AsObject;
    static toObject(includeInstance: boolean, msg: PartyTokenBalance): PartyTokenBalance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PartyTokenBalance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PartyTokenBalance;
    static deserializeBinaryFromReader(message: PartyTokenBalance, reader: jspb.BinaryReader): PartyTokenBalance;
}

export namespace PartyTokenBalance {
    export type AsObject = {
        party: string,
        balance: string,
    }
}

export class BlockRejectStats extends jspb.Message {
    getRejected(): number;
    setRejected(value: number): BlockRejectStats;
    getTotal(): number;
    setTotal(value: number): BlockRejectStats;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlockRejectStats.AsObject;
    static toObject(includeInstance: boolean, msg: BlockRejectStats): BlockRejectStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlockRejectStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlockRejectStats;
    static deserializeBinaryFromReader(message: BlockRejectStats, reader: jspb.BinaryReader): BlockRejectStats;
}

export namespace BlockRejectStats {
    export type AsObject = {
        rejected: number,
        total: number,
    }
}

export class SpamPartyTransactionCount extends jspb.Message {
    getParty(): string;
    setParty(value: string): SpamPartyTransactionCount;
    getCount(): number;
    setCount(value: number): SpamPartyTransactionCount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpamPartyTransactionCount.AsObject;
    static toObject(includeInstance: boolean, msg: SpamPartyTransactionCount): SpamPartyTransactionCount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpamPartyTransactionCount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpamPartyTransactionCount;
    static deserializeBinaryFromReader(message: SpamPartyTransactionCount, reader: jspb.BinaryReader): SpamPartyTransactionCount;
}

export namespace SpamPartyTransactionCount {
    export type AsObject = {
        party: string,
        count: number,
    }
}

export class SimpleSpamPolicy extends jspb.Message {
    getPolicyName(): string;
    setPolicyName(value: string): SimpleSpamPolicy;
    clearPartyToCountList(): void;
    getPartyToCountList(): Array<SpamPartyTransactionCount>;
    setPartyToCountList(value: Array<SpamPartyTransactionCount>): SimpleSpamPolicy;
    addPartyToCount(value?: SpamPartyTransactionCount, index?: number): SpamPartyTransactionCount;
    clearBannedPartiesList(): void;
    getBannedPartiesList(): Array<BannedParty>;
    setBannedPartiesList(value: Array<BannedParty>): SimpleSpamPolicy;
    addBannedParties(value?: BannedParty, index?: number): BannedParty;
    clearTokenBalanceList(): void;
    getTokenBalanceList(): Array<PartyTokenBalance>;
    setTokenBalanceList(value: Array<PartyTokenBalance>): SimpleSpamPolicy;
    addTokenBalance(value?: PartyTokenBalance, index?: number): PartyTokenBalance;
    getCurrentEpochSeq(): number;
    setCurrentEpochSeq(value: number): SimpleSpamPolicy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SimpleSpamPolicy.AsObject;
    static toObject(includeInstance: boolean, msg: SimpleSpamPolicy): SimpleSpamPolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SimpleSpamPolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SimpleSpamPolicy;
    static deserializeBinaryFromReader(message: SimpleSpamPolicy, reader: jspb.BinaryReader): SimpleSpamPolicy;
}

export namespace SimpleSpamPolicy {
    export type AsObject = {
        policyName: string,
        partyToCountList: Array<SpamPartyTransactionCount.AsObject>,
        bannedPartiesList: Array<BannedParty.AsObject>,
        tokenBalanceList: Array<PartyTokenBalance.AsObject>,
        currentEpochSeq: number,
    }
}

export class NotarySigs extends jspb.Message {
    getId(): string;
    setId(value: string): NotarySigs;
    getKind(): number;
    setKind(value: number): NotarySigs;
    getNode(): string;
    setNode(value: string): NotarySigs;
    getSig(): string;
    setSig(value: string): NotarySigs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotarySigs.AsObject;
    static toObject(includeInstance: boolean, msg: NotarySigs): NotarySigs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NotarySigs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotarySigs;
    static deserializeBinaryFromReader(message: NotarySigs, reader: jspb.BinaryReader): NotarySigs;
}

export namespace NotarySigs {
    export type AsObject = {
        id: string,
        kind: number,
        node: string,
        sig: string,
    }
}

export class Notary extends jspb.Message {
    clearNotarySigsList(): void;
    getNotarySigsList(): Array<NotarySigs>;
    setNotarySigsList(value: Array<NotarySigs>): Notary;
    addNotarySigs(value?: NotarySigs, index?: number): NotarySigs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Notary.AsObject;
    static toObject(includeInstance: boolean, msg: Notary): Notary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Notary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Notary;
    static deserializeBinaryFromReader(message: Notary, reader: jspb.BinaryReader): Notary;
}

export namespace Notary {
    export type AsObject = {
        notarySigsList: Array<NotarySigs.AsObject>,
    }
}

export class ReplayProtection extends jspb.Message {
    clearRecentBlocksTransactionsList(): void;
    getRecentBlocksTransactionsList(): Array<RecentBlocksTransactions>;
    setRecentBlocksTransactionsList(value: Array<RecentBlocksTransactions>): ReplayProtection;
    addRecentBlocksTransactions(value?: RecentBlocksTransactions, index?: number): RecentBlocksTransactions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReplayProtection.AsObject;
    static toObject(includeInstance: boolean, msg: ReplayProtection): ReplayProtection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReplayProtection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReplayProtection;
    static deserializeBinaryFromReader(message: ReplayProtection, reader: jspb.BinaryReader): ReplayProtection;
}

export namespace ReplayProtection {
    export type AsObject = {
        recentBlocksTransactionsList: Array<RecentBlocksTransactions.AsObject>,
    }
}

export class RecentBlocksTransactions extends jspb.Message {
    clearTxList(): void;
    getTxList(): Array<string>;
    setTxList(value: Array<string>): RecentBlocksTransactions;
    addTx(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecentBlocksTransactions.AsObject;
    static toObject(includeInstance: boolean, msg: RecentBlocksTransactions): RecentBlocksTransactions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecentBlocksTransactions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecentBlocksTransactions;
    static deserializeBinaryFromReader(message: RecentBlocksTransactions, reader: jspb.BinaryReader): RecentBlocksTransactions;
}

export namespace RecentBlocksTransactions {
    export type AsObject = {
        txList: Array<string>,
    }
}

export class FutureState extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): FutureState;
    getSettlementPrice(): string;
    setSettlementPrice(value: string): FutureState;
    getTradingTerminated(): boolean;
    setTradingTerminated(value: boolean): FutureState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FutureState.AsObject;
    static toObject(includeInstance: boolean, msg: FutureState): FutureState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FutureState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FutureState;
    static deserializeBinaryFromReader(message: FutureState, reader: jspb.BinaryReader): FutureState;
}

export namespace FutureState {
    export type AsObject = {
        marketId: string,
        settlementPrice: string,
        tradingTerminated: boolean,
    }
}

export class StakeVerifierDeposited extends jspb.Message {
    clearPendingDepositedList(): void;
    getPendingDepositedList(): Array<StakeVerifierPending>;
    setPendingDepositedList(value: Array<StakeVerifierPending>): StakeVerifierDeposited;
    addPendingDeposited(value?: StakeVerifierPending, index?: number): StakeVerifierPending;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakeVerifierDeposited.AsObject;
    static toObject(includeInstance: boolean, msg: StakeVerifierDeposited): StakeVerifierDeposited.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakeVerifierDeposited, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakeVerifierDeposited;
    static deserializeBinaryFromReader(message: StakeVerifierDeposited, reader: jspb.BinaryReader): StakeVerifierDeposited;
}

export namespace StakeVerifierDeposited {
    export type AsObject = {
        pendingDepositedList: Array<StakeVerifierPending.AsObject>,
    }
}

export class StakeVerifierRemoved extends jspb.Message {
    clearPendingRemovedList(): void;
    getPendingRemovedList(): Array<StakeVerifierPending>;
    setPendingRemovedList(value: Array<StakeVerifierPending>): StakeVerifierRemoved;
    addPendingRemoved(value?: StakeVerifierPending, index?: number): StakeVerifierPending;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakeVerifierRemoved.AsObject;
    static toObject(includeInstance: boolean, msg: StakeVerifierRemoved): StakeVerifierRemoved.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakeVerifierRemoved, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakeVerifierRemoved;
    static deserializeBinaryFromReader(message: StakeVerifierRemoved, reader: jspb.BinaryReader): StakeVerifierRemoved;
}

export namespace StakeVerifierRemoved {
    export type AsObject = {
        pendingRemovedList: Array<StakeVerifierPending.AsObject>,
    }
}

export class StakeVerifierPending extends jspb.Message {
    getEthereumAddress(): string;
    setEthereumAddress(value: string): StakeVerifierPending;
    getVegaPublicKey(): string;
    setVegaPublicKey(value: string): StakeVerifierPending;
    getAmount(): string;
    setAmount(value: string): StakeVerifierPending;
    getBlockTime(): number;
    setBlockTime(value: number): StakeVerifierPending;
    getBlockNumber(): number;
    setBlockNumber(value: number): StakeVerifierPending;
    getLogIndex(): number;
    setLogIndex(value: number): StakeVerifierPending;
    getTxId(): string;
    setTxId(value: string): StakeVerifierPending;
    getId(): string;
    setId(value: string): StakeVerifierPending;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakeVerifierPending.AsObject;
    static toObject(includeInstance: boolean, msg: StakeVerifierPending): StakeVerifierPending.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakeVerifierPending, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakeVerifierPending;
    static deserializeBinaryFromReader(message: StakeVerifierPending, reader: jspb.BinaryReader): StakeVerifierPending;
}

export namespace StakeVerifierPending {
    export type AsObject = {
        ethereumAddress: string,
        vegaPublicKey: string,
        amount: string,
        blockTime: number,
        blockNumber: number,
        logIndex: number,
        txId: string,
        id: string,
    }
}

export class PendingKeyRotation extends jspb.Message {
    getBlockHeight(): number;
    setBlockHeight(value: number): PendingKeyRotation;
    getNodeId(): string;
    setNodeId(value: string): PendingKeyRotation;
    getNewPubKey(): string;
    setNewPubKey(value: string): PendingKeyRotation;
    getNewPubKeyIndex(): number;
    setNewPubKeyIndex(value: number): PendingKeyRotation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PendingKeyRotation.AsObject;
    static toObject(includeInstance: boolean, msg: PendingKeyRotation): PendingKeyRotation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PendingKeyRotation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PendingKeyRotation;
    static deserializeBinaryFromReader(message: PendingKeyRotation, reader: jspb.BinaryReader): PendingKeyRotation;
}

export namespace PendingKeyRotation {
    export type AsObject = {
        blockHeight: number,
        nodeId: string,
        newPubKey: string,
        newPubKeyIndex: number,
    }
}

export class Topology extends jspb.Message {
    clearValidatorDataList(): void;
    getValidatorDataList(): Array<vega_events_v1_events_pb.ValidatorUpdate>;
    setValidatorDataList(value: Array<vega_events_v1_events_pb.ValidatorUpdate>): Topology;
    addValidatorData(value?: vega_events_v1_events_pb.ValidatorUpdate, index?: number): vega_events_v1_events_pb.ValidatorUpdate;
    clearChainKeysList(): void;
    getChainKeysList(): Array<string>;
    setChainKeysList(value: Array<string>): Topology;
    addChainKeys(value: string, index?: number): string;
    clearPendingPubKeyRotationsList(): void;
    getPendingPubKeyRotationsList(): Array<PendingKeyRotation>;
    setPendingPubKeyRotationsList(value: Array<PendingKeyRotation>): Topology;
    addPendingPubKeyRotations(value?: PendingKeyRotation, index?: number): PendingKeyRotation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Topology.AsObject;
    static toObject(includeInstance: boolean, msg: Topology): Topology.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Topology, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Topology;
    static deserializeBinaryFromReader(message: Topology, reader: jspb.BinaryReader): Topology;
}

export namespace Topology {
    export type AsObject = {
        validatorDataList: Array<vega_events_v1_events_pb.ValidatorUpdate.AsObject>,
        chainKeysList: Array<string>,
        pendingPubKeyRotationsList: Array<PendingKeyRotation.AsObject>,
    }
}

export class LiquidityParameters extends jspb.Message {
    getMaxFee(): string;
    setMaxFee(value: string): LiquidityParameters;
    getMaxShapeSize(): string;
    setMaxShapeSize(value: string): LiquidityParameters;
    getStakeToObligationFactor(): string;
    setStakeToObligationFactor(value: string): LiquidityParameters;
    getMarketId(): string;
    setMarketId(value: string): LiquidityParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiquidityParameters.AsObject;
    static toObject(includeInstance: boolean, msg: LiquidityParameters): LiquidityParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiquidityParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiquidityParameters;
    static deserializeBinaryFromReader(message: LiquidityParameters, reader: jspb.BinaryReader): LiquidityParameters;
}

export namespace LiquidityParameters {
    export type AsObject = {
        maxFee: string,
        maxShapeSize: string,
        stakeToObligationFactor: string,
        marketId: string,
    }
}

export class LiquidityPendingProvisions extends jspb.Message {
    clearPendingProvisionsList(): void;
    getPendingProvisionsList(): Array<string>;
    setPendingProvisionsList(value: Array<string>): LiquidityPendingProvisions;
    addPendingProvisions(value: string, index?: number): string;
    getMarketId(): string;
    setMarketId(value: string): LiquidityPendingProvisions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiquidityPendingProvisions.AsObject;
    static toObject(includeInstance: boolean, msg: LiquidityPendingProvisions): LiquidityPendingProvisions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiquidityPendingProvisions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiquidityPendingProvisions;
    static deserializeBinaryFromReader(message: LiquidityPendingProvisions, reader: jspb.BinaryReader): LiquidityPendingProvisions;
}

export namespace LiquidityPendingProvisions {
    export type AsObject = {
        pendingProvisionsList: Array<string>,
        marketId: string,
    }
}

export class LiquidityPartiesLiquidityOrders extends jspb.Message {
    clearOrdersList(): void;
    getOrdersList(): Array<vega_vega_pb.Order>;
    setOrdersList(value: Array<vega_vega_pb.Order>): LiquidityPartiesLiquidityOrders;
    addOrders(value?: vega_vega_pb.Order, index?: number): vega_vega_pb.Order;
    getMarketId(): string;
    setMarketId(value: string): LiquidityPartiesLiquidityOrders;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiquidityPartiesLiquidityOrders.AsObject;
    static toObject(includeInstance: boolean, msg: LiquidityPartiesLiquidityOrders): LiquidityPartiesLiquidityOrders.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiquidityPartiesLiquidityOrders, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiquidityPartiesLiquidityOrders;
    static deserializeBinaryFromReader(message: LiquidityPartiesLiquidityOrders, reader: jspb.BinaryReader): LiquidityPartiesLiquidityOrders;
}

export namespace LiquidityPartiesLiquidityOrders {
    export type AsObject = {
        ordersList: Array<vega_vega_pb.Order.AsObject>,
        marketId: string,
    }
}

export class LiquidityPartiesOrders extends jspb.Message {
    clearOrdersList(): void;
    getOrdersList(): Array<vega_vega_pb.Order>;
    setOrdersList(value: Array<vega_vega_pb.Order>): LiquidityPartiesOrders;
    addOrders(value?: vega_vega_pb.Order, index?: number): vega_vega_pb.Order;
    getMarketId(): string;
    setMarketId(value: string): LiquidityPartiesOrders;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiquidityPartiesOrders.AsObject;
    static toObject(includeInstance: boolean, msg: LiquidityPartiesOrders): LiquidityPartiesOrders.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiquidityPartiesOrders, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiquidityPartiesOrders;
    static deserializeBinaryFromReader(message: LiquidityPartiesOrders, reader: jspb.BinaryReader): LiquidityPartiesOrders;
}

export namespace LiquidityPartiesOrders {
    export type AsObject = {
        ordersList: Array<vega_vega_pb.Order.AsObject>,
        marketId: string,
    }
}

export class LiquidityProvisions extends jspb.Message {
    clearLiquidityProvisionsList(): void;
    getLiquidityProvisionsList(): Array<vega_vega_pb.LiquidityProvision>;
    setLiquidityProvisionsList(value: Array<vega_vega_pb.LiquidityProvision>): LiquidityProvisions;
    addLiquidityProvisions(value?: vega_vega_pb.LiquidityProvision, index?: number): vega_vega_pb.LiquidityProvision;
    getMarketId(): string;
    setMarketId(value: string): LiquidityProvisions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiquidityProvisions.AsObject;
    static toObject(includeInstance: boolean, msg: LiquidityProvisions): LiquidityProvisions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiquidityProvisions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiquidityProvisions;
    static deserializeBinaryFromReader(message: LiquidityProvisions, reader: jspb.BinaryReader): LiquidityProvisions;
}

export namespace LiquidityProvisions {
    export type AsObject = {
        liquidityProvisionsList: Array<vega_vega_pb.LiquidityProvision.AsObject>,
        marketId: string,
    }
}

export enum Format {
    FORMAT_UNSPECIFIED = 0,
    FORMAT_PROTO = 1,
    FORMAT_PROTO_COMPRESSED = 2,
    FORMAT_JSON = 3,
}
