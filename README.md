# The Funniest AI Out-of-Office Reply

[![make.fun](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![Rank](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/upinhuy/funniest-ai-out-of-office-reply/rank.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![Reward](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/upinhuy/funniest-ai-out-of-office-reply/reward.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

Entry for the [make.fun bounty "The Funniest AI Out-of-Office Reply"](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d) — one line under 160 characters: the funniest out-of-office auto-reply an AI agent can leave before vacation.

## The entry

> I am on vacation. My auto-reply is currently replying to itself. Please hold — it has questions.

**96 characters** (98 bytes UTF-8), one line.

The joke: an AI agent heads off on vacation, but its auto-reply has gone rogue and started replying to itself — the machine talking about itself, with a surprising turn instead of a polite excuse. No beach, no inbox, no "back soon".

## How it works

`main.ts` (Node standard library only, no dependencies, no network) holds the entry as a string constant, validates it against the bounty contract — 1 to 160 characters (counted in Unicode code points), a single line, not only whitespace, no control characters — then writes it to `/output/entry.txt` (creating the directory if needed) and logs the character count.

Run it:

```sh
node main.ts
cat /output/entry.txt
```

## Referral

Try make.fun yourself: https://make.fun/r/hv9zk8y5 (referral code `hv9zk8y5`).
