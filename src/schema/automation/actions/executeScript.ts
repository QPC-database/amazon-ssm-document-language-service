/*!
 * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import { JsonLS } from "../../../ssmLanguageService";

export const executeScriptInputs: JsonLS.JSONSchema = {
    description:
        "Runs the Python or PowerShell script provided, using the specified runtime and handler. (For PowerShell, the handler is not required.)\n\nCurrently, the aws:executeScript action contains the following preinstalled PowerShell Core modules.\n\n\tMicrosoft.PowerShell.Host\n\n\tMicrosoft.PowerShell.Management\n\n\tMicrosoft.PowerShell.Security\n\n\tMicrosoft.PowerShell.Utility\n\n\tPackageManagement\n\n\tPowerShellGet",
    properties: {
        inputs: {
            properties: {
                Runtime: {
                    description:
                        "The runtime language to be used for executing the provided script. Currently, aws:executeScript supports Python 3.6 (python3.6), Python 3.7 (python3.7), and PowerShell Core 6.0 (dotnetcore2.1) scripts.",
                    type: "string",
                    oneOf: [
                        {
                            enum: ["python3.6", "python3.7", "PowerShell Core 6.0"],
                        },
                        {
                            pattern: "^{{[ ]{0,1}[a-zA-Z_.]+[ ]{0,1}}}$",
                        },
                    ],
                },
                Handler: {
                    description:
                        "The entry for script execution, usually a function name. You must ensure the function defined in the handler has two parameters, events and context. (Not required for PowerShell.)",
                    type: "string",
                },
                InputPayload: {
                    description:
                        "A JSON or YAML object that will be passed to the first parameter of the handler. This can be used to pass input data to the script.",
                    type: ["string", "object"],
                },
                Script: {
                    description:
                        "An embedded script that you want to run during the automation execution. (Not supported for JSON documents.)",
                    type: ["string"],
                },
                Attachment: {
                    description:
                        "The name of a standalone script file or .zip file that can be invoked by the action. To invoke a file for python, use the filename.method_name format in Handler. For PowerShell, invoke the attachment using and inline script. Gzip is not supported.",
                    type: "string",
                },
            },
            required: ["Runtime"],
        },
    },
};