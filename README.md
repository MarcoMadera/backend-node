# Chat App 

### Wiki Methods
#### User

##### get
```javascript
'/user/'                        //Response: User list
`/user/?user=${userName}`       //Response: User info
```
##### post
```javascript
'/user/'
```
```json
{
  "user": "'userName'"
}
```
##### patch
```javascript
'/user/userId'
```
```json
{
  "user": "'userName'"
}
```
##### delete
```javascript
'/user/userId'
```
#### Message

##### get
```javascript
'/message/'                     //Response: Message list
`/message/?chat=${chatId}`      //Response: Chat Messages
```
##### post
```javascript
'/message/'
```
```json
{
  "chat": "'chatId'",
	"user": "userId",
	"message": "String"
}
```
##### patch
```javascript
'/message/messageId'
```
```json
{
  "chat": "'chatId'",
	"user": "userId",
	"message": "String"
}
```
##### delete
```javascript
'/message/messageId'
```
#### Chat

##### get
```javascript
`/chat/{userId}`      //Response: user chats
```
##### post
```javascript
'/chat/'
```
```json
{
	"name": "StringName",
  "users": ["UsersIdArray","UserId"]
}
```
##### patch
```javascript
'/chat/chatId'
```
```json
{
	"name": "StringName",
  "users": ["UsersIdArray","UserId"]
}
```
##### delete
```javascript
'/chat/chatId'
```