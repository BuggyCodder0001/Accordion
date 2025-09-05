# Accordion Component

This project is a simple and reusable Accordion Component built with React.js.
It allows users to expand and collapse sections to reveal or hide related content.

Features

* Dynamic Content Rendering – Accordion items are stored in an array and displayed using map().

* Toggle Functionality – Open/close sections with smooth state handling using useState.

* Icons for Better UX – Chevron Up/Down icons from react-icons to indicate expand/collapse.
  
* Reusable Component – Easily extendable for any project.

* Conditional Rendering – Content is displayed only when the corresponding section is active.

* Fallback – Shows "No item available" if the accordion list is empty.

Tech Stack

* React.js (Functional components + Hooks)

* react-icons (Chevron icons for expand/collapse)

* CSS (for styling accordion items, titles, and content)

How It Works

1. Accordion data is stored in an array (accordionList) with title and content.

2. Clicking on a section updates the openIndex state.

3. If the clicked section is already open, it closes (set to null).

4. If a new section is clicked, it opens while closing the previously active one.

Example Accordion Items

* JavaScript Basics → Variables, functions, loops

* React.js Overview → Components, state, props

* Node.js → Server-side basics

* Full-Stack Development → Combine React + Node.js
