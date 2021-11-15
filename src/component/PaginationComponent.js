import React from 'react'
import { Pagination} from '@eccenca/gui-elements';

const PaginationComponent = () => {
    const handleNewPaginationOffset = () => {

    }
  const handleNewPaginationLimit = () => {
    
  }
    return (
        <div>
        <h1>Pagination </h1>
        <Pagination
        offset={0}
        limit={10}
        actualResults={10}
        totalResults={31}
        handleNewOffset={handleNewPaginationOffset}
        handleNewLimit={handleNewPaginationLimit}
        offsetAsPage={false}
        />
        </div>
    )
}

export default PaginationComponent
