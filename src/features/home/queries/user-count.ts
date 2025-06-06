import { queryOptions } from '@tanstack/react-query';

import { api } from '@/lib/api';

interface TotalType {
  totalUsers?: number;
}

const fetchUserCount = async (): Promise<TotalType> => {
  const { data } = await api.get('/api/homepage/user-count');
  return data;
};

export const userCountQuery = queryOptions({
  queryKey: ['user-count'],
  queryFn: fetchUserCount,
  staleTime: 1000 * 60 * 60,
  gcTime: 1000 * 60 * 60 * 2,
});
