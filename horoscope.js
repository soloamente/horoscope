const horoscopes = {
  aries:
    "You may have to stand by certain difficult, worrisome decisions today, Aries. You may feel a kind of urgent need for stability in your personal life. What is really behind this feeling? Is it possible that you're just afraid of your desire to put everything into question in order to make a fresh start? Today you may find the answer to this question. Stay tuned.",
  taurus:
    "Do you help the world evolve, Taurus? You may ask yourself this kind of delicate question today. Even if you're a person of action who knows how to react to situations, you should be careful not to be too impulsive. You have a specific role to play. Don't get thrown off track by emotional circumstances.",
  gemini:
    "You may tend to be overprotective of the people closest to you, especially children. You may feel you live in a dangerous world in which people don't care about responsibility to one another. But the people you're trying to protect are probably better prepared and adapted to the world than you think, Gemini. They might try to tell you this even if your support is indispensable.",
  cancer:
    "You may tend to be overprotective of the people closest to you, especially children. You may feel you live in a dangerous world in which people don't care about responsibility to one another. But the people you're trying to protect are probably better prepared and adapted to the world than you think, Cancer. They might try to tell you this even if your support is indispensable.",
  leo: "The events of the day depend on your ability to put things into question today, Leo. In general, you're good at analyzing situations when things aren't going well in your relationships. Now someone in your family may have a problem acting responsibly. It's up to that person to take care of things, but you could understand the message the person is trying to send other people with his or her behavior.",
  virgo:
    "The planetary aspects are going to have a big impact on you today, Virgo. This isn't the time to fear the future. Rather, it's a time to make it happen. The action you take right now will be instrumental in your future. Will there be enough of us walking toward the future? Virgo will be at the head of the pack in any case, as always.",
  libra:
    "People are more alike than we think, especially on days like today that mean virtually the same thing to everyone. Some incredible changes have taken place in the world and its economic and social systems. Now is the time to think about what the next few years have in store. Do you have any ideas? Try to articulate them.",
  scorpio:
    "Today is an inspirational day for you, fast thinking Scorpio. Let those visions come to you, process them, and try to verbalize them. A lot of information and electricity is in the air, and you should have no problem picking up on it. Open up your channels for the best reception. Have a notepad handy to jot down all your insights.",
  sagittarius:
    "You're usually good at bringing people together. Your greatest strength is giving identity to those people who seek it. In fact, you're so aware of the differences between people that you resist the changes that come about as people evolve. Today's planetary alignment confronts you with issues that concern your future. Your position will help you accept things and go forward.",
  capricorn:
    "Some of you still let individuals from other Zodiac signs do all the creating for you. The planetary configuration today pushes you to free yourself from the ties that bind you. It's time for you to show more creativity. Show the gems that you usually hide. Express yourself fully, without hesitation. Show others who's really in charge.",
  aquarius:
    "You are very interested in all kinds of professions that concern humans, Aquarius - medicine, psychology, or any kind of spiritual therapy. You will be very sensitive to the great opening toward the future that comes along today. The planetary alignment initiates progress in all areas of human existence. Keep your eyes and ears wide open.",
  pisces:
    "You may surprise the people around you over the next few days, Pisces. You're a responsible person and others can count on you. But just like anybody else, you're sensitive to your desires. You should expect your desires to be so strong today that they may be irresistible. If this is a positive experience, you may need to do some planning in your personal life.",
};

const inputElement = document.getElementById("input");
const button = document.getElementById("button");
const suggestion = "Reload the page to get a new horoscope";

button.addEventListener("click", () => {
  const sign = inputElement.value.toLowerCase().trim();

  if (horoscopes[sign]) {
    inputElement.style.height = "200px";
    inputElement.value = horoscopes[sign];
  } else {
    inputElement.placeholder = "Please enter a valid zodiac sign";
  }
});
