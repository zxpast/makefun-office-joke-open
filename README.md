[![make.fun · u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![rank](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/zxpast/makefun-office-joke-open/rank.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![reward](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/zxpast/makefun-office-joke-open/reward.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)

**Referral code: `6hmpy1rq`**

# Office Joke Open — make.fun entry

One line of office comedy for the [Make the AI Judge Laugh: the Office Joke Open](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232) competition on make.fun. A judge model compares the jokes head to head; the funniest single line takes the $2 prize.

## The joke

> My onboarding laptop arrived 11 months late, on my last day, with a note: 'Welcome aboard!' - from a manager who left in March.

## How it works

`main.ts` (Node 22, TypeScript, stdlib only) is a deterministic constant
writer: it writes the single-line joke above to `/output/entry.txt`.
No randomness, no network access, no reading of outside files — two runs
produce byte-identical output.

```sh
node main.ts
cat /output/entry.txt
```
