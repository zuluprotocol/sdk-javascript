// package: vega.wallet.v1
// file: vega/wallet/v1/wallet.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as vega_commands_v1_commands_pb from "../../../vega/commands/v1/commands_pb";
import * as vega_commands_v1_validator_commands_pb from "../../../vega/commands/v1/validator_commands_pb";
import * as vega_commands_v1_oracles_pb from "../../../vega/commands/v1/oracles_pb";

export class SubmitTransactionRequest extends jspb.Message {
    getPubKey(): string;
    setPubKey(value: string): SubmitTransactionRequest;
    getPropagate(): boolean;
    setPropagate(value: boolean): SubmitTransactionRequest;

    hasOrderSubmission(): boolean;
    clearOrderSubmission(): void;
    getOrderSubmission(): vega_commands_v1_commands_pb.OrderSubmission | undefined;
    setOrderSubmission(value?: vega_commands_v1_commands_pb.OrderSubmission): SubmitTransactionRequest;

    hasOrderCancellation(): boolean;
    clearOrderCancellation(): void;
    getOrderCancellation(): vega_commands_v1_commands_pb.OrderCancellation | undefined;
    setOrderCancellation(value?: vega_commands_v1_commands_pb.OrderCancellation): SubmitTransactionRequest;

    hasOrderAmendment(): boolean;
    clearOrderAmendment(): void;
    getOrderAmendment(): vega_commands_v1_commands_pb.OrderAmendment | undefined;
    setOrderAmendment(value?: vega_commands_v1_commands_pb.OrderAmendment): SubmitTransactionRequest;

    hasWithdrawSubmission(): boolean;
    clearWithdrawSubmission(): void;
    getWithdrawSubmission(): vega_commands_v1_commands_pb.WithdrawSubmission | undefined;
    setWithdrawSubmission(value?: vega_commands_v1_commands_pb.WithdrawSubmission): SubmitTransactionRequest;

    hasProposalSubmission(): boolean;
    clearProposalSubmission(): void;
    getProposalSubmission(): vega_commands_v1_commands_pb.ProposalSubmission | undefined;
    setProposalSubmission(value?: vega_commands_v1_commands_pb.ProposalSubmission): SubmitTransactionRequest;

    hasVoteSubmission(): boolean;
    clearVoteSubmission(): void;
    getVoteSubmission(): vega_commands_v1_commands_pb.VoteSubmission | undefined;
    setVoteSubmission(value?: vega_commands_v1_commands_pb.VoteSubmission): SubmitTransactionRequest;

    hasLiquidityProvisionSubmission(): boolean;
    clearLiquidityProvisionSubmission(): void;
    getLiquidityProvisionSubmission(): vega_commands_v1_commands_pb.LiquidityProvisionSubmission | undefined;
    setLiquidityProvisionSubmission(value?: vega_commands_v1_commands_pb.LiquidityProvisionSubmission): SubmitTransactionRequest;

    hasDelegateSubmission(): boolean;
    clearDelegateSubmission(): void;
    getDelegateSubmission(): vega_commands_v1_commands_pb.DelegateSubmission | undefined;
    setDelegateSubmission(value?: vega_commands_v1_commands_pb.DelegateSubmission): SubmitTransactionRequest;

    hasUndelegateSubmission(): boolean;
    clearUndelegateSubmission(): void;
    getUndelegateSubmission(): vega_commands_v1_commands_pb.UndelegateSubmission | undefined;
    setUndelegateSubmission(value?: vega_commands_v1_commands_pb.UndelegateSubmission): SubmitTransactionRequest;

    hasNodeRegistration(): boolean;
    clearNodeRegistration(): void;
    getNodeRegistration(): vega_commands_v1_validator_commands_pb.NodeRegistration | undefined;
    setNodeRegistration(value?: vega_commands_v1_validator_commands_pb.NodeRegistration): SubmitTransactionRequest;

    hasNodeVote(): boolean;
    clearNodeVote(): void;
    getNodeVote(): vega_commands_v1_validator_commands_pb.NodeVote | undefined;
    setNodeVote(value?: vega_commands_v1_validator_commands_pb.NodeVote): SubmitTransactionRequest;

    hasNodeSignature(): boolean;
    clearNodeSignature(): void;
    getNodeSignature(): vega_commands_v1_validator_commands_pb.NodeSignature | undefined;
    setNodeSignature(value?: vega_commands_v1_validator_commands_pb.NodeSignature): SubmitTransactionRequest;

    hasChainEvent(): boolean;
    clearChainEvent(): void;
    getChainEvent(): vega_commands_v1_validator_commands_pb.ChainEvent | undefined;
    setChainEvent(value?: vega_commands_v1_validator_commands_pb.ChainEvent): SubmitTransactionRequest;

    hasOracleDataSubmission(): boolean;
    clearOracleDataSubmission(): void;
    getOracleDataSubmission(): vega_commands_v1_oracles_pb.OracleDataSubmission | undefined;
    setOracleDataSubmission(value?: vega_commands_v1_oracles_pb.OracleDataSubmission): SubmitTransactionRequest;

    getCommandCase(): SubmitTransactionRequest.CommandCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubmitTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SubmitTransactionRequest): SubmitTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubmitTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubmitTransactionRequest;
    static deserializeBinaryFromReader(message: SubmitTransactionRequest, reader: jspb.BinaryReader): SubmitTransactionRequest;
}

export namespace SubmitTransactionRequest {
    export type AsObject = {
        pubKey: string,
        propagate: boolean,
        orderSubmission?: vega_commands_v1_commands_pb.OrderSubmission.AsObject,
        orderCancellation?: vega_commands_v1_commands_pb.OrderCancellation.AsObject,
        orderAmendment?: vega_commands_v1_commands_pb.OrderAmendment.AsObject,
        withdrawSubmission?: vega_commands_v1_commands_pb.WithdrawSubmission.AsObject,
        proposalSubmission?: vega_commands_v1_commands_pb.ProposalSubmission.AsObject,
        voteSubmission?: vega_commands_v1_commands_pb.VoteSubmission.AsObject,
        liquidityProvisionSubmission?: vega_commands_v1_commands_pb.LiquidityProvisionSubmission.AsObject,
        delegateSubmission?: vega_commands_v1_commands_pb.DelegateSubmission.AsObject,
        undelegateSubmission?: vega_commands_v1_commands_pb.UndelegateSubmission.AsObject,
        nodeRegistration?: vega_commands_v1_validator_commands_pb.NodeRegistration.AsObject,
        nodeVote?: vega_commands_v1_validator_commands_pb.NodeVote.AsObject,
        nodeSignature?: vega_commands_v1_validator_commands_pb.NodeSignature.AsObject,
        chainEvent?: vega_commands_v1_validator_commands_pb.ChainEvent.AsObject,
        oracleDataSubmission?: vega_commands_v1_oracles_pb.OracleDataSubmission.AsObject,
    }

    export enum CommandCase {
        COMMAND_NOT_SET = 0,
        ORDER_SUBMISSION = 1001,
        ORDER_CANCELLATION = 1002,
        ORDER_AMENDMENT = 1003,
        WITHDRAW_SUBMISSION = 1004,
        PROPOSAL_SUBMISSION = 1005,
        VOTE_SUBMISSION = 1006,
        LIQUIDITY_PROVISION_SUBMISSION = 1007,
        DELEGATE_SUBMISSION = 1008,
        UNDELEGATE_SUBMISSION = 1009,
        NODE_REGISTRATION = 2001,
        NODE_VOTE = 2002,
        NODE_SIGNATURE = 2003,
        CHAIN_EVENT = 2004,
        ORACLE_DATA_SUBMISSION = 3001,
    }

}
