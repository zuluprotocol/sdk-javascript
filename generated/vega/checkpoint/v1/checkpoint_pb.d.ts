// package: vega.checkpoint.v1
// file: vega/checkpoint/v1/checkpoint.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as vega_vega_pb from "../../../vega/vega_pb";
import * as vega_assets_pb from "../../../vega/assets_pb";
import * as vega_governance_pb from "../../../vega/governance_pb";

export class CheckpointState extends jspb.Message {
    getHash(): Uint8Array | string;
    getHash_asU8(): Uint8Array;
    getHash_asB64(): string;
    setHash(value: Uint8Array | string): CheckpointState;
    getState(): Uint8Array | string;
    getState_asU8(): Uint8Array;
    getState_asB64(): string;
    setState(value: Uint8Array | string): CheckpointState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckpointState.AsObject;
    static toObject(includeInstance: boolean, msg: CheckpointState): CheckpointState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckpointState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckpointState;
    static deserializeBinaryFromReader(message: CheckpointState, reader: jspb.BinaryReader): CheckpointState;
}

export namespace CheckpointState {
    export type AsObject = {
        hash: Uint8Array | string,
        state: Uint8Array | string,
    }
}

export class Checkpoint extends jspb.Message {
    getGovernance(): Uint8Array | string;
    getGovernance_asU8(): Uint8Array;
    getGovernance_asB64(): string;
    setGovernance(value: Uint8Array | string): Checkpoint;
    getAssets(): Uint8Array | string;
    getAssets_asU8(): Uint8Array;
    getAssets_asB64(): string;
    setAssets(value: Uint8Array | string): Checkpoint;
    getCollateral(): Uint8Array | string;
    getCollateral_asU8(): Uint8Array;
    getCollateral_asB64(): string;
    setCollateral(value: Uint8Array | string): Checkpoint;
    getNetworkParameters(): Uint8Array | string;
    getNetworkParameters_asU8(): Uint8Array;
    getNetworkParameters_asB64(): string;
    setNetworkParameters(value: Uint8Array | string): Checkpoint;
    getDelegation(): Uint8Array | string;
    getDelegation_asU8(): Uint8Array;
    getDelegation_asB64(): string;
    setDelegation(value: Uint8Array | string): Checkpoint;
    getEpoch(): Uint8Array | string;
    getEpoch_asU8(): Uint8Array;
    getEpoch_asB64(): string;
    setEpoch(value: Uint8Array | string): Checkpoint;
    getBlock(): Uint8Array | string;
    getBlock_asU8(): Uint8Array;
    getBlock_asB64(): string;
    setBlock(value: Uint8Array | string): Checkpoint;
    getRewards(): Uint8Array | string;
    getRewards_asU8(): Uint8Array;
    getRewards_asB64(): string;
    setRewards(value: Uint8Array | string): Checkpoint;
    getKeyRotations(): Uint8Array | string;
    getKeyRotations_asU8(): Uint8Array;
    getKeyRotations_asB64(): string;
    setKeyRotations(value: Uint8Array | string): Checkpoint;

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
        governance: Uint8Array | string,
        assets: Uint8Array | string,
        collateral: Uint8Array | string,
        networkParameters: Uint8Array | string,
        delegation: Uint8Array | string,
        epoch: Uint8Array | string,
        block: Uint8Array | string,
        rewards: Uint8Array | string,
        keyRotations: Uint8Array | string,
    }
}

export class AssetEntry extends jspb.Message {
    getId(): string;
    setId(value: string): AssetEntry;

    hasAssetDetails(): boolean;
    clearAssetDetails(): void;
    getAssetDetails(): vega_assets_pb.AssetDetails | undefined;
    setAssetDetails(value?: vega_assets_pb.AssetDetails): AssetEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetEntry.AsObject;
    static toObject(includeInstance: boolean, msg: AssetEntry): AssetEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetEntry;
    static deserializeBinaryFromReader(message: AssetEntry, reader: jspb.BinaryReader): AssetEntry;
}

export namespace AssetEntry {
    export type AsObject = {
        id: string,
        assetDetails?: vega_assets_pb.AssetDetails.AsObject,
    }
}

export class Assets extends jspb.Message {
    clearAssetsList(): void;
    getAssetsList(): Array<AssetEntry>;
    setAssetsList(value: Array<AssetEntry>): Assets;
    addAssets(value?: AssetEntry, index?: number): AssetEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Assets.AsObject;
    static toObject(includeInstance: boolean, msg: Assets): Assets.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Assets, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Assets;
    static deserializeBinaryFromReader(message: Assets, reader: jspb.BinaryReader): Assets;
}

export namespace Assets {
    export type AsObject = {
        assetsList: Array<AssetEntry.AsObject>,
    }
}

export class AssetBalance extends jspb.Message {
    getParty(): string;
    setParty(value: string): AssetBalance;
    getAsset(): string;
    setAsset(value: string): AssetBalance;
    getBalance(): string;
    setBalance(value: string): AssetBalance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetBalance.AsObject;
    static toObject(includeInstance: boolean, msg: AssetBalance): AssetBalance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetBalance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetBalance;
    static deserializeBinaryFromReader(message: AssetBalance, reader: jspb.BinaryReader): AssetBalance;
}

export namespace AssetBalance {
    export type AsObject = {
        party: string,
        asset: string,
        balance: string,
    }
}

export class Collateral extends jspb.Message {
    clearBalancesList(): void;
    getBalancesList(): Array<AssetBalance>;
    setBalancesList(value: Array<AssetBalance>): Collateral;
    addBalances(value?: AssetBalance, index?: number): AssetBalance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Collateral.AsObject;
    static toObject(includeInstance: boolean, msg: Collateral): Collateral.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Collateral, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Collateral;
    static deserializeBinaryFromReader(message: Collateral, reader: jspb.BinaryReader): Collateral;
}

export namespace Collateral {
    export type AsObject = {
        balancesList: Array<AssetBalance.AsObject>,
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

export class Proposals extends jspb.Message {
    clearProposalsList(): void;
    getProposalsList(): Array<vega_governance_pb.Proposal>;
    setProposalsList(value: Array<vega_governance_pb.Proposal>): Proposals;
    addProposals(value?: vega_governance_pb.Proposal, index?: number): vega_governance_pb.Proposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Proposals.AsObject;
    static toObject(includeInstance: boolean, msg: Proposals): Proposals.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Proposals, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Proposals;
    static deserializeBinaryFromReader(message: Proposals, reader: jspb.BinaryReader): Proposals;
}

export namespace Proposals {
    export type AsObject = {
        proposalsList: Array<vega_governance_pb.Proposal.AsObject>,
    }
}

export class DelegateEntry extends jspb.Message {
    getParty(): string;
    setParty(value: string): DelegateEntry;
    getNode(): string;
    setNode(value: string): DelegateEntry;
    getAmount(): string;
    setAmount(value: string): DelegateEntry;
    getUndelegate(): boolean;
    setUndelegate(value: boolean): DelegateEntry;
    getEpochSeq(): number;
    setEpochSeq(value: number): DelegateEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DelegateEntry.AsObject;
    static toObject(includeInstance: boolean, msg: DelegateEntry): DelegateEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DelegateEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DelegateEntry;
    static deserializeBinaryFromReader(message: DelegateEntry, reader: jspb.BinaryReader): DelegateEntry;
}

export namespace DelegateEntry {
    export type AsObject = {
        party: string,
        node: string,
        amount: string,
        undelegate: boolean,
        epochSeq: number,
    }
}

export class Delegate extends jspb.Message {
    clearActiveList(): void;
    getActiveList(): Array<DelegateEntry>;
    setActiveList(value: Array<DelegateEntry>): Delegate;
    addActive(value?: DelegateEntry, index?: number): DelegateEntry;
    clearPendingList(): void;
    getPendingList(): Array<DelegateEntry>;
    setPendingList(value: Array<DelegateEntry>): Delegate;
    addPending(value?: DelegateEntry, index?: number): DelegateEntry;
    clearAutoDelegationList(): void;
    getAutoDelegationList(): Array<string>;
    setAutoDelegationList(value: Array<string>): Delegate;
    addAutoDelegation(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Delegate.AsObject;
    static toObject(includeInstance: boolean, msg: Delegate): Delegate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Delegate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Delegate;
    static deserializeBinaryFromReader(message: Delegate, reader: jspb.BinaryReader): Delegate;
}

export namespace Delegate {
    export type AsObject = {
        activeList: Array<DelegateEntry.AsObject>,
        pendingList: Array<DelegateEntry.AsObject>,
        autoDelegationList: Array<string>,
    }
}

export class Block extends jspb.Message {
    getHeight(): number;
    setHeight(value: number): Block;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Block.AsObject;
    static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Block;
    static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
    export type AsObject = {
        height: number,
    }
}

export class Rewards extends jspb.Message {
    clearRewardsList(): void;
    getRewardsList(): Array<RewardPayout>;
    setRewardsList(value: Array<RewardPayout>): Rewards;
    addRewards(value?: RewardPayout, index?: number): RewardPayout;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Rewards.AsObject;
    static toObject(includeInstance: boolean, msg: Rewards): Rewards.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Rewards, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Rewards;
    static deserializeBinaryFromReader(message: Rewards, reader: jspb.BinaryReader): Rewards;
}

export namespace Rewards {
    export type AsObject = {
        rewardsList: Array<RewardPayout.AsObject>,
    }
}

export class RewardPayout extends jspb.Message {
    getPayoutTime(): number;
    setPayoutTime(value: number): RewardPayout;
    clearRewardsPayoutList(): void;
    getRewardsPayoutList(): Array<PendingRewardPayout>;
    setRewardsPayoutList(value: Array<PendingRewardPayout>): RewardPayout;
    addRewardsPayout(value?: PendingRewardPayout, index?: number): PendingRewardPayout;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RewardPayout.AsObject;
    static toObject(includeInstance: boolean, msg: RewardPayout): RewardPayout.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RewardPayout, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RewardPayout;
    static deserializeBinaryFromReader(message: RewardPayout, reader: jspb.BinaryReader): RewardPayout;
}

export namespace RewardPayout {
    export type AsObject = {
        payoutTime: number,
        rewardsPayoutList: Array<PendingRewardPayout.AsObject>,
    }
}

export class PendingRewardPayout extends jspb.Message {
    getFromAccount(): string;
    setFromAccount(value: string): PendingRewardPayout;
    getAsset(): string;
    setAsset(value: string): PendingRewardPayout;
    clearPartyAmountList(): void;
    getPartyAmountList(): Array<PartyAmount>;
    setPartyAmountList(value: Array<PartyAmount>): PendingRewardPayout;
    addPartyAmount(value?: PartyAmount, index?: number): PartyAmount;
    getTotalReward(): string;
    setTotalReward(value: string): PendingRewardPayout;
    getEpochSeq(): string;
    setEpochSeq(value: string): PendingRewardPayout;
    getTimestamp(): number;
    setTimestamp(value: number): PendingRewardPayout;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PendingRewardPayout.AsObject;
    static toObject(includeInstance: boolean, msg: PendingRewardPayout): PendingRewardPayout.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PendingRewardPayout, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PendingRewardPayout;
    static deserializeBinaryFromReader(message: PendingRewardPayout, reader: jspb.BinaryReader): PendingRewardPayout;
}

export namespace PendingRewardPayout {
    export type AsObject = {
        fromAccount: string,
        asset: string,
        partyAmountList: Array<PartyAmount.AsObject>,
        totalReward: string,
        epochSeq: string,
        timestamp: number,
    }
}

export class PartyAmount extends jspb.Message {
    getParty(): string;
    setParty(value: string): PartyAmount;
    getAmount(): string;
    setAmount(value: string): PartyAmount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PartyAmount.AsObject;
    static toObject(includeInstance: boolean, msg: PartyAmount): PartyAmount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PartyAmount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PartyAmount;
    static deserializeBinaryFromReader(message: PartyAmount, reader: jspb.BinaryReader): PartyAmount;
}

export namespace PartyAmount {
    export type AsObject = {
        party: string,
        amount: string,
    }
}

export class PendingKeyRotation extends jspb.Message {
    getRelativeTargetBlockHeight(): number;
    setRelativeTargetBlockHeight(value: number): PendingKeyRotation;
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
        relativeTargetBlockHeight: number,
        nodeId: string,
        newPubKey: string,
        newPubKeyIndex: number,
    }
}

export class KeyRotations extends jspb.Message {
    clearPendingKeyRotationsList(): void;
    getPendingKeyRotationsList(): Array<PendingKeyRotation>;
    setPendingKeyRotationsList(value: Array<PendingKeyRotation>): KeyRotations;
    addPendingKeyRotations(value?: PendingKeyRotation, index?: number): PendingKeyRotation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyRotations.AsObject;
    static toObject(includeInstance: boolean, msg: KeyRotations): KeyRotations.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyRotations, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyRotations;
    static deserializeBinaryFromReader(message: KeyRotations, reader: jspb.BinaryReader): KeyRotations;
}

export namespace KeyRotations {
    export type AsObject = {
        pendingKeyRotationsList: Array<PendingKeyRotation.AsObject>,
    }
}
