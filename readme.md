# Adopt a Pet

#Link: https://petify-official.herokuapp.com/

## Description

An app where users can put their pets for adoption for a short period of time. As a user you can adopt or give in adoption for a short period of time.
 
## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage so that I can see all the events that I could attend
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **events list** - As a user I want to see all animals available so that I can choose which ones I want to adopt
- **events create** - create new animal (for adoption) or adopt
- **events detail** - As a user I want to see the animal details and so that I can decide if I want to adopt
- **event attend** - As a user I want to be able to attend to event so that the organizers can count me in

## Backlog

List of other features outside of the MVPs scope

User profile:
- see my profile
- upload my pictures
- see other users profile
- reviews
- ads
- add matias to the credits

Geo Location:
- add geolocation to events when creating
- show event in a map in event detail page
- show all events in a map in the event list page



## ROUTES:

|Method|URL|Description|
|---|---|---|
GET | auth/login | redirects to / if user logged in. Renders the login form (with flash msg)
POST | /auth/login | redirects to / if user logged in

```
body:
    - username
    - password
```
|Method|URL|Description|
|---|---|---|
GET | /auth/signup| redirects to / if user logged in. Renders the signup form (with flash msg)
POST| /auth/signup| redirects to / if user logged in

```
body:
    - username
    - email
    - password
    - isOwner 
```
|Method|URL|Description|
|---|---|---|
POST | /auth/logout| redirects to / if user logged in. Renders the signup form (with flash msg)

|Method|URL|Description|
|---|---|---|
GET | /   |renders the homepage
GET | /pets | renders the pet list
GET | /create | renders the pet-create form
POST | /create | redirects to /homepage
```
body: 
    - name
    - description
    - date (default)
    - age
```
|Method|URL|Description|
|---|---|---|
GET | /pets/:id | renders the pet detail page. Includes info of dog/owner. Confirm button takes u to your profile and removes pet from list. Back button takes you back to list
POST | /pets/:id / updates the status of the detail page
GET | /profile | 


## Models

```
User model
- username: String
- mail: String
- password: String
- pet: ObjectId<Pet>
- reviews: []

```
```
Pet model
- owner: ObjectId<User>
- name: String
- description: String
- date: Date (default)
- days
- location: String
```
```
Adoption model
- isAdopted
- 

```
``` 

## Links

### Trello

[Link to your trello board](https://trello.com) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)


