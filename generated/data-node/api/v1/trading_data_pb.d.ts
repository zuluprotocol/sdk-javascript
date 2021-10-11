// package: datanode.api.v1
// file: data-node/api/v1/trading_data.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as vega_vega_pb from "../../../vega/vega_pb";
import * as vega_markets_pb from "../../../vega/markets_pb";
import * as vega_governance_pb from "../../../vega/governance_pb";
import * as vega_assets_pb from "../../../vega/assets_pb";
import * as vega_events_v1_events_pb from "../../../vega/events/v1/events_pb";
import * as vega_oracles_v1_spec_pb from "../../../vega/oracles/v1/spec_pb";
import * as vega_oracles_v1_data_pb from "../../../vega/oracles/v1/data_pb";
import * as vega_commands_v1_commands_pb from "../../../vega/commands/v1/commands_pb";
import * as vega_commands_v1_transaction_pb from "../../../vega/commands/v1/transaction_pb";
import * as vega_commands_v1_validator_commands_pb from "../../../vega/commands/v1/validator_commands_pb";
import * as github_com_mwitkow_go_proto_validators_validator_pb from "../../../github.com/mwitkow/go-proto-validators/validator_pb";

export class DelegationsRequest extends jspb.Message {
    getParty(): string;
    setParty(value: string): DelegationsRequest;
    getNodeId(): string;
    setNodeId(value: string): DelegationsRequest;
    getEpochSeq(): string;
    setEpochSeq(value: string): DelegationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DelegationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DelegationsRequest): DelegationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DelegationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DelegationsRequest;
    static deserializeBinaryFromReader(message: DelegationsRequest, reader: jspb.BinaryReader): DelegationsRequest;
}

export namespace DelegationsRequest {
    export type AsObject = {
        party: string,
        nodeId: string,
        epochSeq: string,
    }
}

export class DelegationsResponse extends jspb.Message {
    clearDelegationsList(): void;
    getDelegationsList(): Array<vega_vega_pb.Delegation>;
    setDelegationsList(value: Array<vega_vega_pb.Delegation>): DelegationsResponse;
    addDelegations(value?: vega_vega_pb.Delegation, index?: number): vega_vega_pb.Delegation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DelegationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DelegationsResponse): DelegationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DelegationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DelegationsResponse;
    static deserializeBinaryFromReader(message: DelegationsResponse, reader: jspb.BinaryReader): DelegationsResponse;
}

export namespace DelegationsResponse {
    export type AsObject = {
        delegationsList: Array<vega_vega_pb.Delegation.AsObject>,
    }
}

export class PartyStakeRequest extends jspb.Message {
    getParty(): string;
    setParty(value: string): PartyStakeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PartyStakeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PartyStakeRequest): PartyStakeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PartyStakeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PartyStakeRequest;
    static deserializeBinaryFromReader(message: PartyStakeRequest, reader: jspb.BinaryReader): PartyStakeRequest;
}

export namespace PartyStakeRequest {
    export type AsObject = {
        party: string,
    }
}

export class PartyStakeResponse extends jspb.Message {
    getCurrentStakeAvailable(): string;
    setCurrentStakeAvailable(value: string): PartyStakeResponse;
    clearStakeLinkingsList(): void;
    getStakeLinkingsList(): Array<vega_events_v1_events_pb.StakeLinking>;
    setStakeLinkingsList(value: Array<vega_events_v1_events_pb.StakeLinking>): PartyStakeResponse;
    addStakeLinkings(value?: vega_events_v1_events_pb.StakeLinking, index?: number): vega_events_v1_events_pb.StakeLinking;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PartyStakeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PartyStakeResponse): PartyStakeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PartyStakeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PartyStakeResponse;
    static deserializeBinaryFromReader(message: PartyStakeResponse, reader: jspb.BinaryReader): PartyStakeResponse;
}

export namespace PartyStakeResponse {
    export type AsObject = {
        currentStakeAvailable: string,
        stakeLinkingsList: Array<vega_events_v1_events_pb.StakeLinking.AsObject>,
    }
}

export class GetNodeDataRequest extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNodeDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetNodeDataRequest): GetNodeDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNodeDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNodeDataRequest;
    static deserializeBinaryFromReader(message: GetNodeDataRequest, reader: jspb.BinaryReader): GetNodeDataRequest;
}

export namespace GetNodeDataRequest {
    export type AsObject = {
    }
}

export class GetNodeDataResponse extends jspb.Message {

    hasNodeData(): boolean;
    clearNodeData(): void;
    getNodeData(): vega_vega_pb.NodeData | undefined;
    setNodeData(value?: vega_vega_pb.NodeData): GetNodeDataResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNodeDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetNodeDataResponse): GetNodeDataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNodeDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNodeDataResponse;
    static deserializeBinaryFromReader(message: GetNodeDataResponse, reader: jspb.BinaryReader): GetNodeDataResponse;
}

export namespace GetNodeDataResponse {
    export type AsObject = {
        nodeData?: vega_vega_pb.NodeData.AsObject,
    }
}

export class GetNodesRequest extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNodesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetNodesRequest): GetNodesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNodesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNodesRequest;
    static deserializeBinaryFromReader(message: GetNodesRequest, reader: jspb.BinaryReader): GetNodesRequest;
}

export namespace GetNodesRequest {
    export type AsObject = {
    }
}

export class GetNodesResponse extends jspb.Message {
    clearNodesList(): void;
    getNodesList(): Array<vega_vega_pb.Node>;
    setNodesList(value: Array<vega_vega_pb.Node>): GetNodesResponse;
    addNodes(value?: vega_vega_pb.Node, index?: number): vega_vega_pb.Node;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNodesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetNodesResponse): GetNodesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNodesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNodesResponse;
    static deserializeBinaryFromReader(message: GetNodesResponse, reader: jspb.BinaryReader): GetNodesResponse;
}

export namespace GetNodesResponse {
    export type AsObject = {
        nodesList: Array<vega_vega_pb.Node.AsObject>,
    }
}

export class GetNodeByIDRequest extends jspb.Message {
    getId(): string;
    setId(value: string): GetNodeByIDRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNodeByIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetNodeByIDRequest): GetNodeByIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNodeByIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNodeByIDRequest;
    static deserializeBinaryFromReader(message: GetNodeByIDRequest, reader: jspb.BinaryReader): GetNodeByIDRequest;
}

export namespace GetNodeByIDRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetNodeByIDResponse extends jspb.Message {

    hasNode(): boolean;
    clearNode(): void;
    getNode(): vega_vega_pb.Node | undefined;
    setNode(value?: vega_vega_pb.Node): GetNodeByIDResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNodeByIDResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetNodeByIDResponse): GetNodeByIDResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNodeByIDResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNodeByIDResponse;
    static deserializeBinaryFromReader(message: GetNodeByIDResponse, reader: jspb.BinaryReader): GetNodeByIDResponse;
}

export namespace GetNodeByIDResponse {
    export type AsObject = {
        node?: vega_vega_pb.Node.AsObject,
    }
}

export class GetEpochRequest extends jspb.Message {
    getId(): number;
    setId(value: number): GetEpochRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEpochRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetEpochRequest): GetEpochRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEpochRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEpochRequest;
    static deserializeBinaryFromReader(message: GetEpochRequest, reader: jspb.BinaryReader): GetEpochRequest;
}

export namespace GetEpochRequest {
    export type AsObject = {
        id: number,
    }
}

export class GetEpochResponse extends jspb.Message {

    hasEpoch(): boolean;
    clearEpoch(): void;
    getEpoch(): vega_vega_pb.Epoch | undefined;
    setEpoch(value?: vega_vega_pb.Epoch): GetEpochResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEpochResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetEpochResponse): GetEpochResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEpochResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEpochResponse;
    static deserializeBinaryFromReader(message: GetEpochResponse, reader: jspb.BinaryReader): GetEpochResponse;
}

export namespace GetEpochResponse {
    export type AsObject = {
        epoch?: vega_vega_pb.Epoch.AsObject,
    }
}

export class AssetsRequest extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AssetsRequest): AssetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetsRequest;
    static deserializeBinaryFromReader(message: AssetsRequest, reader: jspb.BinaryReader): AssetsRequest;
}

export namespace AssetsRequest {
    export type AsObject = {
    }
}

export class AssetsResponse extends jspb.Message {
    clearAssetsList(): void;
    getAssetsList(): Array<vega_assets_pb.Asset>;
    setAssetsList(value: Array<vega_assets_pb.Asset>): AssetsResponse;
    addAssets(value?: vega_assets_pb.Asset, index?: number): vega_assets_pb.Asset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AssetsResponse): AssetsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetsResponse;
    static deserializeBinaryFromReader(message: AssetsResponse, reader: jspb.BinaryReader): AssetsResponse;
}

export namespace AssetsResponse {
    export type AsObject = {
        assetsList: Array<vega_assets_pb.Asset.AsObject>,
    }
}

export class AssetByIDRequest extends jspb.Message {
    getId(): string;
    setId(value: string): AssetByIDRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetByIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AssetByIDRequest): AssetByIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetByIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetByIDRequest;
    static deserializeBinaryFromReader(message: AssetByIDRequest, reader: jspb.BinaryReader): AssetByIDRequest;
}

export namespace AssetByIDRequest {
    export type AsObject = {
        id: string,
    }
}

export class AssetByIDResponse extends jspb.Message {

    hasAsset(): boolean;
    clearAsset(): void;
    getAsset(): vega_assets_pb.Asset | undefined;
    setAsset(value?: vega_assets_pb.Asset): AssetByIDResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetByIDResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AssetByIDResponse): AssetByIDResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetByIDResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetByIDResponse;
    static deserializeBinaryFromReader(message: AssetByIDResponse, reader: jspb.BinaryReader): AssetByIDResponse;
}

export namespace AssetByIDResponse {
    export type AsObject = {
        asset?: vega_assets_pb.Asset.AsObject,
    }
}

export class GetNodeSignaturesAggregateRequest extends jspb.Message {
    getId(): string;
    setId(value: string): GetNodeSignaturesAggregateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNodeSignaturesAggregateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetNodeSignaturesAggregateRequest): GetNodeSignaturesAggregateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNodeSignaturesAggregateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNodeSignaturesAggregateRequest;
    static deserializeBinaryFromReader(message: GetNodeSignaturesAggregateRequest, reader: jspb.BinaryReader): GetNodeSignaturesAggregateRequest;
}

export namespace GetNodeSignaturesAggregateRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetNodeSignaturesAggregateResponse extends jspb.Message {
    clearSignaturesList(): void;
    getSignaturesList(): Array<vega_commands_v1_validator_commands_pb.NodeSignature>;
    setSignaturesList(value: Array<vega_commands_v1_validator_commands_pb.NodeSignature>): GetNodeSignaturesAggregateResponse;
    addSignatures(value?: vega_commands_v1_validator_commands_pb.NodeSignature, index?: number): vega_commands_v1_validator_commands_pb.NodeSignature;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNodeSignaturesAggregateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetNodeSignaturesAggregateResponse): GetNodeSignaturesAggregateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNodeSignaturesAggregateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNodeSignaturesAggregateResponse;
    static deserializeBinaryFromReader(message: GetNodeSignaturesAggregateResponse, reader: jspb.BinaryReader): GetNodeSignaturesAggregateResponse;
}

export namespace GetNodeSignaturesAggregateResponse {
    export type AsObject = {
        signaturesList: Array<vega_commands_v1_validator_commands_pb.NodeSignature.AsObject>,
    }
}

export class OptionalProposalState extends jspb.Message {
    getValue(): vega_governance_pb.Proposal.State;
    setValue(value: vega_governance_pb.Proposal.State): OptionalProposalState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OptionalProposalState.AsObject;
    static toObject(includeInstance: boolean, msg: OptionalProposalState): OptionalProposalState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OptionalProposalState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OptionalProposalState;
    static deserializeBinaryFromReader(message: OptionalProposalState, reader: jspb.BinaryReader): OptionalProposalState;
}

export namespace OptionalProposalState {
    export type AsObject = {
        value: vega_governance_pb.Proposal.State,
    }
}

export class GetProposalsRequest extends jspb.Message {

    hasSelectInState(): boolean;
    clearSelectInState(): void;
    getSelectInState(): OptionalProposalState | undefined;
    setSelectInState(value?: OptionalProposalState): GetProposalsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProposalsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetProposalsRequest): GetProposalsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProposalsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProposalsRequest;
    static deserializeBinaryFromReader(message: GetProposalsRequest, reader: jspb.BinaryReader): GetProposalsRequest;
}

export namespace GetProposalsRequest {
    export type AsObject = {
        selectInState?: OptionalProposalState.AsObject,
    }
}

export class GetProposalsResponse extends jspb.Message {
    clearDataList(): void;
    getDataList(): Array<vega_governance_pb.GovernanceData>;
    setDataList(value: Array<vega_governance_pb.GovernanceData>): GetProposalsResponse;
    addData(value?: vega_governance_pb.GovernanceData, index?: number): vega_governance_pb.GovernanceData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProposalsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetProposalsResponse): GetProposalsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProposalsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProposalsResponse;
    static deserializeBinaryFromReader(message: GetProposalsResponse, reader: jspb.BinaryReader): GetProposalsResponse;
}

export namespace GetProposalsResponse {
    export type AsObject = {
        dataList: Array<vega_governance_pb.GovernanceData.AsObject>,
    }
}

export class GetProposalsByPartyRequest extends jspb.Message {
    getPartyId(): string;
    setPartyId(value: string): GetProposalsByPartyRequest;

    hasSelectInState(): boolean;
    clearSelectInState(): void;
    getSelectInState(): OptionalProposalState | undefined;
    setSelectInState(value?: OptionalProposalState): GetProposalsByPartyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProposalsByPartyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetProposalsByPartyRequest): GetProposalsByPartyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProposalsByPartyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProposalsByPartyRequest;
    static deserializeBinaryFromReader(message: GetProposalsByPartyRequest, reader: jspb.BinaryReader): GetProposalsByPartyRequest;
}

export namespace GetProposalsByPartyRequest {
    export type AsObject = {
        partyId: string,
        selectInState?: OptionalProposalState.AsObject,
    }
}

export class GetProposalsByPartyResponse extends jspb.Message {
    clearDataList(): void;
    getDataList(): Array<vega_governance_pb.GovernanceData>;
    setDataList(value: Array<vega_governance_pb.GovernanceData>): GetProposalsByPartyResponse;
    addData(value?: vega_governance_pb.GovernanceData, index?: number): vega_governance_pb.GovernanceData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProposalsByPartyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetProposalsByPartyResponse): GetProposalsByPartyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProposalsByPartyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProposalsByPartyResponse;
    static deserializeBinaryFromReader(message: GetProposalsByPartyResponse, reader: jspb.BinaryReader): GetProposalsByPartyResponse;
}

export namespace GetProposalsByPartyResponse {
    export type AsObject = {
        dataList: Array<vega_governance_pb.GovernanceData.AsObject>,
    }
}

export class GetVotesByPartyRequest extends jspb.Message {
    getPartyId(): string;
    setPartyId(value: string): GetVotesByPartyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVotesByPartyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetVotesByPartyRequest): GetVotesByPartyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVotesByPartyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVotesByPartyRequest;
    static deserializeBinaryFromReader(message: GetVotesByPartyRequest, reader: jspb.BinaryReader): GetVotesByPartyRequest;
}

export namespace GetVotesByPartyRequest {
    export type AsObject = {
        partyId: string,
    }
}

export class GetVotesByPartyResponse extends jspb.Message {
    clearVotesList(): void;
    getVotesList(): Array<vega_governance_pb.Vote>;
    setVotesList(value: Array<vega_governance_pb.Vote>): GetVotesByPartyResponse;
    addVotes(value?: vega_governance_pb.Vote, index?: number): vega_governance_pb.Vote;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVotesByPartyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetVotesByPartyResponse): GetVotesByPartyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVotesByPartyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVotesByPartyResponse;
    static deserializeBinaryFromReader(message: GetVotesByPartyResponse, reader: jspb.BinaryReader): GetVotesByPartyResponse;
}

export namespace GetVotesByPartyResponse {
    export type AsObject = {
        votesList: Array<vega_governance_pb.Vote.AsObject>,
    }
}

export class GetNewMarketProposalsRequest extends jspb.Message {

    hasSelectInState(): boolean;
    clearSelectInState(): void;
    getSelectInState(): OptionalProposalState | undefined;
    setSelectInState(value?: OptionalProposalState): GetNewMarketProposalsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNewMarketProposalsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetNewMarketProposalsRequest): GetNewMarketProposalsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNewMarketProposalsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNewMarketProposalsRequest;
    static deserializeBinaryFromReader(message: GetNewMarketProposalsRequest, reader: jspb.BinaryReader): GetNewMarketProposalsRequest;
}

export namespace GetNewMarketProposalsRequest {
    export type AsObject = {
        selectInState?: OptionalProposalState.AsObject,
    }
}

export class GetNewMarketProposalsResponse extends jspb.Message {
    clearDataList(): void;
    getDataList(): Array<vega_governance_pb.GovernanceData>;
    setDataList(value: Array<vega_governance_pb.GovernanceData>): GetNewMarketProposalsResponse;
    addData(value?: vega_governance_pb.GovernanceData, index?: number): vega_governance_pb.GovernanceData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNewMarketProposalsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetNewMarketProposalsResponse): GetNewMarketProposalsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNewMarketProposalsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNewMarketProposalsResponse;
    static deserializeBinaryFromReader(message: GetNewMarketProposalsResponse, reader: jspb.BinaryReader): GetNewMarketProposalsResponse;
}

export namespace GetNewMarketProposalsResponse {
    export type AsObject = {
        dataList: Array<vega_governance_pb.GovernanceData.AsObject>,
    }
}

export class GetUpdateMarketProposalsRequest extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): GetUpdateMarketProposalsRequest;

    hasSelectInState(): boolean;
    clearSelectInState(): void;
    getSelectInState(): OptionalProposalState | undefined;
    setSelectInState(value?: OptionalProposalState): GetUpdateMarketProposalsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUpdateMarketProposalsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUpdateMarketProposalsRequest): GetUpdateMarketProposalsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUpdateMarketProposalsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUpdateMarketProposalsRequest;
    static deserializeBinaryFromReader(message: GetUpdateMarketProposalsRequest, reader: jspb.BinaryReader): GetUpdateMarketProposalsRequest;
}

export namespace GetUpdateMarketProposalsRequest {
    export type AsObject = {
        marketId: string,
        selectInState?: OptionalProposalState.AsObject,
    }
}

export class GetUpdateMarketProposalsResponse extends jspb.Message {
    clearDataList(): void;
    getDataList(): Array<vega_governance_pb.GovernanceData>;
    setDataList(value: Array<vega_governance_pb.GovernanceData>): GetUpdateMarketProposalsResponse;
    addData(value?: vega_governance_pb.GovernanceData, index?: number): vega_governance_pb.GovernanceData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUpdateMarketProposalsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUpdateMarketProposalsResponse): GetUpdateMarketProposalsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUpdateMarketProposalsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUpdateMarketProposalsResponse;
    static deserializeBinaryFromReader(message: GetUpdateMarketProposalsResponse, reader: jspb.BinaryReader): GetUpdateMarketProposalsResponse;
}

export namespace GetUpdateMarketProposalsResponse {
    export type AsObject = {
        dataList: Array<vega_governance_pb.GovernanceData.AsObject>,
    }
}

export class GetNetworkParametersProposalsRequest extends jspb.Message {

    hasSelectInState(): boolean;
    clearSelectInState(): void;
    getSelectInState(): OptionalProposalState | undefined;
    setSelectInState(value?: OptionalProposalState): GetNetworkParametersProposalsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNetworkParametersProposalsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetNetworkParametersProposalsRequest): GetNetworkParametersProposalsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNetworkParametersProposalsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNetworkParametersProposalsRequest;
    static deserializeBinaryFromReader(message: GetNetworkParametersProposalsRequest, reader: jspb.BinaryReader): GetNetworkParametersProposalsRequest;
}

export namespace GetNetworkParametersProposalsRequest {
    export type AsObject = {
        selectInState?: OptionalProposalState.AsObject,
    }
}

export class GetNetworkParametersProposalsResponse extends jspb.Message {
    clearDataList(): void;
    getDataList(): Array<vega_governance_pb.GovernanceData>;
    setDataList(value: Array<vega_governance_pb.GovernanceData>): GetNetworkParametersProposalsResponse;
    addData(value?: vega_governance_pb.GovernanceData, index?: number): vega_governance_pb.GovernanceData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNetworkParametersProposalsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetNetworkParametersProposalsResponse): GetNetworkParametersProposalsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNetworkParametersProposalsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNetworkParametersProposalsResponse;
    static deserializeBinaryFromReader(message: GetNetworkParametersProposalsResponse, reader: jspb.BinaryReader): GetNetworkParametersProposalsResponse;
}

export namespace GetNetworkParametersProposalsResponse {
    export type AsObject = {
        dataList: Array<vega_governance_pb.GovernanceData.AsObject>,
    }
}

export class GetNewAssetProposalsRequest extends jspb.Message {

    hasSelectInState(): boolean;
    clearSelectInState(): void;
    getSelectInState(): OptionalProposalState | undefined;
    setSelectInState(value?: OptionalProposalState): GetNewAssetProposalsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNewAssetProposalsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetNewAssetProposalsRequest): GetNewAssetProposalsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNewAssetProposalsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNewAssetProposalsRequest;
    static deserializeBinaryFromReader(message: GetNewAssetProposalsRequest, reader: jspb.BinaryReader): GetNewAssetProposalsRequest;
}

export namespace GetNewAssetProposalsRequest {
    export type AsObject = {
        selectInState?: OptionalProposalState.AsObject,
    }
}

export class GetNewAssetProposalsResponse extends jspb.Message {
    clearDataList(): void;
    getDataList(): Array<vega_governance_pb.GovernanceData>;
    setDataList(value: Array<vega_governance_pb.GovernanceData>): GetNewAssetProposalsResponse;
    addData(value?: vega_governance_pb.GovernanceData, index?: number): vega_governance_pb.GovernanceData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNewAssetProposalsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetNewAssetProposalsResponse): GetNewAssetProposalsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNewAssetProposalsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNewAssetProposalsResponse;
    static deserializeBinaryFromReader(message: GetNewAssetProposalsResponse, reader: jspb.BinaryReader): GetNewAssetProposalsResponse;
}

export namespace GetNewAssetProposalsResponse {
    export type AsObject = {
        dataList: Array<vega_governance_pb.GovernanceData.AsObject>,
    }
}

export class GetProposalByIDRequest extends jspb.Message {
    getProposalId(): string;
    setProposalId(value: string): GetProposalByIDRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProposalByIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetProposalByIDRequest): GetProposalByIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProposalByIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProposalByIDRequest;
    static deserializeBinaryFromReader(message: GetProposalByIDRequest, reader: jspb.BinaryReader): GetProposalByIDRequest;
}

export namespace GetProposalByIDRequest {
    export type AsObject = {
        proposalId: string,
    }
}

export class GetProposalByIDResponse extends jspb.Message {

    hasData(): boolean;
    clearData(): void;
    getData(): vega_governance_pb.GovernanceData | undefined;
    setData(value?: vega_governance_pb.GovernanceData): GetProposalByIDResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProposalByIDResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetProposalByIDResponse): GetProposalByIDResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProposalByIDResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProposalByIDResponse;
    static deserializeBinaryFromReader(message: GetProposalByIDResponse, reader: jspb.BinaryReader): GetProposalByIDResponse;
}

export namespace GetProposalByIDResponse {
    export type AsObject = {
        data?: vega_governance_pb.GovernanceData.AsObject,
    }
}

export class GetProposalByReferenceRequest extends jspb.Message {
    getReference(): string;
    setReference(value: string): GetProposalByReferenceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProposalByReferenceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetProposalByReferenceRequest): GetProposalByReferenceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProposalByReferenceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProposalByReferenceRequest;
    static deserializeBinaryFromReader(message: GetProposalByReferenceRequest, reader: jspb.BinaryReader): GetProposalByReferenceRequest;
}

export namespace GetProposalByReferenceRequest {
    export type AsObject = {
        reference: string,
    }
}

export class GetProposalByReferenceResponse extends jspb.Message {

    hasData(): boolean;
    clearData(): void;
    getData(): vega_governance_pb.GovernanceData | undefined;
    setData(value?: vega_governance_pb.GovernanceData): GetProposalByReferenceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProposalByReferenceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetProposalByReferenceResponse): GetProposalByReferenceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProposalByReferenceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProposalByReferenceResponse;
    static deserializeBinaryFromReader(message: GetProposalByReferenceResponse, reader: jspb.BinaryReader): GetProposalByReferenceResponse;
}

export namespace GetProposalByReferenceResponse {
    export type AsObject = {
        data?: vega_governance_pb.GovernanceData.AsObject,
    }
}

export class ObserveGovernanceRequest extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ObserveGovernanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ObserveGovernanceRequest): ObserveGovernanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ObserveGovernanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ObserveGovernanceRequest;
    static deserializeBinaryFromReader(message: ObserveGovernanceRequest, reader: jspb.BinaryReader): ObserveGovernanceRequest;
}

export namespace ObserveGovernanceRequest {
    export type AsObject = {
    }
}

export class ObserveGovernanceResponse extends jspb.Message {

    hasData(): boolean;
    clearData(): void;
    getData(): vega_governance_pb.GovernanceData | undefined;
    setData(value?: vega_governance_pb.GovernanceData): ObserveGovernanceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ObserveGovernanceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ObserveGovernanceResponse): ObserveGovernanceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ObserveGovernanceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ObserveGovernanceResponse;
    static deserializeBinaryFromReader(message: ObserveGovernanceResponse, reader: jspb.BinaryReader): ObserveGovernanceResponse;
}

export namespace ObserveGovernanceResponse {
    export type AsObject = {
        data?: vega_governance_pb.GovernanceData.AsObject,
    }
}

export class ObservePartyProposalsRequest extends jspb.Message {
    getPartyId(): string;
    setPartyId(value: string): ObservePartyProposalsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ObservePartyProposalsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ObservePartyProposalsRequest): ObservePartyProposalsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ObservePartyProposalsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ObservePartyProposalsRequest;
    static deserializeBinaryFromReader(message: ObservePartyProposalsRequest, reader: jspb.BinaryReader): ObservePartyProposalsRequest;
}

export namespace ObservePartyProposalsRequest {
    export type AsObject = {
        partyId: string,
    }
}

export class ObservePartyProposalsResponse extends jspb.Message {

    hasData(): boolean;
    clearData(): void;
    getData(): vega_governance_pb.GovernanceData | undefined;
    setData(value?: vega_governance_pb.GovernanceData): ObservePartyProposalsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ObservePartyProposalsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ObservePartyProposalsResponse): ObservePartyProposalsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ObservePartyProposalsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ObservePartyProposalsResponse;
    static deserializeBinaryFromReader(message: ObservePartyProposalsResponse, reader: jspb.BinaryReader): ObservePartyProposalsResponse;
}

export namespace ObservePartyProposalsResponse {
    export type AsObject = {
        data?: vega_governance_pb.GovernanceData.AsObject,
    }
}

export class ObserveProposalVotesRequest extends jspb.Message {
    getProposalId(): string;
    setProposalId(value: string): ObserveProposalVotesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ObserveProposalVotesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ObserveProposalVotesRequest): ObserveProposalVotesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ObserveProposalVotesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ObserveProposalVotesRequest;
    static deserializeBinaryFromReader(message: ObserveProposalVotesRequest, reader: jspb.BinaryReader): ObserveProposalVotesRequest;
}

export namespace ObserveProposalVotesRequest {
    export type AsObject = {
        proposalId: string,
    }
}

export class ObserveProposalVotesResponse extends jspb.Message {

    hasVote(): boolean;
    clearVote(): void;
    getVote(): vega_governance_pb.Vote | undefined;
    setVote(value?: vega_governance_pb.Vote): ObserveProposalVotesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ObserveProposalVotesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ObserveProposalVotesResponse): ObserveProposalVotesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ObserveProposalVotesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ObserveProposalVotesResponse;
    static deserializeBinaryFromReader(message: ObserveProposalVotesResponse, reader: jspb.BinaryReader): ObserveProposalVotesResponse;
}

export namespace ObserveProposalVotesResponse {
    export type AsObject = {
        vote?: vega_governance_pb.Vote.AsObject,
    }
}

export class ObservePartyVotesRequest extends jspb.Message {
    getPartyId(): string;
    setPartyId(value: string): ObservePartyVotesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ObservePartyVotesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ObservePartyVotesRequest): ObservePartyVotesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ObservePartyVotesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ObservePartyVotesRequest;
    static deserializeBinaryFromReader(message: ObservePartyVotesRequest, reader: jspb.BinaryReader): ObservePartyVotesRequest;
}

export namespace ObservePartyVotesRequest {
    export type AsObject = {
        partyId: string,
    }
}

export class ObservePartyVotesResponse extends jspb.Message {

    hasVote(): boolean;
    clearVote(): void;
    getVote(): vega_governance_pb.Vote | undefined;
    setVote(value?: vega_governance_pb.Vote): ObservePartyVotesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ObservePartyVotesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ObservePartyVotesResponse): ObservePartyVotesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ObservePartyVotesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ObservePartyVotesResponse;
    static deserializeBinaryFromReader(message: ObservePartyVotesResponse, reader: jspb.BinaryReader): ObservePartyVotesResponse;
}

export namespace ObservePartyVotesResponse {
    export type AsObject = {
        vote?: vega_governance_pb.Vote.AsObject,
    }
}

export class MarginLevelsSubscribeRequest extends jspb.Message {
    getPartyId(): string;
    setPartyId(value: string): MarginLevelsSubscribeRequest;
    getMarketId(): string;
    setMarketId(value: string): MarginLevelsSubscribeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarginLevelsSubscribeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MarginLevelsSubscribeRequest): MarginLevelsSubscribeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarginLevelsSubscribeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarginLevelsSubscribeRequest;
    static deserializeBinaryFromReader(message: MarginLevelsSubscribeRequest, reader: jspb.BinaryReader): MarginLevelsSubscribeRequest;
}

export namespace MarginLevelsSubscribeRequest {
    export type AsObject = {
        partyId: string,
        marketId: string,
    }
}

export class MarginLevelsSubscribeResponse extends jspb.Message {

    hasMarginLevels(): boolean;
    clearMarginLevels(): void;
    getMarginLevels(): vega_vega_pb.MarginLevels | undefined;
    setMarginLevels(value?: vega_vega_pb.MarginLevels): MarginLevelsSubscribeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarginLevelsSubscribeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MarginLevelsSubscribeResponse): MarginLevelsSubscribeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarginLevelsSubscribeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarginLevelsSubscribeResponse;
    static deserializeBinaryFromReader(message: MarginLevelsSubscribeResponse, reader: jspb.BinaryReader): MarginLevelsSubscribeResponse;
}

export namespace MarginLevelsSubscribeResponse {
    export type AsObject = {
        marginLevels?: vega_vega_pb.MarginLevels.AsObject,
    }
}

export class MarginLevelsRequest extends jspb.Message {
    getPartyId(): string;
    setPartyId(value: string): MarginLevelsRequest;
    getMarketId(): string;
    setMarketId(value: string): MarginLevelsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarginLevelsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MarginLevelsRequest): MarginLevelsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarginLevelsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarginLevelsRequest;
    static deserializeBinaryFromReader(message: MarginLevelsRequest, reader: jspb.BinaryReader): MarginLevelsRequest;
}

export namespace MarginLevelsRequest {
    export type AsObject = {
        partyId: string,
        marketId: string,
    }
}

export class MarginLevelsResponse extends jspb.Message {
    clearMarginLevelsList(): void;
    getMarginLevelsList(): Array<vega_vega_pb.MarginLevels>;
    setMarginLevelsList(value: Array<vega_vega_pb.MarginLevels>): MarginLevelsResponse;
    addMarginLevels(value?: vega_vega_pb.MarginLevels, index?: number): vega_vega_pb.MarginLevels;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarginLevelsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MarginLevelsResponse): MarginLevelsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarginLevelsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarginLevelsResponse;
    static deserializeBinaryFromReader(message: MarginLevelsResponse, reader: jspb.BinaryReader): MarginLevelsResponse;
}

export namespace MarginLevelsResponse {
    export type AsObject = {
        marginLevelsList: Array<vega_vega_pb.MarginLevels.AsObject>,
    }
}

export class MarketsDataSubscribeRequest extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): MarketsDataSubscribeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketsDataSubscribeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MarketsDataSubscribeRequest): MarketsDataSubscribeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketsDataSubscribeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketsDataSubscribeRequest;
    static deserializeBinaryFromReader(message: MarketsDataSubscribeRequest, reader: jspb.BinaryReader): MarketsDataSubscribeRequest;
}

export namespace MarketsDataSubscribeRequest {
    export type AsObject = {
        marketId: string,
    }
}

export class MarketsDataSubscribeResponse extends jspb.Message {

    hasMarketData(): boolean;
    clearMarketData(): void;
    getMarketData(): vega_vega_pb.MarketData | undefined;
    setMarketData(value?: vega_vega_pb.MarketData): MarketsDataSubscribeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketsDataSubscribeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MarketsDataSubscribeResponse): MarketsDataSubscribeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketsDataSubscribeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketsDataSubscribeResponse;
    static deserializeBinaryFromReader(message: MarketsDataSubscribeResponse, reader: jspb.BinaryReader): MarketsDataSubscribeResponse;
}

export namespace MarketsDataSubscribeResponse {
    export type AsObject = {
        marketData?: vega_vega_pb.MarketData.AsObject,
    }
}

export class MarketDataByIDRequest extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): MarketDataByIDRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketDataByIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MarketDataByIDRequest): MarketDataByIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketDataByIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketDataByIDRequest;
    static deserializeBinaryFromReader(message: MarketDataByIDRequest, reader: jspb.BinaryReader): MarketDataByIDRequest;
}

export namespace MarketDataByIDRequest {
    export type AsObject = {
        marketId: string,
    }
}

export class MarketDataByIDResponse extends jspb.Message {

    hasMarketData(): boolean;
    clearMarketData(): void;
    getMarketData(): vega_vega_pb.MarketData | undefined;
    setMarketData(value?: vega_vega_pb.MarketData): MarketDataByIDResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketDataByIDResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MarketDataByIDResponse): MarketDataByIDResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketDataByIDResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketDataByIDResponse;
    static deserializeBinaryFromReader(message: MarketDataByIDResponse, reader: jspb.BinaryReader): MarketDataByIDResponse;
}

export namespace MarketDataByIDResponse {
    export type AsObject = {
        marketData?: vega_vega_pb.MarketData.AsObject,
    }
}

export class MarketsDataRequest extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketsDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MarketsDataRequest): MarketsDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketsDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketsDataRequest;
    static deserializeBinaryFromReader(message: MarketsDataRequest, reader: jspb.BinaryReader): MarketsDataRequest;
}

export namespace MarketsDataRequest {
    export type AsObject = {
    }
}

export class MarketsDataResponse extends jspb.Message {
    clearMarketsDataList(): void;
    getMarketsDataList(): Array<vega_vega_pb.MarketData>;
    setMarketsDataList(value: Array<vega_vega_pb.MarketData>): MarketsDataResponse;
    addMarketsData(value?: vega_vega_pb.MarketData, index?: number): vega_vega_pb.MarketData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketsDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MarketsDataResponse): MarketsDataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketsDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketsDataResponse;
    static deserializeBinaryFromReader(message: MarketsDataResponse, reader: jspb.BinaryReader): MarketsDataResponse;
}

export namespace MarketsDataResponse {
    export type AsObject = {
        marketsDataList: Array<vega_vega_pb.MarketData.AsObject>,
    }
}

export class LastTradeRequest extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): LastTradeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LastTradeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LastTradeRequest): LastTradeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LastTradeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LastTradeRequest;
    static deserializeBinaryFromReader(message: LastTradeRequest, reader: jspb.BinaryReader): LastTradeRequest;
}

export namespace LastTradeRequest {
    export type AsObject = {
        marketId: string,
    }
}

export class LastTradeResponse extends jspb.Message {

    hasTrade(): boolean;
    clearTrade(): void;
    getTrade(): vega_vega_pb.Trade | undefined;
    setTrade(value?: vega_vega_pb.Trade): LastTradeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LastTradeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LastTradeResponse): LastTradeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LastTradeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LastTradeResponse;
    static deserializeBinaryFromReader(message: LastTradeResponse, reader: jspb.BinaryReader): LastTradeResponse;
}

export namespace LastTradeResponse {
    export type AsObject = {
        trade?: vega_vega_pb.Trade.AsObject,
    }
}

export class MarketByIDRequest extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): MarketByIDRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketByIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MarketByIDRequest): MarketByIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketByIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketByIDRequest;
    static deserializeBinaryFromReader(message: MarketByIDRequest, reader: jspb.BinaryReader): MarketByIDRequest;
}

export namespace MarketByIDRequest {
    export type AsObject = {
        marketId: string,
    }
}

export class MarketByIDResponse extends jspb.Message {

    hasMarket(): boolean;
    clearMarket(): void;
    getMarket(): vega_markets_pb.Market | undefined;
    setMarket(value?: vega_markets_pb.Market): MarketByIDResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketByIDResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MarketByIDResponse): MarketByIDResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketByIDResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketByIDResponse;
    static deserializeBinaryFromReader(message: MarketByIDResponse, reader: jspb.BinaryReader): MarketByIDResponse;
}

export namespace MarketByIDResponse {
    export type AsObject = {
        market?: vega_markets_pb.Market.AsObject,
    }
}

export class PartyByIDRequest extends jspb.Message {
    getPartyId(): string;
    setPartyId(value: string): PartyByIDRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PartyByIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PartyByIDRequest): PartyByIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PartyByIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PartyByIDRequest;
    static deserializeBinaryFromReader(message: PartyByIDRequest, reader: jspb.BinaryReader): PartyByIDRequest;
}

export namespace PartyByIDRequest {
    export type AsObject = {
        partyId: string,
    }
}

export class PartyByIDResponse extends jspb.Message {

    hasParty(): boolean;
    clearParty(): void;
    getParty(): vega_vega_pb.Party | undefined;
    setParty(value?: vega_vega_pb.Party): PartyByIDResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PartyByIDResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PartyByIDResponse): PartyByIDResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PartyByIDResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PartyByIDResponse;
    static deserializeBinaryFromReader(message: PartyByIDResponse, reader: jspb.BinaryReader): PartyByIDResponse;
}

export namespace PartyByIDResponse {
    export type AsObject = {
        party?: vega_vega_pb.Party.AsObject,
    }
}

export class PartiesRequest extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PartiesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PartiesRequest): PartiesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PartiesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PartiesRequest;
    static deserializeBinaryFromReader(message: PartiesRequest, reader: jspb.BinaryReader): PartiesRequest;
}

export namespace PartiesRequest {
    export type AsObject = {
    }
}

export class PartiesResponse extends jspb.Message {
    clearPartiesList(): void;
    getPartiesList(): Array<vega_vega_pb.Party>;
    setPartiesList(value: Array<vega_vega_pb.Party>): PartiesResponse;
    addParties(value?: vega_vega_pb.Party, index?: number): vega_vega_pb.Party;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PartiesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PartiesResponse): PartiesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PartiesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PartiesResponse;
    static deserializeBinaryFromReader(message: PartiesResponse, reader: jspb.BinaryReader): PartiesResponse;
}

export namespace PartiesResponse {
    export type AsObject = {
        partiesList: Array<vega_vega_pb.Party.AsObject>,
    }
}

export class TradesByPartyRequest extends jspb.Message {
    getPartyId(): string;
    setPartyId(value: string): TradesByPartyRequest;
    getMarketId(): string;
    setMarketId(value: string): TradesByPartyRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): Pagination | undefined;
    setPagination(value?: Pagination): TradesByPartyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradesByPartyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TradesByPartyRequest): TradesByPartyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradesByPartyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradesByPartyRequest;
    static deserializeBinaryFromReader(message: TradesByPartyRequest, reader: jspb.BinaryReader): TradesByPartyRequest;
}

export namespace TradesByPartyRequest {
    export type AsObject = {
        partyId: string,
        marketId: string,
        pagination?: Pagination.AsObject,
    }
}

export class TradesByPartyResponse extends jspb.Message {
    clearTradesList(): void;
    getTradesList(): Array<vega_vega_pb.Trade>;
    setTradesList(value: Array<vega_vega_pb.Trade>): TradesByPartyResponse;
    addTrades(value?: vega_vega_pb.Trade, index?: number): vega_vega_pb.Trade;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradesByPartyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TradesByPartyResponse): TradesByPartyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradesByPartyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradesByPartyResponse;
    static deserializeBinaryFromReader(message: TradesByPartyResponse, reader: jspb.BinaryReader): TradesByPartyResponse;
}

export namespace TradesByPartyResponse {
    export type AsObject = {
        tradesList: Array<vega_vega_pb.Trade.AsObject>,
    }
}

export class TradesByOrderRequest extends jspb.Message {
    getOrderId(): string;
    setOrderId(value: string): TradesByOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradesByOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TradesByOrderRequest): TradesByOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradesByOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradesByOrderRequest;
    static deserializeBinaryFromReader(message: TradesByOrderRequest, reader: jspb.BinaryReader): TradesByOrderRequest;
}

export namespace TradesByOrderRequest {
    export type AsObject = {
        orderId: string,
    }
}

export class TradesByOrderResponse extends jspb.Message {
    clearTradesList(): void;
    getTradesList(): Array<vega_vega_pb.Trade>;
    setTradesList(value: Array<vega_vega_pb.Trade>): TradesByOrderResponse;
    addTrades(value?: vega_vega_pb.Trade, index?: number): vega_vega_pb.Trade;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradesByOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TradesByOrderResponse): TradesByOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradesByOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradesByOrderResponse;
    static deserializeBinaryFromReader(message: TradesByOrderResponse, reader: jspb.BinaryReader): TradesByOrderResponse;
}

export namespace TradesByOrderResponse {
    export type AsObject = {
        tradesList: Array<vega_vega_pb.Trade.AsObject>,
    }
}

export class AccountsSubscribeRequest extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): AccountsSubscribeRequest;
    getPartyId(): string;
    setPartyId(value: string): AccountsSubscribeRequest;
    getAsset(): string;
    setAsset(value: string): AccountsSubscribeRequest;
    getType(): vega_vega_pb.AccountType;
    setType(value: vega_vega_pb.AccountType): AccountsSubscribeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccountsSubscribeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AccountsSubscribeRequest): AccountsSubscribeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccountsSubscribeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccountsSubscribeRequest;
    static deserializeBinaryFromReader(message: AccountsSubscribeRequest, reader: jspb.BinaryReader): AccountsSubscribeRequest;
}

export namespace AccountsSubscribeRequest {
    export type AsObject = {
        marketId: string,
        partyId: string,
        asset: string,
        type: vega_vega_pb.AccountType,
    }
}

export class AccountsSubscribeResponse extends jspb.Message {

    hasAccount(): boolean;
    clearAccount(): void;
    getAccount(): vega_vega_pb.Account | undefined;
    setAccount(value?: vega_vega_pb.Account): AccountsSubscribeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccountsSubscribeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AccountsSubscribeResponse): AccountsSubscribeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccountsSubscribeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccountsSubscribeResponse;
    static deserializeBinaryFromReader(message: AccountsSubscribeResponse, reader: jspb.BinaryReader): AccountsSubscribeResponse;
}

export namespace AccountsSubscribeResponse {
    export type AsObject = {
        account?: vega_vega_pb.Account.AsObject,
    }
}

export class OrdersSubscribeRequest extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): OrdersSubscribeRequest;
    getPartyId(): string;
    setPartyId(value: string): OrdersSubscribeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrdersSubscribeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OrdersSubscribeRequest): OrdersSubscribeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrdersSubscribeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrdersSubscribeRequest;
    static deserializeBinaryFromReader(message: OrdersSubscribeRequest, reader: jspb.BinaryReader): OrdersSubscribeRequest;
}

export namespace OrdersSubscribeRequest {
    export type AsObject = {
        marketId: string,
        partyId: string,
    }
}

export class TradesSubscribeRequest extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): TradesSubscribeRequest;
    getPartyId(): string;
    setPartyId(value: string): TradesSubscribeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradesSubscribeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TradesSubscribeRequest): TradesSubscribeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradesSubscribeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradesSubscribeRequest;
    static deserializeBinaryFromReader(message: TradesSubscribeRequest, reader: jspb.BinaryReader): TradesSubscribeRequest;
}

export namespace TradesSubscribeRequest {
    export type AsObject = {
        marketId: string,
        partyId: string,
    }
}

export class CandlesSubscribeRequest extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): CandlesSubscribeRequest;
    getInterval(): vega_vega_pb.Interval;
    setInterval(value: vega_vega_pb.Interval): CandlesSubscribeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CandlesSubscribeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CandlesSubscribeRequest): CandlesSubscribeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CandlesSubscribeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CandlesSubscribeRequest;
    static deserializeBinaryFromReader(message: CandlesSubscribeRequest, reader: jspb.BinaryReader): CandlesSubscribeRequest;
}

export namespace CandlesSubscribeRequest {
    export type AsObject = {
        marketId: string,
        interval: vega_vega_pb.Interval,
    }
}

export class CandlesSubscribeResponse extends jspb.Message {

    hasCandle(): boolean;
    clearCandle(): void;
    getCandle(): vega_vega_pb.Candle | undefined;
    setCandle(value?: vega_vega_pb.Candle): CandlesSubscribeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CandlesSubscribeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CandlesSubscribeResponse): CandlesSubscribeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CandlesSubscribeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CandlesSubscribeResponse;
    static deserializeBinaryFromReader(message: CandlesSubscribeResponse, reader: jspb.BinaryReader): CandlesSubscribeResponse;
}

export namespace CandlesSubscribeResponse {
    export type AsObject = {
        candle?: vega_vega_pb.Candle.AsObject,
    }
}

export class MarketDepthSubscribeRequest extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): MarketDepthSubscribeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketDepthSubscribeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MarketDepthSubscribeRequest): MarketDepthSubscribeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketDepthSubscribeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketDepthSubscribeRequest;
    static deserializeBinaryFromReader(message: MarketDepthSubscribeRequest, reader: jspb.BinaryReader): MarketDepthSubscribeRequest;
}

export namespace MarketDepthSubscribeRequest {
    export type AsObject = {
        marketId: string,
    }
}

export class MarketDepthSubscribeResponse extends jspb.Message {

    hasMarketDepth(): boolean;
    clearMarketDepth(): void;
    getMarketDepth(): vega_vega_pb.MarketDepth | undefined;
    setMarketDepth(value?: vega_vega_pb.MarketDepth): MarketDepthSubscribeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketDepthSubscribeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MarketDepthSubscribeResponse): MarketDepthSubscribeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketDepthSubscribeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketDepthSubscribeResponse;
    static deserializeBinaryFromReader(message: MarketDepthSubscribeResponse, reader: jspb.BinaryReader): MarketDepthSubscribeResponse;
}

export namespace MarketDepthSubscribeResponse {
    export type AsObject = {
        marketDepth?: vega_vega_pb.MarketDepth.AsObject,
    }
}

export class MarketDepthUpdatesSubscribeRequest extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): MarketDepthUpdatesSubscribeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketDepthUpdatesSubscribeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MarketDepthUpdatesSubscribeRequest): MarketDepthUpdatesSubscribeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketDepthUpdatesSubscribeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketDepthUpdatesSubscribeRequest;
    static deserializeBinaryFromReader(message: MarketDepthUpdatesSubscribeRequest, reader: jspb.BinaryReader): MarketDepthUpdatesSubscribeRequest;
}

export namespace MarketDepthUpdatesSubscribeRequest {
    export type AsObject = {
        marketId: string,
    }
}

export class MarketDepthUpdatesSubscribeResponse extends jspb.Message {

    hasUpdate(): boolean;
    clearUpdate(): void;
    getUpdate(): vega_vega_pb.MarketDepthUpdate | undefined;
    setUpdate(value?: vega_vega_pb.MarketDepthUpdate): MarketDepthUpdatesSubscribeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketDepthUpdatesSubscribeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MarketDepthUpdatesSubscribeResponse): MarketDepthUpdatesSubscribeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketDepthUpdatesSubscribeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketDepthUpdatesSubscribeResponse;
    static deserializeBinaryFromReader(message: MarketDepthUpdatesSubscribeResponse, reader: jspb.BinaryReader): MarketDepthUpdatesSubscribeResponse;
}

export namespace MarketDepthUpdatesSubscribeResponse {
    export type AsObject = {
        update?: vega_vega_pb.MarketDepthUpdate.AsObject,
    }
}

export class PositionsSubscribeRequest extends jspb.Message {
    getPartyId(): string;
    setPartyId(value: string): PositionsSubscribeRequest;
    getMarketId(): string;
    setMarketId(value: string): PositionsSubscribeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionsSubscribeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PositionsSubscribeRequest): PositionsSubscribeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionsSubscribeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionsSubscribeRequest;
    static deserializeBinaryFromReader(message: PositionsSubscribeRequest, reader: jspb.BinaryReader): PositionsSubscribeRequest;
}

export namespace PositionsSubscribeRequest {
    export type AsObject = {
        partyId: string,
        marketId: string,
    }
}

export class PositionsSubscribeResponse extends jspb.Message {

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): vega_vega_pb.Position | undefined;
    setPosition(value?: vega_vega_pb.Position): PositionsSubscribeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionsSubscribeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PositionsSubscribeResponse): PositionsSubscribeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionsSubscribeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionsSubscribeResponse;
    static deserializeBinaryFromReader(message: PositionsSubscribeResponse, reader: jspb.BinaryReader): PositionsSubscribeResponse;
}

export namespace PositionsSubscribeResponse {
    export type AsObject = {
        position?: vega_vega_pb.Position.AsObject,
    }
}

export class OrdersByMarketRequest extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): OrdersByMarketRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): Pagination | undefined;
    setPagination(value?: Pagination): OrdersByMarketRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrdersByMarketRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OrdersByMarketRequest): OrdersByMarketRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrdersByMarketRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrdersByMarketRequest;
    static deserializeBinaryFromReader(message: OrdersByMarketRequest, reader: jspb.BinaryReader): OrdersByMarketRequest;
}

export namespace OrdersByMarketRequest {
    export type AsObject = {
        marketId: string,
        pagination?: Pagination.AsObject,
    }
}

export class OrdersByMarketResponse extends jspb.Message {
    clearOrdersList(): void;
    getOrdersList(): Array<vega_vega_pb.Order>;
    setOrdersList(value: Array<vega_vega_pb.Order>): OrdersByMarketResponse;
    addOrders(value?: vega_vega_pb.Order, index?: number): vega_vega_pb.Order;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrdersByMarketResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OrdersByMarketResponse): OrdersByMarketResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrdersByMarketResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrdersByMarketResponse;
    static deserializeBinaryFromReader(message: OrdersByMarketResponse, reader: jspb.BinaryReader): OrdersByMarketResponse;
}

export namespace OrdersByMarketResponse {
    export type AsObject = {
        ordersList: Array<vega_vega_pb.Order.AsObject>,
    }
}

export class OrdersByPartyRequest extends jspb.Message {
    getPartyId(): string;
    setPartyId(value: string): OrdersByPartyRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): Pagination | undefined;
    setPagination(value?: Pagination): OrdersByPartyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrdersByPartyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OrdersByPartyRequest): OrdersByPartyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrdersByPartyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrdersByPartyRequest;
    static deserializeBinaryFromReader(message: OrdersByPartyRequest, reader: jspb.BinaryReader): OrdersByPartyRequest;
}

export namespace OrdersByPartyRequest {
    export type AsObject = {
        partyId: string,
        pagination?: Pagination.AsObject,
    }
}

export class OrdersByPartyResponse extends jspb.Message {
    clearOrdersList(): void;
    getOrdersList(): Array<vega_vega_pb.Order>;
    setOrdersList(value: Array<vega_vega_pb.Order>): OrdersByPartyResponse;
    addOrders(value?: vega_vega_pb.Order, index?: number): vega_vega_pb.Order;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrdersByPartyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OrdersByPartyResponse): OrdersByPartyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrdersByPartyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrdersByPartyResponse;
    static deserializeBinaryFromReader(message: OrdersByPartyResponse, reader: jspb.BinaryReader): OrdersByPartyResponse;
}

export namespace OrdersByPartyResponse {
    export type AsObject = {
        ordersList: Array<vega_vega_pb.Order.AsObject>,
    }
}

export class OrderByMarketAndIDRequest extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): OrderByMarketAndIDRequest;
    getOrderId(): string;
    setOrderId(value: string): OrderByMarketAndIDRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderByMarketAndIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OrderByMarketAndIDRequest): OrderByMarketAndIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderByMarketAndIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderByMarketAndIDRequest;
    static deserializeBinaryFromReader(message: OrderByMarketAndIDRequest, reader: jspb.BinaryReader): OrderByMarketAndIDRequest;
}

export namespace OrderByMarketAndIDRequest {
    export type AsObject = {
        marketId: string,
        orderId: string,
    }
}

export class OrderByMarketAndIDResponse extends jspb.Message {

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): vega_vega_pb.Order | undefined;
    setOrder(value?: vega_vega_pb.Order): OrderByMarketAndIDResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderByMarketAndIDResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OrderByMarketAndIDResponse): OrderByMarketAndIDResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderByMarketAndIDResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderByMarketAndIDResponse;
    static deserializeBinaryFromReader(message: OrderByMarketAndIDResponse, reader: jspb.BinaryReader): OrderByMarketAndIDResponse;
}

export namespace OrderByMarketAndIDResponse {
    export type AsObject = {
        order?: vega_vega_pb.Order.AsObject,
    }
}

export class OrderByReferenceRequest extends jspb.Message {
    getReference(): string;
    setReference(value: string): OrderByReferenceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderByReferenceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OrderByReferenceRequest): OrderByReferenceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderByReferenceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderByReferenceRequest;
    static deserializeBinaryFromReader(message: OrderByReferenceRequest, reader: jspb.BinaryReader): OrderByReferenceRequest;
}

export namespace OrderByReferenceRequest {
    export type AsObject = {
        reference: string,
    }
}

export class OrderByReferenceResponse extends jspb.Message {

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): vega_vega_pb.Order | undefined;
    setOrder(value?: vega_vega_pb.Order): OrderByReferenceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderByReferenceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OrderByReferenceResponse): OrderByReferenceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderByReferenceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderByReferenceResponse;
    static deserializeBinaryFromReader(message: OrderByReferenceResponse, reader: jspb.BinaryReader): OrderByReferenceResponse;
}

export namespace OrderByReferenceResponse {
    export type AsObject = {
        order?: vega_vega_pb.Order.AsObject,
    }
}

export class MarketsRequest extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MarketsRequest): MarketsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketsRequest;
    static deserializeBinaryFromReader(message: MarketsRequest, reader: jspb.BinaryReader): MarketsRequest;
}

export namespace MarketsRequest {
    export type AsObject = {
    }
}

export class MarketsResponse extends jspb.Message {
    clearMarketsList(): void;
    getMarketsList(): Array<vega_markets_pb.Market>;
    setMarketsList(value: Array<vega_markets_pb.Market>): MarketsResponse;
    addMarkets(value?: vega_markets_pb.Market, index?: number): vega_markets_pb.Market;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MarketsResponse): MarketsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketsResponse;
    static deserializeBinaryFromReader(message: MarketsResponse, reader: jspb.BinaryReader): MarketsResponse;
}

export namespace MarketsResponse {
    export type AsObject = {
        marketsList: Array<vega_markets_pb.Market.AsObject>,
    }
}

export class CandlesRequest extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): CandlesRequest;
    getSinceTimestamp(): number;
    setSinceTimestamp(value: number): CandlesRequest;
    getInterval(): vega_vega_pb.Interval;
    setInterval(value: vega_vega_pb.Interval): CandlesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CandlesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CandlesRequest): CandlesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CandlesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CandlesRequest;
    static deserializeBinaryFromReader(message: CandlesRequest, reader: jspb.BinaryReader): CandlesRequest;
}

export namespace CandlesRequest {
    export type AsObject = {
        marketId: string,
        sinceTimestamp: number,
        interval: vega_vega_pb.Interval,
    }
}

export class CandlesResponse extends jspb.Message {
    clearCandlesList(): void;
    getCandlesList(): Array<vega_vega_pb.Candle>;
    setCandlesList(value: Array<vega_vega_pb.Candle>): CandlesResponse;
    addCandles(value?: vega_vega_pb.Candle, index?: number): vega_vega_pb.Candle;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CandlesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CandlesResponse): CandlesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CandlesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CandlesResponse;
    static deserializeBinaryFromReader(message: CandlesResponse, reader: jspb.BinaryReader): CandlesResponse;
}

export namespace CandlesResponse {
    export type AsObject = {
        candlesList: Array<vega_vega_pb.Candle.AsObject>,
    }
}

export class MarketDepthRequest extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): MarketDepthRequest;
    getMaxDepth(): number;
    setMaxDepth(value: number): MarketDepthRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketDepthRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MarketDepthRequest): MarketDepthRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketDepthRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketDepthRequest;
    static deserializeBinaryFromReader(message: MarketDepthRequest, reader: jspb.BinaryReader): MarketDepthRequest;
}

export namespace MarketDepthRequest {
    export type AsObject = {
        marketId: string,
        maxDepth: number,
    }
}

export class MarketDepthResponse extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): MarketDepthResponse;
    clearBuyList(): void;
    getBuyList(): Array<vega_vega_pb.PriceLevel>;
    setBuyList(value: Array<vega_vega_pb.PriceLevel>): MarketDepthResponse;
    addBuy(value?: vega_vega_pb.PriceLevel, index?: number): vega_vega_pb.PriceLevel;
    clearSellList(): void;
    getSellList(): Array<vega_vega_pb.PriceLevel>;
    setSellList(value: Array<vega_vega_pb.PriceLevel>): MarketDepthResponse;
    addSell(value?: vega_vega_pb.PriceLevel, index?: number): vega_vega_pb.PriceLevel;

    hasLastTrade(): boolean;
    clearLastTrade(): void;
    getLastTrade(): vega_vega_pb.Trade | undefined;
    setLastTrade(value?: vega_vega_pb.Trade): MarketDepthResponse;
    getSequenceNumber(): number;
    setSequenceNumber(value: number): MarketDepthResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketDepthResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MarketDepthResponse): MarketDepthResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketDepthResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketDepthResponse;
    static deserializeBinaryFromReader(message: MarketDepthResponse, reader: jspb.BinaryReader): MarketDepthResponse;
}

export namespace MarketDepthResponse {
    export type AsObject = {
        marketId: string,
        buyList: Array<vega_vega_pb.PriceLevel.AsObject>,
        sellList: Array<vega_vega_pb.PriceLevel.AsObject>,
        lastTrade?: vega_vega_pb.Trade.AsObject,
        sequenceNumber: number,
    }
}

export class TradesByMarketRequest extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): TradesByMarketRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): Pagination | undefined;
    setPagination(value?: Pagination): TradesByMarketRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradesByMarketRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TradesByMarketRequest): TradesByMarketRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradesByMarketRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradesByMarketRequest;
    static deserializeBinaryFromReader(message: TradesByMarketRequest, reader: jspb.BinaryReader): TradesByMarketRequest;
}

export namespace TradesByMarketRequest {
    export type AsObject = {
        marketId: string,
        pagination?: Pagination.AsObject,
    }
}

export class TradesByMarketResponse extends jspb.Message {
    clearTradesList(): void;
    getTradesList(): Array<vega_vega_pb.Trade>;
    setTradesList(value: Array<vega_vega_pb.Trade>): TradesByMarketResponse;
    addTrades(value?: vega_vega_pb.Trade, index?: number): vega_vega_pb.Trade;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradesByMarketResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TradesByMarketResponse): TradesByMarketResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradesByMarketResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradesByMarketResponse;
    static deserializeBinaryFromReader(message: TradesByMarketResponse, reader: jspb.BinaryReader): TradesByMarketResponse;
}

export namespace TradesByMarketResponse {
    export type AsObject = {
        tradesList: Array<vega_vega_pb.Trade.AsObject>,
    }
}

export class PositionsByPartyRequest extends jspb.Message {
    getPartyId(): string;
    setPartyId(value: string): PositionsByPartyRequest;
    getMarketId(): string;
    setMarketId(value: string): PositionsByPartyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionsByPartyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PositionsByPartyRequest): PositionsByPartyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionsByPartyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionsByPartyRequest;
    static deserializeBinaryFromReader(message: PositionsByPartyRequest, reader: jspb.BinaryReader): PositionsByPartyRequest;
}

export namespace PositionsByPartyRequest {
    export type AsObject = {
        partyId: string,
        marketId: string,
    }
}

export class PositionsByPartyResponse extends jspb.Message {
    clearPositionsList(): void;
    getPositionsList(): Array<vega_vega_pb.Position>;
    setPositionsList(value: Array<vega_vega_pb.Position>): PositionsByPartyResponse;
    addPositions(value?: vega_vega_pb.Position, index?: number): vega_vega_pb.Position;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionsByPartyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PositionsByPartyResponse): PositionsByPartyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionsByPartyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionsByPartyResponse;
    static deserializeBinaryFromReader(message: PositionsByPartyResponse, reader: jspb.BinaryReader): PositionsByPartyResponse;
}

export namespace PositionsByPartyResponse {
    export type AsObject = {
        positionsList: Array<vega_vega_pb.Position.AsObject>,
    }
}

export class GetVegaTimeRequest extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVegaTimeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetVegaTimeRequest): GetVegaTimeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVegaTimeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVegaTimeRequest;
    static deserializeBinaryFromReader(message: GetVegaTimeRequest, reader: jspb.BinaryReader): GetVegaTimeRequest;
}

export namespace GetVegaTimeRequest {
    export type AsObject = {
    }
}

export class GetVegaTimeResponse extends jspb.Message {
    getTimestamp(): number;
    setTimestamp(value: number): GetVegaTimeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVegaTimeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetVegaTimeResponse): GetVegaTimeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVegaTimeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVegaTimeResponse;
    static deserializeBinaryFromReader(message: GetVegaTimeResponse, reader: jspb.BinaryReader): GetVegaTimeResponse;
}

export namespace GetVegaTimeResponse {
    export type AsObject = {
        timestamp: number,
    }
}

export class Pagination extends jspb.Message {
    getSkip(): number;
    setSkip(value: number): Pagination;
    getLimit(): number;
    setLimit(value: number): Pagination;
    getDescending(): boolean;
    setDescending(value: boolean): Pagination;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Pagination.AsObject;
    static toObject(includeInstance: boolean, msg: Pagination): Pagination.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Pagination, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Pagination;
    static deserializeBinaryFromReader(message: Pagination, reader: jspb.BinaryReader): Pagination;
}

export namespace Pagination {
    export type AsObject = {
        skip: number,
        limit: number,
        descending: boolean,
    }
}

export class OrdersSubscribeResponse extends jspb.Message {
    clearOrdersList(): void;
    getOrdersList(): Array<vega_vega_pb.Order>;
    setOrdersList(value: Array<vega_vega_pb.Order>): OrdersSubscribeResponse;
    addOrders(value?: vega_vega_pb.Order, index?: number): vega_vega_pb.Order;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrdersSubscribeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OrdersSubscribeResponse): OrdersSubscribeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrdersSubscribeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrdersSubscribeResponse;
    static deserializeBinaryFromReader(message: OrdersSubscribeResponse, reader: jspb.BinaryReader): OrdersSubscribeResponse;
}

export namespace OrdersSubscribeResponse {
    export type AsObject = {
        ordersList: Array<vega_vega_pb.Order.AsObject>,
    }
}

export class TradesSubscribeResponse extends jspb.Message {
    clearTradesList(): void;
    getTradesList(): Array<vega_vega_pb.Trade>;
    setTradesList(value: Array<vega_vega_pb.Trade>): TradesSubscribeResponse;
    addTrades(value?: vega_vega_pb.Trade, index?: number): vega_vega_pb.Trade;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradesSubscribeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TradesSubscribeResponse): TradesSubscribeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradesSubscribeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradesSubscribeResponse;
    static deserializeBinaryFromReader(message: TradesSubscribeResponse, reader: jspb.BinaryReader): TradesSubscribeResponse;
}

export namespace TradesSubscribeResponse {
    export type AsObject = {
        tradesList: Array<vega_vega_pb.Trade.AsObject>,
    }
}

export class TransferResponsesSubscribeRequest extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransferResponsesSubscribeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TransferResponsesSubscribeRequest): TransferResponsesSubscribeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferResponsesSubscribeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferResponsesSubscribeRequest;
    static deserializeBinaryFromReader(message: TransferResponsesSubscribeRequest, reader: jspb.BinaryReader): TransferResponsesSubscribeRequest;
}

export namespace TransferResponsesSubscribeRequest {
    export type AsObject = {
    }
}

export class TransferResponsesSubscribeResponse extends jspb.Message {

    hasResponse(): boolean;
    clearResponse(): void;
    getResponse(): vega_vega_pb.TransferResponse | undefined;
    setResponse(value?: vega_vega_pb.TransferResponse): TransferResponsesSubscribeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransferResponsesSubscribeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TransferResponsesSubscribeResponse): TransferResponsesSubscribeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferResponsesSubscribeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferResponsesSubscribeResponse;
    static deserializeBinaryFromReader(message: TransferResponsesSubscribeResponse, reader: jspb.BinaryReader): TransferResponsesSubscribeResponse;
}

export namespace TransferResponsesSubscribeResponse {
    export type AsObject = {
        response?: vega_vega_pb.TransferResponse.AsObject,
    }
}

export class PartyAccountsRequest extends jspb.Message {
    getPartyId(): string;
    setPartyId(value: string): PartyAccountsRequest;
    getMarketId(): string;
    setMarketId(value: string): PartyAccountsRequest;
    getType(): vega_vega_pb.AccountType;
    setType(value: vega_vega_pb.AccountType): PartyAccountsRequest;
    getAsset(): string;
    setAsset(value: string): PartyAccountsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PartyAccountsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PartyAccountsRequest): PartyAccountsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PartyAccountsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PartyAccountsRequest;
    static deserializeBinaryFromReader(message: PartyAccountsRequest, reader: jspb.BinaryReader): PartyAccountsRequest;
}

export namespace PartyAccountsRequest {
    export type AsObject = {
        partyId: string,
        marketId: string,
        type: vega_vega_pb.AccountType,
        asset: string,
    }
}

export class PartyAccountsResponse extends jspb.Message {
    clearAccountsList(): void;
    getAccountsList(): Array<vega_vega_pb.Account>;
    setAccountsList(value: Array<vega_vega_pb.Account>): PartyAccountsResponse;
    addAccounts(value?: vega_vega_pb.Account, index?: number): vega_vega_pb.Account;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PartyAccountsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PartyAccountsResponse): PartyAccountsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PartyAccountsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PartyAccountsResponse;
    static deserializeBinaryFromReader(message: PartyAccountsResponse, reader: jspb.BinaryReader): PartyAccountsResponse;
}

export namespace PartyAccountsResponse {
    export type AsObject = {
        accountsList: Array<vega_vega_pb.Account.AsObject>,
    }
}

export class MarketAccountsRequest extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): MarketAccountsRequest;
    getAsset(): string;
    setAsset(value: string): MarketAccountsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketAccountsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MarketAccountsRequest): MarketAccountsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketAccountsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketAccountsRequest;
    static deserializeBinaryFromReader(message: MarketAccountsRequest, reader: jspb.BinaryReader): MarketAccountsRequest;
}

export namespace MarketAccountsRequest {
    export type AsObject = {
        marketId: string,
        asset: string,
    }
}

export class MarketAccountsResponse extends jspb.Message {
    clearAccountsList(): void;
    getAccountsList(): Array<vega_vega_pb.Account>;
    setAccountsList(value: Array<vega_vega_pb.Account>): MarketAccountsResponse;
    addAccounts(value?: vega_vega_pb.Account, index?: number): vega_vega_pb.Account;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketAccountsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MarketAccountsResponse): MarketAccountsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketAccountsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketAccountsResponse;
    static deserializeBinaryFromReader(message: MarketAccountsResponse, reader: jspb.BinaryReader): MarketAccountsResponse;
}

export namespace MarketAccountsResponse {
    export type AsObject = {
        accountsList: Array<vega_vega_pb.Account.AsObject>,
    }
}

export class FeeInfrastructureAccountsRequest extends jspb.Message {
    getAsset(): string;
    setAsset(value: string): FeeInfrastructureAccountsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeeInfrastructureAccountsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FeeInfrastructureAccountsRequest): FeeInfrastructureAccountsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeeInfrastructureAccountsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeeInfrastructureAccountsRequest;
    static deserializeBinaryFromReader(message: FeeInfrastructureAccountsRequest, reader: jspb.BinaryReader): FeeInfrastructureAccountsRequest;
}

export namespace FeeInfrastructureAccountsRequest {
    export type AsObject = {
        asset: string,
    }
}

export class FeeInfrastructureAccountsResponse extends jspb.Message {
    clearAccountsList(): void;
    getAccountsList(): Array<vega_vega_pb.Account>;
    setAccountsList(value: Array<vega_vega_pb.Account>): FeeInfrastructureAccountsResponse;
    addAccounts(value?: vega_vega_pb.Account, index?: number): vega_vega_pb.Account;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeeInfrastructureAccountsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FeeInfrastructureAccountsResponse): FeeInfrastructureAccountsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeeInfrastructureAccountsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeeInfrastructureAccountsResponse;
    static deserializeBinaryFromReader(message: FeeInfrastructureAccountsResponse, reader: jspb.BinaryReader): FeeInfrastructureAccountsResponse;
}

export namespace FeeInfrastructureAccountsResponse {
    export type AsObject = {
        accountsList: Array<vega_vega_pb.Account.AsObject>,
    }
}

export class GlobalRewardPoolAccountsRequest extends jspb.Message {
    getAsset(): string;
    setAsset(value: string): GlobalRewardPoolAccountsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GlobalRewardPoolAccountsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GlobalRewardPoolAccountsRequest): GlobalRewardPoolAccountsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GlobalRewardPoolAccountsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GlobalRewardPoolAccountsRequest;
    static deserializeBinaryFromReader(message: GlobalRewardPoolAccountsRequest, reader: jspb.BinaryReader): GlobalRewardPoolAccountsRequest;
}

export namespace GlobalRewardPoolAccountsRequest {
    export type AsObject = {
        asset: string,
    }
}

export class GlobalRewardPoolAccountsResponse extends jspb.Message {
    clearAccountsList(): void;
    getAccountsList(): Array<vega_vega_pb.Account>;
    setAccountsList(value: Array<vega_vega_pb.Account>): GlobalRewardPoolAccountsResponse;
    addAccounts(value?: vega_vega_pb.Account, index?: number): vega_vega_pb.Account;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GlobalRewardPoolAccountsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GlobalRewardPoolAccountsResponse): GlobalRewardPoolAccountsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GlobalRewardPoolAccountsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GlobalRewardPoolAccountsResponse;
    static deserializeBinaryFromReader(message: GlobalRewardPoolAccountsResponse, reader: jspb.BinaryReader): GlobalRewardPoolAccountsResponse;
}

export namespace GlobalRewardPoolAccountsResponse {
    export type AsObject = {
        accountsList: Array<vega_vega_pb.Account.AsObject>,
    }
}

export class OrderByIDRequest extends jspb.Message {
    getOrderId(): string;
    setOrderId(value: string): OrderByIDRequest;
    getVersion(): number;
    setVersion(value: number): OrderByIDRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderByIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OrderByIDRequest): OrderByIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderByIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderByIDRequest;
    static deserializeBinaryFromReader(message: OrderByIDRequest, reader: jspb.BinaryReader): OrderByIDRequest;
}

export namespace OrderByIDRequest {
    export type AsObject = {
        orderId: string,
        version: number,
    }
}

export class OrderByIDResponse extends jspb.Message {

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): vega_vega_pb.Order | undefined;
    setOrder(value?: vega_vega_pb.Order): OrderByIDResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderByIDResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OrderByIDResponse): OrderByIDResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderByIDResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderByIDResponse;
    static deserializeBinaryFromReader(message: OrderByIDResponse, reader: jspb.BinaryReader): OrderByIDResponse;
}

export namespace OrderByIDResponse {
    export type AsObject = {
        order?: vega_vega_pb.Order.AsObject,
    }
}

export class OrderVersionsByIDRequest extends jspb.Message {
    getOrderId(): string;
    setOrderId(value: string): OrderVersionsByIDRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): Pagination | undefined;
    setPagination(value?: Pagination): OrderVersionsByIDRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderVersionsByIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OrderVersionsByIDRequest): OrderVersionsByIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderVersionsByIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderVersionsByIDRequest;
    static deserializeBinaryFromReader(message: OrderVersionsByIDRequest, reader: jspb.BinaryReader): OrderVersionsByIDRequest;
}

export namespace OrderVersionsByIDRequest {
    export type AsObject = {
        orderId: string,
        pagination?: Pagination.AsObject,
    }
}

export class OrderVersionsByIDResponse extends jspb.Message {
    clearOrdersList(): void;
    getOrdersList(): Array<vega_vega_pb.Order>;
    setOrdersList(value: Array<vega_vega_pb.Order>): OrderVersionsByIDResponse;
    addOrders(value?: vega_vega_pb.Order, index?: number): vega_vega_pb.Order;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderVersionsByIDResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OrderVersionsByIDResponse): OrderVersionsByIDResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderVersionsByIDResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderVersionsByIDResponse;
    static deserializeBinaryFromReader(message: OrderVersionsByIDResponse, reader: jspb.BinaryReader): OrderVersionsByIDResponse;
}

export namespace OrderVersionsByIDResponse {
    export type AsObject = {
        ordersList: Array<vega_vega_pb.Order.AsObject>,
    }
}

export class EstimateFeeRequest extends jspb.Message {

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): vega_vega_pb.Order | undefined;
    setOrder(value?: vega_vega_pb.Order): EstimateFeeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EstimateFeeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EstimateFeeRequest): EstimateFeeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EstimateFeeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EstimateFeeRequest;
    static deserializeBinaryFromReader(message: EstimateFeeRequest, reader: jspb.BinaryReader): EstimateFeeRequest;
}

export namespace EstimateFeeRequest {
    export type AsObject = {
        order?: vega_vega_pb.Order.AsObject,
    }
}

export class EstimateFeeResponse extends jspb.Message {

    hasFee(): boolean;
    clearFee(): void;
    getFee(): vega_vega_pb.Fee | undefined;
    setFee(value?: vega_vega_pb.Fee): EstimateFeeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EstimateFeeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EstimateFeeResponse): EstimateFeeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EstimateFeeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EstimateFeeResponse;
    static deserializeBinaryFromReader(message: EstimateFeeResponse, reader: jspb.BinaryReader): EstimateFeeResponse;
}

export namespace EstimateFeeResponse {
    export type AsObject = {
        fee?: vega_vega_pb.Fee.AsObject,
    }
}

export class EstimateMarginRequest extends jspb.Message {

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): vega_vega_pb.Order | undefined;
    setOrder(value?: vega_vega_pb.Order): EstimateMarginRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EstimateMarginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EstimateMarginRequest): EstimateMarginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EstimateMarginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EstimateMarginRequest;
    static deserializeBinaryFromReader(message: EstimateMarginRequest, reader: jspb.BinaryReader): EstimateMarginRequest;
}

export namespace EstimateMarginRequest {
    export type AsObject = {
        order?: vega_vega_pb.Order.AsObject,
    }
}

export class EstimateMarginResponse extends jspb.Message {

    hasMarginLevels(): boolean;
    clearMarginLevels(): void;
    getMarginLevels(): vega_vega_pb.MarginLevels | undefined;
    setMarginLevels(value?: vega_vega_pb.MarginLevels): EstimateMarginResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EstimateMarginResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EstimateMarginResponse): EstimateMarginResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EstimateMarginResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EstimateMarginResponse;
    static deserializeBinaryFromReader(message: EstimateMarginResponse, reader: jspb.BinaryReader): EstimateMarginResponse;
}

export namespace EstimateMarginResponse {
    export type AsObject = {
        marginLevels?: vega_vega_pb.MarginLevels.AsObject,
    }
}

export class ObserveEventBusRequest extends jspb.Message {
    clearTypeList(): void;
    getTypeList(): Array<vega_events_v1_events_pb.BusEventType>;
    setTypeList(value: Array<vega_events_v1_events_pb.BusEventType>): ObserveEventBusRequest;
    addType(value: vega_events_v1_events_pb.BusEventType, index?: number): vega_events_v1_events_pb.BusEventType;
    getMarketId(): string;
    setMarketId(value: string): ObserveEventBusRequest;
    getPartyId(): string;
    setPartyId(value: string): ObserveEventBusRequest;
    getBatchSize(): number;
    setBatchSize(value: number): ObserveEventBusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ObserveEventBusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ObserveEventBusRequest): ObserveEventBusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ObserveEventBusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ObserveEventBusRequest;
    static deserializeBinaryFromReader(message: ObserveEventBusRequest, reader: jspb.BinaryReader): ObserveEventBusRequest;
}

export namespace ObserveEventBusRequest {
    export type AsObject = {
        typeList: Array<vega_events_v1_events_pb.BusEventType>,
        marketId: string,
        partyId: string,
        batchSize: number,
    }
}

export class ObserveEventBusResponse extends jspb.Message {
    clearEventsList(): void;
    getEventsList(): Array<vega_events_v1_events_pb.BusEvent>;
    setEventsList(value: Array<vega_events_v1_events_pb.BusEvent>): ObserveEventBusResponse;
    addEvents(value?: vega_events_v1_events_pb.BusEvent, index?: number): vega_events_v1_events_pb.BusEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ObserveEventBusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ObserveEventBusResponse): ObserveEventBusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ObserveEventBusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ObserveEventBusResponse;
    static deserializeBinaryFromReader(message: ObserveEventBusResponse, reader: jspb.BinaryReader): ObserveEventBusResponse;
}

export namespace ObserveEventBusResponse {
    export type AsObject = {
        eventsList: Array<vega_events_v1_events_pb.BusEvent.AsObject>,
    }
}

export class WithdrawalsRequest extends jspb.Message {
    getPartyId(): string;
    setPartyId(value: string): WithdrawalsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WithdrawalsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WithdrawalsRequest): WithdrawalsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WithdrawalsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WithdrawalsRequest;
    static deserializeBinaryFromReader(message: WithdrawalsRequest, reader: jspb.BinaryReader): WithdrawalsRequest;
}

export namespace WithdrawalsRequest {
    export type AsObject = {
        partyId: string,
    }
}

export class WithdrawalsResponse extends jspb.Message {
    clearWithdrawalsList(): void;
    getWithdrawalsList(): Array<vega_vega_pb.Withdrawal>;
    setWithdrawalsList(value: Array<vega_vega_pb.Withdrawal>): WithdrawalsResponse;
    addWithdrawals(value?: vega_vega_pb.Withdrawal, index?: number): vega_vega_pb.Withdrawal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WithdrawalsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WithdrawalsResponse): WithdrawalsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WithdrawalsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WithdrawalsResponse;
    static deserializeBinaryFromReader(message: WithdrawalsResponse, reader: jspb.BinaryReader): WithdrawalsResponse;
}

export namespace WithdrawalsResponse {
    export type AsObject = {
        withdrawalsList: Array<vega_vega_pb.Withdrawal.AsObject>,
    }
}

export class WithdrawalRequest extends jspb.Message {
    getId(): string;
    setId(value: string): WithdrawalRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WithdrawalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WithdrawalRequest): WithdrawalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WithdrawalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WithdrawalRequest;
    static deserializeBinaryFromReader(message: WithdrawalRequest, reader: jspb.BinaryReader): WithdrawalRequest;
}

export namespace WithdrawalRequest {
    export type AsObject = {
        id: string,
    }
}

export class WithdrawalResponse extends jspb.Message {

    hasWithdrawal(): boolean;
    clearWithdrawal(): void;
    getWithdrawal(): vega_vega_pb.Withdrawal | undefined;
    setWithdrawal(value?: vega_vega_pb.Withdrawal): WithdrawalResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WithdrawalResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WithdrawalResponse): WithdrawalResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WithdrawalResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WithdrawalResponse;
    static deserializeBinaryFromReader(message: WithdrawalResponse, reader: jspb.BinaryReader): WithdrawalResponse;
}

export namespace WithdrawalResponse {
    export type AsObject = {
        withdrawal?: vega_vega_pb.Withdrawal.AsObject,
    }
}

export class ERC20WithdrawalApprovalRequest extends jspb.Message {
    getWithdrawalId(): string;
    setWithdrawalId(value: string): ERC20WithdrawalApprovalRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ERC20WithdrawalApprovalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ERC20WithdrawalApprovalRequest): ERC20WithdrawalApprovalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ERC20WithdrawalApprovalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ERC20WithdrawalApprovalRequest;
    static deserializeBinaryFromReader(message: ERC20WithdrawalApprovalRequest, reader: jspb.BinaryReader): ERC20WithdrawalApprovalRequest;
}

export namespace ERC20WithdrawalApprovalRequest {
    export type AsObject = {
        withdrawalId: string,
    }
}

export class ERC20WithdrawalApprovalResponse extends jspb.Message {
    getAssetSource(): string;
    setAssetSource(value: string): ERC20WithdrawalApprovalResponse;
    getAmount(): string;
    setAmount(value: string): ERC20WithdrawalApprovalResponse;
    getExpiry(): number;
    setExpiry(value: number): ERC20WithdrawalApprovalResponse;
    getNonce(): string;
    setNonce(value: string): ERC20WithdrawalApprovalResponse;
    getSignatures(): string;
    setSignatures(value: string): ERC20WithdrawalApprovalResponse;
    getTargetAddress(): string;
    setTargetAddress(value: string): ERC20WithdrawalApprovalResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ERC20WithdrawalApprovalResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ERC20WithdrawalApprovalResponse): ERC20WithdrawalApprovalResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ERC20WithdrawalApprovalResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ERC20WithdrawalApprovalResponse;
    static deserializeBinaryFromReader(message: ERC20WithdrawalApprovalResponse, reader: jspb.BinaryReader): ERC20WithdrawalApprovalResponse;
}

export namespace ERC20WithdrawalApprovalResponse {
    export type AsObject = {
        assetSource: string,
        amount: string,
        expiry: number,
        nonce: string,
        signatures: string,
        targetAddress: string,
    }
}

export class DepositsRequest extends jspb.Message {
    getPartyId(): string;
    setPartyId(value: string): DepositsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DepositsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DepositsRequest): DepositsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DepositsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DepositsRequest;
    static deserializeBinaryFromReader(message: DepositsRequest, reader: jspb.BinaryReader): DepositsRequest;
}

export namespace DepositsRequest {
    export type AsObject = {
        partyId: string,
    }
}

export class DepositsResponse extends jspb.Message {
    clearDepositsList(): void;
    getDepositsList(): Array<vega_vega_pb.Deposit>;
    setDepositsList(value: Array<vega_vega_pb.Deposit>): DepositsResponse;
    addDeposits(value?: vega_vega_pb.Deposit, index?: number): vega_vega_pb.Deposit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DepositsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DepositsResponse): DepositsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DepositsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DepositsResponse;
    static deserializeBinaryFromReader(message: DepositsResponse, reader: jspb.BinaryReader): DepositsResponse;
}

export namespace DepositsResponse {
    export type AsObject = {
        depositsList: Array<vega_vega_pb.Deposit.AsObject>,
    }
}

export class DepositRequest extends jspb.Message {
    getId(): string;
    setId(value: string): DepositRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DepositRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DepositRequest): DepositRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DepositRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DepositRequest;
    static deserializeBinaryFromReader(message: DepositRequest, reader: jspb.BinaryReader): DepositRequest;
}

export namespace DepositRequest {
    export type AsObject = {
        id: string,
    }
}

export class DepositResponse extends jspb.Message {

    hasDeposit(): boolean;
    clearDeposit(): void;
    getDeposit(): vega_vega_pb.Deposit | undefined;
    setDeposit(value?: vega_vega_pb.Deposit): DepositResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DepositResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DepositResponse): DepositResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DepositResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DepositResponse;
    static deserializeBinaryFromReader(message: DepositResponse, reader: jspb.BinaryReader): DepositResponse;
}

export namespace DepositResponse {
    export type AsObject = {
        deposit?: vega_vega_pb.Deposit.AsObject,
    }
}

export class NetworkParametersRequest extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkParametersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkParametersRequest): NetworkParametersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkParametersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkParametersRequest;
    static deserializeBinaryFromReader(message: NetworkParametersRequest, reader: jspb.BinaryReader): NetworkParametersRequest;
}

export namespace NetworkParametersRequest {
    export type AsObject = {
    }
}

export class NetworkParametersResponse extends jspb.Message {
    clearNetworkParametersList(): void;
    getNetworkParametersList(): Array<vega_vega_pb.NetworkParameter>;
    setNetworkParametersList(value: Array<vega_vega_pb.NetworkParameter>): NetworkParametersResponse;
    addNetworkParameters(value?: vega_vega_pb.NetworkParameter, index?: number): vega_vega_pb.NetworkParameter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkParametersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkParametersResponse): NetworkParametersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkParametersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkParametersResponse;
    static deserializeBinaryFromReader(message: NetworkParametersResponse, reader: jspb.BinaryReader): NetworkParametersResponse;
}

export namespace NetworkParametersResponse {
    export type AsObject = {
        networkParametersList: Array<vega_vega_pb.NetworkParameter.AsObject>,
    }
}

export class LiquidityProvisionsRequest extends jspb.Message {
    getMarket(): string;
    setMarket(value: string): LiquidityProvisionsRequest;
    getParty(): string;
    setParty(value: string): LiquidityProvisionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiquidityProvisionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LiquidityProvisionsRequest): LiquidityProvisionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiquidityProvisionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiquidityProvisionsRequest;
    static deserializeBinaryFromReader(message: LiquidityProvisionsRequest, reader: jspb.BinaryReader): LiquidityProvisionsRequest;
}

export namespace LiquidityProvisionsRequest {
    export type AsObject = {
        market: string,
        party: string,
    }
}

export class LiquidityProvisionsResponse extends jspb.Message {
    clearLiquidityProvisionsList(): void;
    getLiquidityProvisionsList(): Array<vega_vega_pb.LiquidityProvision>;
    setLiquidityProvisionsList(value: Array<vega_vega_pb.LiquidityProvision>): LiquidityProvisionsResponse;
    addLiquidityProvisions(value?: vega_vega_pb.LiquidityProvision, index?: number): vega_vega_pb.LiquidityProvision;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiquidityProvisionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LiquidityProvisionsResponse): LiquidityProvisionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiquidityProvisionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiquidityProvisionsResponse;
    static deserializeBinaryFromReader(message: LiquidityProvisionsResponse, reader: jspb.BinaryReader): LiquidityProvisionsResponse;
}

export namespace LiquidityProvisionsResponse {
    export type AsObject = {
        liquidityProvisionsList: Array<vega_vega_pb.LiquidityProvision.AsObject>,
    }
}

export class OracleSpecRequest extends jspb.Message {
    getId(): string;
    setId(value: string): OracleSpecRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OracleSpecRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OracleSpecRequest): OracleSpecRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OracleSpecRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OracleSpecRequest;
    static deserializeBinaryFromReader(message: OracleSpecRequest, reader: jspb.BinaryReader): OracleSpecRequest;
}

export namespace OracleSpecRequest {
    export type AsObject = {
        id: string,
    }
}

export class OracleSpecResponse extends jspb.Message {

    hasOracleSpec(): boolean;
    clearOracleSpec(): void;
    getOracleSpec(): vega_oracles_v1_spec_pb.OracleSpec | undefined;
    setOracleSpec(value?: vega_oracles_v1_spec_pb.OracleSpec): OracleSpecResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OracleSpecResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OracleSpecResponse): OracleSpecResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OracleSpecResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OracleSpecResponse;
    static deserializeBinaryFromReader(message: OracleSpecResponse, reader: jspb.BinaryReader): OracleSpecResponse;
}

export namespace OracleSpecResponse {
    export type AsObject = {
        oracleSpec?: vega_oracles_v1_spec_pb.OracleSpec.AsObject,
    }
}

export class OracleSpecsRequest extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OracleSpecsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OracleSpecsRequest): OracleSpecsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OracleSpecsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OracleSpecsRequest;
    static deserializeBinaryFromReader(message: OracleSpecsRequest, reader: jspb.BinaryReader): OracleSpecsRequest;
}

export namespace OracleSpecsRequest {
    export type AsObject = {
    }
}

export class OracleSpecsResponse extends jspb.Message {
    clearOracleSpecsList(): void;
    getOracleSpecsList(): Array<vega_oracles_v1_spec_pb.OracleSpec>;
    setOracleSpecsList(value: Array<vega_oracles_v1_spec_pb.OracleSpec>): OracleSpecsResponse;
    addOracleSpecs(value?: vega_oracles_v1_spec_pb.OracleSpec, index?: number): vega_oracles_v1_spec_pb.OracleSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OracleSpecsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OracleSpecsResponse): OracleSpecsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OracleSpecsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OracleSpecsResponse;
    static deserializeBinaryFromReader(message: OracleSpecsResponse, reader: jspb.BinaryReader): OracleSpecsResponse;
}

export namespace OracleSpecsResponse {
    export type AsObject = {
        oracleSpecsList: Array<vega_oracles_v1_spec_pb.OracleSpec.AsObject>,
    }
}

export class OracleDataBySpecRequest extends jspb.Message {
    getId(): string;
    setId(value: string): OracleDataBySpecRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OracleDataBySpecRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OracleDataBySpecRequest): OracleDataBySpecRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OracleDataBySpecRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OracleDataBySpecRequest;
    static deserializeBinaryFromReader(message: OracleDataBySpecRequest, reader: jspb.BinaryReader): OracleDataBySpecRequest;
}

export namespace OracleDataBySpecRequest {
    export type AsObject = {
        id: string,
    }
}

export class OracleDataBySpecResponse extends jspb.Message {
    clearOracleDataList(): void;
    getOracleDataList(): Array<vega_oracles_v1_data_pb.OracleData>;
    setOracleDataList(value: Array<vega_oracles_v1_data_pb.OracleData>): OracleDataBySpecResponse;
    addOracleData(value?: vega_oracles_v1_data_pb.OracleData, index?: number): vega_oracles_v1_data_pb.OracleData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OracleDataBySpecResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OracleDataBySpecResponse): OracleDataBySpecResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OracleDataBySpecResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OracleDataBySpecResponse;
    static deserializeBinaryFromReader(message: OracleDataBySpecResponse, reader: jspb.BinaryReader): OracleDataBySpecResponse;
}

export namespace OracleDataBySpecResponse {
    export type AsObject = {
        oracleDataList: Array<vega_oracles_v1_data_pb.OracleData.AsObject>,
    }
}

export class GetRewardDetailsRequest extends jspb.Message {
    getPartyId(): string;
    setPartyId(value: string): GetRewardDetailsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRewardDetailsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRewardDetailsRequest): GetRewardDetailsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRewardDetailsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRewardDetailsRequest;
    static deserializeBinaryFromReader(message: GetRewardDetailsRequest, reader: jspb.BinaryReader): GetRewardDetailsRequest;
}

export namespace GetRewardDetailsRequest {
    export type AsObject = {
        partyId: string,
    }
}

export class GetRewardDetailsResponse extends jspb.Message {
    clearRewardDetailsList(): void;
    getRewardDetailsList(): Array<vega_vega_pb.RewardPerAssetDetail>;
    setRewardDetailsList(value: Array<vega_vega_pb.RewardPerAssetDetail>): GetRewardDetailsResponse;
    addRewardDetails(value?: vega_vega_pb.RewardPerAssetDetail, index?: number): vega_vega_pb.RewardPerAssetDetail;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRewardDetailsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRewardDetailsResponse): GetRewardDetailsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRewardDetailsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRewardDetailsResponse;
    static deserializeBinaryFromReader(message: GetRewardDetailsResponse, reader: jspb.BinaryReader): GetRewardDetailsResponse;
}

export namespace GetRewardDetailsResponse {
    export type AsObject = {
        rewardDetailsList: Array<vega_vega_pb.RewardPerAssetDetail.AsObject>,
    }
}

export class Checkpoint extends jspb.Message {
    getHash(): string;
    setHash(value: string): Checkpoint;
    getBlockHash(): string;
    setBlockHash(value: string): Checkpoint;
    getAtBlock(): number;
    setAtBlock(value: number): Checkpoint;

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
        hash: string,
        blockHash: string,
        atBlock: number,
    }
}

export class CheckpointsRequest extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckpointsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CheckpointsRequest): CheckpointsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckpointsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckpointsRequest;
    static deserializeBinaryFromReader(message: CheckpointsRequest, reader: jspb.BinaryReader): CheckpointsRequest;
}

export namespace CheckpointsRequest {
    export type AsObject = {
    }
}

export class CheckpointsResponse extends jspb.Message {
    clearCheckpointsList(): void;
    getCheckpointsList(): Array<Checkpoint>;
    setCheckpointsList(value: Array<Checkpoint>): CheckpointsResponse;
    addCheckpoints(value?: Checkpoint, index?: number): Checkpoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckpointsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CheckpointsResponse): CheckpointsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckpointsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckpointsResponse;
    static deserializeBinaryFromReader(message: CheckpointsResponse, reader: jspb.BinaryReader): CheckpointsResponse;
}

export namespace CheckpointsResponse {
    export type AsObject = {
        checkpointsList: Array<Checkpoint.AsObject>,
    }
}
