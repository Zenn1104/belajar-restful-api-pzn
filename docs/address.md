# Address Api Spec

## Create Address API

Endpoint : POST api/contacts/:contactId/addresses

Headers : 
-Authorization : token

Request Body :

```json 
{
    "street" : "jalan apa?",
    "city" : "Kota Mana?",
    "province" : "Provinsi apa?",
    "country" : "Negara Mana?",
    "postal code" : "Kode pos"
}
```

Response Body Success :

```json
{
    "data" : {
        "id" : 1,
        "street" : "jalan apa?",
        "city" : "Kota Mana?",
        "province" : "Provinsi apa?",
        "country" : "Negara Mana?",
        "postal code" : "Kode pos"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Country is required"
}
```


## Update Address API

Endpoint : PUT api/contacts/:contactId/addresses/:address:id

Headers : 
-Authorization : token

Request Body :

```json
{
    "street" : "jalan apa?",
    "city" : "Kota Mana?",
    "province" : "Provinsi apa?",
    "country" : "Negara Mana?",
    "postal code" : "Kode pos"
}
```


Response Body Success :

```json
{
    "data" :{
        "id" : 1,
        "street" : "jalan apa?",
        "city" : "Kota Mana?",
        "province" : "Provinsi apa?",
        "country" : "Negara Mana?",
        "postal code" : "Kode pos"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Country Is required"
}
```

## Get Address API

Endpoint : POST api/contacts/:contactId/addresses/:addressId

Headers : 
-Authorization : token



Response Body Success :

```json
{
    "data" : {
        "id" : 1,
        "street" : "jalan apa?",
        "city" : "Kota Mana?",
        "province" : "Provinsi apa?",
        "country" : "Negara Mana?",
        "postal code" : "Kode pos"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Contact Is not found"
}
```

## List Address API

Endpoint : GET api/contacts/:contactId/addresses

Headers : 
-Authorization : token

Response Body Success :

```json
{
    "data" : [
        {
        "id" : 1,
        "street" : "jalan apa?",
        "city" : "Kota Mana?",
        "province" : "Provinsi apa?",
        "country" : "Negara Mana?",
        "postal code" : "Kode pos"
        },
        {
        "id" : 1,
        "street" : "jalan apa?",
        "city" : "Kota Mana?",
        "province" : "Provinsi apa?",
        "country" : "Negara Mana?",
        "postal code" : "Kode pos"
        },        
    ]
}
```

Response Body Error :

```json
{
    "errors" : "Contact is not found"
}
```

## Remove Address API

Endpoint : DELETE api/contacts/:contactId/addresses/:addressId

Headers : 
-Authorization : token

Response Body Success :

```json
{
    "data" : "OK"
}
```

Response Body Error :

```json
{
    "errors" : "Address is not found"
}
```
