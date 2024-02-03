I. INTRODUCTION

I didn't expect to see all of you so soon again, but I suppose the wheels never stop turning in the world of AKI ROM hacks.

This is La Fin Du Tour, the first ROM hack (that I'm aware of) for WCW/nWo World Tour. There is no specific concept to this hack, although some might construe this as a WWF New Generation hack, but that's probably a misnomer. What happened was, after the release of SUMMIT, I took some time to dive into uncharted waters and understand how World Tour works. It is incredibly tedious to note things down and try to explain how things were done, so I thought it'd be more interesting to show it. As a result, I took all that I learned, alone and alongside Melonbread and freem, and put it into this hack in about 3 months (research inclusive, I think).


II. WHAT'S CHANGED

Now, as a result, this hack doesn't begin to approach the scale of change you would have seen in SUMMIT, but I would say quite a bit of effort was expended all the same in researching the game. This is a showcase of the things we are able to do now as a result of the research, which includes:
- Backporting of animations (just one — Austin's taunt)
- Creation of new movesets
- Changing of bio information (e.g. names, weights, heights)
- Resurrection of body types that are currently locked away, which would later become available in VPW64 (e.g. Rickson Gracie's MMA body type)
- Resurrection of characters that are currently buried in World Tour that would later appear in VPW64
- Movement of characters between stables, which has a knock-on effect on the League Challenge mode
- Creation of new costumes via manipulation of costume data

Now, specifically, here's how the roster changed:
1) Shawn Michaels replaces Eric Bischoff
2) Stone Cold replaces Buff Bagwell
3) Undertaker replaces Scott Norton
4) Bret Hart replaces Tiger Jeet Singh
5) Ken Shamrock replaces Chris Benoit
6) Andre the Giant replaces Fake Sting
7) Rickson Gracie replaces Shunji Takano
8) Dr. Death 'replaces' Koji Kitao (this is a reskin; Kitao already used Dr. Death's moveset)

As a result of the changes, from a stable perspective, DOA and WCW each have one less wrestler on their roster, while WWF has gained two wrestlers, making it the second largest stable in the game (to WCW), and giving it the longest heavyweight campaign of the stables, as Shawn Michaels and Syxx are considered cruiserweights. Shawn is a cruiserweight to give the stable some more balance, but you can still use him in the WWF Single's Championship campaign.

In terms of costume changes:
1) Sting now has his Wolfpac attire as his P2 and a version of his VPW1/WCW vs. The World costume as his P3 (i.e. Blonde Surfer Sting in blue); these costumes can all be unmasked, if you were curious
2) Hogan's primary costumes are now his red and yellow colors, with his nWo costume being his P4; his P3 costume is actually "Hawk Leagun" from VPW1, which was his identity prior to AKI getting the WCW license in 1997. His costume was assembled through a bit of forensics. In VPW64, you'll notice one of Hogan's costumes has brown hair, which is odd, right? That's because AKI likely wasn't sure VPW64 was going to have the WCW license, so the WCW roster was originally called the "MWA", and Leagun was likely going to be on that roster. Using his VPW1 face texture, that hair texture, and Hogan's black and yellow (not black and red) color scheme, this costume was assembled. Truly niche.
3) Hall, Nash, and Syxx all have one WWF costume each, but retain their nWo costumes for their P2-P4 slots. For Nash specifically, he has a Wolfpac shirt rather than the black and white logo so that you can team him with Wolfpac Sting if you so wish.
4) Ultimo Dragon has a take on his WCW vs. The World outfit for his P3 costume. This, too, can be unmasked.

At this time, I can't change the WCW vs. nWo mode to include the other two stables. As a compromise, I have at least changed the text and textures in the mode to reflect "WCW vs. WWF". 

The WWF stable also now has its own ring, and is based on the New Generation ring used up until early 1997. It is very colorful and suits the aesthetic of the roster, I think.

I am very likely to have forgotten some things along the way, but this should just about cover most of the changes.

III. FREQUENTLY ASKED QUESTIONS

This is a combination of questions I received from Melonbread when he tested the hack, as well as those from Sean O'Connor when I solicited some anticipated questions from him. I also included some of what I expected people to ask, so I hope this is relatively exhaustive. 

Q: Will there be future additions/updates?
A: Unlikely. As with SUMMIT, a lot of my heart goes into making the first release, but I'm basically spent by the end of it, and I usually can't get back in the headspace to work on it after I've considered it good enough for public release.

Q: Where can we report bugs?
A: You can tweet/DM me at @RagDas01 on Twitter (for however long that's a thing).

Q: Why did you choose these superstars?
A: As I've probably mentioned before, this didn't really start out as a "New Generation" hack, and I still don't think of it as such. The only person I definitely 100% wanted to put into World Tour, purely out of curiosity, was The Undertaker in his purple attire. In figuring out how movesets worked in World Tour, I decided I would do better to attempt someone with fewer submissions, so Austin became my first attempt at a moveset. However, Melonbread helped me crack how the looping portion of submissions work, and I refocused my efforts on Shawn Michaels, who I felt could have a spot here due to Glacier's finisher resembling Sweet Chin Music, and he ultimately became the first person I put into World Tour. In parallel to this plan to put these three guys into the game, I learned that incomplete prototype versions of the movesets belonging to the VPW64 roster were still in the game, and so I explored bringing Rickson Gracie into the fold because of how many repeated moves he has. It is for this reason the first match you saw uploaded for this hack was HBK vs. Rickson — those happened to be the first guys I finished.

I don't want to keep rambling on about what was a progressive thought process so, I guess the TL;DR of this answer is "I felt like it"?

Q: Any moves sacrificed or bugs you cant fix?
A: Yes, but you hopefully won't be too bothered by it. One is that Ken Shamrock's Capture Suplex has the correct reversal, but the reversal has no sound. This is because I ported over the correct anims for the reversal and replaced the incomplete Pump Handle Bomb anim with it. The result of doing that without knowing how Toki1s work in this game is that it has no sound. At the time of this writing, I still do not know how Toki1s work in these early games. The other issue is that the Guillotine Choke is exclusively a finisher in this game, and thus, it has no reversals. As I don't have anims to spare, I coded the move to be reversed via the DDT reversal (punch to gut). There is a minor but noticeable jump between anims, so it'll look unnatural, but it was necessary.

Q: Are people free to build upon your mod/concept and change it?
A: Yes, they're welcome to.

Q: Was there ever a plan to include everyone from In Your House?
A: I think I gave some thought to Goldust, but didn't have budget for the textures. British Bulldog would have been in but I lost interest. Ahmed Johnson was another guy I thought about purely because I thought the multiple kneepads would look hilarious, but I wasn't convinced I could get an effective likeness in, so I didn't attempt it. I didn't want to try Owen Hart out of respect — he's probably one guy I don't think I'll ever have the courage to try and work in. Ultimate Warrior...never really crossed my mind.

Q: Is Wrath reskinned as Adam Bomb in your mod?
A: He is not. I also thought about this for about 5 seconds before deciding it wasn't worth it (similar deal with changing Macho Man's appearance). The main reason for not doing so was constantly having to reenter the "Unlock All" code just to see changes every time I would make one change to an attire. Whenever you consider the task in a workflow, you have to consider the amount of repetition of that exact task. This one was a little too much for me.

Q: Do you think back-porting the Stunner will ever be possible?
A: It's possible right now, but without knowing how Toki1s work/where they are within the main Toki1 file, it'd be without sound. Please take my word for it when I say it isn't enough to just have the anims.

Q: How come Shamrock has a powerbomb for a finisher?
A: Honestly, he's replacing Chris Benoit, and they both share a finisher in VPW64, so I thought this would be a nice little reference without having Benoit stay in the game. The damage values for Ken's original finisher (which has no anim) remain the same, so it's really just a powerbomb visually.

Q: How come Austin has a body avalanche/hip throw/a bunch of moves that seem weird for Austin?
A: I think it comes down to being distinct. You could give Austin a bunch of moves that are fairly generic and it would be hard to tell him apart. A lot of Austin's uniqueness in WM2K came from having bespoke anims just for him, e.g. his entrance walk, his taunts, his strikes, etc. From a moveset perspective, there's really not too much going on. So for this appearance, with the limited resources available, I really wanted to give him a moveset that was distinct, and so I wanted to include all the weird moves he had in WM2K to that end.

Q: Where's Austin's knee brace?
A: In WM2K, where I left it. All jokes aside, I just didn't really feel like I wanted to waste space on what would essentially be two textures (thigh and shin), especially as Austin's presence became less of an influence relative to HBK, Undertaker, and later, Bret.

Q: Why didn't you just replace the IU stable and keep the NWO?
A: I actually happen to like the roster in the game and didn't want to change it all that much. I guess one of the concepts you can assign to the game is the notion of the nWo actually being the WWF. This is why all the roster members appear as their WWF incarnations for their P1 costumes (save for Randy Savage). That said, you still have alternate costumes representing their nWo selves where relevant so you have those options available.

Q: How come Razor Ramon has yellow boots? How come Syxx has a goatee? How come Diesel isn't wearing a white singlet?
A: All of the above are wearing their attires from the last moment you saw them in the WWF. For Diesel and Razor, it's what they wore on the night of the Curtain Call. For Syxx, it's what he wore during his last match (at the time) against Savio Vega.

Q: Why is Syxx called "Kid"?
A: Text limitations, mostly. Also texture limitations (no space for two thigh textures without compromising other costumes). Also, I have long heard that on the WWF website, he was called "The Kid" the week he returned, until he was christened "X-Pac" the following week on TV.