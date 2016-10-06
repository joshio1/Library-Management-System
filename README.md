Library-Management-System
The application is deployed using Heroku. Link: https://polar-temple-57905.herokuapp.com/

Rails version used: Rails 5.0.0.1
Ruby version used: ruby 2.3.1p112 (2016-04-26 revision 54768) [x86_64-darwin15]

####1. Admin Login
To Login as an Admin, you will have to use the following pre-configured credentials.
Email – admin@ncsu.edu
Password: administrator

####2. Edit Profile (Admin)
To edit the profile, click on "Edit my Profile" and update the information accordingly.

####3. Logout (Admin)
The current admin can Logout of the system by clicking on "Log out" option provided on upper left corner of the page.

####4. Admin can create another Admin.
When logged in as an Admin, click on "Manage Admins" -> "Create New Admin". Enter the required details and click on create button.

####5. Admin can view other Admin's information except Password.
Click on "Manage Admins". All the information about other Admins will be visible, except the passwords.

####6. Admin can Delete other Admins except himself and other pre configured Admin.
Click on "Manage Admins" -> "Destroy" to delete other Admins. There won't be an option to delete pre-configured and Logged in Admin.

####7. Admin can Add room.
Click on "Manage Rooms" -> "Add a new room" , enter the details of the room and click "Create Room".

####8. Admin can view room details
Click on "Manage Rooms" select the room number in drop down menu provided in "View Room Details" section and click "View Room".

####9. Admin can Edit Room details.
Click on "Manage Rooms" select the room number in drop down menu provided in "View Room Details" section and click "View Room". Then click on "Edit" option, change the details as required and click "Update Room". The admin can only change the details according to the predefined set of values. For eg. "Size" can be changed between "Small" "Medium" "Large". No other option is available.

####10. Admin can create a Library Member.
Click on "Manage Library Members" -> "Create New Library Member"

####11. Admin can view the List of Library Members.
Click on "Manage Library Members". The list of all the Library members will be displayed.

####12. Admin can view details (except password) of a specific Library Member.
Click on "Manage Library Members". Then click on "Show Details" option to view the details of a particular Library Member.

####13. Admin can Delete other Library Members.
Click on "Manage Library Members". Then click on "Delete" option to delete a particular Library Member.

####14. Admin can view Library Member's Reservation History.
Click on "Manage Library Members". Then click on "View Reservation History" option to view the history of a particular Library Member.

####15. New User Singup
Click on "Sign up" option on the home page. Enter your details and click "Create User".

####16. User Login
If you are an existing user, Enter email and password on Homepage and click "Log In".

####17. Edit User Profile 
Click on "Edit Profile" in User homepage to make changes in the profile information.

####18. User Logout
Click on "Log out" option given on top left corner of the page to logout from the system.

####19. Search room (User)
Click on "Search and Reserve Rooms".

####20. View Room Details (User)
Click on "Search and Reserve Rooms". Specify the type of room then click "Search". The entire information about the room's reservation will be available.

####21. Making a Reservation (User)
Click on "Search and Reserve Rooms" -> "Search" -> "Book Room" -> "Create Booking"

####22. Cancelling a Reservation (User)
Click on "Current Reservation" -> "Destroy" to cancel a particular reservation.

####23. View Reservation History (User)
Click on "Booking History" to view entire history.

####24. Delete Room (Admin)

####25. Special Case 1: When Admin deletes a room which has a Reservation.

####26. Special Case 2: When Admin deletes a User who has a Reservation.

####27. Notify the User and Team members about the reservation via Email.
As Admin, Click "Manage Rooms" -> "Book room on behalf of a member" -> Enter the email addresses of the User and his/her team members seperated by a comma and book room. Those people will be notified about their booking details via Email.
As User, Click "Search and Reserve Rooms" -> "Search" -> "Book Room" -> continue the same process mentioned above.

####28. Admin can make Multiple Reservations for a library member.
Click on "Manage Rooms" -> "Book room on behalf of a member" -> Book the room. Repeat this process to make multiple reservations.

####29. Testing
In the GitHub Repository of Library-Management-System, go to "test-spec" folder. The test cases for Users Model and User Controller are provided.






