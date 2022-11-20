module.exports = {
  profile: {
    ownerName: "HYOUDOU ISSEI-REDDO DORAGON", // defult: AiDarkEzio
    ownerNumb: "22892392619", // defult: 94761539856
    botName: "VANISHING DORAGON", // defult: Whats Bot MD
  },
  reply: {
    notFound: "This Command not created. it was creating", // defult: "This Command not created. it was creating",
    success: "Done ✓", // defult: "Done ✓",
    admin: "This Feature Is Only For Admin!", // defult: "This Feature Is Only For Admin!",
    botAdmin: "Bot Must Be Admin First!", // defult: "Bot Must Be Admin First!",
    owner: "This Feature Is Only For Owner!", // defult: "This Feature Is Only For Owner!",
    group: "Feature Used Only For Groups!", // defult: "Feature Used Only For Groups!",
    private: "Features Used Only For Private Chat!", // defult: "Features Used Only For Private Chat!",
    bot: "This Feature Is Only For Bot", // defult: "This Feature Is Only For Bot",
    wait: "In process...", // defult: "In process...",
    linkm: "Where is the link?", // defult: "Where is the link?",
    error: "Error!!", // defult: "Error!!",
    endLimit: "", // defult: "Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours",
    ban: "You have been banned by the owner, if you want to be unbanned, chat owner", // defult: "You have been banned by the owner, if you want to be unbanned, chat owner.",
    nsfw: "The nsfw feature has not been activated, please contact the admin to activate", // defult: "The nsfw feature has not been activated, please contact the admin to activate",
    banChat: "The bot was banned in this group, please contact the owner to unban", // defult: "The bot was banned in this group, please contact the owner to unban",
  },
  setting: {
    blockchat: [], // Your block chat Jids
  },
  auto: {
    chat: {
      group: true, // Chat Bot In Group | u can set true or false
      inbox: false, // chat bot in inbox | u can set true or false
    },
    reply: {
      sticker: false, // Boolean | ===== It not created now ======
      audio: false, // Boolean | ===== It not created now ======
    },
    presence: {
      is: false, // U Can on or off this () | u can set true or false
      value: "typing", // It has two types | u can set 'recoding' or 'typing'
    },
    read: false, // Boolean | ===== It not created now ======
  },
};
