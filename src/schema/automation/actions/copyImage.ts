import { JsonLS } from "../../../ssmLanguageService";
import { SnippetDefinition } from "../../interfaces";

export const copyImageInputs: JsonLS.JSONSchema = {
    description: "Copies an AMI from any region into the current region. This action can also encrypt the new AMI.",
    properties: {
        inputs: {
            properties: {
                SourceRegion: {
                    description: "The region where the source AMI currently exists.",
                    type: "string",
                },
                SourceImageId: {
                    description: "The AMI ID to copy from the source region.",
                    type: "string",
                },
                ImageName: {
                    description: "The name for the new image.",
                    type: "string",
                },
                ImageDescription: {
                    description: "A description for the target image.",
                    type: "string",
                },
                Encrypted: {
                    description: "Encrypt the target AMI.",
                    type: ["string", "boolean"],
                },
                KmsKeyId: {
                    description:
                        "The full Amazon Resource Name (ARN) of the AWS Key Management Service CMK to use when encrypting the snapshots of an image during a copy operation.",
                    type: "string",
                },
                ClientToken: {
                    description: "A unique, case-sensitive identifier that you provide to ensure request idempotency.",
                    type: "string",
                },
            },
            required: ["SourceRegion", "SourceImageId", "ImageName"],
        },
        outputs: {
            properties: {
                ImageId: {
                    description: "The ID of the copied image.",
                },
                ImageState: {
                    description: "The state of the copied image.",
                },
            },
        },
    },
};
