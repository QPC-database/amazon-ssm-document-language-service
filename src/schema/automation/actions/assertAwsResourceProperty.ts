/*!
 * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import { JsonLS } from "../../../ssmLanguageService";

export const assertAwsResourcePropertyInputs: JsonLS.JSONSchema = {
    description:
        "The aws:assertAwsResourceProperty action enables you to assert a specific resource state or event state for a specific Automation step.",
    properties: {
        inputs: {
            properties: {
                Service: {
                    description:
                        "The AWS service namespace that contains the API action that you want to run. For example, the namespace for Systems Manager is ssm. The namespace for Amazon EC2 is ec2. You can view a list of supported AWS service namespaces in the Available Services section of the AWS CLI Command Reference.",
                    type: "string",
                },
                Api: {
                    description:
                        "The name of the API action that you want to run. You can view the API actions (also called methods) by choosing a service in the left navigation on the following Services Reference page. Choose a method in the Client section for the service that you want to invoke. For example, all API actions (methods) for Amazon Relational Database Service (Amazon RDS) are listed on the following page: Amazon RDS methods.",
                    type: "string",
                },
                PropertySelector: {
                    description:
                        "The JSONPath to a specific attribute in the response object. You can view the response objects by choosing a service in the left navigation on the following Services Reference page. Choose a method in the Client section for the service that you want to invoke.",
                },
                DesiredValues: {
                    description:
                        "The expected status or state on which to continue the Automation workflow. If you specify a Boolean value, you must use a capital letter such as True or False.",
                },
            },
            additionalProperties: {
                description:
                    "One or more API action inputs. You can view the available inputs (also called parameters) by choosing a service in the left navigation on the following Services Reference page. Choose a method in the Client section for the service that you want to invoke.",
            },
            required: ["Service", "Api", "PropertySelector", "DesiredValues"],
        },
    },
};
