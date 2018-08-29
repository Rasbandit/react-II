# React Day II Props

## Props

- Start off by talking about the idea of uni-directional data flow.
  - In react we can nest components inside of other components.
  - the way we represent this is by showing a component tree.
    - The arrows represent that the lower circles are nested inside the top circles.
    - We can only move data down the arrows, and they can not be moved to siblings.
  - That is Unidirectional Data flow in react.
- How do we actually move data to a child component? PROPS!
  - using same white board example show how you would write out the code for it.
  - Prop is short for property, or a bunch of properties
  - When we have a component we give it a property and set it equal to a value, typically with the {} so it can be a variable.
  - We can make up prop names all we want, there are few rules around what name we can use for props.
- code out a contact component that will display a contact name that is passed by props
  - show how we can reuse the code and display 2 contacts both with different props values, but same prop names
  - turn the array of contacts into an array of objects and add a phone number
  - pass both down
- have the students add on a few more props on their own and display it for practice
  - then you do the same
- show how you can use a map to create multiple components all with different props values

## Passing Functions

- We want to add in the ability to delete the contact but we need the function to live in the parent, or where the data were going to modify lives.
- so we will make the function to remove the contact in the app.js and we can also pass it down like any prop
  - talk about how functions are considered 1st class data
  - we don't invoke the function when we pass it down, just give it the fn.
- when we run the function in the child it breaks.
  - explain what the error means.
    - hit hard on this error is probably the most common in react.
  - console.log this and show what it thinks this is.
  - then for example run the same function in the scope of the app.js to show what this is in there.
    - this is determined when the function runs, not when it is defined
  - we need to bind the function and fix the this keyword to mean, the parent component.

## Functional Components

- If a component does not need state we can opt to make our Component into what is called a `stateless functional component`
  - since all we are doing in our contact component is displaying info we are going to convert it into a functional component.
    - Don't refactor just make a new component so they can keep both ways of seeing props
- We implement it the same way we would a class
- The functional component is not an object so we will not use the `this` keyword at all, its just props
- Explain when you should use a functional component instead of a class based one.
  - have the students explain that to each other. as well as what the difference between a class and an object.

## Lifecycle Hooks
- Start mini project.
- do one drop down at a time but have the text component save the props to state instead.
- show how constructor never runs again so our state is stuck.
- What is a lifecycle hook?
  - They are only available when using a class based component
  - When a specific event happens to the component we can have it run a specific task.
    - these tasks are things like, just ran render, got new props, mounted, unmounting.


https://github.com/devmountain/react-drills
https://github.com/DevMountain/react-2-mini