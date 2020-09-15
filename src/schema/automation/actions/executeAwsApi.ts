import { JsonLS } from "../../../ssmLanguageService";
import { SnippetDefinition } from "../../interfaces";

export const executeAwsApiInputs: JsonLS.JSONSchema = {
    description:
        "Calls and runs AWS API actions. Most API actions are supported, although not all API actions have been tested.",
    properties: {
        inputs: {
            properties: {
                Service: {
                    description: "The AWS service namespace that contains the API action that you want to run.",
                    type: "string",
                },
                Api: {
                    description: "The name of the API action that you want to run.",
                    type: "string",
                },
            },
            required: ["Service"],
        },
        outputs: {
            properties: {
                Name: {
                    description: "A name for the output.",
                    type: "string",
                },
                Selector: {
                    description: "The JSONPath to a specific attribute in the response object.",
                },
                Type: {
                    description: "The data type for the response element.",
                },
            },
            required: ["Name", "Type", "Selector"],
        },
    },
};
