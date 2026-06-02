# What Is This?

This project presents a romantic message as an interactive chat. It supports configurable text, images, letters, and VLog-style video messages.

- Preview: https://calebman.github.io/girlfriend-gift-collection/chat-want-to-say/

# How To Customize It

## 1. Update The Environment Config

The `.env.*` files in this folder control the app title, base path, and chat content file.

| Config Key | Meaning | Notes |
| --- | --- | --- |
| `VITE_APP_TITLE` | Chat window title | Example: `Chatting with you` |
| `VITE_BASE_URL` | Base path for deployment | Use `/` for local root hosting |
| `VITE_CHAT_OPTIONS_PATH` | Chat content JSON path | Points to a file under `public` |

Example:

```properties
VITE_APP_TITLE=Chatting with you
VITE_BASE_URL=/
VITE_CHAT_OPTIONS_PATH=options/demo/chat.json
```

## 2. Edit The Chat Content

Chat content is a JSON array. Each item represents one message step.

| Key | Meaning | Type | Notes |
| --- | --- | --- | --- |
| `msgs` | Message content | Array | Supports text, images, letters, and VLog video messages |
| `msgInputSpeed` | Typing speed | Number | Milliseconds per typed unit |
| `triggerNextAction` | Action required before the next message | Object | Optional |
| `author` | Message owner | String | Use `me` to show the message on the user's side |

`triggerNextAction.type` can be:

- `userInput`: wait for the user to type matching text.
- `componentClose`: wait for a letter or video component to close.

When using `userInput`, the options are:

- `resolveKeyTexts`: accepted keywords.
- `rejectKeyTexts`: blocked keywords.
- `rejectHitTexts`: hints shown when the input does not match.

## 3. Examples

Plain text:

```json
{ "msgs": ["A normal message with typing animation"], "msgInputSpeed": 80 }
```

Text with backspace animation:

```json
{
  "msgs": ["This message will be replaced", "This is the final message"],
  "msgInputSpeed": 120
}
```

User input trigger:

```json
{
  "msgs": ["Do you want to hear something sweet?"],
  "msgInputSpeed": 40,
  "triggerNextAction": {
    "type": "userInput",
    "options": {
      "resolveKeyTexts": ["yes", "sure", "ok"],
      "rejectKeyTexts": ["no"],
      "rejectHitTexts": ["Please say yes.", "I am saying it anyway."]
    }
  }
}
```

Image:

```json
{ "msgs": ["<img src='options/demo/imgs/test.png'/>"] }
```

Letter:

```json
{
  "msgs": ["<letter src='options/demo/letters/test.json'/>"],
  "triggerNextAction": { "type": "componentClose" }
}
```

VLog video:

```json
{
  "msgs": ["<vlog src='options/demo/vlogs/test.mp4'/>"],
  "triggerNextAction": { "type": "componentClose" }
}
```

## 4. Run And Build

```bash
npm install
npm run dev
```

Build static files:

```bash
npm run build
```

The built site is generated in `dist`.
