# How to use Search

For visual guide, check the gif below. All inventory commands must be performed in Tykhe channels, or this DM. **Not making sense? Look for the example strings and copy them!**

`!search` will list the available type of cards to search, as well as the full search string.  
`!search [type]` will list the available cats in the type.  
- Example string: `!search chars`

`!search [type],[cat]` will list the available subcats in the type+cat.  
- Example string: `!search chars,myth,`

`!search [type],[cat],(subcat)` will list all cards in the type+cat+subcat.  
- Example string: `!search chars,myth,Greek`

Alternatively, you can specify a search query:

`!search [type],[cat],(query)`
- Example string: `!search chars,myth,Tykhe`

## GID's and How to View them:

On each `!search` listing, as well as `!roll` listing, there is a 5 digit number. This is the **G**lobal **I**dentification **N**umber - GID.

`!search [type],[cat],[GID]` will display the GID-card.

- Example string: `!search chars,myth,41490`

- GID's do not belong to any sole user - it is the global identification for that specific card prior to ownership.

![Search](https://i.imgur.com/Ubt3Sdm.gif)

Command parameters surrounded by parentheses are optional.