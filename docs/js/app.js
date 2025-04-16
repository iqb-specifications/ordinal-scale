
    const schema = {
  "asyncapi": "2.5.0",
  "info": {
    "title": "ordinal-scale",
    "description": "Scheme to translate numeric values into categories. Used in proficiency level models.",
    "license": {
      "name": "CC0 1.0",
      "url": "https://creativecommons.org/publicdomain/zero/1.0/"
    },
    "version": " - click on schema id to expand",
    "contact": {
      "name": "Home of iqb-specifications (German only)",
      "url": "https://iqb-specifications.github.io/"
    }
  },
  "channels": {
    "iqb_data_structures": {
      "subscribe": {
        "operationId": "Please select one schema",
        "message": {
          "messageId": "select_schema",
          "x-parser-message-name": "select_schema"
        }
      }
    }
  },
  "components": {
    "schemas": {
      "metadata-values": {
        "$id": "ordinal-scale@iqb-standard@0.2",
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Ordinal Scales",
        "description": "Scheme to translate numeric values into categories. Used in proficiency level models.",
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "Identifier for the scheme",
            "minLength": 1,
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "description": {
            "type": "array",
            "description": "Used for storing text. This type applies also in cases when only one language is used.",
            "items": {
              "type": "object",
              "properties": {
                "lang": {
                  "type": "string",
                  "minLength": 1,
                  "description": "ISO-language code",
                  "pattern": "^[a-z]{2}$",
                  "x-parser-schema-id": "<anonymous-schema-4>"
                },
                "value": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-5>"
                }
              },
              "required": [
                "lang",
                "value"
              ],
              "x-parser-schema-id": "<anonymous-schema-3>"
            },
            "minItems": 1,
            "x-parser-schema-id": "<anonymous-schema-2>"
          },
          "categories": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "minimal_value": {
                  "type": "number",
                  "description": "The category applies to values at least of that value",
                  "x-parser-schema-id": "<anonymous-schema-8>"
                },
                "lower_than_value": {
                  "type": "number",
                  "description": "The category applies to values lower than that",
                  "x-parser-schema-id": "<anonymous-schema-9>"
                },
                "label": "$ref:$.components.schemas.metadata-values.properties.description",
                "description": "$ref:$.components.schemas.metadata-values.properties.description"
              },
              "x-parser-schema-id": "<anonymous-schema-7>"
            },
            "minItems": 1,
            "x-parser-schema-id": "<anonymous-schema-6>"
          }
        },
        "required": [
          "id",
          "categories"
        ],
        "definitions": {
          "multi_language_text": "$ref:$.components.schemas.metadata-values.properties.description"
        },
        "x-parser-schema-id": "ordinal-scale@iqb-standard@0.2"
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":false},"sidebar":{"showOperations":"byDefault"},"showOperations":false};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  