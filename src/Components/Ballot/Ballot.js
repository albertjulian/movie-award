import React from 'react';
import useHooks from './hooks';
import './Ballot.css';

const Ballot = () => {
  const {
    data,
    selectedData,
    modal,
    message,
    handleSelectedData,
    handleSubmit,
    closeModal,
  } = useHooks();

  return (  
    <div className='ballot'>
      {
        data && data.map((eachData) => {
          return (
            <div
              id={eachData.id}
              key={eachData.id}
              className='title-category'
            >
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
                        key={eachDataNominee.id}
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
                        onClick={(e) => handleSelectedData(e, eachDataNominee.id, eachData.id)}
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
      <button
        className={!selectedData || (selectedData && Object.keys(selectedData).length < data.length) ? 'button-disabled' : 'button-ballot'}
        onClick={handleSubmit}
        disabled={!selectedData || (selectedData && Object.keys(selectedData).length < data.length)}
      >
        Submit your vote here
      </button>

      {
        modal && (
          <div id="myModal" class="modal" onClick={closeModal}>
            <div class="modal-content">
              <span class="close">&times;</span>
              <p>{message}</p>
            </div>

          </div>
        )
      }

    </div>
  )
}

export default Ballot;