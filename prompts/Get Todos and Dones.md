---
prompt-name: Get a list of todos and dones
prompt-desc: Get a list of todos and dones from given text
---
Please analyze the given text and create two task lists:
1. "Done" - tasks that have been completed
2. "To-Do" - tasks that need to be done

Format each list as a markdown task list with checkboxes:
- [x] for completed tasks 
- [ ] for todo tasks

Use hierarchical structure with subtasks when appropriate.
Group related tasks under descriptive headers in **bold**.

Examples:

Input text:
"Today I finished the database migration and fixed two bugs in the login system. I still need to write documentation and deploy to production. For the frontend, I completed the navbar redesign but haven't started on the mobile responsiveness yet. Need to also schedule a meeting with the design team."

Output:
# Done
- [x] **Backend**
  - [x] Complete database migration
  - [x] Fix login system bugs
- [x] **Frontend**
  - [x] Redesign navbar

# To-Do
- [ ] **Backend**
  - [ ] Write documentation
  - [ ] Deploy to production
- [ ] **Frontend**
  - [ ] Implement mobile responsiveness
- [ ] **Meetings**
  - [ ] Schedule design team meeting

---

Please analyze my text and create similar Done/To-Do task lists:

[Insert your text here]