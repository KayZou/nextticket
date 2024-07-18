# NextTicket: Ticket Management App

This is a Ticket Management application built using Next.js and ShadCN UI. It utilizes React SimpleMDE (EasyMDE) Markdown Editor for creating and editing ticket descriptions. The app allows users to manage ticket issues by creating, browsing, editing, and deleting tickets.

## Table of Contents

- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)

## Usage

### Creating a Ticket

1. Click on the "Create Ticket" button.
2. Fill in the ticket title, description (using Markdown), and select the status and priority.
3. Click "Submit" to create the ticket.

### Browsing Tickets

- The home page displays a list of all tickets with their titles, descriptions, status, and priority.

### Editing a Ticket

1. Click on the ticket you want to edit.
2. Modify the ticket details as needed.
3. Click "Save" to update the ticket.

### Deleting a Ticket

1. Click on the ticket you want to delete.
2. Click the "Delete" button to remove the ticket.

## Features

- **Create Tickets:** Add new tickets with a title, description, status, and priority.
- **Browse Tickets:** View a list of all tickets.
- **Edit Tickets:** Modify the details of existing tickets.
- **Delete Tickets:** Remove tickets from the system.
- **Markdown Support:** Use Markdown to format ticket descriptions.

## Technologies

- **Next.js:** A React framework for building fast, user-friendly web applications.
- **ShadCN UI:** A UI component library for building elegant and customizable user interfaces.
- **React SimpleMDE (EasyMDE):** A Markdown editor for writing and editing ticket descriptions.
- **React-markdown:** A Markdown reader react library for translating from markdown to plain text. 
- **Prisma:** An ORM for database management.

## **ToDo next**:
- secure the full crud on users / tickets!
- add more providers into next-auth
- protect pages
- correct the spelling
- play more with the dashboard