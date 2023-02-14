Working of Application :-

In a database, each entry contains three attributes: the title of the book, age group, and gender. Therefore, the application requests the user's age and gender to generate two vectors, which are used to suggest books to the user based on the differences between the vectors.

Algorithm:

Let x1 be the user's age and x2 be the book's age group (from the database).
Let y1 be the user's gender and y2 be the book's gender group (from the database).

The difference between the vectors is calculated as follows: ((x1 - x2)^2 + (y1 - y2)^2)^1/2

The book with the minimum difference will be suggested to the user

Tech Stack :- HTML, CSS, React JS, Node JS, Mongo DB

Live Link :- https://book-match.netlify.app/
