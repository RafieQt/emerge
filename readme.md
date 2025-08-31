### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer-> 
        getElementById: with this we can select a specific item just through it's id
        getElementsByClassName: with this we can select all the items with the same class name
        querySelector: with this we select the first item from objects that share same tag name/id/class
        querySelectorAll: with this we can select all the object with the same tag name or class.

2. How do you **create and insert a new element into the DOM**?

Answer->
        In order to create a new element we use createElement() method.
        we push it through appendChild()/prepend()

3. What is **Event Bubbling** and how does it work?

Answer->
        Event bubbling is a type of event propagation where an event starts from the deepest part of this code when it is clicked and then goes up to it's parent and like this it eventually reaches the <HTML> element.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer->
        Event delegation means, instead of putting event listner on every childs of a parent, we can put eventlistner on parent to get every all the events that are bubbling up from childerns. through this we can do the work with just putting one eventlistner on parents instead of putting eventlistner on every childs.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer->
        preventDefault(): this stops form from auto reloading. it stops browser from doing auto actions but does not stop event propagation
        stopPropagation(): it stops propagation but does not stop browser's default action.
