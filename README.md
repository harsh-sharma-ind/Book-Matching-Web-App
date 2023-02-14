Working of Application :-

In database each entry has three attributes viz. Title of book, Age group and Gender, therefore the application ask for user age and gender,
so that age and gender are the two vectors on the diffrence of which book is suggested to the user.

Algorithm:-

x1=user's age,   x2=Book's age group(from db)
y1=user'gender,  y2=Book's gender group(from db)

diffrence of vectors = ((x1-x2)^2 + (y1-y1)^2)^1/2

So the book with the minimum diffrence will be suggested to the user.

Tech Stack :- HTML, CSS, React JS, Node JS, Mongo DB

Live Link :- https://book-match.netlify.app/
