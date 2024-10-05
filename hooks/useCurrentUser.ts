import useSWR from 'swr';
import fetcher from '@/libs/fetcher';
const useCurrentUser = ()=>{
    const{data,error,isLoading,mutate}=useSWR('/api/currrent',fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
};
export default useCurrentUser