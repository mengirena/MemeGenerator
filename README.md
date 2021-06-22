# Meme Generator

[![Netlify Status](https://api.netlify.com/api/v1/badges/8dd3688a-8f84-4c53-8702-a2cd7fcbe574/deploy-status)](https://doggiekibbles.netlify.app)

👆🏽 click to check the live page

The meme generator can 

## Demo

<img width="615" alt="Screen Shot" src="https://user-images.githubusercontent.com/51871665/122101457-2bafe380-cdc9-11eb-87fa-05396ee4cd60.png">


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