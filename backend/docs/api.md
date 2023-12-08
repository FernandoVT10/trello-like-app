# API documentation

## Routes

#### Users
<details>
  <summary>
    <code><b>POST</b></code> <code>/api/users</code> <code>(Creates/Registers a user)</code>
  </summary>

##### Body
> | name       |  type    | data type                | description |
> |------------|----------|--------------------------|-------------|
> | `username` | required | `string` (maxLength: 25) | NONE        |
> | `password` | required | `string`                 | NONE        |

#### Responses
> | http code |  type              | response                |
> |-----------|--------------------|-------------------------|
> | `200`     | `application/json` | `{ data: { message: "User created successfully" } }` |
> | `400`     | `application/json` | [Validation Error](#validation-error) |
</details>

<details>
  <summary>
    <code><b>POST</b></code> <code>/api/users/login</code> <code>(Creates and returns a jsonwebtoken)</code>
  </summary>

##### Body
> | name       |  type    | data type                | description |
> |------------|----------|--------------------------|-------------|
> | `username` | required | `string` (maxLength: 25) | NONE        |
> | `password` | required | `string`                 | NONE        |

#### Responses
> | http code |  type              | response                |
> |-----------|--------------------|-------------------------|
> | `200`     | `application/json` | `{ data: { token: string } }` |
> | `400`     | `application/json` | [Validation Error](#validation-error) |
</details>

## Models

#### Validation Error
```json
{
  "errors": [{
    "message": string,
    "field": string
  }]
}
```
