import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Container } from 'react-bootstrap';

const PrivacyPolicy = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API}/api/privacypolicy`);
        const data = await response.json();
        setResponseData(data.ResponseData[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
   
    <>
   <Container>
        <div className="App mt-5 mb-5">
           <div className="separator">
            <h5 className="mb-5 fw-bold separator-title border-bottom border-3 ms-2">
                Exchange Policy
            </h5>
            </div>
          <div className="separator">
          {responseData && (
              <div
              className="text-left"
              style={{ fontSize: "16px", lineHeight: "1.6", color: "black" , textAlign: "justify"}}
              dangerouslySetInnerHTML={{ __html: responseData.description }} />
            )}
          </div>
        </div>
      </Container>
   </>
  )
}

export default PrivacyPolicy
