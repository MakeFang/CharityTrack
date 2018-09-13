# Charity Tracker

A website that makes it easy for people to track the money they give to charity

Resources
- users
- charity
- donations

Users
- id
- Last, first name

Charity (could try Charity Navigator)

donations
- User id
- Charity id
- Amount
- Date

| Route | Method | Action |
| --- | --- | --- |
| userid/ | GET | index |
| userid/:id | GET | show |
| userid/new | GET | new |
| userid | POST | create |
| userid/:id/edit | GET | edit |
| userid/:id | PUT | update |
| userid/:id | DELETE | destroy |
