# 48h challenge at Ynov Nantes

## What is the 48h challenge ? ##

The 48h Challenge is a challenge that lasts 48h. It takes place at Ynov Nantes Campus.
This year's subject was about creating an online marketplace to offer an alternative to Amazon and alikes, in order to offer to their clients a way to purchase and get their articles delivered. 
The goal was to set up a decentralized system that allows each merchant to keep their independency and apply their own economic policies.

## Our goals ##

To achieve this, we had to setup a `Proof of Concept` (PoC) for the website, as well as a network of small servers that can host different versions of the website on each server, and communicate between each other. 
In short, a client will be redirected to a server when connecting to the website. From this server, he is able to access every other instances of the website hosted to other servers. This is called a `Peer to Peer` (P2P) communication.

## Technical choices ##

Firstly, we chose to make a first draft, using HTML, PHP and CSS to take a look see at the website and check how it should look like.
We used `SQL` to build the database to stock all infos for each server separately.

After some time, we figured out it would be easier to go from HTML to `React`, whit `PostgreSQL` so we modified our existing drafts to work with React. 
As for the simulation of the network, we decided of an `API` that handles the database and the website. All of the API will then be linked to each other using an `HTTPS protocol` which grants a secured communication. 

Then, we can create paths to communicate, notably /api/newConnexion that is used to broadcast a new connection on the network to all servers. During each query, to allow a fast and responsive infrastructure, the data we got from that query is temporarily saved in the database server in order to give fast answers to the next request that needs these informations. It also allows for backup data in case we lose a server.

![image](https://user-images.githubusercontent.com/58112376/217385707-e1b2a311-4e02-4b8a-ae39-f6f95bf739a7.png)

## Quick rundown of the website ##

At first, the user is on a front page, where he can browse products shown on it. The user also have the option to log in, by clicking a button on the top header, which will create a pop-up with a form to insert his credentials. 

Next to the login button is the button allowing the user to create an account, and the button to log in as a merchant. Once you logged, you get the option to add items to your cart, and to consult your cart. 
If you logged in as a merchant, you get access to a page previewing all the orders you got and their status, and a page allowing you to add more items to your shop.

## About the database ##

The database is made of five tables : one for the client accounts, one for the merchants, one for the products, one for the orders and one for the products categorie.

The clients table holds every client's unique ID, name, mailing adress, password, country code and adress. 
The merchants table holds their unique ID, name, mailing adress, password, and if they are an administrator or blacklisted on this particular instance.

The products table holds the unique ID of the product, as well as the seller's ID and the product's category's ID. The name is there too, as well as the price, the amount of products the seller has, and a picture of the product. 
The orders table records all orders made on this particular instance of the platform. 

They are identified by a unique ID, the ID of the client making the purchase, as well as the ID of the product being purchased. The date of the purchase, the amount of products purchased and the status of the order are also stocked here.
To conclude, the tables categorie gives the name of the category of product, as well as a unique ID referenced in the products table.

![image](https://user-images.githubusercontent.com/58112376/217385456-69ec8e53-b7dc-410e-987e-6fdf7cd5af48.png)

## how to use it ##
Before clonning make sure you have installed [node.js](https://nodejs.org/en/) version 16 on your computer using these commands :

`nvm install 16`  
`nvm use 16`

At this step you should be able to clone the repository :

`git clone https://github.com/Matteo-Grellier/Challenge48h.git`

Now we can go on with serious business !

First open two terminals and tap in 1st terminal :

`cd Back`  
`npm install`  
`npm start`

2nd terminal :

`cd front`  
`npm install`  
`npm start`

Your online store should now be operational and accessible from your [browser](http://localhost:3000/).

## Authors ##

- Florien QUICY B2 INFO
- Mattéo GRELLIER B3 DEV
- Nathan BOURRY B2 INFO
- Sulien PAYRAUDEAU B1 INFO
- Etienne LEMEE B1 INFO
- Arthur MOULIN B3 DEV
