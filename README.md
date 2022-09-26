# Description
Create routes so that users can add and spend points, and accountants can see where the points are going and coming from

# User story
AS an accountant I WANT a web service SO THAT I can keep track of who is giving out points and when.

# Criteria
- When users spend points the oldest points must be  		spent first
- No payer's points can go negative
- Add transactions for a specific payer and date
- Spend points using the rules listed above and return an object of {"payer":"", "points": }

# Instructions
- To run this app first run npm i, this will ensure that all packages needed for this code to run will be on the local machine, so that the service can run properly.

- A message will appear in the terminal saying "Connected on localhost:3001" this means the user is good to continue to the next steps

- Open a HTTP/API client application such as Insomnia or Postman. If you do not have such an application downloaded follow this link; https://insomnia.rest/download ,to download insomnia and follow the instructions provided on there. 

- Once downloaded you will find a '+' on the left side of the screen, once clicked choose "HTTP request" that'll open a new request tab. Once in that tab you should see two drop down menus. The first one should be purple and say GET this is where you click to change the type of request (get, post, put, delete) the second one is how you select what type of text you'll be giving. For this project please select JSON.

- In that tab the left side is where you put in your information and the right is the result of the request. To create a new payer put this line: http://localhost:3001/api/payers/ in the URL bar at the top and change the request from GET to POST. If it is successful you should get a message saying "New payer created". To ensure all of the correct information is put in the required fields copy this block and put it in the JSON body section:
		{ "payerName": "testing",
		  "points": 0
    }

- To get a list of all payers just change the request from POST to GET. If you would like to view a specific payer copy the ID assigned to that payer and copy it in the URL following the /payers/(this is where the id will go)

- To add transactions go to http://localhost:3001/api/points/ and change the route to POST. This route currently does not fully function but it is being worked on. If you would like to see if reaching the route itself works feel free to add the following in the JSON body to test it:
			{
				"total": 500,
				"fee": 2,
				"account": "632f5f305d7071a73c660d81"
			}
- To spend points attach the id of the points to the end of the URL like so http://localhost:3001/api/points/6adbisd42223890 and change the route to DELETE. 