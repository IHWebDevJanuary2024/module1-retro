# Module 1 review
## HTML
- HTML stands for Hyper Text Markup Language
- Hyper Text is the method by which you move around on the web.
- HTTP is the protocol for moving hypertext files around the web and it stands for Hyper Text Transfer Protocol.

### Elements
- Elements are the individual components that make up a web page.
```html
<h1>Heading</h1> {# Heading element #}
<p>Paragraph</p> {# Paragraph element #}
```
- Elements are made up of tags. Tags are the opening and closing parts of an element.
- Tags can be nested inside other tags.
- Tags can have attributes. Attributes contain extra information about the element that you don't want to appear in the actual content.
```html
<a href="https://www.google.com">Google</a> <!-- Anchor element with href attribute -->
```
- Tags can also be self-closing.
```html
<img src="image.jpg" alt="Image"> <!-- Image element with src and alt attributes -->
```

## CSS
- CSS stands for Cascading Style Sheets
- CSS is used to style the HTML elements on a web page.
- CSS can be applied to HTML elements in three ways: inline, internal, and external. The most common way is external, so we can separate the HTML and CSS code in a more organized way.

### Selectors
- Selectors are used to select the HTML elements that we want to style.
- There are different types of selectors: element, class, and id.
```css
h1 { color: red; } /* Element selector */
.class { color: blue; } /* Class selector */
#id { color: green; } /* Id selector */
```

### Properties and values
- Properties are the aspects of the element that we want to change.
- Values are the settings for the properties.
```css
h1 { color: red; } /* Color is the property and red is the value */
```

## JavaScript
- JavaScript is a programming language that is used to make web pages interactive. 
- JavaScript can be used to manipulate the HTML and CSS of a web page.

### Variables
- Variables are used to store data.
- Variables are declared using the `var`, `let`, or `const` keyword.
```javascript
var x = 5; // x is the variable and 5 is the value
```
- We can store primitive data types in variables: strings, numbers, booleans, null, and undefined.
- And also non-primitive data types: objects and arrays.

### Functions
- Functions are a set of statements that are going to be executed when we call them.
- Functions can take parameters and return a value.
```javascript
function sum(a, b) {
  return a + b;
}
```

#### Parameters
- Parameters are the variables that we declare in the function definition.
```javascript
function sum(a, b) { /* a and b are the parameters */
  return a + b;
}
```
#### Arguments
- Arguments are the values that we pass to the function when we call it.
```javascript
sum(5, 3); // 5 and 3 are the arguments
```

### Objects
- Objects are a collection of properties and methods.
- Properties are the characteristics of the object.
- Methods are the functions that are associated with the object.
```javascript
const person = {
  name: "John",
  age: 30,
  greet: function() {
    return "Hello!";
  }
};
```

#### Classes
- Classes are a blueprint for creating objects.
- Classes can have properties and methods.
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return "Hello!";
  }
}
```

