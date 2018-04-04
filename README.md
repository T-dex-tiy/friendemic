Being that most of the Dev team is remote, I wanted to build an app that would allow for showing if a user is available and details for contact. Being spread all about the world time zones, the ability to see who is available to contact and methods of contacting would be a great tool to have. The display that I have for this would be for an admin, so the ability to add users would be displayed on the right side.

With remote being a large part of dev teams, building app would need unique time zones for each user, an (available/unavailable) toggle, and contact info which would update depending on state. Set the profile as Admin allowing for adding users with the information.

Three users are listed and here are the passwords to show the different access that each have.

Only entered 2 access with emp and admin. Admin will be able to add users.
Test case login and passwords:
"irobbedterrybenedict@oceans11.com":test123,
"test@test.com":test123,
"youcallthataknife@nowthisisaknife.com":test123,


You can add unique users and change their online status. I ran into a small issue of having the availability update and not push the current user into the User list, I could not figure it out how to get it updated a better way. I am sure that it can be done, with the time and knowledge. Also ran into issues with log out button and not clearing the backend DB. Left it in to continue to build off of and clean up the site a little better.

Wanted ideally to display time based on location automatically and was not able to find a solution that worked with the parameters I had set. Would like to have an API that connects to slack/zoom or any messaging platform as well for the future

Any feedback is greatly appreciated.
