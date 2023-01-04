---
title: Inventory
sidebar_position: 2
---
# Inventory Management

For Visual Guide, check the gif below. All inventory commands must be performed in `#tykhe-commands` channels.

`!inv` will list all the categories you own cards in as well as how many you own.  
`!inv [cat]` will list all the cards you own in [cat] using react arrows to swap pages. They will be sorted by subcat.

`!inv [cat], (subcat)` will list all the cards you own in the [cat]+(subcat) combination.

`!inv [cat],(name)` will search the category for the name, and display according results if you own them.

## UID's and How to view them:

> <span class="star5"></span> - Granny Goodness - 4233

On each inventory listing there is a 4 digit number. This is the **U**ser **I**dentification **D**igit - **UID**.

`!inv [cat],(uid)` will respond with the specific card that belongs to you, and has your star level.

## Additional Syntax options:

`!inv [cat],x*` will allow you to list all cards of a specific star level. `x`=`1*`,`2*`,`3*`,`4*`,`5*`
`!inv [cat],(query),x*` will allow you to search a specific query and only output cards of a specific star level from that query.

Other users cannot use your inventory pages, unless:

`!inv [cat],@user` will allow the targeted user to use your inventory pages.  
(You can also do `!inv [cat]` and use the reply to user feature built into discord, as an alternative.)

Master Syntax: `!i [category], (query | subcategory | UID | @user ), (@user)`