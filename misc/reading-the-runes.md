# Reading The Runes

## Short Description Of The Code

The code is designed to automatically calculate food rations. The user enters an amount and can then select whether this amount should be added to or removed from the stock. The application is then supposed to display the number of rations currently available. At the start, the initial stock is 10 rations.

## Identified Issue 1

By default, amountInput.value returns a string. Consequently, using the + operator can result in string concatenation rather than mathematical addition or subtraction.

**Where it occurs**

Line 28 and Line 35

**What the code intends to do**

The code is intended to correctly add the entered rations to the stock or subtract them when a meal is consumed.

**What actually happens instead**

Because the entered value is treated as a string, the values are sometimes chained together like text characters instead of being calculated mathematically.

### Why the issue matters

**How it affects the user experience**

This prevents the core functionality of the application from working correctly. As a result, the user is not shown a reliable stock level.

***How it could cause bugs later**

This logic error could repeat itself in multiple places across the system, leading to further calculation errors down the line.

**Why it would be risky in a larger system**

In larger systems, this could cause incorrect data to be processed or stored. If users had to rely on these calculations, it could lead to significant problems and unreliable outcomes.

### Description of fixes

The entered value should be explicitly defined as a number:

Number(amountInput.value)

---

## Identified Issue 2

The input field allows users to enter not only numbers but also letters and other invalid characters.

**Where it occurs**

Line 28 and Line 35

**What the code intends to do**

The code is intended to process a valid quantity for the rations.

**What actually happens instead**

With the current code, any characters can be entered without triggering an error message.

### Why the issue matters

**How it affects the user experience**

The user could accidentally type letters instead of numbers and receives no feedback or warning about the faulty input.

**How it could cause bugs later**

This allows invalid values to be processed, resulting in incorrect stock levels being displayed.

**Why it would be risky in a larger system**

A lack of input validation can lead to corrupted datasets, which later causes incorrect evaluations, reports, or calculations.

### Description of fixes

An if structure should be used to check whether the entered value is NaN (Not a Number):

isNaN(value)

---

## Identified Issue 3

The updateStatus() function is executed in the wrong place.

**Where it occurs**

Line 37

**What the code intends to do**

The code is supposed to update the stock levels and warn the user if there are not enough rations available.

**What actually happens instead**

The error message “Not enough rations!” is displayed before the stock level has actually been modified. This can cause confusion for the user.

### Why the issue matters

**How it affects the user experience**

The display can be confusing for the user because the error message appears too early, thereby misrepresenting the actual state of the stock.

**How it could cause bugs later**

This error could spread further if the code is reused, repurposed, or extended.

**Why it would be risky in a larger system**

Incorrect or delayed status updates in larger applications can lead to misunderstandings and flawed decision-making.

### Description of fixes

updateStatus() should only be executed after successful processing within the if-else structure.

---

## AI Usage

**What did you ask the AI?** 

We used the AI to verify our identified errors and additionally sought assistance with the linguistic phrasing and structuring of our final report.

**What was helpful?** 

Since we do not have much experience in this area yet, getting confirmation for our assumptions was very helpful. Furthermore, the AI assisted us in formulating the report more clearly and precisely without repeating contents unnecessarily.

**What was misleading or incomplete?** 

From our perspective, the answers provided by the AI were helpful, accurate, and easy to understand.

**What did you have to decide yourself?** 

The actual analysis of the logic errors, their impact on the daily workflow, as well as the description of potential risks were completely worked out by ourselves in order to avoid potential AI hallucinations.