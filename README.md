# Chat App

### Wiki Methods

#### User

##### get

```javascript
"/user/" //Response: User list
`/user/?user=${userName}`; //Response: User info
```

##### post

```javascript
"/user/";
```

```json
{
  "user": "userName"
}
```

##### patch

```javascript
"/user/userId";
```

```json
{
  "user": {
    "_id": "654db8bf729fab06122ac58a",
    "name": "Marco 2"
  }
}
```

##### delete

```javascript
"/user/userId";
```

#### Message

##### get

```javascript
"/message/" //Response: Message list
`/message/?chat=${chatId}`; //Response: Chat Messages
```

##### post

```javascript
"/message/";
```

```json
{
  "chat": {
    "_id": "654dba33729fab06122ac596",
    "name": "myChat"
  },
  "user": {
    "_id": "654db8bf729fab06122ac58e",
    "name": "Marco"
  },
  "message": "My message"
}
```

##### patch

```javascript
"/message/messageId";
```

```json
{
  "chat": {
    "_id": "654dba33729fab06122ac596",
    "name": "myChat"
  },
  "user": {
    "_id": "654db8bf729fab06122ac58e",
    "name": "Marco"
  },
  "message": "My message"
}
```

##### delete

```javascript
"/message/messageId";
```

#### Chat

##### get

```javascript
`/chat/{userId}`; //Response: user chats
```

##### post

```javascript
"/chat/";
```

```json
{
  "name": "StringName",
  "users": [
    {
      "_id": "654db8bf729fab06122ac58e",
      "name": "Marco 1"
    },
    {
      "_id": "654db8bf729fab06122ac58a",
      "name": "Marco 2"
    }
  ]
}
```

##### patch

```javascript
"/chat/chatId";
```

```json
{
  "name": "StringName",
  "users": [
    {
      "_id": "654db8bf729fab06122ac58e",
      "name": "Marco 1"
    },
    {
      "_id": "654db8bf729fab06122ac58a",
      "name": "Marco 2"
    }
  ]
}
```

##### delete

```javascript
"/chat/chatId";
```
