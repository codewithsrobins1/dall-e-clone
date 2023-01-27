import { surpriseMePrompts } from '../constants';

export const getRandomPrompt = (prompt) => {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    // Use Case to avoid getting the same prompt in a row
    if(randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}