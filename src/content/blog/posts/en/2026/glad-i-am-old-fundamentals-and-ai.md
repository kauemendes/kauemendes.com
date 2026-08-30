---
post: "glad-i-am-old-fundamentals-and-ai"
title: "11. I'm glad I'm old"
description: "I learned technology in an age of scarcity, when every bit mattered and online courses didn't exist. That accumulation turned into judgment, and it's what helps me talk to an AI today. But there's a question I can't answer: which part of what I know still bears weight, and which part is just attachment to the effort I paid to learn it?"
image_banner: "/images/blog/estou-muito-velho-pra-isso.png"
image_post: "/images/blog/estou-muito-velho-pra-isso@2x.png"
image_og: "/images/blog/estou-muito-velho-pra-isso_og.jpg"
date: "2026-08-30"
---

"I'm getting too old for this shit."

Roger Murtaugh says it in Lethal Weapon, 1987. The line became a meme, became a t-shirt, became the thing we all say when the day gets heavy. There's a detail in it I only noticed recently: Danny Glover was 40 when he shot that scene. He wasn't old. He was playing old.

I think about that every time I catch myself saying some version of it. And for some reason, what keeps coming out of me lately is the opposite.

I keep coming back to a different phrase: I'm glad I'm old. It's not about age. It's about what I had to go through to understand technology.

How memory addressing works. What it was like back when you had to account for every bit and every byte that moved or got processed, because CPU and memory were scarce. And the internet was brand new.

Almost nobody had it. The ones who did — companies, or people with money — showed off an ADSL line that was still pretty bad, while most of the world hadn't even left dial-up. Knowing what you could pull off with so little took an enviable kind of creative juggling.

As a developer, the challenge was plotting a Google Maps map inside a rigidly architected system, wiring together an API and an SDK nobody had explored yet. On the infrastructure side, a server was practically artisanal work. The care and the wait of downloading a Red Hat or CentOS ISO, then downloading the packages, all of it saved onto a physical hard drive and then onto a mighty, wildly expensive imported flash drive, just to get the machines installed.

File management on Samba. Transfers over ProFTPD. HAProxy out front. And learning to build a RAID 1 by hand.

Client with no internet? You had to deliver internet over radio. Set up an ISP, with Telefônica's ever-so-mighty 10 Mbps dedicated link, distribute it over radio, raise the antennas, install the APs.

In support and in development, knowing databases wasn't optional. Understanding how data blocks work and how they get written was a duty. That was the only way you learned to build a VPN between two Linux servers so that, inside the tunnel, you could sync a PostgreSQL master and slave, as it was called back then. Using an extra package nobody was quite sure was safe. Or cared.

Then the public cloud arrived and a lot of it got simpler, better, easier. Understanding networks got easy. Work that used to be manual and operational became a button click, while still demanding new knowledge, and maybe some prior knowledge, to ride the providers' wave.

Before that it was VMware making waves. Then came Amazon's elastic virtual machines. What a leap. What an absurd thing, having a dedicated virtual machine of your own with one click.

It was a revolution, and I had to learn all of it. There was no Coursera, no Alura, no Udemy. There was nothing.

It was you, a terminal and a few forums. A few mIRC channels. A handful of contacts you had over email. Vast documentation, printed, lent between friends so everyone could learn. Everything was slower. Life was slower too — I feel that.

And just when we thought there was nothing left to learn, a thing called Docker showed up, around 2013, 2014. Hype or not, it became the standard, became mandatory, became one more thing to pick apart while everything else kept evolving. Languages adapted, changed, reshaped themselves to accommodate the new.

All of that, and plenty more I haven't even mentioned, is part of what I became. And knowledge acquired is acquired. A mind stretched by a new idea never returns to its original dimensions.

I think that's what helps me today, in the profession I have now. Being able to compile all that baggage and interact with an AI knowing what to ask for. Knowing how something can be done well or badly — a system, a piece of software, an application, a binary, an artifact. Knowing where to improve and, above all, spotting what isn't good.

The most important thing in this new world is understanding end2end. Knowing how a system works, what it needs in order to play its part well, and what the whole life cycle looks like. Because I've lived it. I've seen abandonment, I've seen revival, I've seen things built badly, and I've felt how much that hurts.

That's what helps me when I sit down to write a prompt. To ask an artificial intelligence, which hasn't lived what I've lived, to build something that isn't a Trojan horse against itself. Or that doesn't go around removing and deleting what it shouldn't.

The accumulation made me a more discerning person. Today I don't need to go that deep into a bit or a byte. I have 1 Gbps over fiber, with 2 ms to a server in the interior of São Paulo. I have 64 GB of RAM, and CPU and GPU in sizes and speeds that were unthinkable. I don't need to think about scarce resources anymore. They're right there. The hard part was learning to use them, and that cost years.

## And here's where the part I can't answer begins

Because if I stop here, this turns into just another "back in my day it was harder", which is exactly the post I don't want to write.

Notice something. The entire story I told above is a story of abstractions going up. Assembly became C. C became managed languages. The physical server became a VM. The VM became a container. The container became serverless. And now there are people shipping to production by describing what they want in plain English.

Every time a new layer went up, two things happened at once. The first is that whoever knew the layer below was the one who fixed things when they broke. That's a fact, I watched it happen, many times, and it's why I argue for fundamentals. The second thing is that in every one of those transitions, there was an older guy insisting the kids needed to know the layer below. And most of the time, that guy was wrong.

Nobody writes their own memory allocator today. Nobody learns to configure IRQs by hand. Nobody needs to know disk geometry. All of that was mandatory, and became optional, and then became historical trivia. The knowledge didn't disappear, it just sank to a place almost nobody needs to go anymore.

So the honest question isn't "do fundamentals matter?". It's a different one, and a lot more uncomfortable: **which part of what I know still bears weight, and which part is just attachment to the effort I paid to learn it?**

And I can't answer that from the inside. I'm the least trustworthy person in the world to judge whether the pain I went through was worth it, because I'm the one who went through it. Maybe I'm doing what Glover did: playing old.

There's a detail in this new layer that makes me scratch my head, and I haven't settled it. Every previous abstraction had a floor. Docker hides the kernel, but the kernel is still there, and you can climb down to it. It's deterministic. With enough patience and knowledge, you reach the bottom and understand exactly why it broke. The AI layer doesn't have that floor in the same way. You receive a finished artifact and there is no `strace` for the reasoning that produced it. The debugging path changed shape, not just height.

If that's true, understanding end2end matters more than ever, because the only way to audit what came out is to know what should have come out. If it isn't true, and the tools get good enough to audit themselves, I'll just be another guy talking about IRQs in 2026.

There's a third thing that bothers me. Learning used to be, in large part, storing. You stored because information was expensive and hard to find. Today information is free, instant and infinite, so learning became something else — it became judgment. Knowing how to choose, knowing when to distrust, knowing that something is wrong before you run it.

Except my judgment was born precisely out of that storing phase. I distrust a query because one day I took a database down. I distrust an `rm -rf` because I've seen the damage. The question I can't answer is whether judgment can be built without going through the accumulation. And, more than that, whether the kids are building judgment in a different way from mine, in a shape I don't recognize because it doesn't look like my path.

That's why the "should I learn Claude Code or the operating system first" dichotomy doesn't amuse me. It looks like a beginner's question and it isn't. It's the same question the entire industry is asking right now, with no answer, and a lot of money riding on both sides.

I have a hunch, not a certainty. My hunch is that fundamentals are still what separates the person who operates from the person who understands. But it's a hunch, and I carry an enormous bias in this story.

I won't pretend I know. Some things you have to live with for a while to see how they resolve down the line. What I really wanted was to leave the question well posed, because I think it's still badly framed everywhere I read.

If you're just starting out and you made it this far: first, congratulations. Second, stay hydrated.

And know that, whatever path you choose, self-taught learning and a personal lab in technology aren't optional. They're mandatory. About this one I have no doubt at all — it's the only thing that survived every turn I've lived through, intact.

In the next post I'll walk through how to build a homelab to start learning for real. Stick around.

And if you have an opinion on the question above — especially if you're on the other side of this equation and started your career with AI already in it — reach out. I really want to hear it.
