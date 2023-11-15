---
layout: base
title: Mini Project Plan
permalink: /plan
type: collab
courses: { csa: {week: 0} }
---

# Necessities
- Fibonacci Sequence
- Sorting
- Visualization
- Inheritance

# Ideas
- Game?
- Sorting Videos on yt

# Plan
![gif](https://panthema.net/2013/sound-of-sorting/thumb.gif)
- Make this in frontend
- Have a leaderboard in the backend to track the fastest times
- Times sent with fetch post method every time the sorting has occurred


## Frontend Planning
- Taking inspiration from the sorting pages on nighthawkcodingsociety
- Have all the sorting in the frontend
- Inputting the first n amount of terms for the fibonacci sequence


# How will the bars work
- Custom SASS for the entire container


```html
<div class="sort-contain">
    <!-- These divs will be auto generated-->
    <div id="1"></div>
    <div id="2"></div>
    <div id="3"></div>
    <div id="4"></div>
</div>
```

```javascript
function setHeight(div) {
    pixels = parseInt(div.id) * 10;
    div.style.height = '${pixels}px';
}
```
# Scramble
- After it is done creating all the div's the person will click the scramble button

```javascript
function scramble(list) {
    // n is the amount of times the scramble loop will work
    // n is based off of how many terms there are, for a good amount of sorting
    let n = Math.floor(Math.random * (list.length + 1));

    while(i < n) {
        
    }
}
```

# Sorting
- Then they choose a sort of there choosing
- It will record the amount of time it takes to sort,

# Backend Planning
- Nothing that we can't already achieve
- Will hold, the name of the sort, the time, and the amount of terms

## Example of the Data Table

| sortName | terms | time |
|----------|-------|------|
| merge    | 10    | 0.01 |
|          |       |      |

## Data being held
- String: sortName
- Int: terms
- Double: time