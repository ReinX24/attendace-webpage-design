# attendance-webpage-design

Design draft for Attendance Project of the Programming Sub-Org for A.Y. 2023 - 2024

Dimensions (IPhone SE):
<br>Width: 375px
<br>Height: 667px

# Pages

## Login Page & Index Page

Users could login as a student, professor, or an admin.

[login_page](login_page.html)

If the user does not have an account, they could sign up for one. If they want
to sign up as a professor or an admin, they will need a token that will be
given to them by an existing admin.

[signup_page](signup_page.html)

## Student Pages

If the student logs in as a student they will be shown by their account info
along with their enrolled classes (if any).

[student_account](student/student_account.html)

This is what the student will be shown if they already have enrolled schedules.

[student_account_schedules](student/student_account_schedules.html)

Student account info page, where they can see their photo, name, student ID,
program, status (regular or irregular), and existing enrolled classes and
blocks.

[student_schedule_info](student/student_schedule_info.html)

The students could add their schedules by searching for specific blocks.

[add_schedule_block](student/add_schedule_block.html)

After entering a certain block, they could enroll for that class that is within
that block.

[add_schedule_found](student/add_schedule_found.html)

The student could also download or show their QR code so that their attendance
could be recorded for various events.

[qr_code](student/student_qr.html)

## Professor Pages

If the user logs in as a professor, they will be shown their photo, name,
current events, their classes, and more.

[professor_account](professor/professor_account.html)

The professor could request to create an event, this request will be approved
or denied by admin accounts.

[professor_event_request](professor/professor_event_request.html)

Once an event has been approved, professor accounts could view the details of
the event, they could see the current attendees and the absentees.

[professor_event_details](professor/professor_event_details.html)

The professor can create their own classes. To create a class the professor
needs to provide a Subject Code, Description, Block for the class. They could
also set which days and which rooms their classes will take place.

[professor_class_create](professor/professor_class_create.html)

The professor could also edit their classes, they can also delete a class if
they want too.

[professor_class_edit](professor/professor_class_edit.html)

The professor could also view the students currently enrolled for they class.
They could also remove said students from their class if they want too.

[professor_class_students](professor/professor_class_students.html)

## Admin Pages

If the user decides to enter as an admin account, they will be greeted with the
admin dashboard. It will show them the current events, requests for events, and
more.

[admin_account](admin/admin_account.html)

Admins could create event, they could set the event name, subject code for the
event, the block covered by the event, and the date where the event will take
place.

[admin_create_event](admin/admin_event_create.html)

The admins could also view information about the event, this will show the
name, subject code, block, date, and currently recorded attendees.

[admin_event_info](admin/admin_event_info.html)

The admins can edit events, they could change name, subject code, block, date,
and remove currently recorded attendees.

[admin_event_edit](admin/admin_event_edit.html)

For recording events, the admins could record students' QR code so that they
could be recorded as an attendee for events.

[admin_scan_qr](admin/admin_scan_qr.html)

If the admin cannot scan the QR code, the admin could use their student ID as a
way of recording their attendance.

[admin_enter_student_id](admin/admin_enter_student_id.html)

Admin accounts can view information regarding requests, this will show the
name, subject code, block, date, and who requested the event.

[admin_request_info](admin/admin_request_info.html)

Admins could also filter attendees by their names and dates. They can search
students who attended certain events by their name and they could also search
by date, seeing events happening on that day and who attended said events.

[admin_filter](admin/admin_filter.html)

[admin_filter_name](admin/admin_filter_name.html)

[admin_filter_date](admin/admin_filter_date.html)
