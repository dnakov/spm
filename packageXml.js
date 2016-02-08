var files = ['applications',
'applications/ABC_Company_Portal.app',
'applications/Client_Admin.app',
'applications/Coaching.app',
'applications/Maxwell_Force.app',
'applications/Questions_Answers.app',
'classes',
'classes/OnFilePostCreation_Trigger_Test.cls',
'classes/OnFilePostCreation_Trigger_Test.cls-meta.xml',
'classes/PhaFn.cls',
'classes/PhaFn.cls-meta.xml',
'classes/PhaFn_Test.cls',
'classes/PhaFn_Test.cls-meta.xml',
'classes/updConPha_Test.cls',
'classes/updConPha_Test.cls-meta.xml',
'classes/updQRGPHA_Test.cls',
'classes/updQRGPHA_Test.cls-meta.xml',
'customMetadata',
'customMetadata/mxw__Endpoint.Food.md',
'dashboards',
'dashboards/Coaching_Dashboards-meta.xml',
'dashboards/CompanyDashboards',
'dashboards/CompanyDashboards/User_Response_Metric.dashboard',
'dashboards/CompanyDashboards/User_Response_Metric_By_Risk_Category.dashboard',
'dashboards/CompanyDashboards-meta.xml',
'dashboards/Question_Sets',
'dashboards/Question_Sets/Question_Response_Metric_By_Risk_Category.dashboard',
'dashboards/Question_Sets-meta.xml',
'dashboards/Standard_Report_Dashboards',
'dashboards/Standard_Report_Dashboards/Risk_Factor_Breakdown.dashboard',
'dashboards/Standard_Report_Dashboards/Standard_Reports_Dashboard.dashboard',
'dashboards/Standard_Report_Dashboards-meta.xml',
'documents',
'documents/ABC_Photos-meta.xml',
'documents/HMH_Photos-meta.xml',
'documents/Maxwell_Background_Images',
'documents/Maxwell_Background_Images/Backpack.jpg',
'documents/Maxwell_Background_Images/Backpack.jpg-meta.xml',
'documents/Maxwell_Background_Images/Bicycle.jpg',
'documents/Maxwell_Background_Images/Bicycle.jpg-meta.xml',
'documents/Maxwell_Background_Images/EPM_Landing_Page_Image_jpg.jpg',
'documents/Maxwell_Background_Images/EPM_Landing_Page_Image_jpg.jpg-meta.xml',
'documents/Maxwell_Background_Images/Flower.jpg',
'documents/Maxwell_Background_Images/Flower.jpg-meta.xml',
'documents/Maxwell_Background_Images/OMN_Photos_People_Exercise_Outdoors_Woman_Jogging_in_Evening_jpg.jpg',
'documents/Maxwell_Background_Images/OMN_Photos_People_Exercise_Outdoors_Woman_Jogging_in_Evening_jpg.jpg-meta.xml',
'documents/Maxwell_Background_Images/PVT_Photos_Objects_Fitness_Tying_Running_Shoes_jpg.jpg',
'documents/Maxwell_Background_Images/PVT_Photos_Objects_Fitness_Tying_Running_Shoes_jpg.jpg-meta.xml',
'documents/Maxwell_Background_Images/PVT_Photos_Objects_Miscellaneous_Zen_Stones_Calming_Background_jpg.jpg',
'documents/Maxwell_Background_Images/PVT_Photos_Objects_Miscellaneous_Zen_Stones_Calming_Background_jpg.jpg-meta.xml',
'documents/Maxwell_Background_Images/RIBackground.jpg',
'documents/Maxwell_Background_Images/RIBackground.jpg-meta.xml',
'documents/Maxwell_Background_Images-meta.xml',
'documents/SharedDocuments',
'documents/SharedDocuments/allergies.png',
'documents/SharedDocuments/allergies.png-meta.xml',
'documents/SharedDocuments/back.png',
'documents/SharedDocuments/back.png-meta.xml',
'documents/SharedDocuments/badge_test.png',
'documents/SharedDocuments/badge_test.png-meta.xml',
'documents/SharedDocuments/BCBS_logo.png',
'documents/SharedDocuments/BCBS_logo.png-meta.xml',
'documents/SharedDocuments/bcbs_question_mark1.png',
'documents/SharedDocuments/bcbs_question_mark1.png-meta.xml',
'documents/SharedDocuments/Beach_Medium.jpg',
'documents/SharedDocuments/Beach_Medium.jpg-meta.xml',
'documents/SharedDocuments/bike.png',
'documents/SharedDocuments/bike.png-meta.xml',
'documents/SharedDocuments/Blood_Pressure_Commitment.jpg',
'documents/SharedDocuments/Blood_Pressure_Commitment.jpg-meta.xml',
'documents/SharedDocuments/Blue_Cross_Logo.png',
'documents/SharedDocuments/Blue_Cross_Logo.png-meta.xml',
'documents/SharedDocuments/Bosch_Logo.png',
'documents/SharedDocuments/Bosch_Logo.png-meta.xml',
'documents/SharedDocuments/Brunswick_logo.png',
'documents/SharedDocuments/Brunswick_logo.png-meta.xml',
'documents/SharedDocuments/Burger_round.png',
'documents/SharedDocuments/Burger_round.png-meta.xml',
'documents/SharedDocuments/CarMax_Know_Your_Numbers.png',
'documents/SharedDocuments/CarMax_Know_Your_Numbers.png-meta.xml',
'documents/SharedDocuments/Carmax_logo.png',
'documents/SharedDocuments/Carmax_logo.png-meta.xml',
'documents/SharedDocuments/Cheetah.png',
'documents/SharedDocuments/Cheetah.png-meta.xml',
'documents/SharedDocuments/Cholesterol_Commitment.jpg',
'documents/SharedDocuments/Cholesterol_Commitment.jpg-meta.xml',
'documents/SharedDocuments/cloudy_windy_day.jpg',
'documents/SharedDocuments/cloudy_windy_day.jpg-meta.xml',
'documents/SharedDocuments/CoachingHeader.png',
'documents/SharedDocuments/CoachingHeader.png-meta.xml',
'documents/SharedDocuments/comm_smoke.jpg',
'documents/SharedDocuments/comm_smoke.jpg-meta.xml',
'documents/SharedDocuments/commitment_BMI.jpg',
'documents/SharedDocuments/commitment_BMI.jpg-meta.xml',
'documents/SharedDocuments/Commitment_Food.jpg',
'documents/SharedDocuments/Commitment_Food.jpg-meta.xml',
'documents/SharedDocuments/Commitment_Glucose.jpg',
'documents/SharedDocuments/Commitment_Glucose.jpg-meta.xml',
'documents/SharedDocuments/Commitment_Smoking.jpg',
'documents/SharedDocuments/Commitment_Smoking.jpg-meta.xml',
'documents/SharedDocuments/Commitment_Stress.jpg',
'documents/SharedDocuments/Commitment_Stress.jpg-meta.xml',
'documents/SharedDocuments/Commitment_sweat.jpg',
'documents/SharedDocuments/Commitment_sweat.jpg-meta.xml',
'documents/SharedDocuments/Dog.png',
'documents/SharedDocuments/Dog.png-meta.xml',
'documents/SharedDocuments/exercise_min_icon.png',
'documents/SharedDocuments/exercise_min_icon.png-meta.xml',
'documents/SharedDocuments/fall_sneakers.jpg',
'documents/SharedDocuments/fall_sneakers.jpg-meta.xml',
'documents/SharedDocuments/Festive_Fitness.png',
'documents/SharedDocuments/Festive_Fitness.png-meta.xml',
'documents/SharedDocuments/Financial.jpg',
'documents/SharedDocuments/Financial.jpg-meta.xml',
'documents/SharedDocuments/fit_for_fall_demo.pdf',
'documents/SharedDocuments/fit_for_fall_demo.pdf-meta.xml',
'documents/SharedDocuments/Fit_for_Fall_logo.jpg',
'documents/SharedDocuments/Fit_for_Fall_logo.jpg-meta.xml',
'documents/SharedDocuments/Fit_for_Fall_wk_2.jpg',
'documents/SharedDocuments/Fit_for_Fall_wk_2.jpg-meta.xml',
'documents/SharedDocuments/Fit_for_Fall_wk_3.jpg',
'documents/SharedDocuments/Fit_for_Fall_wk_3.jpg-meta.xml',
'documents/SharedDocuments/food_log_icon.png',
'documents/SharedDocuments/food_log_icon.png-meta.xml',
'documents/SharedDocuments/fruit_icon.png',
'documents/SharedDocuments/fruit_icon.png-meta.xml',
'documents/SharedDocuments/hamburger_and_salad.jpg',
'documents/SharedDocuments/hamburger_and_salad.jpg-meta.xml',
'documents/SharedDocuments/HDlogo.jpg',
'documents/SharedDocuments/HDlogo.jpg-meta.xml',
'documents/SharedDocuments/HDlogopng.png',
'documents/SharedDocuments/HDlogopng.png-meta.xml',
'documents/SharedDocuments/HDprogram.png',
'documents/SharedDocuments/HDprogram.png-meta.xml',
'documents/SharedDocuments/Healthy_Life_500.jpg',
'documents/SharedDocuments/Healthy_Life_500.jpg-meta.xml',
'documents/SharedDocuments/HMH_Charity_Image.jpg',
'documents/SharedDocuments/HMH_Charity_Image.jpg-meta.xml',
'documents/SharedDocuments/HMH_Coaching_FAQs.pdf',
'documents/SharedDocuments/HMH_Coaching_FAQs.pdf-meta.xml',
'documents/SharedDocuments/HMH_Coaching_Getting_Started.pdf',
'documents/SharedDocuments/HMH_Coaching_Getting_Started.pdf-meta.xml',
'documents/SharedDocuments/HMH_IFCN_FAQ_s.pdf',
'documents/SharedDocuments/HMH_IFCN_FAQ_s.pdf-meta.xml',
'documents/SharedDocuments/HMH_wellness_program_timeline.pdf',
'documents/SharedDocuments/HMH_wellness_program_timeline.pdf-meta.xml',
'documents/SharedDocuments/HMHLogo.png',
'documents/SharedDocuments/HMHLogo.png-meta.xml',
'documents/SharedDocuments/HN_Biometrics.png',
'documents/SharedDocuments/HN_Biometrics.png-meta.xml',
'documents/SharedDocuments/HN_Good_Life.png',
'documents/SharedDocuments/HN_Good_Life.png-meta.xml',
'documents/SharedDocuments/Home_Test_Kit.png',
'documents/SharedDocuments/Home_Test_Kit.png-meta.xml',
'documents/SharedDocuments/Hurricane.png',
'documents/SharedDocuments/Hurricane.png-meta.xml',
'documents/SharedDocuments/Journey.png',
'documents/SharedDocuments/Journey.png-meta.xml',
'documents/SharedDocuments/Journey_prompt_to_link_to_correct_tool_HW.URL',
'documents/SharedDocuments/Journey_prompt_to_link_to_correct_tool_HW.URL-meta.xml',
'documents/SharedDocuments/Journey_Week_1_Task_1.pdf',
'documents/SharedDocuments/Journey_Week_1_Task_1.pdf-meta.xml',
'documents/SharedDocuments/Journey_Week_1_Task_4.pdf',
'documents/SharedDocuments/Journey_Week_1_Task_4.pdf-meta.xml',
'documents/SharedDocuments/Lab_voucher.pdf',
'documents/SharedDocuments/Lab_voucher.pdf-meta.xml',
'documents/SharedDocuments/Man_Lifting_Woman.jpg',
'documents/SharedDocuments/Man_Lifting_Woman.jpg-meta.xml',
'documents/SharedDocuments/Maxwell_Logo.png',
'documents/SharedDocuments/Maxwell_Logo.png-meta.xml',
'documents/SharedDocuments/Meditate.jpg',
'documents/SharedDocuments/Meditate.jpg-meta.xml',
'documents/SharedDocuments/meditation_icon.png',
'documents/SharedDocuments/meditation_icon.png-meta.xml',
'documents/SharedDocuments/Mindful_Minutes.png',
'documents/SharedDocuments/Mindful_Minutes.png-meta.xml',
'documents/SharedDocuments/mindful_minutes_icon.png',
'documents/SharedDocuments/mindful_minutes_icon.png-meta.xml',
'documents/SharedDocuments/nov_pathways.pdf',
'documents/SharedDocuments/nov_pathways.pdf-meta.xml',
'documents/SharedDocuments/open_road.png',
'documents/SharedDocuments/open_road.png-meta.xml',
'documents/SharedDocuments/pha_yes_test.jpg',
'documents/SharedDocuments/pha_yes_test.jpg-meta.xml',
'documents/SharedDocuments/preventive.jpg',
'documents/SharedDocuments/preventive.jpg-meta.xml',
'documents/SharedDocuments/Preventure_Terms_of_Use_and_Privacy_Policy.pdf',
'documents/SharedDocuments/Preventure_Terms_of_Use_and_Privacy_Policy.pdf-meta.xml',
'documents/SharedDocuments/PVT_LOGO.png',
'documents/SharedDocuments/PVT_LOGO.png-meta.xml',
'documents/SharedDocuments/PVT_Photos_Hands_Holding_Heart_jpg.jpg',
'documents/SharedDocuments/PVT_Photos_Hands_Holding_Heart_jpg.jpg-meta.xml',
'documents/SharedDocuments/Rainbow_Nutrition_Low_Risk.png',
'documents/SharedDocuments/Rainbow_Nutrition_Low_Risk.png-meta.xml',
'documents/SharedDocuments/RBT_Charity_Image.jpg',
'documents/SharedDocuments/RBT_Charity_Image.jpg-meta.xml',
'documents/SharedDocuments/RBT_Coaching_FAQs.pdf',
'documents/SharedDocuments/RBT_Coaching_FAQs.pdf-meta.xml',
'documents/SharedDocuments/RBT_Coaching_Getting_Started.pdf',
'documents/SharedDocuments/RBT_Coaching_Getting_Started.pdf-meta.xml',
'documents/SharedDocuments/RBT_IFCN_FAQs.pdf',
'documents/SharedDocuments/RBT_IFCN_FAQs.pdf-meta.xml',
'documents/SharedDocuments/RBT_Wellness_Program_Overview.pdf',
'documents/SharedDocuments/RBT_Wellness_Program_Overview.pdf-meta.xml',
'documents/SharedDocuments/READ_What_is_Back_Pain.pdf',
'documents/SharedDocuments/READ_What_is_Back_Pain.pdf-meta.xml',
'documents/SharedDocuments/Reg.jpg',
'documents/SharedDocuments/Reg.jpg-meta.xml',
'documents/SharedDocuments/RND_IFCN_FAQ_s.pdf',
'documents/SharedDocuments/RND_IFCN_FAQ_s.pdf-meta.xml',
'documents/SharedDocuments/RND_Logo.png',
'documents/SharedDocuments/RND_Logo.png-meta.xml',
'documents/SharedDocuments/RND_PSF_Paper_Form.pdf',
'documents/SharedDocuments/RND_PSF_Paper_Form.pdf-meta.xml',
'documents/SharedDocuments/Salad.jpg',
'documents/SharedDocuments/Salad.jpg-meta.xml',
'documents/SharedDocuments/salad_round.png',
'documents/SharedDocuments/salad_round.png-meta.xml',
'documents/SharedDocuments/Sandwich_Round.png',
'documents/SharedDocuments/Sandwich_Round.png-meta.xml',
'documents/SharedDocuments/Sleep.png',
'documents/SharedDocuments/Sleep.png-meta.xml',
'documents/SharedDocuments/sleep_icon.png',
'documents/SharedDocuments/sleep_icon.png-meta.xml',
'documents/SharedDocuments/smoking_icon_1.jpg',
'documents/SharedDocuments/smoking_icon_1.jpg-meta.xml',
'documents/SharedDocuments/sneakers.png',
'documents/SharedDocuments/sneakers.png-meta.xml',
'documents/SharedDocuments/steps_icon.png',
'documents/SharedDocuments/steps_icon.png-meta.xml',
'documents/SharedDocuments/Stress_Low_Risk_Sunny.png',
'documents/SharedDocuments/Stress_Low_Risk_Sunny.png-meta.xml',
'documents/SharedDocuments/Stress_Moderate_Risk_Windy_Day.png',
'documents/SharedDocuments/Stress_Moderate_Risk_Windy_Day.png-meta.xml',
'documents/SharedDocuments/Sunny_Day.jpg',
'documents/SharedDocuments/Sunny_Day.jpg-meta.xml',
'documents/SharedDocuments/sunny_round.png',
'documents/SharedDocuments/sunny_round.png-meta.xml',
'documents/SharedDocuments/The_Journey_Week_1_2_Task_4.pdf',
'documents/SharedDocuments/The_Journey_Week_1_2_Task_4.pdf-meta.xml',
'documents/SharedDocuments/the_journey_week_3_task_1.pdf',
'documents/SharedDocuments/the_journey_week_3_task_1.pdf-meta.xml',
'documents/SharedDocuments/The_Journey_Week_3_Task_4.pdf',
'documents/SharedDocuments/The_Journey_Week_3_Task_4.pdf-meta.xml',
'documents/SharedDocuments/The_Journey_Week_3_Task_5.pdf',
'documents/SharedDocuments/The_Journey_Week_3_Task_5.pdf-meta.xml',
'documents/SharedDocuments/The_Journey_Week_4_Task_1.pdf',
'documents/SharedDocuments/The_Journey_Week_4_Task_1.pdf-meta.xml',
'documents/SharedDocuments/The_Journey_Week_4_Task_4.pdf',
'documents/SharedDocuments/The_Journey_Week_4_Task_4.pdf-meta.xml',
'documents/SharedDocuments/Tornado.jpg',
'documents/SharedDocuments/Tornado.jpg-meta.xml',
'documents/SharedDocuments/tornado_round.png',
'documents/SharedDocuments/tornado_round.png-meta.xml',
'documents/SharedDocuments/Turtle.png',
'documents/SharedDocuments/Turtle.png-meta.xml',
'documents/SharedDocuments/UAT_Steps_Challenge_Logo.jpg',
'documents/SharedDocuments/UAT_Steps_Challenge_Logo.jpg-meta.xml',
'documents/SharedDocuments/veggie_icon.png',
'documents/SharedDocuments/veggie_icon.png-meta.xml',
'documents/SharedDocuments/veggies.png',
'documents/SharedDocuments/veggies.png-meta.xml',
'documents/SharedDocuments/water_log_icon.png',
'documents/SharedDocuments/water_log_icon.png-meta.xml',
'documents/SharedDocuments/weight_log_icon.png',
'documents/SharedDocuments/weight_log_icon.png-meta.xml',
'documents/SharedDocuments/white_bread.jpg',
'documents/SharedDocuments/white_bread.jpg-meta.xml',
'documents/SharedDocuments/White_Brown_Green_Moderate_Nutrition_Risk.png',
'documents/SharedDocuments/White_Brown_Green_Moderate_Nutrition_Risk.png-meta.xml',
'documents/SharedDocuments/White_Food_High.png',
'documents/SharedDocuments/White_Food_High.png-meta.xml',
'documents/SharedDocuments/wind_round.png',
'documents/SharedDocuments/wind_round.png-meta.xml',
'documents/SharedDocuments-meta.xml',
'documents/Sprint_Photos-meta.xml',
'email',
'email/Client_Notifications',
'email/Client_Notifications/Badge_notification.email',
'email/Client_Notifications/Badge_notification.email-meta.xml',
'email/Client_Notifications/Biometric_Screening_Outcome.email',
'email/Client_Notifications/Biometric_Screening_Outcome.email-meta.xml',
'email/Client_Notifications/Challenge_Ending_Soon_Log_Reminder.email',
'email/Client_Notifications/Challenge_Ending_Soon_Log_Reminder.email-meta.xml',
'email/Client_Notifications/Challenge_Exercise_Ended.email',
'email/Client_Notifications/Challenge_Exercise_Ended.email-meta.xml',
'email/Client_Notifications/Challenge_Exercise_Log_Reminder.email',
'email/Client_Notifications/Challenge_Exercise_Log_Reminder.email-meta.xml',
'email/Client_Notifications/Challenge_Exercise_Log_Reminder_SP.email',
'email/Client_Notifications/Challenge_Exercise_Log_Reminder_SP.email-meta.xml',
'email/Client_Notifications/Challenge_Sign_Up_Confirmation.email',
'email/Client_Notifications/Challenge_Sign_Up_Confirmation.email-meta.xml',
'email/Client_Notifications/Challenge_Starting_Reminder.email',
'email/Client_Notifications/Challenge_Starting_Reminder.email-meta.xml',
'email/Client_Notifications/Challenge_Team_Sign_Up_Confirmation.email',
'email/Client_Notifications/Challenge_Team_Sign_Up_Confirmation.email-meta.xml',
'email/Client_Notifications/Commitment_Complete.email',
'email/Client_Notifications/Commitment_Complete.email-meta.xml',
'email/Client_Notifications/Commitment_Expired.email',
'email/Client_Notifications/Commitment_Expired.email-meta.xml',
'email/Client_Notifications/Commitment_Just_Signed_Up.email',
'email/Client_Notifications/Commitment_Just_Signed_Up.email-meta.xml',
'email/Client_Notifications/CommunityUserChatterMessageEmail.email',
'email/Client_Notifications/CommunityUserChatterMessageEmail.email-meta.xml',
'email/Client_Notifications/Event_Registration_Reminder1.email',
'email/Client_Notifications/Event_Registration_Reminder1.email-meta.xml',
'email/Client_Notifications/Event_Registration_Sign_Up.email',
'email/Client_Notifications/Event_Registration_Sign_Up.email-meta.xml',
'email/Client_Notifications/Fasting_Prior_to_Screenings_1.email',
'email/Client_Notifications/Fasting_Prior_to_Screenings_1.email-meta.xml',
'email/Client_Notifications/Final_Weekly_Incomplete_Tasks_Reminder.email',
'email/Client_Notifications/Final_Weekly_Incomplete_Tasks_Reminder.email-meta.xml',
'email/Client_Notifications/Health_Coaching_Acknowledgement_Nurtur.email',
'email/Client_Notifications/Health_Coaching_Acknowledgement_Nurtur.email-meta.xml',
'email/Client_Notifications/HTML_Badge_notification_email.email',
'email/Client_Notifications/HTML_Badge_notification_email.email-meta.xml',
'email/Client_Notifications/HTML_Challenge_Exercise_Ended.email',
'email/Client_Notifications/HTML_Challenge_Exercise_Ended.email-meta.xml',
'email/Client_Notifications/HTML_Challenge_Exercise_Ending_Soon_Log_Reminder.email',
'email/Client_Notifications/HTML_Challenge_Exercise_Ending_Soon_Log_Reminder.email-meta.xml',
'email/Client_Notifications/HTML_Challenge_Exercise_Log_Reminder.email',
'email/Client_Notifications/HTML_Challenge_Exercise_Log_Reminder.email-meta.xml',
'email/Client_Notifications/HTML_Challenge_Organization_Sign_Up_Confirmation.email',
'email/Client_Notifications/HTML_Challenge_Organization_Sign_Up_Confirmation.email-meta.xml',
'email/Client_Notifications/HTML_Challenge_Starting_Reminder.email',
'email/Client_Notifications/HTML_Challenge_Starting_Reminder.email-meta.xml',
'email/Client_Notifications/HTML_Challenge_Team_Sign_Up_Confirmation.email',
'email/Client_Notifications/HTML_Challenge_Team_Sign_Up_Confirmation.email-meta.xml',
'email/Client_Notifications/HTML_Commitment_Complete.email',
'email/Client_Notifications/HTML_Commitment_Complete.email-meta.xml',
'email/Client_Notifications/HTML_Commitment_Expired.email',
'email/Client_Notifications/HTML_Commitment_Expired.email-meta.xml',
'email/Client_Notifications/HTML_Commitment_Just_Signed_Up.email',
'email/Client_Notifications/HTML_Commitment_Just_Signed_Up.email-meta.xml',
'email/Client_Notifications/HTML_Initial_User_Login_HTML.email',
'email/Client_Notifications/HTML_Initial_User_Login_HTML.email-meta.xml',
'email/Client_Notifications/HTML_Journey_Complete.email',
'email/Client_Notifications/HTML_Journey_Complete.email-meta.xml',
'email/Client_Notifications/HTML_Journey_Final_Weekly_Incomplete_Tasks_Reminder.email',
'email/Client_Notifications/HTML_Journey_Final_Weekly_Incomplete_Tasks_Reminder.email-meta.xml',
'email/Client_Notifications/HTML_Journey_Weekly_Incomplete_Tasks_Reminder_SP.email',
'email/Client_Notifications/HTML_Journey_Weekly_Incomplete_Tasks_Reminder_SP.email-meta.xml',
'email/Client_Notifications/HTML_Points_Earned.email',
'email/Client_Notifications/HTML_Points_Earned.email-meta.xml',
'email/Client_Notifications/Message_Notification.email',
'email/Client_Notifications/Message_Notification.email-meta.xml',
'email/Client_Notifications/Points_Earned_SP.email',
'email/Client_Notifications/Points_Earned_SP.email-meta.xml',
'email/Client_Notifications/Roundy_s_PSF_Submission_Acknowledgement.email',
'email/Client_Notifications/Roundy_s_PSF_Submission_Acknowledgement.email-meta.xml',
'email/Client_Notifications/Visual_Badge_notification.email',
'email/Client_Notifications/Visual_Badge_notification.email-meta.xml',
'email/Client_Notifications/Visual_Biometric_Screening_Outcome.email',
'email/Client_Notifications/Visual_Biometric_Screening_Outcome.email-meta.xml',
'email/Client_Notifications/Visual_Initial_User_Login.email',
'email/Client_Notifications/Visual_Initial_User_Login.email-meta.xml',
'email/Client_Notifications/Visual_Journey_Weekly_Incomplete_AGP.email',
'email/Client_Notifications/Visual_Journey_Weekly_Incomplete_AGP.email-meta.xml',
'email/Client_Notifications/Weekly_Incomplete_Tasks_Reminder.email',
'email/Client_Notifications/Weekly_Incomplete_Tasks_Reminder.email-meta.xml',
'email/Client_Notifications/Workshop_Complete.email',
'email/Client_Notifications/Workshop_Complete.email-meta.xml',
'email/Client_Notifications/Workshop_Weekly_Incomplete_Tasks_Reminder_SP.email',
'email/Client_Notifications/Workshop_Weekly_Incomplete_Tasks_Reminder_SP.email-meta.xml',
'email/Client_Notifications-meta.xml',
'homePageComponents',
'homePageComponents/Admin Links.homePageComponent',
'homePageLayouts',
'homePageLayouts/Client Admin.homePageLayout',
'homePageLayouts/Coaches.homePageLayout',
'homePageLayouts/Dashboard Home Page Default.homePageLayout',
'layouts',
'layouts/Account-Account Layout.layout',
'layouts/Contact-Contact Layout.layout',
'layouts/ContentVersion-General.layout',
'layouts/Global-Global Layout.layout',
'layouts/mxw__Activity__c-Activity Layout.layout',
'layouts/mxw__Activity_Group__c-Activity Group Layout.layout',
'layouts/mxw__Badge__c-Badge Layout.layout',
'layouts/mxw__Content_Queue__c-Content Queue Layout.layout',
'layouts/mxw__Group__c-Group Layout.layout',
'layouts/mxw__Metric__c-Metric Layout.layout',
'layouts/mxw__Notification__c-Notification Layout.layout',
'layouts/mxw__Page_Link__c-Page Link Layout.layout',
'layouts/mxw__Portal_Config__c-Portal Config Layout.layout',
'layouts/mxw__Progress__c-Progress Layout.layout',
'layouts/mxw__Question_Set__c-Question Set Layout.layout',
'layouts/mxw__Relationship__c-Relationship Layout.layout',
'layouts/mxw__Section__c-Section Layout.layout',
'layouts/mxw__Section_Progress__c-Section Progress Layout.layout',
'layouts/mxw__Team__c-Team Layout.layout',
'layouts/mxw__User_Response__c-User Response Layout.layout',
'layouts/mxw__Wellness_Event__c-Wellness Event Layout.layout',
'layouts/mxw__Wellness_Event_Appointment__c-Wellness Event Appointment Layout.layout',
'layouts/Profanity_filter__c-Profanity filter Layout.layout',
'layouts/User-User Layout.layout',
'letterhead',
'letterhead/Health_Coaching_Header.letter',
'letterhead/Maxwell_Default.letter',
'letterhead/RND_Logo.letter',
'letterhead/User_Activation.letter',
'objects',
'objects/Account.object',
'objects/Activity.object',
'objects/Contact.object',
'objects/mxw__Activity_Group__c.object',
'objects/mxw__Activity_Group_Progress__c.object',
'objects/mxw__Badge__c.object',
'objects/mxw__Metric__c.object',
'objects/mxw__Notification__c.object',
'objects/mxw__Progress__c.object',
'objects/mxw__Question_Response_Group__c.object',
'objects/mxw__Question_Set__c.object',
'objects/mxw__Section_Progress__c.object',
'objects/mxw__User_Response__c.object',
'objects/mxw__Wellness_Event__c.object',
'objects/mxw__Wellness_Event_Appointment__c.object',
'objects/Profanity_filter__c.object',
'objects/User.object',
'package.xml',
'profiles',
'profiles/Client Cross Location Admin.profile',
'profiles/Client Cross Location PHI Admin.profile',
'profiles/Client Location Admin.profile',
'profiles/Maxwell Client Admin.profile',
'profiles/Maxwell User.profile',
'profiles/MXW Integration.profile',
'profiles/PVT Admin.profile',
'profiles/PVT Coach.profile',
'profiles/PVT CSR.profile',
'profiles/PVT Superadmin.profile',
'profiles/System Admin.profile',
'reports',
'reports/Camp_Prog',
'reports/Camp_Prog/Empty_QRG_Dates.report',
'reports/Camp_Prog-meta.xml',
'reports/Client_Reports',
'reports/Client_Reports/Alcohol_Use_Risk_Factor_Breakdown.report',
'reports/Client_Reports/Asthma_Risk_Breakdown.report',
'reports/Client_Reports/Biometric_Completion_by_Loc_Type.report',
'reports/Client_Reports/Cardiac_Risk_Factor_Breakdown.report',
'reports/Client_Reports/Challenge_Activities_Completed.report',
'reports/Client_Reports/Challenge_Activities_In_Progress.report',
'reports/Client_Reports/Challenge_Participationss.report',
'reports/Client_Reports/Commitment_Activities_Completed.report',
'reports/Client_Reports/Commitment_Activities_In_Progress.report',
'reports/Client_Reports/Commitment_Participations.report',
'reports/Client_Reports/COPD_Risk_Factor_Breakdown.report',
'reports/Client_Reports/Depression_Risk_Factor_Breakdown.report',
'reports/Client_Reports/Diabetes_Risk_Factor_Breakdown.report',
'reports/Client_Reports/Exercise_Risk_Factor_Breakdown.report',
'reports/Client_Reports/Incentive_Activities_InProgress.report',
'reports/Client_Reports/Incentive_Campaign_Participations.report',
'reports/Client_Reports/Incentive_Completed_Participation.report',
'reports/Client_Reports/Journey_Activities_Completed.report',
'reports/Client_Reports/Journey_Activities_In_Progress.report',
'reports/Client_Reports/Journey_Participations.report',
'reports/Client_Reports/Lifestyle_Prevention.report',
'reports/Client_Reports/Nutrition_Risk_Factor_Breakdown.report',
'reports/Client_Reports/Personal_Safety_Risk_Factor_Breakdown.report',
'reports/Client_Reports/PHA_Completion_by_Loc_Type.report',
'reports/Client_Reports/PHA_Completion_Detail.report',
'reports/Client_Reports/Portal_Registration.report',
'reports/Client_Reports/Self_Rated_Health_Risk_Factor_Breakdown.report',
'reports/Client_Reports/Stress_Risk_Factor_Breakdown.report',
'reports/Client_Reports/Stroke_Risk_Factor_Breakdown.report',
'reports/Client_Reports/User_Logins.report',
'reports/Client_Reports/User_Question_Response_Metric.report',
'reports/Client_Reports-meta.xml',
'reports/Coaching_Reports-meta.xml',
'reports/Preventure_Custom_Reports',
'reports/Preventure_Custom_Reports/Bio_QRG.report',
'reports/Preventure_Custom_Reports/Contact_Details.report',
'reports/Preventure_Custom_Reports/HumanAPI_Report.report',
'reports/Preventure_Custom_Reports/Metric_Report.report',
'reports/Preventure_Custom_Reports-meta.xml',
'reports/PVT_Unfiled_Reports',
'reports/PVT_Unfiled_Reports/Contact_Sums_for_Report_Cross_Check.report',
'reports/PVT_Unfiled_Reports/Participation_by_QS_Type.report',
'reports/PVT_Unfiled_Reports/Path_Activities_Completed.report',
'reports/PVT_Unfiled_Reports/Path_Activities_In_Progress.report',
'reports/PVT_Unfiled_Reports/Path_Participations.report',
'reports/PVT_Unfiled_Reports/QS_Questions_w_Response_Pct.report',
'reports/PVT_Unfiled_Reports-meta.xml',
'reports/Question_Responses',
'reports/Question_Responses/Alcohol_Risk_Response_Metric.report',
'reports/Question_Responses/Asthma_Risk_Response_Metric.report',
'reports/Question_Responses/COPD_Risk_Response_Metric.report',
'reports/Question_Responses/Depression_Risk_Response_Metric.report',
'reports/Question_Responses/Diabetes_Risk_Response_Metric.report',
'reports/Question_Responses/Nutrition_Risk_Response_Metric.report',
'reports/Question_Responses/Personal_Safety_Risk_Response_Metric.report',
'reports/Question_Responses/Question_Response_Metric.report',
'reports/Question_Responses/Self_Health_Rated_Risk_Response_Metric.report',
'reports/Question_Responses/Stress_Risk_Response_Metric.report',
'reports/Question_Responses/Stroke_Risk_Response_Metric.report',
'reports/Question_Responses-meta.xml',
'reportTypes',
'reportTypes/A_with_C_with_AGP_with_SP_with_P.reportType',
'reportTypes/Accounts_with_Contacts_with_AGP.reportType',
'reportTypes/Accounts_with_Contacts_with_AGP2.reportType',
'reportTypes/Accounts_with_Contacts_wo_AGP.reportType',
'reportTypes/Accounts_with_Contacts_wo_AGP_x.reportType',
'reportTypes/Contacts_with_Question_Response_Groups.reportType',
'reportTypes/CwQRGwURwF.reportType',
'reportTypes/CwwoQRGwURwF.reportType',
'reportTypes/Question_Sets.reportType',
'reportTypes/Risk_Factor_Question_Answered_Metric.reportType',
'tabs',
'tabs/mxw__Activity__c.tab',
'tabs/mxw__Content_Queue__c.tab',
'tabs/mxw__Metric__c.tab',
'tabs/mxw__Notification__c.tab',
'tabs/mxw__Portal_Config__c.tab',
'tabs/mxw__Progress__c.tab',
'tabs/mxw__User_Response__c.tab',
'tabs/mxw__Wellness_Event__c.tab',
'tabs/Profanity_filter__c.tab',
'triggers',
'triggers/onFilePostCreation.trigger',
'triggers/onFilePostCreation.trigger-meta.xml',
'triggers/updConPha.trigger',
'triggers/updConPha.trigger-meta.xml',
'triggers/updQrgPha.trigger',
'triggers/updQrgPha.trigger-meta.xml',
'weblinks',
'weblinks/Healthwise_Admin.weblink',
'workflows',
'workflows/Contact.workflow',
'workflows/mxw__Activity_Group__c.workflow',
'workflows/mxw__Activity_Group_Progress__c.workflow',
'workflows/mxw__Question_Response_Group__c.workflow',
'workflows/mxw__Question_Set__c.workflow',
'workflows/mxw__Section_Progress__c.workflow',
'workflows/mxw__Wellness_Event_Appointment__c.workflow']

var meta = [
    {
        "directoryName": "installedPackages",
        "inFolder": false,
        "metaFile": false,
        "suffix": "installedPackage",
        "xmlName": "InstalledPackage"
    }, {
        "childXmlNames": ["CustomLabel"],
        "directoryName": "labels",
        "inFolder": false,
        "metaFile": false,
        "suffix": "labels",
        "xmlName": "CustomLabels"
    }, {
        "directoryName": "staticresources",
        "inFolder": false,
        "metaFile": true,
        "suffix": "resource",
        "xmlName": "StaticResource"
    }, {
        "directoryName": "scontrols",
        "inFolder": false,
        "metaFile": true,
        "suffix": "scf",
        "xmlName": "Scontrol"
    }, {
        "directoryName": "aura",
        "inFolder": false,
        "metaFile": false,
        "xmlName": "AuraDefinitionBundle"
    }, {
        "directoryName": "components",
        "inFolder": false,
        "metaFile": true,
        "suffix": "component",
        "xmlName": "ApexComponent"
    }, {
        "directoryName": "pages",
        "inFolder": false,
        "metaFile": true,
        "suffix": "page",
        "xmlName": "ApexPage"
    }, {
        "directoryName": "queues",
        "inFolder": false,
        "metaFile": false,
        "suffix": "queue",
        "xmlName": "Queue"
    }, {
        "directoryName": "dataSources",
        "inFolder": false,
        "metaFile": false,
        "suffix": "dataSource",
        "xmlName": "ExternalDataSource"
    }, {
        "directoryName": "namedCredentials",
        "inFolder": false,
        "metaFile": false,
        "suffix": "namedCredential",
        "xmlName": "NamedCredential"
    }, {
        "directoryName": "roles",
        "inFolder": false,
        "metaFile": false,
        "suffix": "role",
        "xmlName": "Role"
    }, {
        "directoryName": "groups",
        "inFolder": false,
        "metaFile": false,
        "suffix": "group",
        "xmlName": "Group"
    }, {
        "directoryName": "uiplugins",
        "inFolder": false,
        "metaFile": true,
        "suffix": "uiplugin",
        "xmlName": "UiPlugin"
    }, {
        "childXmlNames": ["CustomField", "BusinessProcess", "CompactLayout", "RecordType", "WebLink", "ValidationRule", "SharingReason", "ListView", "FieldSet"],
        "directoryName": "objects",
        "inFolder": false,
        "metaFile": false,
        "suffix": "object",
        "xmlName": "CustomObject"
    }, {
        "directoryName": "reportTypes",
        "inFolder": false,
        "metaFile": false,
        "suffix": "reportType",
        "xmlName": "ReportType"
    }, {
        "directoryName": "reports",
        "inFolder": true,
        "metaFile": false,
        "suffix": "report",
        "xmlName": "Report"
    }, {
        "directoryName": "dashboards",
        "inFolder": true,
        "metaFile": false,
        "suffix": "dashboard",
        "xmlName": "Dashboard"
    }, {
        "directoryName": "analyticSnapshots",
        "inFolder": false,
        "metaFile": false,
        "suffix": "snapshot",
        "xmlName": "AnalyticSnapshot"
    }, {
        "directoryName": "layouts",
        "inFolder": false,
        "metaFile": false,
        "suffix": "layout",
        "xmlName": "Layout"
    }, {
        "directoryName": "documents",
        "inFolder": true,
        "metaFile": true,
        "xmlName": "Document"
    }, {
        "directoryName": "weblinks",
        "inFolder": false,
        "metaFile": false,
        "suffix": "weblink",
        "xmlName": "CustomPageWebLink"
    }, {
        "directoryName": "quickActions",
        "inFolder": false,
        "metaFile": false,
        "suffix": "quickAction",
        "xmlName": "QuickAction"
    }, {
        "directoryName": "flexipages",
        "inFolder": false,
        "metaFile": false,
        "suffix": "flexipage",
        "xmlName": "FlexiPage"
    }, {
        "directoryName": "tabs",
        "inFolder": false,
        "metaFile": false,
        "suffix": "tab",
        "xmlName": "CustomTab"
    }, {
        "directoryName": "applications",
        "inFolder": false,
        "metaFile": false,
        "suffix": "app",
        "xmlName": "CustomApplication"
    }, {
        "directoryName": "letterhead",
        "inFolder": false,
        "metaFile": false,
        "suffix": "letter",
        "xmlName": "Letterhead"
    }, {
        "directoryName": "email",
        "inFolder": true,
        "metaFile": true,
        "suffix": "email",
        "xmlName": "EmailTemplate"
    }, {
        "directoryName": "flows",
        "inFolder": false,
        "metaFile": false,
        "suffix": "flow",
        "xmlName": "Flow"
    }, {
        "childXmlNames": ["WorkflowFieldUpdate", "WorkflowTask", "WorkflowAlert", "WorkflowSend", "WorkflowOutboundMessage", "WorkflowRule"],
        "directoryName": "workflows",
        "inFolder": false,
        "metaFile": false,
        "suffix": "workflow",
        "xmlName": "Workflow"
    }, {
        "childXmlNames": ["AssignmentRule"],
        "directoryName": "assignmentRules",
        "inFolder": false,
        "metaFile": false,
        "suffix": "assignmentRules",
        "xmlName": "AssignmentRules"
    }, {
        "childXmlNames": ["AutoResponseRule"],
        "directoryName": "autoResponseRules",
        "inFolder": false,
        "metaFile": false,
        "suffix": "autoResponseRules",
        "xmlName": "AutoResponseRules"
    }, {
        "childXmlNames": ["EscalationRule"],
        "directoryName": "escalationRules",
        "inFolder": false,
        "metaFile": false,
        "suffix": "escalationRules",
        "xmlName": "EscalationRules"
    }, {
        "directoryName": "postTemplates",
        "inFolder": false,
        "metaFile": false,
        "suffix": "postTemplate",
        "xmlName": "PostTemplate"
    }, {
        "directoryName": "approvalProcesses",
        "inFolder": false,
        "metaFile": false,
        "suffix": "approvalProcess",
        "xmlName": "ApprovalProcess"
    }, {
        "directoryName": "homePageComponents",
        "inFolder": false,
        "metaFile": false,
        "suffix": "homePageComponent",
        "xmlName": "HomePageComponent"
    }, {
        "directoryName": "homePageLayouts",
        "inFolder": false,
        "metaFile": false,
        "suffix": "homePageLayout",
        "xmlName": "HomePageLayout"
    }, {
        "directoryName": "objectTranslations",
        "inFolder": false,
        "metaFile": false,
        "suffix": "objectTranslation",
        "xmlName": "CustomObjectTranslation"
    }, {
        "directoryName": "classes",
        "inFolder": false,
        "metaFile": true,
        "suffix": "cls",
        "xmlName": "ApexClass"
    }, {
        "directoryName": "triggers",
        "inFolder": false,
        "metaFile": true,
        "suffix": "trigger",
        "xmlName": "ApexTrigger"
    }, {
        "directoryName": "profiles",
        "inFolder": false,
        "metaFile": false,
        "suffix": "profile",
        "xmlName": "Profile"
    }, {
        "directoryName": "permissionsets",
        "inFolder": false,
        "metaFile": false,
        "suffix": "permissionset",
        "xmlName": "PermissionSet"
    }, {
        "directoryName": "datacategorygroups",
        "inFolder": false,
        "metaFile": false,
        "suffix": "datacategorygroup",
        "xmlName": "DataCategoryGroup"
    }, {
        "directoryName": "remoteSiteSettings",
        "inFolder": false,
        "metaFile": false,
        "suffix": "remoteSite",
        "xmlName": "RemoteSiteSetting"
    }, {
        "childXmlNames": ["MatchingRule"],
        "directoryName": "matchingRules",
        "inFolder": false,
        "metaFile": false,
        "suffix": "matchingRule",
        "xmlName": "MatchingRules"
    }, {
        "directoryName": "authproviders",
        "inFolder": false,
        "metaFile": false,
        "suffix": "authprovider",
        "xmlName": "AuthProvider"
    }, {
        "directoryName": "sites",
        "inFolder": false,
        "metaFile": false,
        "suffix": "site",
        "xmlName": "CustomSite"
    }, {
        "directoryName": "channelLayouts",
        "inFolder": false,
        "metaFile": false,
        "suffix": "channelLayout",
        "xmlName": "ChannelLayout"
    }, {
        "childXmlNames": ["SharingOwnerRule", "SharingCriteriaRule"],
        "directoryName": "sharingRules",
        "inFolder": false,
        "metaFile": false,
        "suffix": "sharingRules",
        "xmlName": "SharingRules"
    }, {
        "directoryName": "communities",
        "inFolder": false,
        "metaFile": false,
        "suffix": "community",
        "xmlName": "Community"
    }, {
        "directoryName": "callCenters",
        "inFolder": false,
        "metaFile": false,
        "suffix": "callCenter",
        "xmlName": "CallCenter"
    }, {
        "directoryName": "connectedApps",
        "inFolder": false,
        "metaFile": false,
        "suffix": "connectedApp",
        "xmlName": "ConnectedApp"
    }, {
        "directoryName": "appMenus",
        "inFolder": false,
        "metaFile": false,
        "suffix": "appMenu",
        "xmlName": "AppMenu"
    }, {
        "directoryName": "customPermissions",
        "inFolder": false,
        "metaFile": false,
        "suffix": "customPermission",
        "xmlName": "CustomPermission"
    }, {
        "directoryName": "siteDotComSites",
        "inFolder": false,
        "metaFile": true,
        "suffix": "site",
        "xmlName": "SiteDotCom"
    }, {
        "directoryName": "networks",
        "inFolder": false,
        "metaFile": false,
        "suffix": "network",
        "xmlName": "Network"
    }, {
        "childXmlNames": ["ManagedTopic"],
        "directoryName": "managedTopics",
        "inFolder": false,
        "metaFile": false,
        "suffix": "managedTopics",
        "xmlName": "ManagedTopics"
    }, {
        "directoryName": "samlssoconfigs",
        "inFolder": false,
        "metaFile": false,
        "suffix": "samlssoconfig",
        "xmlName": "SamlSsoConfig"
    }, {
        "directoryName": "corsWhitelistOrigins",
        "inFolder": false,
        "metaFile": false,
        "suffix": "corsWhitelistOrigin",
        "xmlName": "CorsWhitelistOrigin"
    }, {
        "directoryName": "actionLinkGroupTemplates",
        "inFolder": false,
        "metaFile": false,
        "suffix": "actionLinkGroupTemplate",
        "xmlName": "ActionLinkGroupTemplate"
    }, {
        "directoryName": "settings",
        "inFolder": false,
        "metaFile": false,
        "suffix": "settings",
        "xmlName": "Settings"
    }]
/**
 * @private
 */
function toXML(name, value) {
  if (typeof name === 'object') {
    value = name;
    name = null;
  }
  if (Array.isArray(value)) {
    return value.map(function(v) { return toXML(name, v); }).join('');
  } else {
    var attrs = [];
    var elems = [];
    if (typeof value === 'object') {
      for (var k in value) {
        var v = value[k];
        if (k[0] === '@') {
          k = k.substring(1);
          attrs.push(k + '="' + v + '"');
        } else {
          elems.push(toXML(k, v));
        }
      }
      value = elems.join('');
    } else {
      value = String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
    }
    var startTag = name ? '<' + name + (attrs.length > 0 ? ' ' + attrs.join(' ') : '') + '>' : '';
    var endTag = name ? '</' + name + '>' : '';
    return  startTag + value + endTag;
  }
}
var meta1 = {}

meta.map(function(m) {
    meta1[m.directoryName] = m
})

var pkg = {}

files.filter(function(f) {
  return f.lastIndexOf('/') !== -1 && f.indexOf('-meta.xml') === -1
}).map(function(f) {
    var arr = f.split('/')
    var dir = arr.shift()
    var file = arr.join('/')
    var m = meta1[dir]
    if(!m) return
    pkg[m.xmlName] = pkg[m.xmlName] || []
    pkg[m.xmlName].push(file.replace('.' + m.suffix, ''))
})

var packageXml = {
		Package: {
			'@xmlns':'http://soap.sforce.com/2006/04/metadata',
			types: [],
			version: '36.0'
		}
	}

	Object.keys(pkg).map(function(p) {
		packageXml.Package.types.push({
			name: p,
			members: pkg[p]
		})
	})
console.log(toXML(packageXml))



