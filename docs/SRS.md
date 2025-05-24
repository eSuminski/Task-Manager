# Software Requirements Specification (SRS)

## 1. Introduction

### 1.1 Purpose
This document describes the software requirements for the Task Manager VS Code extension. It defines the functional and non-functional requirements, constraints, and system interfaces.

### 1.2 Scope
The extension provides task management features within Visual Studio Code, allowing users to create, view, and manage tasks directly from the editor.

### 1.3 Definitions, Acronyms, and Abbreviations
- **VS Code**: Visual Studio Code
- **SRS**: Software Requirements Specification
- **MCP**: Model Context Protocol

## 2. Overall Description

### 2.1 Product Perspective
The extension integrates with VS Code as an extension, using the VS Code API and optionally integrating with an MCP server for advanced features.

### 2.2 Product Functions
- Add, edit, and delete tasks
- View tasks in a list or board format
- Persist tasks using VS Code workspace storage
- Optional: Synchronize tasks with an MCP server

### 2.3 User Classes and Characteristics
- **End User**: Uses the extension to manage tasks
- **Developer**: Maintains or extends the extension

### 2.4 Operating Environment
- Visual Studio Code (latest LTS and current stable)
- Node.js (per VS Code extension requirements)

### 2.5 Design and Implementation Constraints
- Must follow VS Code extension guidelines
- TypeScript, ESLint, and Jest for code quality
- Strict security and privacy for user data

### 2.6 User Documentation
- README.md for usage and setup
- Inline help and command palette descriptions

## 3. Specific Requirements

### 3.1 Functional Requirements
- FR1: The extension shall allow users to add new tasks
- FR2: The extension shall allow users to edit existing tasks
- FR3: The extension shall allow users to delete tasks
- FR4: The extension shall display a list of tasks
- FR5: The extension may synchronize tasks with an MCP server

### 3.2 Non-Functional Requirements
- NFR1: The extension shall not block the VS Code extension host
- NFR2: All user input shall be validated and sanitized
- NFR3: The extension shall use strict Content Security Policy for Webviews
- NFR4: All code shall pass ESLint and Jest tests

### 3.3 System Interfaces
- VS Code API
- Optional: MCP server REST API

## 4. Appendices
- A. Copilot Coding Standards (see .github/instructions/copilot-instructions.md)
- B. VS Code Extension Guidelines
