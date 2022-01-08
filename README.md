# nodogoro-screening

## Why?

- Why agora?

  1.  it was had all the feature I needed
  2.  it looked like the friendliest option to get started with

- Why didn't use ui-component library?
  1. I wanted to get this done under 3h & using UI I would've been distracted making it look nicer

## Getting Started locally

- [Agora account](https://www.agora.io/en/)
- Create new app & generate token
- in src/constants.js you will need to update the values for agoraAppID, agoraAppToken, channelName
- in src/constants.js add your firebase project config

## Improvements

- Load more for text chat
- Add identity
- add auto-format on commit with 'pre-commit'
- Multiple "chat sessions" instead of everything dumbing in on collection on firebase
  create new chatGroup & expire collection after a white
