# Netflix Clone

This project is a frontend version of Netflix developed using React. It uses The MovieDB Api to display the movies trailers.

![Netflix clone](https://raw.githubusercontent.com/veronicabraga/netflix-clone/master/src/home-netflix.png)

## User stories

 * User can create an account: `/signup`
 * User can login: `/` or `/login`
 * User can see which movies are available: `/movies/list`
 * User can click on a poster and watch the movie trailer: `/movies/play/ID`
 * User can access the profile page that contains name, email, picture and the last 5 movies trailers watched: `/profile`


## Run the applicattion

    You have three options to run the application locally: using npm, docker or docker-compose.

### Using npm

#### Install dependencies
    `npm install`

#### Run the server
    `npm start`

#### Access it at
    [http://localhost:3000](http://localhost:3000)

### Using docker

#### Build the image
  `docker build -t netflix-clone .`

#### Run the image
  `docker run -p 8080:3000 netflix-clone`

#### Access it at
    [http://localhost:8080](http://localhost:8080)

### Using docker-compose

#### Build the image
  `docker-compose build`

#### Run the application
  `docker-compose up`

#### Access it at
    [http://localhost:8080](http://localhost:8080)
