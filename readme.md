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
| users/ | GET | index |
| users/:id | GET | show |
| users/new | GET | new |
| users | POST | create |
| users/:id/edit | GET | edit |
| users/:id | PUT | update |
| users/:id | DELETE | destroy |


| Route | Method | Action |
| --- | --- | --- |
| users/:userid/donations | GET | index |
| users/:userid/donations/:id | GET | show |
| users/:userid/donations/new | GET | new |
| users/:userid/donations | POST | create |
| users/:userid/donations/:id/edit | GET | edit |
| users/:userid/donations/:id | PUT | update |
| users/:userid/donations/:id | DELETE | destroy |


| Route | Method | Action |
| --- | --- | --- |
| charity/:charityid/donations | GET | index |
| charity/:charityid/donations/:id | GET | show |
| charity/:charityid/donations/new | GET | new |
| charity/:charityid/donations | POST | create |
| charity/:charityid/donations/:id/edit | GET | edit |
| charity/:charityid/donations/:id | PUT | update |
| charity/:charityid/donations/:id | DELETE | destroy |
