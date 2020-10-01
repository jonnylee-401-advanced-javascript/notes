### Class 401n17
### Lab 1 Notesy
### Author: Jonathon Lee

<h2> Notesy is a Command Line Interface package that gives user the ability to take notes.</h2>
</br>

## Step 1
```
clone repo (git clone <copied link>)
```
## Step 2
```
Run (npm i) cli to install dependencies.
```
## Commands for Adding Text 
1. To save text one of two commands can be used.
```
 -a or -add
```

2. Every note can be saved with the following command.
```
 (node . -a <some text>)
```
3. Viewing a list command
```
(node . notes.js --list)
```
4. Deleting with id
```
 Open list command and search for id to be delete. Copy the id you'd like to delete.
 Run the following command + id (node . notes.js --delete <id>)
```




### Dependencies 
``` 
 "@code-fellows/supergoose": "^1.0.2",
    "chalk": "^4.1.0",
    "jest": "^26.4.0",
    "minimist": "^1.2.5",
    "mongodb": "^3.6.0",
    "mongoose": "^5.10.0",
    "only": "0.0.2"
```
### Code testing
```
Code testing is done using jest by running (npm test). Test is also done automatically using github actions.
```
### UML
[Notesy UML](./assets/uml.md)