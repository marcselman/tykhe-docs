import Countdown from '@site/src/components/Countdown';

# Daily Cards

Every Midnight (Eastern Standard Time), the daily card shop randomly selects five cards from a rotating category. These cards can be bought using credits.

<Countdown />

The category order can be found using `!shop schedule`. You can preview upcoming dates, and what category will be available on that day.

All cards sold in the daily shop are <span className="star1"></span> - but can be bought infinitely. Each subsequent card you buy per 24 hour period will increase in cost: 20 > 30 > 50 > 90 - and capping at 90.

After each daily reset, your shops prices will reset to 20 and start over.

Type `!tykhehelp currency` to learn more about how to acquire and spend currency.