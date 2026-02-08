'use client';
import Col from "react-bootstrap/Col";
import { ContactAPI } from "../data/contactsAPI";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Row from "react-bootstrap/Row";
import { useState } from "react";


export default function Contact() {
  const allContacts = ContactAPI.all();

    return (
    <Container className="contacts-div">
        <Row>
        <Col className="sm">Profile Pic</Col>
        <Col className="sm">Name</Col>
        <Col className="sm">Email</Col>
        <Col className="sm">Phone</Col>
      </Row>
      {allContacts.map((c) => (
          <Row className="contacts-list" key={c.uniqueId}>
        <Col className="sm">
          <img src={c.image}/>
        </Col>
          <Col className="sm">
          <Link href={`/contacts/${c.uniqueId}`}>
            <Col className="sm">{c.name}</Col>
        </Link>
        </Col>
          <Col className="sm">{c.email}</Col>
          <Col className="sm">{c.phoneNumber}</Col>
      </Row>
      ))}
  </Container>
  );
}