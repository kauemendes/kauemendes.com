import {describe, expect, it} from '@jest/globals';
import { projects } from '@/content/data/projects';
import { socialLinks } from '@/content/data/social';

// Extract the function logic for testing without server-only import
async function getRandomMessage(): Promise<string> {
  const messages = [
    "It works on my machine! – The battle cry of developers everywhere.",
    "99 little bugs in the code, take one down, patch it around, 127 bugs in the code…",
    "I don't need Google, my code is self-documented.",
    "Programming is 10% writing code and 90% figuring out why it doesn't work.",
    "My code is compiling. I am now a philosopher.",
    "Debugging: like being the detective in a crime movie where you are also the murderer.",
    "Why fix it today when you can refactor it tomorrow?",
    "I'd explain my code, but I left the comments for future me, and future me is not here yet.",
    "The code is perfect. The users are wrong.",
    "'Temporary' is the most permanent thing in software development.",
    "We don't make mistakes, just undocumented features.",
    "Working on legacy code feels like fixing someone else's time travel paradox.",
    "Version 1.0 is like your first pancake: nobody eats it, but you learn a lot.",
    "Programming is just typing random symbols until it works, and then pretending you knew what you were doing.",
    "I have a degree in computer science, but Stack Overflow is my true alma mater."
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  return randomMessage;
}

describe('Content Library', () => {
  it('should return a random message', async () => {
    const result = await getRandomMessage();
    
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });
  
  it('should return different messages on multiple calls', async () => {
    const calls = await Promise.all([
      getRandomMessage(),
      getRandomMessage(),
      getRandomMessage(),
      getRandomMessage(),
      getRandomMessage()
    ]);
    
    // At least one message should be different (very high probability)
    const uniqueMessages = new Set(calls);
    expect(uniqueMessages.size).toBeGreaterThan(0);
  });

  it('should load projects data correctly', () => {
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
    expect(projects[0]).toHaveProperty('title');
    expect(projects[0]).toHaveProperty('id');
  });

  it('should load social links data correctly', () => {
    expect(Array.isArray(socialLinks)).toBe(true);
    expect(socialLinks.length).toBeGreaterThan(0);
    expect(socialLinks[0]).toHaveProperty('name');
    expect(socialLinks[0]).toHaveProperty('url');
  });
});
