exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('lms_books').del()
        .then(function () {
            // Inserts seed entries
            return knex('lms_books').insert([
                {
                    "name": "module_1",
                    "module": {
                        "array": [
                            {
                                "title": "Platform and Program",
                                "description": "",
                                "image": "https://i.imgur.com/EHYS6cp.png",
                                "id": "u01",
                                "lessons": [
                                  {
                                      "title": "Welcome to instawesome",
                                      "description": "",
                                      "video": "https://www.youtube.com/watch?v=i6G53BMgugo",
                                      "id": "u01l01",
                                      "questions": [
                                          {
                                              "id": "u01l01q01",
                                              "contentType": "checkTasks",
                                              "title": "Ready to move on?",
                                              "description": "",
                                              "buttonText": "LET'S GO!"
                                          }
                                      ]
                                  },
                                  {
                                      "title": "Interacting with experts",
                                      "description": "",
                                      "video": "https://www.youtube.com/watch?v=i6G53BMgugo",
                                      "id": "u01l02",
                                      "questions": [
                                          {
                                              "id": "u01l02q01",
                                              "indexOfCorrect": [0],
                                              "contentType": "multiChoice",
                                              "title": "What's the best way to send us feedback?",
                                              "description": "",
                                              "buttonText": "FINISH UNIT 1",
                                              "correctResponse": "That's right! We look forward to hearing your ideas.",
                                              "incorrectResponse": "Using the Profile dropdown will always result in faster response times from us.",
                                              "questions": [
                                                  {
                                                      "text": "From the Profile dropdown",
                                                      "isCorrect": true
                                                  },
                                                  {
                                                      "text": "Via email or Instagram DM",
                                                      "isCorrect": false
                                                  }
                                              ]

                                          }
                                      ]
                                  }
                                ]
                            },
                            {
                                "title": "Instagram Basics",
                                "description": "",
                                "image": "https://i.imgur.com/EHYS6cp.png",
                                "id": "u02",
                                "lessons": [
                                    {
                                        "title": "The basics of Instagram",
                                        "description": "",
                                        "video": "https://www.youtube.com/watch?v=i6G53BMgugo",
                                        "id": "u02l01",
                                        "questions": [
                                            {
                                                "id": "u02l01q01",
                                                "contentType": "checkTasks",
                                                "title": "Ready to dig into the details?",
                                                "description": "",
                                                "buttonText": "LET'S GO!"
                                            },
                                            {
                                                "id": "u02l01q02",
                                                "contentType": "checkTasks",
                                                "title": "Search for & find @phxconscious",
                                                "description": "",
                                                "buttonText": "CONTINUE"
                                            },
                                            {
                                                "id": "u02l01q03",
                                                "indexOfCorrect": [2],
                                                "contentType": "multiChoice",
                                                "title": "When are you notified if someone you follow posts on Instagram?",
                                                "description": "",
                                                "buttonText": "Continue",
                                                "correctResponse": "Correct! Good work.",
                                                "incorrectResponse": "Actually, you’ll only be notified if you turn on their post notifications.",
                                                "questions": [
                                                    {
                                                        "text": "Always",
                                                        "isCorrect": false
                                                    },
                                                    {
                                                        "text": "Never",
                                                        "isCorrect": false
                                                    },
                                                    {
                                                        "text": "Only when you turn on their post notifications",
                                                        "isCorrect": true
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "u02l01q04",
                                                "contentType": "checkTasks",
                                                "title": "Vote on @phxconscious IAW story poll and send us a reply!",
                                                "description": "",
                                                "buttonText": "ALL DONE!"
                                            },
                                            {
                                                "id": "u02l01q05",
                                                "indexOfCorrect": [1],
                                                "contentType": "multiChoice",
                                                "title": "Find your conversation with @phxconscious and send us another message. Are these publicly visible?",
                                                "description": "",
                                                "buttonText": "Continue",
                                                "correctResponse": "That's right, these are only visible between you and the other profile.",
                                                "incorrectResponse": "Nope, these are only visible between you and the other profile.",
                                                "questions": [
                                                    {
                                                        "text": "Yes, they are.",
                                                        "isCorrect": false
                                                    },
                                                    {
                                                        "text": "Nope, these are private messages.",
                                                        "isCorrect": true
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "u02l01q06",
                                                "indexOfCorrect": [3],
                                                "contentType": "multiChoice",
                                                "title": "Like one of our posts, save one post, and share one post with anyone you'd like. Who can see your list of saved posts?",
                                                "description": "",
                                                "buttonText": "Continue",
                                                "correctResponse": "That's right, these are only visible to you.",
                                                "incorrectResponse": "Actually, these are only visible to you.",
                                                "questions": [
                                                    {
                                                        "text": "Everyone on Instagram",
                                                        "isCorrect": false
                                                    },
                                                    {
                                                        "text": "Only my followers",
                                                        "isCorrect": false
                                                    },{
                                                        "text": "Only people I choose",
                                                        "isCorrect": false
                                                    },
                                                    {
                                                        "text": "Only me",
                                                        "isCorrect": true
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "u02l01q07",
                                                "contentType": "checkTasks",
                                                "title": "Now, leave a nice comment on the post featuring your Instagram expert, reply to someone else’s comment and like that comment.",
                                                "description": "",
                                                "buttonText": "ALL DONE!"
                                            },
                                            {
                                                "id": "u02l01q08",
                                                "indexOfCorrect": [2],
                                                "contentType": "multiChoice",
                                                "title": "Which of these is not immediately available on the profile page?",
                                                "description": "",
                                                "buttonText": "Continue",
                                                "correctResponse": "You got it! It's buried in the app 'Options'.",
                                                "incorrectResponse": "Actually, that one is immediately available on your pofile page. “Posts you've liked” is the one that's more difficult to find, buried in the app 'Options.'",
                                                "questions": [
                                                    {
                                                        "text": "Your own posts",
                                                        "isCorrect": false
                                                    },
                                                    {
                                                        "text": "Posts you're tagged in",
                                                        "isCorrect": false
                                                    },{
                                                        "text": "Posts you've liked",
                                                        "isCorrect": true
                                                    },
                                                    {
                                                        "text": "Your saved posts",
                                                        "isCorrect": false
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "title": "Profiles",
                                        "description": "",
                                        "video": "https://www.youtube.com/watch?v=i6G53BMgugo",
                                        "id": "u02l02",
                                        "questions": [
                                            {
                                              "id": "u02l02q01",
                                              "indexOfCorrect": [0,1],
                                              "contentType": "multiChoice",
                                              "title": "How can users find you on Instagram?",
                                              "description": "",
                                              "buttonText": "CONTINUE",
                                              "correctResponse": "That's right! Only your name and username are searchable on Instagram... for now.",
                                              "incorrectResponse": "Nope, only your name and username are searchable on Instagram... for now.",
                                              "questions": [
                                                  {
                                                      "text": "Your name",
                                                      "isCorrect": true
                                                  },
                                                  {
                                                      "text": "Your username",
                                                      "isCorrect": true
                                                  },
                                                  {
                                                      "text": "Your location",
                                                      "isCorrect": false
                                                  },
                                                  {
                                                      "text": "Your bio",
                                                      "isCorrect": false
                                                  },
                                                  {
                                                      "text": "Your website",
                                                      "isCorrect": false
                                                  }
                                              ]
                                            },
                                            {
                                                "id": "u02l02q02",
                                                "contentType": "checkTasks",
                                                "title": "Upload your company profile image both to Instagram and instawesome",
                                                "description": "",
                                                "buttonText": "NEXT QUESTION"
                                            },
                                            {
                                              "id": "u02l02q03",
                                              "indexOfCorrect": [1],
                                              "contentType": "multiChoice",
                                              "title": "Your Instagram username should be:",
                                              "description": "",
                                              "buttonText": "CONTINUE",
                                              "correctResponse": "Spot on! Make sure it's as short and simple as possible, too.",
                                              "incorrectResponse": "Your username should be as easy to read as possible, and the same as your other company social accounts (or as close as possible).",
                                              "questions": [
                                                  {
                                                      "text": "Anything you want it to be",
                                                      "isCorrect": false
                                                  },
                                                  {
                                                      "text": "the same as your other company social accounts (or as close as possible).",
                                                      "isCorrect": true
                                                  },
                                                  {
                                                      "text": "Long and difficult to spell",
                                                      "isCorrect": false
                                                  }
                                              ]
                                            },
                                            {
                                                "id": "u02l02q04",
                                                "contentType": "checkTasks",
                                                "title": "Compose your company bio in this field. Get creative! When you're ready, copy and paste it into your Instagram bio by going to instagram.com/[company_instagram]",
                                                "description": "",
                                                "buttonText": "FINISH LESSON 2"
                                            },
                                            {
                                              "id": "u02l02q05",
                                              "indexOfCorrect": [0,2,3],
                                              "contentType": "multiChoice",
                                              "title": "What are the benefits of switching to a business profile?",
                                              "description": "",
                                              "buttonText": "CONTINUE",
                                              "correctResponse": "Yep! These are some of the many benefits of using Instagram as a business.",
                                              "incorrectResponse": "Actually, this feature requires a minimum of 10,000 followers. Better get to work! ",
                                              "questions": [
                                                  {
                                                      "text": "Seeing insights",
                                                      "isCorrect": true
                                                  },
                                                  {
                                                      "text": "Adding links to stories",
                                                      "isCorrect": false
                                                  },
                                                  {
                                                      "text": "Creating promotions",
                                                      "isCorrect": true
                                                  },
                                                  {
                                                      "text": "Offering users more ways to contact you",
                                                      "isCorrect": true
                                                  }
                                              ]
                                            },
                                            {
                                              "id": "u02l02q06",
                                              "indexOfCorrect": [2],
                                              "contentType": "multiChoice",
                                              "title": "How many profiles does Instagram let you switch between? ",
                                              "description": "",
                                              "buttonText": "CONTINUE",
                                              "correctResponse": "You got it! We hope they increase this limit down the road.",
                                              "incorrectResponse": "Sorry, Instagram only allows up to 5 accounts at the moment. This doesn't mean you can't own more than 5 accounts—you just can't be logged in to more than 5 at a time.",
                                              "questions": [
                                                  {
                                                      "text": "0 - 4",
                                                      "isCorrect": false
                                                  },
                                                  {
                                                      "text": "6 or more",
                                                      "isCorrect": false
                                                  },
                                                  {
                                                      "text": "5",
                                                      "isCorrect": true
                                                  }
                                              ]
                                            }
                                        ]
                                    },
                                    {
                                        "title": "Connecting Your Ecosystem",
                                        "description": "",
                                        "video": "https://www.youtube.com/watch?v=i6G53BMgugo",
                                        "id": "u02l03",
                                        "questions": [
                                            {
                                                "id": "u02l03q01",
                                                "contentType": "checkTasks",
                                                "title": "Ready to dig into the details? ",
                                                "description": "",
                                                "buttonText": "LET'S GO!"
                                            },
                                            {
                                              "id": "u02l03q02",
                                              "indexOfCorrect": [0,2],
                                              "contentType": "multiChoice",
                                              "title": "Check to see if each profile is properly connected—if not, make sure you connect it before moving on. \nWhat information from your Facebook business profile shows up on your Instagram profile?",
                                              "description": "",
                                              "buttonText": "CONTINUE",
                                              "correctResponse": "Good work! The other options don't transfer from Facebook to Instagram.",
                                              "incorrectResponse": "Unfortunately, Facebook likes & contact information don't transfer over to your Instagram profile. Contact information is set separately, in the Edit Profile section.",
                                              "questions": [
                                                  {
                                                      "text": "Location",
                                                      "isCorrect": true
                                                  },
                                                  {
                                                      "text": "Number of likes",
                                                      "isCorrect": false
                                                  },
                                                  {
                                                      "text": "Company type",
                                                      "isCorrect": true
                                                  },
                                                  {
                                                      "text": "Contact information",
                                                      "isCorrect": false
                                                  }
                                              ]
                                            },
                                            {
                                                "id": "u02l03q03",
                                                "contentType": "checkTasks",
                                                "title": "Take some time to invite friends from Facebook and follow suggested users. Remember, don’t be shy—they’re excited to see you!",
                                                "description": "",
                                                "buttonText": "CONTINUE"
                                            }
                                        ]
                                    },
                                    {
                                        "title": "App Options",
                                        "description": "",
                                        "video": "https://www.youtube.com/watch?v=i6G53BMgugo",
                                        "id": "u02l04",
                                        "questions": [
                                          {
                                            "id": "u02l04q01",
                                            "indexOfCorrect": [1],
                                            "contentType": "multiChoice",
                                            "title": "Are app Options accessed the same way on iPhone and Android?",
                                            "description": "",
                                            "buttonText": "CONTINUE",
                                            "correctResponse": "That's right! On iPhone it's a gear icon next to the Edit Profile button, and on Android it's three dots in the top right corner of the app.",
                                            "incorrectResponse": "Actually, they're different. On iPhone it's a gear icon next to the Edit Profile button, and on Android it's three dots in the top right corner of the app.",
                                            "questions": [
                                                {
                                                    "text": "Yes",
                                                    "isCorrect": false
                                                },
                                                {
                                                    "text": "No",
                                                    "isCorrect": true
                                                }
                                            ]
                                          }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "In-Depth Analysis Reports",
                                "description": "",
                                "image": "https://i.imgur.com/EHYS6cp.png",
                                "id": "u03",
                                "lessons": [
                                    {
                                        "title": "IDAR Overview",
                                        "description": "",
                                        "video": "https://www.youtube.com/watch?v=i6G53BMgugo",
                                        "id": "u03l01",
                                        "questions": [
                                            {
                                                "id": "u03l01q01",
                                                "contentType": "checkTasks",
                                                "title": "Ready to move on?",
                                                "description": "",
                                                "buttonText": "LET'S GO!"
                                            }
                                        ]
                                    },
                                    {
                                        "title": "IDAR How to Read",
                                        "description": "",
                                        "video": "https://www.youtube.com/watch?v=i6G53BMgugo",
                                        "id": "u03l02",
                                        "questions": [
                                            {
                                                "id": "u03l02q01",
                                                "contentType": "textArea",
                                                "columnName": "insta_goal1",
                                                "title": "Give us 3 short term milestones. These are goals that can be accomplished in 2-3 weeks. Write your first goal.",
                                                "description": "",
                                                "buttonText": "CONTINUE"
                                            },
                                            {
                                                "id": "u03l02q02",
                                                "contentType": "textArea",
                                                "columnName": "insta_goal2",
                                                "title": "Give us 3 short term milestones. These are goals that can be accomplished in 2-3 weeks. Write your second goal.",
                                                "description": "",
                                                "buttonText": "CONTINUE"
                                            },
                                            {
                                                "id": "u03l02q03",
                                                "contentType": "textArea",
                                                "columnName": "insta_goal3",
                                                "title": "Give us 3 short term milestones. These are goals that can be accomplished in 2-3 weeks. Write your third goal",
                                                "description": "",
                                                "buttonText": "FINISH UNIT 3"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "Content Creation",
                                "description": "",
                                "image": "https://i.imgur.com/EHYS6cp.png",
                                "id": "u04",
                                "lessons": [
                                    {
                                        "title": "Quality",
                                        "description": "",
                                        "video": "https://www.youtube.com/watch?v=i6G53BMgugo",
                                        "id": "u04l01",
                                        "questions": [
                                            {
                                                "id": "u04l01q01",
                                                "contentType": "checkTasks",
                                                "title": "Ready to move on?",
                                                "description": "",
                                                "buttonText": "LET'S GO!"
                                            }
                                        ]
                                    },
                                    {
                                        "title": "Consistency",
                                        "description": "",
                                        "video": "https://www.youtube.com/watch?v=i6G53BMgugo",
                                        "id": "u04l02",
                                        "questions": [
                                            {
                                                "id": "u04l02q01",
                                                "contentType": "textArea",
                                                "columnName": "cloudbased_storage_locale",
                                                "title": "Do you have a content bank now?",
                                                "description": "",
                                                "buttonText": "NEXT QUESTION"
                                            },
                                            {
                                                "id": "u04l02q02",
                                                "contentType": "checkTasks",
                                                "title": "Here is how you find your invite to our content structure & organize your content. Do you understand?",
                                                "description": "",
                                                "buttonText": "FINISH LESSON 2"
                                            }
                                        ]
                                    },
                                    {
                                        "title": "Content Creation",
                                        "description": "",
                                        "video": "https://www.youtube.com/watch?v=i6G53BMgugo",
                                        "id": "u04l03",
                                        "questions": [
                                            {
                                                "id": "u04l03q01",
                                                "contentType": "checkTasks",
                                                "title": "Do you feel confident creating the different types of content?",
                                                "description": "",
                                                "buttonText": "NEXT QUESTION"
                                            },
                                            {
                                                "id": "u04l03q02",
                                                "contentType": "checkTasks",
                                                "title": "Images",
                                                "description": "",
                                                "buttonText": "NEXT QUESTION"
                                            },
                                            {
                                                "id": "u04l03q03",
                                                "contentType": "checkTasks",
                                                "title": "Video",
                                                "description": "",
                                                "buttonText": "NEXT QUESTION"
                                            },
                                            {
                                                "id": "u04l03q04",
                                                "contentType": "checkTasks",
                                                "title": "Graphics",
                                                "description": "",
                                                "buttonText": "NEXT QUESTION"
                                            },
                                            {
                                                "id": "u04l03q05",
                                                "contentType": "checkTasks",
                                                "title": "How to run a content creation workshop. Do you understand?",
                                                "description": "",
                                                "buttonText": "FINISH UNIT 4"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]);
        });
};
