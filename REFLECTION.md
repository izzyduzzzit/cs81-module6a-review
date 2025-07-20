# Izarra Villareal CS 81 Module 6 Assignment 6A: Code Review

# What was the hardest part to understand?
The hardest part to understand was the prototype method and the shift() method. I am not used to seeing the special built-in prototype method, but figured out it's there to allow for adding custom methods and properties to custom constructor objects.

# How does this code use this to tie data and behavior together?
This code uses this as a self referential keyword that works for any object created using the contructor object of playlist. The this keyword works for all onjects using the constructor to refer to itself as the object in place of the this keyword for efficiency purposes. You can essentially code constructor objects kind of like class objects and save time if you're going to be using the same object over and over and can avoid having to create unique code for every object by using the this keyword. The same behavior for the constructor object applies to any object created using the constructer through the this keyword.

# What would you do differently if you wrote this object from scratch?
If I wrote this object from scratch I wouldn't use the shift() method in the skip method. It is destructive and I would want to just push it to the end of the array somehow or refer to specific indexes, but currentsong also tends to refer to index 0 as well. It's a great start for proof of concept but could be improved for better real-world playlist functionality.