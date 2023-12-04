// I really enjoyed creating this chatbot as it was my first experience with javascript and writing 'if' statements

/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */
let name = false;
let size = false;
const getBotReply = (message) => {
  message = message.toLowerCase();
  if (!name) {
    if (message === "") {
      return "I don't recognise that as a name - try again";
    }
    name = message;
    return `Nice to meet you ${name}. Are you wanting to adopt a small dog or a big dog?`;
  }

  if (message === "reset") {
    name = false;
    size = false;
    return `Hi there! Lets find you your new best friend. First of all, what's your name?`;
  }

  if (message === "thanks") {
    name = false;
    size = false;
    return "No problem! Have fun with your new friend!";
  }

  if (size) {
    if (message === "dachschund") {
      return `Great choice ${name}! This breed is most happy when given companionship and a job to do.`;
    }

    if (message === "jack russell") {
      return `Great choice ${name}! This breed is a loyal companion and is good with children.`;
    }

    if (message === "st bernard") {
      return `Great choice ${name}! St Bernard's are one of the biggest breeds in the world. They were bred for mountain rescues.`;
    }

    if (message === "husky") {
      return `Great choice ${name}! Huskies quite often have different coloured eyes.`;
    }

    return "I don't recognise that breed - please try again";
  }

  if (name) {
    if (message === "small") {
      size = message;
      return "Small dog? Great! Would you prefer a Jack Russell or Dachschund?";
    }

    if (message === "big") {
      size = message;
      return "Big dog? Great! Would you prefer a St Bernard or a Husky?";
    }

    return "I don't recognise that - please enter small or big";
  }
};
export { getBotReply };
