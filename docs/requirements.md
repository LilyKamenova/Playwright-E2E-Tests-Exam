
2.3.1.	Registration with Valid Data (Authentication Functionality)

1.	Create a test scope.
2.	Go to http://localhost:3000
3.	Locate and click on the Register button.
4.	Wait for the register form to load.
5.	Create a unique email value.
6.	Locate and fill the input field for email.
7.	Locate and fill the input field for password.
8.	Locate and fill the input field for confirm password.
9.	Press the submit button.
10.	Assert that you are redirected to the home page and the Logout button is visible.

Hint: Use the predefined user object to hold and reuse user data.

2.3.2.	Login with Valid Data (Authentication Functionality)

1.	Create a test scope.
2.	Go to http://localhost:3000
3.	Locate and click on the Login button.
4.	Wait for the login form to load.
5.	Locate and fill the input field for email.
6.	Locate and fill the input field for password.
7.	Press the submit button.
8.	Assert that you are redirected to the home page and the Logout button is visible.

2.3.3.	Logout from the Application (Authentication Functionality)

1.	Create a test scope.
2.	Go to http://localhost:3000
3.	Log in to the application.
4.	Click the Logout button.
5.	Wait for Login button.
6.	Assert that the URL is for home page.

2.3.4.	Navigation for Logged-In User Testing

1.	Create a test scope.
2.	Go to http://localhost:3000
3.	Log in to the application.
4.	Assert that "Home", "Collection", "Search", "Create Book" and "Logout" buttons are visible, and "Login" and "Register" buttons are hidden.

2.3.5.	Navigation for Guest User Testing

1.	Create a test scope.
2.	Go to http://localhost:3000
3.	Assert that "Home", "Collection", "Search", "Login" and "Register" buttons are visible, and "Create Book" and "Logout" buttons are hidden.

2.3.6.	Create a Book Testing (CRUD Functionality)

1.	Create a test scope.
2.	Go to http://localhost:3000
3.	Log in to the application.
4.	Locate and click the "Create Book" button.
5.	Wait for the create book form to load.
6.	Generate random book title and save it in predefined variable.
7.	Locate and fill the input field for title with random generated value.
8.	Locate and fill the input field for cover image.
9.	Locate and fill the input field for year.
10.	Locate and fill the input field for author.
11.	Locate and fill the input field for genre.
12.	Locate and fill the input field for description.
13.	Press the submit button.
14.	Assert that the url is http://localhost:3000/collection.
15.	Assert that a book with the title you just added is present in the list.

2.3.7.	Edit a Book Testing (CRUD Functionality)

1.	Create a test scope.
2.	Go to http://localhost:3000
3.	Log in to the application.
4.	Locate and click on "Search" button.
5.	Locate and fill the input field for search.
6.	Locate and click on the "Search" button for searching result.
7.	Locate and click on the first book’s title from the resuls.
8.	Locate and click on Edit button.
9.	Wait for the Edit form to load.
10.	Locate and fill the title field in the edit form with new value to edit a book.
11.	Press the submit button.
12.	Assert that the title’s value is as expected with edited value.

2.3.8.	Delete a Book Testing (CRUD Functionality)

1.	Create a test scope.
2.	Go to http://localhost:3000
3.	Log in to the application.
4.	Locate and click on "Search" button.
5.	Locate and fill the input field for search.
6.	Locate and click on "Search" button for searching result.
7.	Locate and click on first book’s Detail button with searched book title.
8.	Press the delete button.
9.	Assert that the url is http://localhost:3000/collection.
10.	Assert that a book with the title you just deleted is NOT present in the list.
