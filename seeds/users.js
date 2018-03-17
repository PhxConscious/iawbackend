exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_table').del()
    .then(function() {
      // Inserts seed entries
      return knex('user_table').insert([{
          "first_name": "Joe the client",
          "last_name": "Seph",
          "user_email": "joe@test.com",
          "user_phone": "555-555-5555",
          "firebase_id": "joetheclient",
          "isExpert": false,
          "isAdmin": false,
          "user_progress": {
            "u01": {
              "unitLocked": false,
              "unitCompleted": false,
              "lessons": {
                "u01l01": {
                  "lessonLocked": false,
                  "lessonCompleted": true,
                  "questions": {
                    "u01l01q01": false
                  }
                }
              }
            },
            "u02": {
              "unitLocked": true,
              "unitCompleted": false,
              "lessons": {
                "u02l01": {
                  "lessonLocked": true,
                  "lessonCompleted": true,
                  "questions": {
                    "u02l01q01": false,
                    "u02l01q02": false,
                    "u02l01q03": false,
                    "u02l01q04": false,
                    "u02l01q05": false,
                    "u02l01q06": false,
                    "u02l01q07": false,
                    "u02l01q08": false,
                    "u02l01q09": false
                  }
                },
                "u02l02": {
                  "lessonLocked": true,
                  "lessonCompleted": true,
                  "questions": {
                    "u02l02q01": false,
                    "u02l02q02": false,
                    "u02l02q03": false,
                    "u02l02q04": false
                  }
                },
                "u02l03": {
                  "lessonLocked": true,
                  "lessonCompleted": true,
                  "questions": {
                    "u02l03q01": false,
                    "u02l03q02": false,
                    "u02l03q03": false,
                    "u02l03q04": false,
                    "u02l03q05": false
                  }
                },
                "u02l04": {
                  "lessonLocked": true,
                  "lessonCompleted": true,
                  "questions": {
                    "u02l04q01": false,
                    "u02l04q02": false
                  }
                }
              }
            },
            "u03": {
              "unitLocked": true,
              "unitCompleted": false,
              "lessons": {
                "u03l01": {
                  "lessonLocked": false,
                  "lessonCompleted": true,
                  "questions": {
                    "u03l01q01": false
                  }
                },
                "u03l02": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u03l02q01": false,
                    "u03l02q02": false,
                    "u03l02q03": false
                  }
                }
              }
            },
            "u04": {
              "unitLocked": true,
              "unitCompleted": false,
              "lessons": {
                "u04l01": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u04l01q01": false
                  }
                },
                "u04l02": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u04l02q01": false,
                    "u04l02q02": false
                  }
                },
                "u04l03": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u04l03q01": false,
                    "u04l03q02": false,
                    "u04l03q03": false,
                    "u04l03q04": false,
                    "u04l03q05": false
                  }
                }
              }
            },
          }
        },
        {
          "first_name": "Bob the expert",
          "last_name": "Jenking",
          "user_email": "bob@test.com",
          "user_phone": "5555555555",
          "firebase_id": "bobtheexpert",
          "isExpert": true,
          "isAdmin": false,
          "user_progress": {
            "u01": {
              "unitLocked": false,
              "unitCompleted": false,
              "lessons": {
                "u01l01": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u01l01q01": false
                  }
                }
              }
            },
            "u02": {
              "unitLocked": true,
              "unitCompleted": false,
              "lessons": {
                "u02l01": {
                  "lessonLocked": true,
                  "lessonCompleted": false,
                  "questions": {
                    "u02l01q01": false,
                    "u02l01q02": false,
                    "u02l01q03": false,
                    "u02l01q04": false,
                    "u02l01q05": false,
                    "u02l01q06": false,
                    "u02l01q07": false,
                    "u02l01q08": false,
                    "u02l01q09": false
                  }
                },
                "u02l02": {
                  "lessonLocked": true,
                  "lessonCompleted": false,
                  "questions": {
                    "u02l02q01": false,
                    "u02l02q02": false,
                    "u02l02q03": false,
                    "u02l02q04": false
                  }
                },
                "u02l03": {
                  "lessonLocked": true,
                  "lessonCompleted": false,
                  "questions": {
                    "u02l03q01": false,
                    "u02l03q02": false,
                    "u02l03q03": false,
                    "u02l03q04": false,
                    "u02l03q05": false
                  }
                },
                "u02l04": {
                  "lessonLocked": true,
                  "lessonCompleted": false,
                  "questions": {
                    "u02l04q01": false,
                    "u02l04q02": false
                  }
                }
              }
            },
            "u03": {
              "unitLocked": true,
              "unitCompleted": false,
              "lessons": {
                "u03l01": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u03l01q01": false
                  }
                },
                "u03l02": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u03l02q01": false,
                    "u03l02q02": false,
                    "u03l02q03": false
                  }
                }
              }
            },
            "u04": {
              "unitLocked": true,
              "unitCompleted": false,
              "lessons": {
                "u04l01": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u04l01q01": false
                  }
                },
                "u04l02": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u04l02q01": false,
                    "u04l02q02": false
                  }
                },
                "u04l03": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u04l03q01": false,
                    "u04l03q02": false,
                    "u04l03q03": false,
                    "u04l03q04": false,
                    "u04l03q05": false
                  }
                }
              }
            },
          }
        },
        {
          "first_name": "Kyle the admin",
          "last_name": "Jenking",
          "user_email": "kyle@test.com",
          "user_phone": "5555555555",
          "firebase_id": "kyletheadmin",
          "isExpert": true,
          "isAdmin": true,
          "user_progress": {
            "u01": {
              "unitLocked": false,
              "unitCompleted": false,
              "lessons": {
                "u01l01": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u01l01q01": false
                  }
                }
              }
            },
            "u02": {
              "unitLocked": true,
              "unitCompleted": false,
              "lessons": {
                "u02l01": {
                  "lessonLocked": true,
                  "lessonCompleted": false,
                  "questions": {
                    "u02l01q01": false,
                    "u02l01q02": false,
                    "u02l01q03": false,
                    "u02l01q04": false,
                    "u02l01q05": false,
                    "u02l01q06": false,
                    "u02l01q07": false,
                    "u02l01q08": false,
                    "u02l01q09": false
                  }
                },
                "u02l02": {
                  "lessonLocked": true,
                  "lessonCompleted": false,
                  "questions": {
                    "u02l02q01": false,
                    "u02l02q02": false,
                    "u02l02q03": false,
                    "u02l02q04": false
                  }
                },
                "u02l03": {
                  "lessonLocked": true,
                  "lessonCompleted": false,
                  "questions": {
                    "u02l03q01": false,
                    "u02l03q02": false,
                    "u02l03q03": false,
                    "u02l03q04": false,
                    "u02l03q05": false
                  }
                },
                "u02l04": {
                  "lessonLocked": true,
                  "lessonCompleted": false,
                  "questions": {
                    "u02l04q01": false,
                    "u02l04q02": false
                  }
                }
              }
            },
            "u03": {
              "unitLocked": true,
              "unitCompleted": false,
              "lessons": {
                "u03l01": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u03l01q01": false
                  }
                },
                "u03l02": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u03l02q01": false,
                    "u03l02q02": false,
                    "u03l02q03": false
                  }
                }
              }
            },
            "u04": {
              "unitLocked": true,
              "unitCompleted": false,
              "lessons": {
                "u04l01": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u04l01q01": false
                  }
                },
                "u04l02": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u04l02q01": false,
                    "u04l02q02": false
                  }
                },
                "u04l03": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u04l03q01": false,
                    "u04l03q02": false,
                    "u04l03q03": false,
                    "u04l03q04": false,
                    "u04l03q05": false
                  }
                }
              }
            },
          }
        },
        {
          "first_name": "sarahtheclient",
          "last_name": "Jenking",
          "user_email": "sarah@test.com",
          "user_phone": "5555555555",
          "firebase_id": "sarahtheclient",
          "isExpert": true,
          "isAdmin": true,
          "user_progress": {
            "u01": {
              "unitLocked": false,
              "unitCompleted": false,
              "lessons": {
                "u01l01": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u01l01q01": false
                  }
                }
              }
            },
            "u02": {
              "unitLocked": true,
              "unitCompleted": false,
              "lessons": {
                "u02l01": {
                  "lessonLocked": true,
                  "lessonCompleted": false,
                  "questions": {
                    "u02l01q01": false,
                    "u02l01q02": false,
                    "u02l01q03": false,
                    "u02l01q04": false,
                    "u02l01q05": false,
                    "u02l01q06": false,
                    "u02l01q07": false,
                    "u02l01q08": false,
                    "u02l01q09": false
                  }
                },
                "u02l02": {
                  "lessonLocked": true,
                  "lessonCompleted": false,
                  "questions": {
                    "u02l02q01": false,
                    "u02l02q02": false,
                    "u02l02q03": false,
                    "u02l02q04": false
                  }
                },
                "u02l03": {
                  "lessonLocked": true,
                  "lessonCompleted": false,
                  "questions": {
                    "u02l03q01": false,
                    "u02l03q02": false,
                    "u02l03q03": false,
                    "u02l03q04": false,
                    "u02l03q05": false
                  }
                },
                "u02l04": {
                  "lessonLocked": true,
                  "lessonCompleted": false,
                  "questions": {
                    "u02l04q01": false,
                    "u02l04q02": false
                  }
                }
              }
            },
            "u03": {
              "unitLocked": true,
              "unitCompleted": false,
              "lessons": {
                "u03l01": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u03l01q01": false
                  }
                },
                "u03l02": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u03l02q01": false,
                    "u03l02q02": false,
                    "u03l02q03": false
                  }
                }
              }
            },
            "u04": {
              "unitLocked": true,
              "unitCompleted": false,
              "lessons": {
                "u04l01": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u04l01q01": false
                  }
                },
                "u04l02": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u04l02q01": false,
                    "u04l02q02": false
                  }
                },
                "u04l03": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u04l03q01": false,
                    "u04l03q02": false,
                    "u04l03q03": false,
                    "u04l03q04": false,
                    "u04l03q05": false
                  }
                }
              }
            },
          }
        },
        {
          "first_name": "Hiroshi",
          "last_name": "Yakamoto",
          "user_email": "hiroshi@test.com",
          "user_phone": "5555555555",
          "firebase_id": "hiroshitheclient",
          "isExpert": false,
          "isAdmin": false,
          "user_progress": {
            "u01": {
              "unitLocked": false,
              "unitCompleted": false,
              "lessons": {
                "u01l01": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u01l01q01": false
                  }
                }
              }
            },
            "u02": {
              "unitLocked": true,
              "unitCompleted": false,
              "lessons": {
                "u02l01": {
                  "lessonLocked": true,
                  "lessonCompleted": false,
                  "questions": {
                    "u02l01q01": false,
                    "u02l01q02": false,
                    "u02l01q03": false,
                    "u02l01q04": false,
                    "u02l01q05": false,
                    "u02l01q06": false,
                    "u02l01q07": false,
                    "u02l01q08": false,
                    "u02l01q09": false
                  }
                },
                "u02l02": {
                  "lessonLocked": true,
                  "lessonCompleted": false,
                  "questions": {
                    "u02l02q01": false,
                    "u02l02q02": false,
                    "u02l02q03": false,
                    "u02l02q04": false
                  }
                },
                "u02l03": {
                  "lessonLocked": true,
                  "lessonCompleted": false,
                  "questions": {
                    "u02l03q01": false,
                    "u02l03q02": false,
                    "u02l03q03": false,
                    "u02l03q04": false,
                    "u02l03q05": false
                  }
                },
                "u02l04": {
                  "lessonLocked": true,
                  "lessonCompleted": false,
                  "questions": {
                    "u02l04q01": false,
                    "u02l04q02": false
                  }
                }
              }
            },
            "u03": {
              "unitLocked": true,
              "unitCompleted": false,
              "lessons": {
                "u03l01": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u03l01q01": false
                  }
                },
                "u03l02": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u03l02q01": false,
                    "u03l02q02": false,
                    "u03l02q03": false
                  }
                }
              }
            },
            "u04": {
              "unitLocked": true,
              "unitCompleted": false,
              "lessons": {
                "u04l01": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u04l01q01": false
                  }
                },
                "u04l02": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u04l02q01": false,
                    "u04l02q02": false
                  }
                },
                "u04l03": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u04l03q01": false,
                    "u04l03q02": false,
                    "u04l03q03": false,
                    "u04l03q04": false,
                    "u04l03q05": false
                  }
                }
              }
            },
          }
        },
        {
          "first_name": "Francois",
          "last_name": "Girard",
          "user_email": "francois@test.com",
          "user_phone": "5555555555",
          "firebase_id": "francoistheclient",
          "isExpert": false,
          "isAdmin": false,
          "user_progress": {
            "u01": {
              "unitLocked": false,
              "unitCompleted": false,
              "lessons": {
                "u01l01": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u01l01q01": false
                  }
                }
              }
            },
            "u02": {
              "unitLocked": true,
              "unitCompleted": false,
              "lessons": {
                "u02l01": {
                  "lessonLocked": true,
                  "lessonCompleted": false,
                  "questions": {
                    "u02l01q01": false,
                    "u02l01q02": false,
                    "u02l01q03": false,
                    "u02l01q04": false,
                    "u02l01q05": false,
                    "u02l01q06": false,
                    "u02l01q07": false,
                    "u02l01q08": false,
                    "u02l01q09": false
                  }
                },
                "u02l02": {
                  "lessonLocked": true,
                  "lessonCompleted": false,
                  "questions": {
                    "u02l02q01": false,
                    "u02l02q02": false,
                    "u02l02q03": false,
                    "u02l02q04": false
                  }
                },
                "u02l03": {
                  "lessonLocked": true,
                  "lessonCompleted": false,
                  "questions": {
                    "u02l03q01": false,
                    "u02l03q02": false,
                    "u02l03q03": false,
                    "u02l03q04": false,
                    "u02l03q05": false
                  }
                },
                "u02l04": {
                  "lessonLocked": true,
                  "lessonCompleted": false,
                  "questions": {
                    "u02l04q01": false,
                    "u02l04q02": false
                  }
                }
              }
            },
            "u03": {
              "unitLocked": true,
              "unitCompleted": false,
              "lessons": {
                "u03l01": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u03l01q01": false
                  }
                },
                "u03l02": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u03l02q01": false,
                    "u03l02q02": false,
                    "u03l02q03": false
                  }
                }
              }
            },
            "u04": {
              "unitLocked": true,
              "unitCompleted": false,
              "lessons": {
                "u04l01": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u04l01q01": false
                  }
                },
                "u04l02": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u04l02q01": false,
                    "u04l02q02": false
                  }
                },
                "u04l03": {
                  "lessonLocked": false,
                  "lessonCompleted": false,
                  "questions": {
                    "u04l03q01": false,
                    "u04l03q02": false,
                    "u04l03q03": false,
                    "u04l03q04": false,
                    "u04l03q05": false
                  }
                }
              }
            },
          }
        }
      ]);
    });
};
