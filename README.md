# Assignment-5-Emergency Hotline

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- The difference between getElementById & getElementsByClassName is that getElementById is used for selecting a unique element by an id and getElementsByClassName is used for selecting multiple elements by their classnames. Again querySelector is used to get the first element using css selector but querySelectorAll is used for selecting all the matched elements by any css selector like #id and .class.

## 2. How do you create and insert a new element into the DOM?

- First create a new element by using document.createElement() and set its value using innerHTML or innerText. Then select a parent element by using any method and finally insert the new element into the parent element by using .appendChild() method.

## 3. What is Event Bubbling and how does it work?

- Event Bubbling is a process of event propagation where any event starts from the targeted elements and goes upward to their parent elements. It works in 3 steps which are capturing phase, Target phase and Bubbling Phase. Its can be stop propagation by adding event.stopPropagation();

## 4. What is Event Delegation in JavaScript? Why is it useful?

- Event Delegation is a mechanism where we can you attach a single listener to their common parent element instead of attaching event listeners to multiple individual child elements.
- it is useful for better performance, cleaner code, memory efficiency, centralized event management because in this process we can centralize event logic in more easier way.

## 5. What is the difference between preventDefault() and stopPropagation() methods?

- preventDefault() is used for handling the default browser behavior of event but stopPropagation() is used for halt the flow of event to their parent element.
