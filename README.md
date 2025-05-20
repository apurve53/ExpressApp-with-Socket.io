
# ExpressApp-with-Socket.io

This is the simple Try to get the same session Id in Express Route and Socket Event. On the Day I have created this Application I was getting the same session Id. But in next days I was not getting the same Session Id, One thing is "io.engine.use" this syntex i got from socket.io official website [https://socket.io/how-to/use-with-express-session].

Even this methode is available on "https://socket.io/how-to/use-with-express-session" to get the same session id on Socket.io event and Express App route. Not working for me even in a seprate specified enviroment prepared for thesting this thing only. This repo is for that.

Result :- I was getting same session Id on first day when I tested this code. but in my application i was not getting the same session Id even by using this method in my main aoolication. And on next day with same setup I was not getting the same session Id.

So i am writing this repo to test it in near future. Because this is must for authentication of the client user on every webSocket event and on every Express route request.
