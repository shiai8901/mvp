## Heading ##
  Tasks management App

## Sub-Heading ##
  Make teamwork easier by keeping track of the progress.

## Summary ##
  With this product, team leader can create new tasks and assign task to team members.

## Problem ##
  It is hard for team leader to keep track of the new tasks and ongoing tasks, as well as the according team members. 

## Solution ##
  Task management App interface was created with React js, and the database was created with mongodb.

  All existing tasks are listed in the table with detail information including name, description, due time, person and status. Tasks are fetched from database once the page is rendered.

  The unassigned tasks are listed in the second table, which requires user to pay attention to and to assign each task to team member. Once assigned, the task will be removed from the New Task table, and the 'status' will be changed from 'NeedAssign' to 'Assigned'.

  This App also allows user to create new task by filling in the form at the bottom. If 'person' field is empty, this task will be added into New Task table that user needs to assign this task later, and the 'status' will be set as 'Need Assign', otherwise, the task will only be added to All Task table, and the 'status' will be set as 'Assigned'.

## Quote from You ##
  > A quote from a spokesperson in your company.

## How to Get Started ##
  > Describe how easy it is to get started.

## Customer Quote ##
  > Provide a quote from a hypothetical customer that describes how they experienced the benefit.

## Closing and Call to Action ##
  > Wrap it up and give pointers where the reader should go next.