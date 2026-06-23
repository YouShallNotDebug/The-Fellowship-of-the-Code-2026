# Extending the Fellowship

## The Fellowship Acts on Its Own (Weekly Fellowship Check-in)

For this task, we created a small automation using Microsoft Power Automate. The objective was to design a workflow that automatically sends a weekly check-in message and encourages participants to provide feedback on their learning progress.

We started by following the workflow demonstrated during class and attempted to create the automation through Microsoft Teams. The flow was triggered by a recurrence schedule and was supposed to automatically post a message in a Teams chat or channel. During testing, however, the automation repeatedly failed due to permission-related errors (see picture below). After investigating the issue, we concluded that certain Teams integration features appear to be restricted for student accounts within the FH environment. Although the workflow logic was correctly configured, the automation could not be executed successfully because of these access limitations.

![alt text](<WhatsApp Image 2026-06-22 at 14.23.34 (1).jpeg>)

To ensure that the task could still be completed, we adapted our solution while remaining within the Power Automate platform. We kept the same automation concept but replaced the Teams action with an Outlook email action(see picture below). Using a Recurrence trigger and the Send an Email (V2) action, we created an automated weekly feedback request.

![alt text](<WhatsApp Image 2026-06-22 at 14.23.34.jpeg>)

The automation was designed from the perspective of a lecturer who wants to monitor how students are coping with the current course content. Every week, the flow automatically sends a “Weekly Fellowship Check-in” email containing a short Lord of the Rings–inspired message and a simple traffic-light feedback system:

- 🟢 Everything is clear and I can follow the course well.
- 🟡 Some topics are still unclear and should be discussed.
- 🔴 I feel lost and need additional support.

After configuring the recipients, subject line, and email content, we tested the flow. The Outlook-based version executed successfully, and the email was delivered automatically as intended. (see pictures below)

![alt text](<WhatsApp Image 2026-06-22 at 14.23.34 (3).jpeg>)

![alt text](<WhatsApp Image 2026-06-22 at 14.23.34 (2).jpeg>)

---

## A Small Game 

[Fellowship Defender](https://arcade.makecode.com/S28697-79779-95254-75245)

Fellowship Defender is a small action game set in Middle-earth. The player takes the role of Legolas who must defend the Fellowship against waves of Orcs. By jumping up and down the battlefield and firing arrows, Legolas must avoid danger and defeat enemies before they can strike. Quick reflexes and careful positioning are essential for survival.
Legolas is going to jump if the A button is pressed and shoot an arrow if the B button is pressed.
