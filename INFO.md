# ReactJS-Project
Web application for sharing animals for adoption with authentication and authorization functionality and CRUD (Create, Read, Update, and Delete) operation.

### Public part (Accessible without authentication)
* Home Page
* Wait List Page 
* Pet Details Page 
* Login/Register Page 

### Private part (Available for Registered Users)
#### Logged in users have access to the following:
* Create Pet Page
* Add Comment 
#### Logged in user (author) have access to the following:
* Edit PetPage
* Delete Option 

## Technical information:
### Client side
#### Public folder:
* __images__ (folder with used images)
* __styles__ (folder with CSS files)
* __index.html__ ("root" element of the App)

#### Source folder:
__Components__
* Catalog - Page with a Collection of all added items
* CreatePet - Page with a form for Create a new item
* EditPet - Page with a form for Edit existing item
* Footer - Footer on the page
* Header - Navigation between the pages 
* Home - Home page
* Login - Page with a form Login with existing credentials and validation
* Logout - Logout from your profile
* NotFound - Page 404
* PetDetails - Page with details for item
    - Add Comment - form for adding a new comment
* Register - Page with form Register for new clients and validation
* common 
    - PetOwner - check the owner
    - RouterGuard - navigation if authenticated

__Context__
* AuthContext
    - AuthProvider (for authentication states)
    - onLoginSubmit
    - onRegisterSubmit
    - onLogout 
* PetContext
    - PetProvider
    - onCreatePetSubmit
    - onPetEditSubmit
    - deletePet
    - getPet

__Hooks__
* useForm (managing states)
* useLocalStorage (save current user session)
* useService (managing authentication for pet item)

__Reducer__
* petReduser (use the dispatch function to determine how to update the state based on the action type)

__Services__ - functions that make requests 
* authService (performing authentication-related actions such as login, register, and logout)
* commentService (retrieving all comments related to a pet and creating new comments)
* petService (a service object that contains methods for performing CRUD operations)
* requester (creating HTTP requests)

__App__ - Set up the structure and routing of an application, with different components rendered based on the current URL path. It also includes features like authentication protection and pet ownership validation for specific routes.

__index.js__ - The start of the application

### Server side - Practice Server

### Usage

This is a **REST service**. To execute it, manually open a command prompt and run `node server.js`.

### Services

Note that changes to the data **will not be persisted**! All operations happen in memory and will be wiped when the service is restarted.

### JSON Store

#### Configuration
*The JSON Store service does NOT use authentication - everything is fully accessible without any credentials. Use the Collections service if you need authentication.*

This service dynamically loads collections from the `./data/` folder, located with the server. Any JSON file in this folder will be accessible via requests.

#### CRUD Operations

All requests are sent to `/jsonstore/:resource`. Resources can be nested and have any shape. Individual properties can be accessed by appending `/:propName` to the endpoint as deep as you require. Supported requests are `GET`, `POST`, `PUT`, `PATCH`, `DELETE`

### Authentication

The service is initialized with three users, which can be used for immediate testing:
* peter@abv.bg : 123456
* george@abv.bg : 123456
* admin@abv.bg : admin

#### Register
Create a new user by sending a `POST` request to `/users/register` with properties `email` and `password`. You can add any other property that you need, like username, avatar, etc. The service automatically creates a session and returns an authorization token, that can be used for requests.

#### Login
Login by sending a `POST` request with `email` and `password` to `/users/login`. The service will respond with an object, containing a standard string token, that can be used for requests.

#### Logout
Send an authorized `GET` request to `/users/logout`. **The service returns an empty response - if you attempt to parse it as JSON, you will receive an error!** You can check for this type of response by looking at the **status** (204 instead of 200) and the **content-type header** (will not be present).

#### Get User Details
Send an authorized `GET` request to `/users/me`. The service will return the record of the user, associated with the passed-in session token.

#### Authorized Requests
To make an authorized request, add the following header, where `{token}` is the access token, returned by the service upon successful login or registration:
```
X-Authorization: {token}
```

#### Admin Override
Any request which includes the `X-Admin` header will be **granted full access** to any resource inside the **Collections** service. The only exception is if the request has an invalid session token, which still throws a 403 with the appropriate message.

### Collections


This service uses authentication - reading resources is public, but creating, updating and deleting can only be performed by authorized users. Additionally, only the original creator of a resource can edit or delete it.

#### CRUD Operations

Send requests to `/data/:collection` with appropriate method and headers. All operations, except for Read, require an authorization header to be present on the request (see the [Authentication](Authentication) section on how to obtain a valid token).

