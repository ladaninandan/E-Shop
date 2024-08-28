import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faMobileAlt, faPaperPlane, faAddressBook, faCog } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Navbar from '../User/Navbar';

const supportItems = [
   { icon: faUser, title: 'My account', description: 'Create and manage your Brevo account', link: '/account' },
   { icon: faEnvelope, title: 'Email campaigns', description: 'Engage your contacts using the best mobile-friendly email design tools', link: '/email-campaigns' },
   { icon: faMobileAlt, title: 'WhatsApp & SMS', description: 'Connect directly with your contacts using targeted WhatsApp & SMS messages', link: '/whatsapp-sms' },
   { icon: faPaperPlane, title: 'Transactional emails', description: 'Send one-to-one emails with optimal deliverability and powerful tracking', link: '/transactional-emails' },
   { icon: faAddressBook, title: 'Contacts', description: 'Manage and segment your contacts for perfectly targeted campaigns', link: '/contacts' },
   { icon: faCog, title: 'Automation', description: 'Automate your marketing using emails, SMS, website tracking & more', link: '/automation' }
];

function Support() {
   const [hoverIndex, setHoverIndex] = useState(null);
   const [searchQuery, setSearchQuery] = useState('');
   const navgate = useNavigate();

   const filteredItems = supportItems.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
   );

   const handleCardClick = (link) => {
      navgate(link);
   };

   const handleSearchSubmit = (e) => {
      e.preventDefault();
      // Implement any search-specific logic here
   };

   return (
      <div>
         <Navbar />

         <Container className="mt-5 text-center">
            <h2>We're here to help</h2>
            <Form className="my-4" onSubmit={handleSearchSubmit}>
               <Form.Group className="mb-3" controlId="search">
                  <Form.Control
                     type="text"
                     placeholder="Search"
                     value={searchQuery}
                     onChange={e => setSearchQuery(e.target.value)}
                     style={{ maxWidth: "600px", margin: "0 auto" }}
                  />
               </Form.Group>
            </Form>
            <Row>
               {filteredItems.map((item, index) => (
                  <Col md={4} className="mb-4" key={index}>
                     <div
                        className="p-4 border rounded shadow-sm"
                        style={{
                           minHeight: "200px",
                           cursor: 'pointer',
                           transform: hoverIndex === index ? 'scale(1.05)' : 'scale(1)',
                           transition: 'transform 0.2s'
                        }}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                        onClick={() => handleCardClick(item.link)}
                     >
                        <FontAwesomeIcon icon={item.icon} size="2x" className="mb-3" />
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                     </div>
                  </Col>
               ))}
            </Row>
         </Container>
      </div>
   );
}

export default Support;
