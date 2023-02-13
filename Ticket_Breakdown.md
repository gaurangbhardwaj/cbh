# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
## Can edit/add agent's custom id to generate report

## AC:
1. Agents can save their own unique custom id
2. Can generate reports with their custom id

## Ticket 1: Backend
### Technical notes:
1. Update model for Agents collection for a new "agentId" to save new custom id
2. Create functionality to validate new custom id is unique and has proper formatting
3. Update getShiftsByFacility which can map with both "database id" and "agentId"
4. Update generateReport which can map both "database id" and "agentId"
5. Update and add new test cases for same

Estimates : 3 SP

## Ticket 2: Frontend
### Technical notes:
1. Add a field to save agent's custom id
2. Add form validation and integration for unique id (id not used before) [Will be dependent upon new backend functionality]
3. Update report generation UI integration to provide custom id to generate report
4. Add check on shift and report UI if their is no agent's custom id (for old data)

 Estimates : 3 SP
