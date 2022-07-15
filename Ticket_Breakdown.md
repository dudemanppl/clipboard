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

1. Add "custom_id" column to "Agents" table

- Notes:

  - has to be unique within each facility, but not within the table
  - varchar(64), expected to be alphanumeric, 64 char should cover it

- Time estimate: 1 hr
- Acceptance criteria:
  - "Agents" table has new "custom_id" column

2.  Create backend endpoint for the "custom_id" to be added to an "Agent"

- Notes:

  - endpoint: api/agent/custom_id
  - payload: JSON body
  - ```
    {
      agent: string,
      custom_id: string,
      facility: string
    }
    ```
  - requires authentication to confirm facility given matches the authenticated user

- Time estimate: 3 days
- Acceptance criteria: 90% coverage unit tests for new endpoint

3. Create new front end component to add a "custom_id" to an "Agent"

- Notes:
  - can be added to the "Agents" view, both the single agent page and the search list view
  - maybe a modal with an input box after a button click?
  - reuse current modal and button components

- Time estimate: 2 days
- Acceptance criteria: Use BrowserStack to make sure it works on all screen sizes and with keyboard navigation, but with reuse of current components, shouldn't be a big deal