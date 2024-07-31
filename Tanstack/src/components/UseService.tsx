import { QueryObserverSuccessResult, useQuery } from '@tanstack/react-query'
import React from 'react'
import { groupQueryTodos } from '../services/queryOptions/todos'

interface UseService {
    queryOption: typeof groupQueryTodos
    children: (props: QueryObserverSuccessResult<{
        data: Todo[];
    }, Error>) => React.ReactNode
}
// ReturnType<UseService['queryOption']>
const UseService = ({ queryOption, children }: UseService) => {
    const getData = useQuery(queryOption())

    if (getData.isPending) {
        return <p>Loading...</p>
    }
    if (getData.isError) {
        return <p>Error: {getData.error.message}</p>
    }
    return (
        <>
            {
                children(getData)
            }
        </>
    )
}

export default UseService