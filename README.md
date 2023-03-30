# Ampersand Battery Swap Network (Web)

This is the web application for ampersand network & batter swapping mechanism

## Setup locally

`clone this repository`

```
git clone https://github.com/elvisiraguha/swap-mechanizm-web.git
```

`checkout into the repository folder`

```
cd swap-mechanizm
```

`install dependencies`

```
npm install
```

Make sure the APIs backend server for this app is running, instructions on how to run it locally can be found [here](https://github.com/elvisiraguha/swap-mechanizm)

`start the application`

```
npm start
```

## What does this application do?

Currently this application can be used by three different entities with different roles.

### 1. `Driver`

When the driver is logged in, he/she will be able to check the percentage capacity of the battery they are currently using, and estimated charge for the what they have used so far.

For testing purposes, you can login as a driver using one of the following credentials:

```
1. email: 'driver1@example.com', password: 'password'

2. email: 'driver2@example.com', password: 'password'

3. email: 'driver3@example.com', password: 'password'
```

### 2. `Station Manager`

When the station manager is logged in, he/she will be able to view all the past battery swaps done by their station.

The station manager is also the one who records new battery swap every time the driver come for a swap.

For testing purposes, you can login as a station manager using one of the following credentials:

```
1. email: 'manager1@example.com', password: 'password'

2. email: 'manager2@example.com', password: 'password'

3. email: 'manager3@example.com', password: 'password'

4. email: 'manager4@example.com', password: 'password'
```

### 3. `Inventory clerk`

When the inventory clerk is logged in he/she would be able to view or battery swaps records. Being able to visualize these swaps data will be help the clerk to optimize for batteries supply at different stations.

For testing purposes, you can login as an inventory clerk using following credentials:

```
email: 'inventory@example.com', password: 'password'
```
