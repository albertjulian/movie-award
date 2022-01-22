import React from 'react';
import useHooks from './hooks';
import './Ballot.css';

const Ballot = () => {
  const {
    data,
    selectedData,
    handleSelectedData
  } = useHooks();

  return (
    <div className='ballot'>
      {
        data && data.map((eachData) => {
          return (
            <div id={eachData.id} className='title-category'>
              {
                eachData.title
              }
              <hr style={{
                border: '1px solid gold',
                width: '150px',
              }} />
              <div className='category'>
                {
                  eachData && eachData.items && eachData.items.map((eachDataNominee) => {
                    return (
                      <div
                        id={eachDataNominee.id}
                        className={
                          selectedData && selectedData[eachData.id] && selectedData[eachData.id] === eachDataNominee.id ? 'selected-nominee' : 'nominee'
                        }
                        style={{
                          backgroundImage: `url('${eachDataNominee.photoUrL}')`,
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                        }}
                        onClick={(e) => handleSelectedData(e, eachData.id)}
                      >
                        <div className='title-nominee'>
                          {
                            eachDataNominee.title
                          }
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          );
        })
      }
      <button className='button-ballot'>
        Submit your vote here
      </button>
    </div>
  )
}

export default Ballot;