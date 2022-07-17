import React from 'react';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { VscLocation } from 'react-icons/vsc';

import useAuth from './../Hooks/useAuth';

const Jogajog = () => {
  window.scroll(0, 0);
  const { contact } = useAuth();

  return (
    <div>
      <div className="container">
        <div className="title text-center py-4">
          <h1 style={{ fontWeight: '900' }}>GET IN TOUCH</h1>
        </div>
      </div>

      {Object.keys(contact).length > 0 ? (
        <div className="row text-center p-0 m-0">
          <div className="col-lg-4 p-0">
            <div>
              <MdEmail className="fs-3 mb-4" />
              <p>{contact.youtube}</p>
            </div>
          </div>
          <div className="col-lg-4 p-0">
            <div>
              <BsFillTelephoneFill className="fs-3 mb-4" />
              <p>{contact.site_contact}</p>
              <p>{contact.site_contact2}</p>
            </div>
          </div>
          <div className="col-lg-4 p-0">
            <div>
              <VscLocation className="fs-3 mb-4" />
              <p>{contact.facebook}</p>
            </div>
          </div>
          <p className="my-4 text-justify ">{contact.sort_description}</p>
        </div>
      ) : (
        <div
          style={{ width: '3rem', height: '3rem' }}
          class="spinner-border position-absolute start-50"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default Jogajog;
