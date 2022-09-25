# user activity project

A project with the idea to grab information about a user from multiple sources

## Finished integrations

- spotify

## Available endpoints

- /authorization/spotify
- /authorization/spotify/callback
- /me/activity/spotify

## Environment file

```
PORT=3001

SPOTIFY_AUTHORIZATION_URL=https://accounts.spotify.com
SPOTIFY_BASEURL=https://api.spotify.com/v1
SPOTIFY_CLIENTID=
SPOTIFY_CLIENTSECRET=
SPOTIFY_REDIRECTURI=http://localhost:3001/authorization/spotify/callback
```
