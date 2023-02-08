import { surpriseMePrompts } from "../constants/index";

export function getRandomPrompt(prompt: string): String {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  // Prevent same random prompt twice
  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}
