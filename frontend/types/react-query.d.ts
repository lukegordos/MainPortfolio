declare module '@tanstack/react-query' {
  import * as React from 'react';

  export interface QueryClientProviderProps {
    client: QueryClient;
    children: React.ReactNode;
  }

  export class QueryClient {
    constructor(options?: any);
    [key: string]: any;
  }

  export const QueryClientProvider: React.FC<QueryClientProviderProps>;

  export function useQuery(options: any): any;
  export function useMutation(options?: any): any;
  export function useQueryClient(): QueryClient;
}
