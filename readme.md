# Charity Tracker

A website that makes it easy for people to track the money they give to charity

## Resources
- charity
- donations

#### Charity
- Using [Charity Navigator API](https://charity.3scale.net/docs/data-api/reference). Its Node.js wrapper is on [npm](https://www.npmjs.com/package/charitynavigator-promise) and [github](https://github.com/kfa408/CharityNavigator).  

#### donations
- donationId
- orgsEin: The Ein of the charity organization, as displayed in the Charity Navigator database.
- orgsName: The name of the charity as it appears on Charity Navigator.
- amount: The amount donated.
- notes: Notes about the donation.
- timestamps

## Routes

| Route | Method | Action |
| --- | --- | --- |
| /donations | GET | index |
| /donations/:id | GET | show |
| /donations/new | GET | new |
| /donations | POST | create |
| /donations/:id/edit | GET | edit |
| /donations/:id | PUT | update |
| /donations/:id | DELETE | destroy |

| Route | Method | Action |
| --- | --- | --- |
| / | GET | index |
| charity/:charityId | GET | show |

## Using
Express.js
Node.js
Handlebars.js
MongoDB
