/*!
 * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import { JsonLS } from "../../../ssmLanguageService";

export const deleteImageInputs: JsonLS.JSONSchema = {
    description: "Deletes the specified image and all related snapshots.",
    properties: {
        inputs: {
            properties: {
                ImageId: {
                    description: "The ID of the image to be deleted.",
                    type: "string",
                },
            },
            required: ["ImageId"],
        },
    },
};