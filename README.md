![Node + Express](https://miro.medium.com/max/1400/0*tCIiFzfAKsblfxnM.webp)

# _OlympicChannelMarsSurveillanceAPI_

# Introduction

For this API we have chosen to implement a VIP architecture (View Interactor Presenter) using Node.js as development language and Express as server.

In order to test the API we will use Postman.

We have decided for the way Express works, that the View layer is where, all the enpoints that this API can have are going to be declared.

In the Presenter layer we have developed the business logic of the API.

The Interactor layer will be in charge of processing the data from the API request and generating the final result that will be returned.

Also, we have created base classes for the Node libraries that will be used in the project, as well as bases for View, Interactor and Presenter.

The idea of these base classes is to organize the programmers' minds so that they always think in the sense of the architecture, so that the code that different programmers make always has the same base, for example: if they need a something they should write a dot sentence

```sh
presenter.
interactor.
library.
etc...
```

The intellisence should show you all the references that are being used in the project, which will generate a uniform code base for all programmers.

# Prerequisites

- Install Node.js and NPM more information [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Install VSCode more information [here](https://code.visualstudio.com/download)
- Install Posrman more information [here](https://www.postman.com/downloads/)

# Who to use it - Node area

First we must download the project to our local and download the .zip file and unzip it in the folder that suits you best.

Inside the .zip you will find 2 folders 

- src
- documentation

> Inside src you will find all the developed code.

> Inside documentation you will find everything that has been generated for this project (for example the Postam Collection file).

Open a console and then inside it go to the folder of your project and enter inside the src folder that you just unzipped.

Once inside the src folder execute this command in the console:

```sh
npm install
```

Then execute the command:

```sh
npm start
```

And in the console should be displayed:

```sh
dotenv-run-script ../.env - node
node obeIndex.js
Server listening on port 4142
```

This means that everything was successful.

# Who to use it - Postman's Area

Once the Postman program has been installed and opened, import the collection located in the documents folder.

The Postman collection has 2 post methods, just press send and you should get a result.

Collection variables have been used in Postman, to improve the scalability of the collection.

You can find more information on how to use Postman [here](https://learning.postman.com/docs/getting-started/introduction/) 

# Who to use it - Enviroments

We have added some security and environment control.

So for everything to work correctly you will need to generate an .env file (in the same folder you have de .gitnore or de readme).

In which you will need 2 variables:

```sh
PORT = Any port you want
API_KEY = 'Any API Key you want'.
```

You can find the ones we use in the Postman Collection configuration variables.

If you don't want to use the ones we use, remember to change them on both sides (Postman and .env).
