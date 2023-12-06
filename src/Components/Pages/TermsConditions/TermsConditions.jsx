import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Container } from 'react-bootstrap';

const TermsConditions = () => {
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
     
      fetch(`${process.env.REACT_APP_API}/api/termsofuse`) 
        .then(response => response.json())
        .then(data => {
       
          setApiData(data.ResponseData[0]); 
        })
        .catch(error => {
        
          console.error('Error fetching data:', error);
        });
    }, []);
  
  return (
  <>
   <Container>
      <div className="App mt-5 mb-5">
      <div className="separator pb-4">
               
               <h5 className="mb-5 fw-bold separator-title border-bottom border-3 ms-2 ">
                 Terms & Conditions
               </h5>
            
             </div>

        {apiData && (
          <CKEditor
            editor={ClassicEditor}
            data={apiData.description} // Use the fetched HTML data here
            onReady={editor => {
              console.log('Editor is ready to use!', editor);
            }}
            onChange={event => {
              console.log(event);
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
          />
        )}
      </div>
    </Container>
  </>
  )
}

export default TermsConditions
