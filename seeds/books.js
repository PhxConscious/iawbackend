exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('lms_books').del()
        .then(function () {
            // Inserts seed entries
            return knex('lms_books').insert([
         {
            "name":"module_1",
            "module":{
               "array":[
                  {
                     "title":"Getting Started",
                     "description":"",
                     "image":"https://i.imgur.com/EHYS6cp.png",
                     "id":"u01",
                     "lessons":[
                        {
                           "title":"Quick tutorial on how to use the platform",
                           "description":"",
                           "video":"https://www.youtube.com/watch?v=i6G53BMgugo",
                           "id":"u01l01",
                           "questions":[
                              {
                                 "id":"u01l01q01",
                                 "contentType":"checkTasks",
                                 "title":"Do you understand?",
                                 "description":""
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "title":"Instagram 101",
                     "description":"",
                     "image":"https://i.imgur.com/EHYS6cp.png",
                     "id":"u02",
                     "lessons":[
                        {
                           "title":"Basics",
                           "description":"",
                           "video":"https://www.youtube.com/watch?v=i6G53BMgugo",
                           "id":"u02l01",
                           "questions":[
                              {
                                 "id":"u02l01q01",
                                 "contentType":"checkTasks",
                                 "title":"Basic communication: Posts, Stories, and DM's",
                                 "description":""
                              },
                              {
                                 "id":"u02l01q02",
                                 "contentType":"checkTasks",
                                 "title":"Here is how to perform a Basic Search - find Conscious Creative (@phxconscious)",
                                 "description":""
                              },
                              {
                                 "id":"u02l01q03",
                                 "contentType":"checkTasks",
                                 "title":"How to Follow an account - Follow Conscious Creative",
                                 "description":""
                              },
                              {
                                 "id":"u02l01q04",
                                 "contentType":"checkTasks",
                                 "title":"How to view a story",
                                 "description":""
                              },
                              {
                                 "id":"u02l01q05",
                                 "contentType":"checkTasks",
                                 "title":"How to comment on a story",
                                 "description":""
                              },
                              {
                                 "id":"u02l01q06",
                                 "contentType":"checkTasks",
                                 "title":"How to like a post - Like a Conscious Creative post",
                                 "description":""
                              },
                              {
                                 "id":"u02l01q07",
                                 "contentType":"checkTasks",
                                 "title":"How to save a post - Save a Conscious Creative post",
                                 "description":""
                              },
                              {
                                 "id":"u02l01q08",
                                 "contentType":"checkTasks",
                                 "title":"How to Comment - Comment on a Conscious Creative post",
                                 "description":""
                              },
                              {
                                 "id":"u02l01q09",
                                 "contentType":"checkTasks",
                                 "title":"How to Like a comment - like another comment on a Conscious Creative post",
                                 "description":""
                              }
                           ]
                        },
                        {
                           "title":"Connecting Your Ecosystem",
                           "description":"",
                           "video":"https://www.youtube.com/watch?v=i6G53BMgugo",
                           "id":"u02l02",
                           "questions":[
                             {
                                "id":"u02l02q01",
                                "contentType":"checkTasks",
                                "title":"Connecting your Facebook page to your profile",
                                "description": ""
                             },
                             {
                                "id":"u02l02q02",
                                "contentType":"checkTasks",
                                "title":"Connecting Twitter",
                                "description":""
                             },
                             {
                                "id":"u02l02q03",
                                "contentType":"checkTasks",
                                "title":"Connecting Tumbler (if you have it)",
                                "description":""
                             },
                             {
                                "id":"u02l02q04",
                                "contentType":"checkTasks",
                                "title":"The power of Inviting your Facebook friends. Have you invited a few or all of your Facebook friends?",
                                "description":""
                             }
                           ]
                        },
                        {
                           "title":"Profiles",
                           "description":"",
                           "video":"https://www.youtube.com/watch?v=i6G53BMgugo",
                           "id":"u02l03",
                           "questions":[
                              {
                                 "id":"u02l03q01",
                                 "contentType":"checkTasks",
                                 "title":"Profile image - do you have an image uploaded?",
                                 "description":""
                              },
                              {
                                 "id":"u02l03q02",
                                 "contentType":"checkTasks",
                                 "title":"Check your username. Is it in line with your brand and other social accounts?",
                                 "description":""
                              },
                              {
                                 "id":"u02l03q03",
                                 "contentType":"checkTasks",
                                 "title":"Check to see how the info from your Facebook page shows up on your Instagram profile.",
                                 "description":""
                              },
                              {
                                 "id":"u02l03q04",
                                 "contentType":"textArea",
                                 "columnName": "instagram_bio",
                                 "title":"Compose your Bio here, copy and paste it in your bio in instagram AND SUBMIT IT HERE FOR THE EXPERTS REVIEW.",
                                 "description":"How to comment on a story"
                              },
                              {
                                 "id":"u02l03q05",
                                 "contentType":"checkTasks",
                                 "title":"Review your profile, is everything working and updated?",
                                 "description":""
                              }
                           ]
                        },
                        {
                           "title":"Direct Messages",
                           "description":"",
                           "video":"https://www.youtube.com/watch?v=i6G53BMgugo",
                           "id":"u02l04",
                           "questions":[
                              {
                                 "id":"u02l04q01",
                                 "contentType":"checkTasks",
                                 "title":"How to find them and how do they work. Send us a Direct Message.",
                                 "description":""
                              },
                              {
                                 "id":"u02l04q02",
                                 "contentType":"checkTasks",
                                 "title":"Best practices. Do you understand?",
                                 "description":""
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "title":"Full Online Analysis Reports",
                     "description":"",
                     "image":"https://i.imgur.com/EHYS6cp.png",
                     "id":"u03",
                     "lessons":[
                        {
                           "title":"What The Report Is",
                           "description":"",
                           "video":"https://www.youtube.com/watch?v=i6G53BMgugo",
                           "id":"u03l01",
                           "questions":[
                              {
                                 "id":"u03l01q01",
                                 "contentType":"checkTasks",
                                 "title":"Do you feel like you have a good understanding? If not watch it again",
                                 "description":""
                              }
                           ]
                        },
                        {
                           "title":"How To Read The Report",
                           "description":"",
                           "video":"https://www.youtube.com/watch?v=i6G53BMgugo",
                           "id":"u03l02",
                           "questions":[
                              {
                                 "id":"u03l02q01",
                                 "contentType":"textArea",
                                 "columnName": "insta_goal1",
                                 "title":"Write your first (of three) milestone that can be accomplished in 3 weeks",
                                 "description":""
                              },
                              {
                                 "id":"u03l02q02",
                                 "contentType":"textArea",
                                 "columnName": "insta_goal2",
                                 "title":"Write your second (of three) milestone that can be accomplished in 3 weeks",
                                 "description":""
                              },
                              {
                                 "id":"u03l02q03",
                                 "contentType":"textArea",
                                 "columnName": "insta_goal3",
                                 "title":"Write your last milestone that can be accomplished in 3 weeks",
                                 "description":""
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "title":"Content",
                     "description":"",
                     "image":"https://i.imgur.com/EHYS6cp.png",
                     "id":"u04",
                     "lessons":[
                        {
                           "title":"What Is Good Content?",
                           "description":"",
                           "video":"https://www.youtube.com/watch?v=i6G53BMgugo",
                           "id":"u04l01",
                           "questions":[
                              {
                                 "id":"u04l01q01",
                                 "contentType":"checkTasks",
                                 "title":"Is this clear?",
                                 "description":""
                              }
                           ]
                        },
                        {
                           "title":"Your Content",
                           "description":"",
                           "video":"https://www.youtube.com/watch?v=i6G53BMgugo",
                           "id":"u04l02",
                           "questions":[
                              {
                                 "id":"u04l02q01",
                                 "contentType":"textInput",
                                 "columnName": "cloudbased_storage_locale",
                                 "title":"Do you have a content bank now? Paste a link to dropbox, box, or other cloud based folder link... or something",
                                 "description":""
                              },
                              {
                                 "id":"u04l02q02",
                                 "contentType":"checkTasks",
                                 "title":"Here is how you find your invite to our content structure & organize your content. Do you understand?",
                                 "description":""
                              }
                           ]
                        },
                        {
                           "title":"Content Creation",
                           "description":"",
                           "video":"https://www.youtube.com/watch?v=i6G53BMgugo",
                           "id":"u04l03",
                           "questions":[
                              {
                                 "id":"u04l03q01",
                                 "contentType":"checkTasks",
                                 "title":"Do you feel confident creating the different types of content?",
                                 "description":""
                              },
                              {
                                 "id":"u04l03q02",
                                 "contentType":"checkTaskscheckTasks",
                                 "title":"Images",
                                 "description":""
                              },{
                                 "id":"u04l03q03",
                                 "contentType":"checkTasks",
                                 "title":"Video",
                                 "description":""
                              },
                              {
                                 "id":"u04l03q04",
                                 "contentType":"checkTasks",
                                 "title":"Graphics",
                                 "description":""
                              },{
                                 "id":"u04l03q05",
                                 "contentType":"checkTasks",
                                 "title":"How to run a content creation workshop. Do you understand?",
                                 "description":""
                              }
                           ]
                        }
                     ]
                  },
               ]
            }
         }
      ]);
        });
};
