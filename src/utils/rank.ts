import { BONUS_REWARD_POSITION } from '@/features/listing-builder/constants';
import { type Rewards } from '@/features/listings/types';

const rankLabels = [
  'zeroth',
  'first',
  'second',
  'third',
  'fourth',
  'fifth',
  'sixth',
  'seventh',
  'eighth',
  'ninth',
  'tenth',
  'eleventh',
  'twelfth',
  'thirteenth',
  'fourteenth',
  'fifteenth',
  'sixteenth',
  'seventeenth',
  'eighteenth',
  'nineteenth',
  'twentieth',
  'twentyFirst',
  'twentySecond',
  'twentyThird',
  'twentyFourth',
  'twentyFifth',
  'twentySixth',
  'twentySeventh',
  'twentyEighth',
  'twentyNinth',
  'thirtieth',
  'thirtyFirst',
  'thirtySecond',
  'thirtyThird',
  'thirtyFourth',
  'thirtyFifth',
  'thirtySixth',
  'thirtySeventh',
  'thirtyEighth',
  'thirtyNinth',
  'fortieth',
  'fortyFirst',
  'fortySecond',
  'fortyThird',
  'fortyFourth',
  'fortyFifth',
  'fortySixth',
  'fortySeventh',
  'fortyEighth',
  'fortyNinth',
  'fiftieth',
];

export const getRankLabels = (rank: number) => {
  if (rank === 99) return 'bonus';
  else return rankLabels[rank];
};

export const cleanRewards = (rewards?: Rewards | null, skipBonus = false) =>
  Object.keys(rewards || [])
    .filter((key) => key !== null && key !== undefined)
    .map(Number)
    .filter((key) => !isNaN(key))
    .filter((key) => (skipBonus ? key !== BONUS_REWARD_POSITION : true));

export const cleanRewardPrizes = (rewards?: Rewards, skipBonus = false) => {
  const nRewards = { ...rewards };
  if (skipBonus && nRewards) {
    delete nRewards[99];
  }
  return Object.values(nRewards || [])
    .filter((key) => key !== null && key !== undefined)
    .map(Number)
    .filter((key) => !isNaN(key));
};

export const nthLabelGenerator = (
  key: number,
  noBonusLabel: boolean = false,
) => {
  if (key === BONUS_REWARD_POSITION && !noBonusLabel) return 'bonus';

  const lastDigit = key % 10;
  const lastTwoDigits = key % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${key}th`;
  }

  switch (lastDigit) {
    case 1:
      return `${key}st`;
    case 2:
      return `${key}nd`;
    case 3:
      return `${key}rd`;
    default:
      return `${key}th`;
  }
};

export const sortRank = (rankArray: number[]) => {
  return rankArray
    .map((rank) => ({
      rank,
      index: rank,
    }))
    .sort((a, b) => {
      if (a.index < b.index) {
        return -1;
      }
      if (a.index > b.index) {
        return 1;
      }
      return 0;
    })
    .map((item) => item.rank);
};
