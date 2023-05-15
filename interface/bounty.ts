import type { BountyType } from '@prisma/client';

import type { QuestionType } from '@/components/listings/bounty/questions/builder';
import type { SponsorType } from '@/interface/sponsor';
import type { User } from '@/interface/user';

import type { Skills } from './skills';

interface Eligibility {
  order: number;
  question: string;
  type?: QuestionType;
}

interface Rewards {
  first: number;
  second?: number;
  third?: number;
  forth?: number;
  fifth?: number;
}

type BountyStatus = 'OPEN' | 'REVIEW' | 'CLOSED';

interface Bounty {
  id: string;
  title: string;
  slug: string;
  description?: string;
  applicationLink?: string;
  skills?: Skills;
  deadline?: string;
  eligibility?: Eligibility[];
  status?: BountyStatus;
  isActive?: boolean;
  isPublished?: string;
  isFeatured?: string;
  token?: string;
  rewardAmount?: number;
  rewards?: Rewards;
  sponsorId?: string;
  sponsor?: SponsorType;
  pocId?: string;
  poc?: User;
  source?: string;
  sourceDetails?: string;
  type: BountyType;
}

export type { Bounty, BountyStatus, Eligibility, Rewards };
