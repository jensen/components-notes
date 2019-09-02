# Component-Based UI w/ React

Notes and slides available at [https://github.com/jensen/components-notes](https://github.com/jensen/components-notes).

## Why React?

- Declarative - Describe the final result in our code, rather than describing the steps to achieve that result.
- Component-Based - Allows us to compose UI out of smaller pieces.
- Unidirectional Data Flow - Data only flows from parent to child, top to bottom of the tree.

## What is a Component?

A component is a function that accepts a properties object as an argument and returns a tree of React elements.

```javascript
function Component(props) {
  return (
    <div>
      <h1>Hello</h1>
      <p>Body text</p>
    </div>
  );
}
```

## Props vs State

## JSX

JSX is converted to JavaScript before it is run in the browser.

```jsx
<div>Hello World</div>;

/* becomes */

React.createElement("div", {}, "Hello World");
```

````jsx
<div className="root">
  <h1>Hello</h1>
  <p>Body text</p>
</div>

return (
  React.createElement("div", { className: "root" },
    React.createElement("h1", {}, "Hello"),
    React.createElement("p", {}, "Body text")
  )
);

ReactDOM.render(React.createElement("div", { className: "root" },
    React.createElement("h1", {}, "Hello"),
    React.createElement("p", {}, "Body text", React.),
    React.
  ), document.getElementById("#root"))
```

Every tag must be closed in order.

```jsx
<ul><li></ul></li>
<input><textarea /></input>
```

Components must have a capital letter first.

```jsx
<div></div>
<MyComponent></MyComponent>

React.createElement(MyComponent, {});
```

Cannot use HTML comments.

```jsx
<div>
  { /* comment in here */ }

</div>
```

Can only use single line expressions in JSX.

```javascript
return (
  <>
    <h1>First</h1>
    <h1>Second</h1>
  </>
)

return (
  React.createElement(React.Fragment, {},
    React.createElement("h1", {}, "First"),
    React.createElement("h1", {}, "Second")
  )
);
```

## Isolation

Building our components in isolation, allows us to focus on a simple interface.

## Creating React Apps

`npx create-react-app <app name>`

`npx -p @storybook/cli sb init`
````
