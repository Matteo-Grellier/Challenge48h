# 48h challenge at Ynov Nantes

## what is the 48h challenge ? ##

the 48h Challenge is a challenge that last 48h. It takes place at Ynov Nantes Campus.
This year's subject was about creating an online marketplace to offer an alternative to Amazon and the likes, in order to offer to their clients a way to purchase and get their articles delivered. 
the goal was to set up a decentralised system that allow each merchant to keep their independency and apply their own economic policies.

## Our goals ##
To achieve this, we had to setup a **Proof of Concept** (PoC) for the website, as well as a network of small servers that can host different versions of the website on each server, and communicate between each other. 
In short, a client would connect on the website, and be redirected towards a server. From this server, he is able to access every other instances of the website that are hosted to other servers. this is called a **Peer to Peer** (P2P) communication.

## Technical choices ##
At first, we chose to make a first draft, using HTML, PHP and CSS to roughly see how the website should look like.
We used **SQL** to slowly build the database to stock all infos for each server separately.
after some time, we figured out it would be easier to revert from HTML to **React**, so we modified our existing drafts to work with React. 
As for the simulation of the network, whe decided for an **API** that handles the database and the website. Each API will then be linked to each other, using an **HTTPS protocol** to allow for a secured communication. Then, we can create paths to communicate, notably /api/newConnexion that is used to broadcast a new connection on the network to all the servers. During each query, to allow for a fast and responsive infrastructure, the data we got from that quesry is temporarely saved in the server database in order to answer faster to the next request that needs these informations. It also allows for backup data in the case were we lose a server. 

## Quick Rundown of the website ##
At first, the user is on a front page, where he can browse products shown on it. The user also have the option to login, by clicking a button on the top header, which will create a pop-up with a form to insert his credentials. Next to the login button is the button allowing you to create an account, and the button to login as a merchant. once you logged, you get the option to add items to your cart, and to consult your cart. 
If you logged in as a merchant, you get access to a page previewing all the orders you got, and their status, and a page allowing you to add more items to your shop.

## About the database ##
The database is made of five tables : One for the client accounts, one for the merchants, one for the products, one for the orders and one for the products categories.

The clients table holds every client's unique ID, name, mailing adress, password, country code and adress. 
The merchants table holds their unique ID, name, mailing adress, password, and if they are an administrator or blacklisted on the particular instance.
The products table holds the unique ID of the product, as well as the seller's ID and the product's category's ID. The name is here too, as well as the price, the amount of products the seller have, and a picture of the product. 
The orders table records all orders made on this particular instance of the platform. They are identified by a unique ID, the ID of the client making the purchase, as well as the ID of the product being purchased. The date of the purchase, the amount of products purchased and the status of the order are also stocked here.
To conclude, the categories table gives the name of the category of product, as well as a unique ID referenced in the products table.

