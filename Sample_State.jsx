{
  entities: {
    users: {
      1: {
        id: 1,
        email: "matt2yu@gmail.com",
        username: "yatt",
        profilePicUrl: "https://bit.ly/34hrUiL"
      },
      2: {
        id: 2,
        email: "albyCPA@gmail.com",
        username: "albyWRLD",
        profilePicUrl: "https://bit.ly/2RMypY6"
      },
      3: {
        id: 3,
        email: "ignathio@gmail.com",
        username: "yamagucci",
        profilePicUrl: "https://bit.ly/2TiW2rI"
      },
      4: {
        id: 4,
        email: "jsung@gmail.com",
        username: "json derulo",
        profilePicUrl: "https://bit.ly/3uwYoQN"
      }
    },
    servers: {
      5: {
        id: 5,
        name: "albert",
        serverPicUrl: "https://bit.ly/34lmzHc",
        ownerId: 2
      }, 
      6: {
        id: 6,
        name: "SF March Cohort | App Academy",
        serverPicUrl: "https://bit.ly/2QSgsH4",
        ownerId: 1
      }, 
      7: {
        id: 7,
        name: "Anime Fans in Tech",
        serverPicUrl: "https://bit.ly/3vql0Uf",
        ownerId: 1
      }
    },
    channels: {
      8: {
        id: 8,
        name: "valorant 10 mans",
        secret: false
        ownerId: 2,
        serverId: 5
      },
      9: {
        id: 9,
        name: "General",
        secret: false,
        ownerId: 1
        serverId: 6
      },
      10: {
        id: 10,
        name: "Anime",
        secret: false,
        ownerId: 3
        serverId: 7
      },
    },
    messages: {
      11: {
        id: 11,
        body: "who wants to run some 10 mans tonight @ 8pm?",
        authorId: 3,
        messageableId: 123,
        messageableType: "channel",
        createdAt: "2020-05-26"
      },
      12: {
        id: 12,
        body: "i will be hanging out in the zoom room after class if anyone wants to join me for a study sesh",
        authorId: 1,
        messageableId: 456,
        messageableType: "channel",
        createdAt: "2020-05-26"
      },
      13: {
        id: 13,
        body: "i really need a new show to binge rn, any recs?",
        authorId: 4,
        messageableId: 789,
        messageableType: "channel",
        createdAt: "2020-05-26"
      },
      14: {
        id: 14,
        body: "i can't wait for the trip this weekend!",
        authorId: 1,
        messageableId: 42,
        messageableType: "direct_message",
        createdAt: "2020-05-26"
      },
    },
    direct_messages: {
      15: {
        id: 15,
      },
      16: {
        id: 16,
      },
      17: {
        id: 17,
      },
    },
    memberships: {
      18: {
        id: 18,
        userId: 1,
        joinableId: 11,
        joinableType: "server"
      },
      19: {
        id: 19,
        userId: 4,
        joinableId: 22,
        joinableType: "server"
      },
      20: {
        id: 20,
        userId: 3,
        joinableId: 33,
        joinableType: "direct_message"
      }
    }
  },
  ui: {
    loading: true,
    modal: "logout"
  },
  session: {
    currentUserId: 1
  },
  errors: {
    signup: ['The email or username you have entered is already taken', 'Password must be a minimum of 8 characters long'],
    login: ['Login or password is invalid']
  }
}