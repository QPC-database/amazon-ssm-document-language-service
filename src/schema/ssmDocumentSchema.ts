/*!
 * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import { JsonLS } from "../ssmLanguageService";

export const ssmDocumentSchema: JsonLS.JSONSchema = {
    $schema: "http://json-schema.org/draft-07/schema",
    title: "JSON schema for AWS Automation Documents",
    type: "object",
    required: ["schemaVersion", "mainSteps"],
    properties: {
        schemaVersion: {
            type: "string",
            description: "The schema version to use.",
            enum: ["0.3"],
        },
        description: {
            type: "string",
            description: "Information you provide to describe the purpose of the document.",
        },
        assumeRole: {
            type: "string",
            description: "The ARN of the role that allows Automation to perform the actions on your behalf.",
        },
        parameters: {
            type: "object",
            description:
                "A structure that defines the parameters the document accepts. For parameters that you reference often, we recommend that you store those parameters in Systems Manager Parameter Store and then reference them. You can reference String and StringList Parameter Store parameters in this section of a document. You can't reference SecureString Parameter Store parameters in this section of a document. For more information, see AWS Systems Manager Parameter Store.",
            patternProperties: {
                "^.*$": { type: "object" },
            },
            additionalProperties: false,
        },
        mainSteps: {
            type: "array",
            description:
                "An array that can include multiple steps. Steps run in sequential order as listed in the document.",
            items: { type: "object" },
            minItems: 1,
        },
        outputs: {
            type: "array",
            description:
                'Data generated by the execution of this document that can be used in other processes. For example, if your document creates a new AMI, you might specify "CreateImage.ImageId" as the output value, and then use this output to create new instances in a subsequent automation execution.',
            items: {
                type: "string",
            },
        },
        files: {
            type: "object",
            description:
                'The script files (and their checksums) attached to the document and run during an automation execution. Applies only to documents that include the "aws:executeScript" action and for which attachments have been specified in one or more steps.',
            patternProperties: {
                "^.*$": { type: "object" },
            },
            additionalProperties: false,
        },
    },
    additionalProperties: false,
};