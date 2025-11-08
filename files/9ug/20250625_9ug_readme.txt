I. INTRODUCTION

Here's my second ROM hack of WCW vs. nWo: World Tour, titled "WCW vs. nWo: 9 Underground". This time around, it's quite simple to summarize what was achieved: 9 wrestlers, as the name suggests, have been added to the playable roster without removing anyone from the existing roster. It is known among a few people who have explored ROM hacking World Tour that the moveset and params data for entire playable roster of VPW64 is contained within World Tour, though for characters that didn't make the final roster of World Tour, their movesets are in various states of completion. This hack has taken 9 of these incomplete characters and given them full functionality, though there are caveats that we'll get into in the next sections.

The big caveat, that I will attempt to repeat at least one more time in this README, is that while this is a ROM hack, it does *not* run on console. Due to the highly experimental nature of what was done, this possibility was always there, but that's the price to be paid when trying something for the first time. Please DO NOT buy this on a cartridge, you will literally be throwing your money away. That's true for other ROM hacks, but especially true for this one. Consider that your only warning (aside from the literal opening screen of the hack) with regard to that particular consideration.

That aside, as always, no real theme to the hack. Main focus here is that we learned how to add new characters without removing any characters, and some other discoveries were made in VPW64 that I saw fit to backport (side port? laterally port?) into World Tour.

Credits:
- Melonbread and SK Stylez for the help on La Fin Du Tour, which was all useful for this hack; on this occasion, the most important contribution each made was to teach me basic ASM, allowing me make room for the extra characters
- freem for the documentation and for VPW Studio existing
- jcsix for dumping textures for Great Zebra's costume and Chono's forearms
- RetroRandyPrice for finding the voice data in World Tour such that I could then assign the additions their correct voices (where possible)

II. WHAT CHANGED

Most noticeable change for most is the WCW ring, which is now that nuclear cheese color from the World Tour beta, with black edges and a plain black apron. 

Here's who I added, and which stable they're in:
1) Andy the Gigant (Andre the Giant) - WCW
2) Chono (Masahiro Chono) - nWo
3) Bad Blood (Great Muta) - nWo
4) Danny Fang Jr. (Dory Funk Jr. ) - DoA
5) Major Tom (Terry Funk) - DoA
6) Abispa (Jushin Thunder Liger) - IU
7) Le Masquerade (Mil Mascaras) - IU
8) Dosquerade (Dos Caras) - IU
9) The Discloser (The Destroyer) - WWW

Here are all the costume changes (explanation in the following section):
- Rick Steiner - generally follows the same sequence of his VPW64 counterpart, but loses the red costume for a duplicate of Scott Steiner's green costume (I believe this is justified given that it's a beltless attire, meaning it should be with Rick Steiner anyway)
- Eddy Guerrero - P3 and P4 are now Black Tiger II, as AKI intended for him to look in VPW64 based on palettes that were discovered in the VPW64 filetable (now you know why he's indigo); he's also chunky, as AKI intended before they got the WCW license, easily verifiable by looking at beta VPW64 screenshots and the final Black Tiger II costume in VPW64
- Hulk Hogan - P2 costume switched for black jeans and an nWo t-shirt 
- nWo Sting - P2 costume is switched for blue jeans and an nWo t-shirt
- Kevin Nash - P2 costume is switched for blue jeans and an nWo t-shirt; P4 is switched for black jeans and an nWo t-shirt (similar configuration to his VPW64 counterpart)
- Scott Hall - same as Kevin Nash
- Syxx - P2 is now blue jeans and an nWo t-shirt; this is actually his P4 in VPW64, but his bareshirt P4 is exclusive to World Tour, so I thought it best to keep it
- Kim Chee/Koji Kitao - reskinned as Dr. Death (or "Siberia" in VPW terms)
- Hannibal/Hayabusa - uses hidden heads and removed palettes found in VPW64; P1 is red, P2 is green, P3 is black, P4 is purple
- Dim Sum/Gedo - uses hidden head for P4, as he does in VPW64 (though this iteration retains the ponytail)
- Shaolin/Jinsei Shinzaki - uses hidden head for P3, as he does in VPW64
- The Unknown/Super Delphin - uses four alternate heads that are hidden in-ROM, but are accessible in VPW64 (i.e. same situation as Hayabusa), and uses removed palettes that match those heads that were found in VPW64; P1 is silver/white/black, P2 is aqua/white/yellow, P3 is black/red/silver, P4 is red/white/silver/blue center trim
- The Claw/Gran Naniwa - P1 is now yellow, using a hidden head that is accessible normally in VPW64; in VPW64, this head gets assigned to a gold costume, but the removed palettes indicate that this was actually going to be a yellow costume, and so I imported those palettes accordingly (red was replaced as it used a white mask, which the white costume in P3 already used)
- Shaman/Shunji Takano - P3 is Great Zebra (head is hidden in World Tour, accessed normally in VPW64); I chose P3 instead of P4 because P4 is exclusive to World Tour

62 animations were imported from VPW64 to accommodate the following:
- Liger has his shoutei, koppo kick, and stalling superplex
- Mascaras has his taunt and flying cross chop
- Dos Caras has his taunt and the same flying cross chop that Mil does; also fixed his back finisher (pump handle powerbomb pin; the animation he used was glitched, but the move exists normally so that was an easy fix)
- Chono has his 'angry stomp' for his face down grounded opponent strike
- Muta has his poison mist (though there is no mist texture/mechanism in World Tour, so it's invisible), rear naked choke, elbow drop, ippon seoi nage (and reversal), and taunt
- Terry Funk has his taunt, punching combination finisher, and spinning toehold
- Dory Funk Jr. has his taunt, running elbow (a la Misawa), finisher (armlock suplex pin?), and the aforementioned spinning toehold

III. CAVEATS

It is worth noting that his hack isn't trying to make the game more accurate to real-life; it is instead trying to realistically replicate the mistakes AKI would have made had they tried to put together a more expansive World Tour roster.

Again, repeating for everyone so that they're aware - this ROM hack does NOT run on console. While I can only guess as to what did it, it's a pretty good guess: I wrote the new data for wrestlers in a place I wasn't supposed to. Without an expanded area for me to write ROM edits, there was always a chance that this would happen. As this is the first time I (or anyone) has tried doing this, there is no clear fix, and thus I want to state clearly that I do not intend to fix it for this hack. Sorry if that bothers you, but there is still La Fin Du Tour if you wish to play a World Tour ROM hack.

Here's a list of things you should know about what I chose to do that you may disagree with/should read to understand why I made the decisions I made:
- The championship text is now slightly shorter for each championship because that's what created space for the 9 wrestlers in the first place (e.g. instead of "World Heavyweight Championship" for the WWW Heavyweight league, it'll just say "WWW Champion")
- While I did successfully manage to add 9 wrestlers, they needed appearance data to come from *somewhere*. Thus, you'll notice a lot of the nWo folks in street gear; that's because for a number of them (and Rick Steiner), their costume data ended up being donated for each of the 9 additions. I was particular about how I distributed this - for example, Hogan, Nash, and Hall all share the black jeans + nWo t-shirt combination because they all have the same skin tone and use the same height value (20). Consolidating them to one costume freed two costume slots that would then go to two of the added wrestlers, if you can believe it. 
- Similarly, for head data, seeing as Hayabusa and Super Delphin didn't need the heads that you can't access anyway, all of their head defs went to the 9 characters (and Black Tiger II, come to think of it)
- Black Tiger II remains chunky because I know that's what AKI was planning; his unmasked texture is still Johnny Ace in honor of whatever it was they were trying to pull
- I used everyone's false name from WCW vs. The World for consistency with the existing roster; again, this wasn't about making the game more accurate to real life, but more about consistency with context. For characters like Dory Funk Jr., Dos Caras, and The Destroyer, all of whom never appeared in WCW vs. The World, I used a transliterated version of their VPW64 name. Do consider that renaming everyone to their actual name would also necessitate redoing their portraits (e.g. for Great Sasuke, whose picture is literally of a black ninja). This is not something I was willing to do.
- All the added characters have AKI's placeholder question mark portrait for additional characters (more on that in the next section); I didn't have space for drawing new portraits, nor did I want to to draw new portraits.
- I haven't changed anyone in the base roster's moveset to be more accurate because the budget for new anims went to making the added characters complete. 

IV. UNDER THE HOOD (A.K.A. WHAT DID WE LEARN?)

Section A: Lost Wrestlers?

The main impetus for this ROM hack was noticing an extra head definition and costume definition in the costume dialog of World Tour in VPW Studio. From my experience with the lost roster members in WCW/nWo Revenge, I had a hunch these had to belong to characters of some kind (though both were actually just visual clones of Joe Bruiser). 

I refer to these characters by their ID4 name -- the first is "ID4 0601", and the second is "ID4 0701". Both of these characters lacked specific costume definitions and head definitions. If you ever take a look at World Tour, you will notice that the data for most things is arranged in a hierarchical fashion - take costumes for example:
1) Raw Costume Data Definition
2) Wrestler-specific Costume Pointers (of which each wrestler has 4, with each pointer pointing to a given Raw Costume Data Definition)
3) Stable Starter Costume Pointers (which tells the game which wrestler is the first in a given stable)
4) An ASM command that tells the game where the first Stable Starter Costume Pointer is located

Returning to our friends ID4 0601 and ID4 0701, their data only existed at Level 3 in the above example, which means that they were essentially duplicating the pointer that was used for Joe Bruiser; however, it was a *separate* pointer, which meant that it belonged to two different stable starters.

"Stable starter", in this case, refers to the people who start a stable from an ID4 perspective. Those people are:
1) Hulk Hogan - ID4 0001, "Stable 00" starter (nWo)
2) Lex Luger - ID4 0101, "Stable 01" starter (WCW)
3) Sumo Jo/Tenryu - ID4 0201, "Stable 02" starter (DOA)
4) Black Ninja/Sasuke - ID4 0301, "Stable 03" starter (IU)
5) Joe Bruiser/Ali - ID4 0401, "Stable 04" starter (Hidden Heavyweight)
6) Black Widow/Toyota - ID4 0501, "Stable 05" starter (Hidden Cruiserweight)

By this logic, you can see that ID4 0601 is the starter for "Stable 06", and ID4 0701 is the same for "Stable 07". Given this sequence, it was possible to make them playable by making room for them in the params table (literally just a few bytes to the right of Black Widow), and assigning them params from the many beta VPW64 characters. This also required giving them "Stable Starter" pointers to tell the game where their params/moveset data started.

There are some implications to all of this. The first one is the obvious question: who were they supposed to be? It's not really clear-cut the way it is in the later games. For VPW64, the lost characters are clearly defined because they still exist. In Revenge, that's also not too unclear given the timeline for when the roster was decided (though there is still room for interpretation). WM2K has all the removed characters laid out for you, and VPW2 has had a filetable name analysis performed on it such that it's pretty clear who was supposed to be in the roster. No Mercy has been analyzed to death and has betas available.

World Tour has *all* the VPW64 characters' data available (save for Hiroshi Hase and the LOD, who were replaced by Glacier and Wrath respectively). You can't really single anyone out from the list. Thus, my conclusion is a little simpler than that. I think that both characters are not so much secret characters as much as they are vestigial remnants of VPW64's stable count. Prior to the WCW/nWo license being received, VPW64's stable count went up to "Stable 07", where the new additions that weren't already in VPW64 are given and ID4 stable of "08". World Tour doesn't have that because it didn't need to have that many stables, but the framework for having stables up to "Stable 07" remained for some reason.

Section B: Roster Choices

Why choose the people that I chose? With La Fin Du Tour, I made the observation that Andre the Giant was a mostly complete wrester, only missing the pre-animation for one of his Irish whip grapples. Hence, I found it somewhat of a mystery as to why he didn't make it into the final roster, other than it perhaps being too obvious who he was, which may have posed a risk for copyright reasons.

This familiarity with Andre made him an easy candidate for the first iteration of this experiment, though at the time I was unable to make ID4 0601 properly functional (will get into that in Section D). However, once it became apparent I could add more people, it was a terrifying thought because the beta movesets I had checked up until that point were nowhere near as complete as Andre's. That's when I remembered that in VPW64, Andre, though an unlockable wrestler (a fact reflected in his ID4), he is a WCW unlockable. The other WCW unlockable was Manami Toyota, who was *already* in World Tour. The nWo roster didn't have an unlockable in VPW64 because the nWo league was removed from VPW64 (still exists in text form though), and moreover, during development, the WCW and nWo stables were considered a single stable. This left DOA and IU as the only potential stables with 'intended' roster inclusions. This hunch would be proven somewhat correct.

If you'll notice in the part of this README where I mentioned move additions, you'll notice that from a moveset perspective, each of the characters I added (aside from Liger and Muta) only had a handful of actual moves missing. Usually these were just taunts, or a strike of some kind, and in the case of the Funks, a submission. Their movesets were arguably more functional than the majority of other beta movesets, and it made sense given the pattern - as unlockables, Dos Caras and Mil Mascaras corresponded to IU/ILW, and the Funks corresponded to DOA/DAW. Chono was only really missing one move (a stomp), but otherwise was complete, which is consistent with Andre because we do know for a fact that Chono was originally a WCW roster member. The Destroyer, who corresponds to the legends stable that Joe Bruiser belongs to, was also complete, only missing a single knee drop attack that he was already using in another slot. If I hd to TL;DR this: the unlockables corresponding to the stables that were already in World Tour are more complete than any other beta moveset in World Tour.

In the case of Liger and Muta, their restorations took a bit more time and care because the NSW (New Japan) movesets are more incomplete than the movesets I just mentioned. EWF (All Japan) folks are less complete than NSW folks, and WOU even moreso. Furthemore, hybrid wrestlers are even less complete than regular wrestlers, and shoot fighters are barely there.

Another minor note: I have left the beta movesets as 'beta' as I could in order to preserve them as they are. This is why Liger has two "arm wrench and elbow" grapples, and is also why Mil Mascaras uses the game's default intro taunt rather than the one I imported in.

Section C: Hidden Palettes in VPW64

I feel like this one may not be thought of as a significant discovery, but for me, it's arguably one of the most interesting finds I've made across the games. One of the most common gripes with World Tour is that it doesn't have the Wrestler Edit mode that was later included in VPW64 (though an incomplete version of the mode does exist, and is even implied to have been functional at one point in time). However, you will note that everybody in World Tour has somewhat richer, more specific color textures relative to their VPW64 counterparts. This is due to the fact that VPW64's wrestler edit mode requires textures to be expressed in pure Red, Green, and Blue (RGB) colors, such that you can change them using the Wrestler Edit mode's color selection tool. As no such requirement existed in World Tour, there was more freedom to use palettes with slightly more variance.

I had a hunch that characters like Hayabusa, who had extra heads in VPW64 that were hidden in World Tour, probably had pre-defined palettes that were similar to the ones they had for their base World Tour costumes, but for the extra heads. You can even observe some of these in VPW64 if you select purple for example, or brown - shades do not belong to the master palette, but are instead pre-defined palettes that the game somehow defaults to. As it turns out, the hunch was correct, and Hayabusa did indeed have red, green, black, and purple palettes on offer that were unique to him, matching his extra heads. I was then surprised to find that Super Delphin *also* had a set (though not all of his 10 heads have complete sets; only 8 do).

As it turns out, a large number of costume items have predefined palettes from a time before AKI had settled on the Wrestler Edit system. Liger has a black/white costume with gold trim, a white/white costume with red trim, a blue/white costume with gold trim, and many more that are just sitting there unused (even one that is seemingly inspired by his appearance as "Abispa" in WCW vs. The World). Muta has palettes corresponding to each of his facepaint options, and the list goes on and on. This effectively tells you what each of these characters could have looked like if they ended up in World Tour, and that was something that was critical in lending these characters a 'legitimate' appearance in this game, in tandem with their restored movesets and their false names.

Worth noting on the side that characters like Great Zebra, for some reason, didn't have a legitimate hidden palette available, but I still wanted people to have access to this alternate costume, so I enlisted jcsix's help to dump the textures for me in the appropriate black and white color scheme. The only other dumped textures I used were for Chono's forearm, where jcsix helped select an appropriate wrist tape color, which I then combined with Scott Hall's elbow pad palette (as Chono doesn't have a hidden palette for his arm textures, but Hall did).

Also worth noting that Muta was originally blue in 9 Underground before I found out that his wrist palette is actually pure dark red and not a shade of brown. This meant that the only hidden palette left for Muta's forearm was for his white costume, hence the last minute switch from blue to white.

Section D: Voice Data

One of the last things to be discovered from a Wrestler Data perspective in World Tour is Voice Data. Almost every wrestler has voice clips, and I have long theorized that there had to be some kind of voice table in the game that assigned voices to each character. However, not knowing what that data would even look like, I would have no way of knowing how to locate it. This was particularly problematic because Mil Mascaras, by virtue of the ID4 I gave him, was assigned the ring bell has his voice clip. It was hilarious, but also distracting. I enlisted the help of RetroRandyPrice to figure out where exactly the sound was being made, and he was able to pinpoint where in memory the voice data is stored, and where Mil's voice was coming from.

From there, I located the equivalent address in memory, and quickly understood that the game was reading later data as though it were voice clip data, and Mil's voice just so happened to land on an area that had "0000" written on it - this, I would find out, is the Voice ID for the ring bell sound. Thus, my last bit of ROM hacking involved moving Hogan's head data (which comes directly after the voice table) to a separate location to make room for direct changes to not just Mil's voice data, but that of the other 8 additions. Each wrestler in the game has two voice clips; I generally mapped them such that if they shared Voice Clip 1 with Scott Steiner, for example, I made sure they used the his voice clip in World Tour as well. There are likely fewer voices available in World Tour relative to VPW64, so this was the only way to consistently align voices, rather than try and listen in and constantly test each voice clip to see if it was similar enough. Some people like Chono only have one voice clip in common with someone already in World Tour, so for the other voice clip, I dummied it out by assigning "FFFF" as the voice clip (i.e. 'mute'). Liger is one such case where I just muted him in general because he didn't share his voice data with anyone of the World Tour roster members.

Tying this back to ID4 0601 and ID4 0701, when I first was able to make them function in World Tour, I was somewhat disappointed to find that playing a match with them would crash the game. Not immediately, but precisely when they were about to make an impact with a move. I had no idea why this was the case, but I again had a hunch, when Mil started making bell sounds, that it had to do with the voice data. Turns out this assumption was correct; the game tried to find out where the stable starter data was for Stables 06 and 07 in the voice table, and none were found.

By removing the stable starter data for Stables 06 and 07 from head definitions and costume definitions, I extended the length of Stable 05, and so all 9 roster additions have ID4s beginning with "05". This was probably a good idea in the long run because it saved precious bytes of data. In a world where I could add full characters with four costumes in their own stables, I think it might be worth keeping Stables 06 and 07 alive.

V. FINAL WORDS

I don't really have any. This is not a world-changing ROM hack and may end up getting lost in the mix. However, it is important to note the milestone as we head into the next generation of ROM hacks with greater potential for more detailed rosters and further discoveries to be made. The first trilogy of N64 AKI games continues to house secrets that we aren't aware of; it is my sincere hope that people continue to dig and find things so that we can form as complete a picture as possible about what really went on back when these were being developed (like seriously, how was it *just* discovered that Jeff Jarett's costume parts are still in World Tour and VPW64? Good on you, John Fortnite Kennedy). Don't sleep on the pre-WM2K era.