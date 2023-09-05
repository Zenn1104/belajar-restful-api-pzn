# USER API SPEC

## Register User Api

Endpoint : POST /api/users

Request Body : 

```json
{
    "username" : "BAG",
    "password" : "rahasia",
    "name" : "Baso M Alif"
}
```

Response Body Success:

```json
{
    "data" : {
        "username" : "BAG",
        "name" :"Baso M Alif"
    }
}
```

Response Body Error : 

```json
{
    "errors" : "Username Already Registred"
}
```

## Login User Api

Endpoint : POST /api/users/login

Request Body :

```json
{
    "username" : "BAG" ,
    "password" : "rahasia"
}
```

Response Body Success :

```json
{
    "data" : {
        "token" : "unique-token"
    }
}
```

Response Body Error : 

```json
{
    "errors" : "Username or Password wrong
}
```

## Update User Api

Endpoint : PATCH /api/users/current

Headers : 
- Authorization : token

Request Body : 

```json
{
    "name" : "Baso M Alif Updated", //optional
    "password" : "new password" //optional
}
```

Response Body Success :

```json
{
    "data" : {
        "username" : "BAG",
        "name" : "Baso M Alif Updated",
    } 
}
```

Response Body Error : 

```json
{
    "errors" : "Name length max 100"
}
```

## Get User Api

Endpoint : GET /api/users/current

Header : 
- Authorization : token

Response Body Success:

```json
{
    "data" : {
        "username" : "BAG",
        "name" : "Baso M Alif"
    }
}
```

Response Body Error : 

```json
{
    "errors" : "Unauthorized"
}
```

## Logout User Api

Endpoint : DELETE /api/users/logout

Header : 

-Authtorization : token

Response Body Success : 

```json
{
    "data" : "OK"
}
```


Response Body Error : 

```json
{
    "errors" : "Unauthorized"
}
```