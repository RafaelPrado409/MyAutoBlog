MyAutoBlog Backend

![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-07405E?style=for-the-badge&logo=typeorm&logoColor=white)

### Yarn

 ``` 
yarn 
``` 
to install all dependences

 ``` 
 yarn start 
 ``` 
 to start the application after install the dependences
 
 ```
 yarn typeorm migrations:run
 ```
 to create tables in SQLite DB
 
### NPM

```
npm install
``` 
to install all dependences
```
npm run start
``` 
 to start the application after install the dependences**
  ```
 npm run typeorm migrations:run
 ```
 to create tables in SQLite DB
 
 
 # Routes
 
 ### User
 ```
 http://localhost:3333/users POST: Create user
 
 body JSON:
 {
  "name": "Rafael",
	"email":"rafael@email.com",
	"password":"123456"
 }
 ```
 ```
 http://localhost:3333/id GET: List User
 ```
 ```
 http://localhost:3333/ GET: List Users
 ```
 ### Post
 ```
 http://localhost:3333/posts POST: Create Posts
 
 body: Multipart:
 
 title: My post
 body: Post to test the API
 images: myphoto.jpg
 ```
 
 ```
 http://localhost:3333/posts GET: List Posts
 ```
 ```
 http://localhost:3333/posts/id GET: List Post
 ```
 ```
 http://localhost:3333/posts/id PUT: Update Post
 ```
 ```
 http://localhost:3333/posts/id DELETE: Delete Post
 ```
 ### Images
 ```
 http://localhost:3333/posts/id/updateImg PUT: Update post images
 
 body: Multipart
 
 images: myphoto.jpg
 ```
 ```
 http://localhost:3333/users/updateAvatar PATCH: Update user avatar
 
 body: Multipart
 
 avatar: myphoto.jpg
 ```
