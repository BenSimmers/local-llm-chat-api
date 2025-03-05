# Local Large Language Model Chat API

## Description

A simple chat api where you can pass in your own local llm model and chat with it. As long as it is running on a url.

## Notes

- you can pass in your own configurations for your model, what are needed are these

```ts
type CreateOpenAiCompatibleConfigurationModelProps = {
  modelName?: string; // the model name e.g. gpt-3.5-turbo
  providerName?: string; // the provider name e.g. lmstudio or openai
  baseUrl?: string; // the base url of the model e.g. http://localhost:1234/v1
};
```

- This api assumes you are using an openai compatible model.

## Installation and Usage

```bash
pnpm install # make install
```

```bash
pnpm run dev # make start
```

```
open http://localhost:3000
```

## Endpoints

- `POST /api/get-completions` - send a message and configurations to the model.

````json
// Request Body
{
  "baseUrl": "http://localhost:1234/v1",
  "modelName": "llama-3.2-3b-instruct",
  "prompt": "What is the weather like today?",
  "history": [
    {
      "role": "user",
      "content": "Hello"
    },
    {
      "role": "assistant",
      "content": "Hello! It's nice to meet you. Is there something I can help you with or would you like to chat?"
    }
  ]
}


```json
// Response Body
{
  "userMessage": {
    "role": "user",
    "content": "What is the weather like today?"
  },
  "aiResponses": [
    {
      "role": "assistant",
      "content": [
        {
          "type": "text",
          "text": "I'm a large language model, I don't have real-time access to current weather conditions. However, I can suggest some ways for you to find out the weather in your area.\n\nYou can:\n\n1. Check online weather websites such as AccuWeather, Weather.com, or the National Weather Service (NWS) for current weather conditions and forecasts.\n2. Use a mobile app such as Dark Sky, Weather Underground, or The Weather Channel to get current weather conditions and forecasts.\n3. Tune into local news or weather reports on TV or radio to get the latest weather updates.\n\nIf you'd like, I can also provide general information about weather patterns or help you with a specific weather-related question."
        }
      ],
      "id": "msg-Ks7CHVNS7ro2kL6XdiBzesqN"
    }
  ]
}
````

- `GET /chathistory` - get the chat history

```json
// Response Body
{
  // nothing
}
```

```json
// response
{
  "messageHistory": [
    {
      "role": "user",
      "content": "Hello"
    },
    {
      "role": "assistant",
      "content": "Hello! It's nice to meet you. Is there something I can help you with or would you like to chat?"
    },
    {
      "role": "user",
      "content": "What is the weather like today?"
    },
    {
      "role": "assistant",
      "content": [
        {
          "type": "text",
          "text": "I'm a large language model, I don't have real-time access to current weather conditions. However, I can suggest some ways for you to find out the weather in your area.\n\nYou can:\n\n1. Check online weather websites such as AccuWeather, Weather.com, or the National Weather Service (NWS) for current weather conditions and forecasts.\n2. Use a mobile app such as Dark Sky, Weather Underground, or The Weather Channel to get current weather conditions and forecasts.\n3. Tune into local news or weather reports on TV or radio to get the latest weather updates.\n\nIf you'd like, I can also provide general information about weather patterns or help you with a specific weather-related question."
        }
      ],
      "id": "msg-Ks7CHVNS7ro2kL6XdiBzesqN"
    }
  ]
}
```
