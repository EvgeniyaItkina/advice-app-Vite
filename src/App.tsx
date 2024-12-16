"use client";

import { useState } from 'react';
import './App.css';

export default function Page() {
  const healthAdvices = [
    "Exercise at least once a year to remember what it feels like.",
    "If it's hard to quit sugar in your coffee, just drink the coffee and sugar separately.",
    "Don't forget to drink water - the plants on your desk aren't the only ones that need it.",
    "Eat something green every day - even if it's green apple-flavored candy.",
    "Going to bed early? Tell yourself it's a free massage for your soul.",
    "Vegetables are important. Give your schnitzel a break and look at it from a health angle.",
    "Fitness is for those who have energy. If you don't - take a nap instead.",
    "Laugh more - it strengthens your abs and saves you a gym membership.",
    "Run only if there's a sale at the supermarket or your dog has escaped.",
    "Meditation is nice, but start with five minutes of quiet first.",
    "Eat a banana with a smile - it will look less lonely.",
    "Instead of taking the elevator, talk to it. You might burn calories explaining yourself.",
    "Drink warm water with lemon - it gives the impression you know something about health.",
    "Start your morning with a deep breath - it may be the last moment of quiet today.",
    "Eat a healthy breakfast - pizza is still a triangle, which is geometric and therefore healthy.",
    "Go for a walk - even walking to the fridge counts as physical activity.",
    "Do yoga - feel like you're floating for a moment, especially after falling in tree pose.",
    "If broccoli is staring at you, smile back. It's food with feelings too.",
    "Try to sleep for eight hours - at least twice a week, just for fun.",
    "Eat nuts - or break them. It counts as a hand workout.",
    "Eat by color: red - strawberries, green - mint, brown - chocolate.",
    "Drink less cola - save room for black coffee.",
    "Always be careful: if you peel too much off a cucumber, eat the peel. 'It's a shame to waste it.'",
    "Exercise with a partner - you'll compete to see who's more tired.",
    "If a doctor tells you to rest, ask for it in writing to show your boss.",
    "Don't try all diets at once - just wear looser clothes.",
    "Eat half your plate… and leave the rest for 'tomorrow'.",
    "Smiling for health is free - so laugh even without a reason, no one needs to know why.",
    "Learn to slow down, except at a buffet where there's a line.",
    "If you decide to go for a run, don't forget where you were running away from.",
];

const juniorAdvices = [
  "Write code as if your future boss will read it… and cry.",
  "If the code works - don't touch it. If it doesn't - pretend it's someone else's fault.",
  "'Hello World' is your first and best friend in programming.",
  "Don't fear bugs in the code - fear when there are no bugs, but it still doesn't work.",
  "Rename a variable to variable1 and feel like a pro.",
  "Google is your real team lead.",
  "Write a comment, even if you don't understand what you did.",
  "If something doesn't work - add a console.log. If it still doesn't work - add five more.",
  "Deploying on Friday is the best way to find out who your real friends are.",
  "If the code doesn't run, try restarting the computer. Then restart yourself.",
  "Never ask a senior developer: 'Why does this work?' He doesn't know either.",
  "The best function is the one that fits on a single screen. If it doesn't - buy a bigger monitor.",
  "Call cleaning up spaces in the code 'refactoring'.",
  "A Git commit named fix solves every problem.",
  "Shorten variable names to one letter: x means everything.",
  "'It works on my machine' has saved more juniors than Stack Overflow.",
  "Never add TODO comments to your code. You'll forget them anyway.",
  "Dark theme for the editor isn't about style - it's about saving your soul's energy.",
  "If a bug can't be fixed, declare it a feature.",
  "Admit honestly that you didn't know the difference between == and === until yesterday.",
  "If Stack Overflow doesn't help, just rewrite the question slightly differently.",
  "Always keep 30 tabs open in Google - so it looks like you're very busy.",
  "Call your folder 'final', then 'final_really_last_version2'.",
  "Commit often - it's better to be a living junior than a dead genius.",
  "If nothing works - just change the font in your editor.",
  "Write code with confidence that it's the compiler's problem, not yours.",
  "It's better to 'forget' to save a file than explain what you did.",
  "Ask a senior: 'What was it like here before me?' You'll hear: 'Exactly the same, just worse.'",
  "If the code looks like magic, it means you wrote it a long time ago.",
  "Believe in yourself: even seniors were juniors once, their bugs just aged poorly."
];

  const [currentAdvice, setCurrentAdvice] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const getRandomAdvice = (advices: string[]): string => {
    const randomIndex = Math.floor(Math.random() * advices.length);
    return advices[randomIndex];
  };

  const handleHealthAdvice = async () => {
    setCurrentAdvice(getRandomAdvice(healthAdvices));
    setIsModalOpen(true);
  };

  const handleJuniorAdvice = async () => {
    setCurrentAdvice(getRandomAdvice(juniorAdvices));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="container">
      <div>
      </div>
      <button className='button' onClick={handleHealthAdvice}>
        Get health advice
      </button>
      <button className='button' onClick={handleJuniorAdvice}>
        Get junior advice
      </button>

      {isModalOpen && (
        <div className="modalOverlay">
          <div className="modalContent">
            <p>{currentAdvice}</p>
            <button className="modalButton" onClick={closeModal}>Yes, boss</button>
          </div>
        </div>
      )}
    </div>
  );
}