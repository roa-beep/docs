---
sidebar_position: 2.1
---

# Tokens

Rivet heavily relies on different types of tokens for controlling access to the API. Token are portable and flexible, which lets you use our API in whatever way works best for your project. Tokens often contain information about who is making the request, such as the player ID or the game namespace.

The token label is the text before the first `.` in the token. For example, in the token `player.eyJ0eXAi.foo.bar`, the label is `player`.

Rivet tokens are a variation on the JWT spec that uses Protobufs under the hood & include a label to help you identify the token. We don't provide a public way of inspecting the token at the moment.

## Cloud

Label: `cloud`

### Where does it come from?

## Game Client

Label: `TODO`

### Where does it come from?

Public namespace tokens are used on game clients to 

### Where it can be used?

### Sensitivity

## Game Namespace Development

Rename: Game Development (Client & Lobby)

Label: `TODO`

## Matchmaker Lobby

Label: `TODO`

## Matchmaker Player

Label: `TODO`

## Matchmaker Player (Development)

Label: `TODO`

## Identity

Label: `TODO`

## Identity Link

Label: `TODO`


## Party Invite

Label: `TODO`

## Upload File

Label: `TODO`

