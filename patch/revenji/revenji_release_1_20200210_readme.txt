Hey, welcome to the first README I've ever written. Nervewracking.

=== SECTION 1: BASIC QUESTIONS ===

1) Why's the title screen written in Korean?
A: After what happened with VPW2 Freem Edition, I pretty much lost faith in anyone's ability
to keep this hack away from being bootlegged. In case I do end up releasing it in any capacity,
my security mechanism against bootlegging is translating the majority of text options to Korean.
Why Korean? Because I can read it, and Korea never got a pro wrestling game, or any local titles
for the N64. I myself am not a Korean, I just think the language is dope as hell.

2) What should I call it then?
A: WCW/nWo REVENJI (or WCW/nWo 레벤지, if you can write that)

3) What's different about REVENJI compared to vanilla Revenge?
A: I'm glad you asked! Read on below...

- EWF is no more. Instead, the AJPW roster makes their official series debut 2 years prior to 
Virtual Pro Wrestling 2! The DAW roster has also been converted, meaning we now have the following roster
additions to the game:
  o Kenta Kobashi (replaces Executioner)
  o Toshiaki Kawada (replaces Shogun)
  o Jumbo Tsuruta (replaces Dr. Frank)
  o Dr. Death (replaces Jekel)
  o Akira Taue (replaces Maya Inca Boy)
  o Genichiro Tenryu (replaces Hawk Hana)
  o Koji Kitao (replaces Kim Chee)
  o Atsushi Onita (replaces Dake Ken)
  o Kodo Fuyuki (replaces Brickowski)
  o Tarzan Goto (replaces Ming Chee)
  o Tiger Mask (replaces Han Zo Mon)
- Furthermore, we have two additions from Japan -- from NJPW, Masahiro Chono makes his official 
return from the roster of WCW vs. The World! He possesses the vast majority of his moves from Virtual 
Pro Wrestling 64, and occupies the final slot of DAW...at the expense of Virgil. However, being that his
movesets and parameters were customized from the hex code of the game itself, there are known issues with him
that I don't intend to fix due to the effort involved. I'll get into this later.
- To round out the AJPW roster, I have also added Terry Gordy, who can now officially tag with Dr. Death! His
moveset is heavily based on Steve Williams', with certain moves reflecting Gordy's VPW2 moveset. He's different
enough to Dr. Death such that it won't be a completely identical experience, but you can tell that his moves 
are less comprehensively modified compared to Chono, albeit with the added benefit of no glitch moves. However,
he comes at the expense of Sonny Onoo.
- Because I don't like having more than one incomplete wrestler in the game, I decided to make Wrath
more complete. What does that mean? No more glitched Snake Eyes or Boston Crab and an actual constume of his own
(at the expense of Mortis'). However, I won't say he's 100% fixed -- there are a couple of things that are still
wonky that haven't been fixed, but I'll get into this later too.
- Nitro has been converted into a facsimile of the 'lost' arena from VPW2.
- There are a few fun easter eggs I added that I'll get into later on.

4) WHY HAVEN'T YOU CHANGED AKI MAN INTO MISAWA asjdf;lkasjf ;askdja;dsf
A: Because he isn't Misawa. Not entirely anyway.

5) What's written on Onita's shirt?
A: ZEN -- this game was released in 1998, meaning the Onita of this particular time period was heading the ZEN
stable over in FMW. This version of him doesn't really get much love from the community, for obvious reasons
(obscurity + those who know of him from this time know this wasn't him at his best).

6) How come I have to change Chono and Gordy's costumes every single time I restart the game?
A: Although they are now part of the playable roster, the game still registers them as being 'managers' as far as
the SRAM is concerned. As a result, they are stuck with Giant's costume as a base -- I have yet to figure out
where the default costume values are, and for the ones I have found, they're highly sensitive and game-breaking.
If you're on an emulator, you can use saves to work around this problem, but for those of you playing this on a legit
N64, sorry.

8) Why did you change Han Zo Mon to Tiger Mask? He's supposed to be Hayabusa, isn't he?
A: You're only half right. Fun Fact - Han Zo Mon is, in fact, THREE wrestlers in one! His grapples and combo
meter stem from our friend Tiger Mask, while his flying moves and strikes are those of Hayabusa. Why did I say
three wrestlers? The third is Chris Jericho -- that's the face underneath the ninja hood.

=== SECTION 2: KNOWN ISSUES ===

So, gotta get the bad stuff out of the way first. Here's a list of all known issues that I'm aware of:

General Game Stuff
- This game gets the jitters a LOT on emulators. You'll see it on the Character Select screen, during entrances, and during
any instance of the game where there's more than two wrestlers playing at the same time. This means Tag Team
matches are kind of impossible unless you want to deal with significant slowdowns. Same can be said for
wrestling guys who have managers. I'm sorry, but I really don't have a solution to this. I'm told this isn't an issue
on legit Nintendo 64s though.

Masahiro Chono
- Some of his moves, mainly Weak B grapples and some Strong A grapples, don't have the correct damage properties,
and also lack the appropriate reversal animations. This is due to me being unable to find the information for
these in the ROM. I've edited everything I can such that he functions perfectly fine from an offensive
perspective. Just, when you get reversed, things are likely to get weird.
- His Flying Knee Drop in the ring doesn't have the follow-through animation, meaning he stands up instantly
after landing the move.
- His kicks do not have the right reversals attached to them. However, they land correctly.
- His small package (Strong A+Down) doesn't have a reversal animation. Should your opponent reverse this move,
you will both do the 'invalid' chop and return to a standing position.
- Chono's Test of Strength winning move is that of a junior heavyweight.
- Chono's attire changes color with the top portion of his boots (i.e. his feet don't change color, but
everything else does).

Wrath
- His finisher and corner shoulder strikes still don't have sound.
- While the Snake Eyes move is fixed, and does the correct amount of damage, the opponent will spend no time
selling the move, and will get up immediately every time, without fail. I have no idea why, but this is the 
compromise for having the move look correct.

Tiger Mask
- Main taunt (Tiger dance) doesn't increase your spirit -- the lower taunt works, though.

=== SECTION 3: GETTING THE GAME TO LOOK RIGHT ===

Unlike Virtual Pro Wrestling 2: Freem Edition, this game doesn't have the characters' default costumes
set to the correct defaults from the get-go. So, you're going to have to do a bit of legwork to get everyone
to look right. However, you're not alone! Let's do it together!

NOTE: This assumes that you've used the code to unlock Wrath, and have unlocked all characters.

- Kanyon
  o Change Attire 2 and 4 to that of Kanyon with whatever costume colors you wish to use

- Wrath
  o Change all attires to Costume 37, using whichever colors you wish (black as primary)

- Stevie Ray
  o Change Attires 1 and 3 to Costume 4

- Kenta Kobashi
  o change Attire 1 to Orange Trunks

- Jumbo Tsuruta
  o Attire 1: Change to Costume 30, default colors
  o Now, you may have noticed that there's more than one head. If you're curious as to who these people are:
	Mask 2: The VPW1 version of Giant Baba
	Mask 3: The VPW1 version of Road Warrior Hawk
	Mask 4: The VPW2 version of Stan Hansen
	Mask 5: The VPW2 version of Mil Mascaras, completely unmasked
  o Go nuts with these as you wish. My *suggested* list is below:
  o Attire 2: Costume 30, Red Trunks, Mask 2
  o Attire 3: Costume 30, Blue Trunks, Mask 4
  o Attire 4: Costume 16, Black tights with Red Boots and trim, Mask 3
  o If you wish to use Mask 5, I suggest Costume 30 with White Trunks

- Akira Taue
  o Change Attire 1 to Red Trunks

- Tenryu
  o Attire 1: Costume 17, Black as the main color with Yellow for the accent on the boots

- Atsushi Onita
  o Attire 1: Keep it the same
  o Attire 2: Costume 10
  o Attire 3: Costume 48, whichever color you choose for the jeans (I would go with pink or black)
  o Attire 4: Costume 58

- Kodo Fuyuki
  o Attire 1: Change to Costume 8

- Han Zo Mon
  o Rename to Tiger Mask
  o Attire 1: Red and Black
  o Attire 2: Change the belt to White
  o Attire 3: Mask 4, Black pants with White belt
  o Attire 4: Mask 5, White pants with Aqua Blue belt

- Chono
  o Attire 1: Change to Costume 5
  o Attire 2: Any NWO Costume

- Terry Gordy:
  o Attire 1: Change to Costume 30
  o Attire 2: Maybe Costume 33?
  o Attire 3: Costume 32, if you want to evoke Freebird vs. Von Erich vibes

