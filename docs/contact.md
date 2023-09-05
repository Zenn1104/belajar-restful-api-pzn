# Contact Api Spec

## Create Contact API

Endpoint : POST /api/contacts

Header : 
-Authorization : token

Request Body : 

```json
{
    "first_name" : "Baso",
    "Last_name" : "Alif",
    "email" : "alif@gmail.com",
    "phone" : "082374403"
}
```

Request Body Success:

```json
{
    "data" : {
        "id" : 1,
        "first_name" : "Baso",
        "Last_name" : "Alif",   
        "email" : "alif@gmail.com",
        "phone" : "082374403"
    }
}
```

Request Body Error :

```json
{
    "errors" : "Email is not valid format"
}
```

## Update Contact API

Endpoint : PUT /api/contacts/:id

Header : 
-Authorization : token

Request Body : 

```json
{
    "first_name" : "Baso",
    "Last_name" : "Alif",
    "email" : "alif@gmail.com",
    "phone" : "082374403"
}
```

Request Body Success:

```json
{
    "data" : {
        "id" : 1,
        "first_name" : "Baso",
        "Last_name" : "Alif",   
        "email" : "alif@gmail.com",
        "phone" : "082374403"
    }
}
```

Request Body Error :

```json
{
    "errors" : "Email Is Not Valid Format"
}
```

## Get Contact API

Endpoint : GET /api/contacts/:id

Header : 
-Authorization : token


Request Body Success:

```json
{
    "data" : {
        "id" : 1,
        "first_name" : "Baso",
        "Last_name" : "Alif",   
        "email" : "alif@gmail.com",
        "phone" : "082374403"
    }
}
```

Request Body Error :

```json
{
    "errors" : "Contact Is not found"
}
```

## Search Contact API

Endpoint : GET /api/contacts

Header : 
-Authorization : token

Query Params :
- name : Search by first_name or last_name,using like, optional
- email : Search by email using like, optional
- phone : Search by phone using like, optional
- page : number of page , default 1
- size : size per page, default 10


Request Body Success:

```json
{
    "data" : [
        {
            "id" : 1,
            "first_name" : "Baso",
            "Last_name" : "Alif",
            "email" : "alif@gmail.com",
            "phone" : "0809485504"
        },
        {
            "id" : 1,
            "first_name" : "Baso",
            "Last_name" : "Alif",
            "email" : "alif@gmail.com",
            "phone" : "0809485504"
        },
        "paging" : {
            "page" : 1,
            "total_page" : 3,
            "total_item" : 30
        }
    ]
}
```

Request Body Error :


## Remove Contact API

Endpoint : DELETE /api/contacts/:id

Header : 
-Authorization : token

Response Body Success: 

```json
{
    "data" : "OK"
}
```

Response Body Error : 

```json
{
    "errors" : "Contact Is NOT FOUND"
}
```