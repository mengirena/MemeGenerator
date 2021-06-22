# Meme Generator

[![Netlify Status]](https://yourmemegenerator.netlify.app)

👆🏽 click to check the live page

The meme generator can 

## Demo

<img width="615" alt="Screen Shot 2021-06-21 at 11 19 26 PM" src="https://user-images.githubusercontent.com/51871665/122873949-48777a00-d2e7-11eb-8407-ee3be353bb35.png">

## How it's built
**Tech used:** React, JSX, HTML, CSS

## Lesson learned

### Use form in React

To make the form a controlled component, we have to make the value of the field to always be the same as the state and use events to update the state change. 
Create `onSubmit` for the button to submit data in the form.

### To wrap text if it's longer than the element size

Use `overflow` so the text can be wrapped to the width of the element size.

### How to use `text-shadow`

The usage of `text-shadow` is to provide `x-offset`, `y-offset`, `blur-radius` and `color`.

### Review media query

```css
@media [media-type] ([media-feature]) {
  /* Styles! */
}
```
