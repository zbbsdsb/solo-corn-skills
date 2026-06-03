# SCS Playground

A web application that demonstrates the capabilities of Solo Corn Skills (SCS) - an AI-powered skill execution engine for solo entrepreneurs.

## Project Description

SCS Playground is a dogfooding project built using SCS skills themselves. It serves as both:
- A practical demonstration of SCS capabilities
- A usable tool for exploring and invoking SCS skills through a web interface

## Features

### Core Features (2-week scope)

1. **Skill Browser**
   - View all available SCS skills in a clean card layout
   - See skill descriptions, operations, and metadata
   - Filter skills by category

2. **Skill Invoker**
   - Select a skill and choose an operation
   - Provide input parameters via form or JSON
   - Execute skills and view streaming results
   - Support for all 8 core SCS skills

3. **Output Viewer**
   - Real-time streaming output display
   - Formatted markdown rendering
   - Copy-to-clipboard functionality
   - Export results as JSON or markdown

4. **Invocation History**
   - View past skill invocations
   - Re-run previous invocations
   - Compare outputs

### Future Features

- Workflow Designer (chain multiple skills)
- API key management
- Team collaboration
- Custom skill creation

## Tech Stack

### Frontend
- **React 18** - UI framework
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **TypeScript** - Type safety

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **TypeScript** - Type safety

### Architecture
```
┌─────────────┐     REST API      ┌─────────────┐
│   React     │ ◄───────────────► │   Express   │
│   Frontend  │   JSON/Stream      │   Backend   │
└─────────────┘                    └──────┬──────┘
                                          │
                                    ┌─────▼─────┐
                                    │ SCS CLI   │
                                    │ Engine    │
                                    └───────────┘
```

## Project Structure

```
scs-playground/
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── SkillCard/
│   │   │   ├── SkillInvoker/
│   │   │   ├── OutputViewer/
│   │   │   └── HistoryPanel/
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── SkillBrowser.tsx
│   │   │   └── Invoker.tsx
│   │   ├── hooks/            # Custom React hooks
│   │   ├── services/         # API client
│   │   ├── types/            # TypeScript types
│   │   └── App.tsx
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.ts
│
├── backend/
│   ├── src/
│   │   ├── routes/           # Express routes
│   │   │   ├── skills.ts     # Skill listing
│   │   │   ├── invoke.ts     # Skill invocation
│   │   │   └── history.ts    # Invocation history
│   │   ├── middleware/        # Express middleware
│   │   │   ├── auth.ts
│   │   │   └── errorHandler.ts
│   │   └── server.ts          # Express server entry
│   └── package.json
│
├── SPEC.md                     # Detailed specification
└── README.md
```

## Quick Start

### Prerequisites

- Node.js 18+
- npm 9+

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs on `http://localhost:3001`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

### Environment Variables

Create `.env` in backend directory:

```env
PORT=3001
LLM_PROVIDER=openai
LLM_API_KEY=your-api-key
LLM_MODEL=gpt-4
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/skills` | List all available skills |
| GET | `/api/skills/:name` | Get skill details |
| POST | `/api/skills/:name/invoke` | Invoke a skill |
| GET | `/api/history` | Get invocation history |
| DELETE | `/api/history/:id` | Delete history entry |

## SCS Skills Supported

- `landing` - First principles thinking, idea validation
- `strategic-decision` - SWOT analysis, strategic planning
- `collector` - Information gathering and synthesis
- `connector` - Cross-domain knowledge connection
- `product-builder` - PRD generation, code scaffolding
- `research-integration` - Research synthesis
- `mental-models` - Decision frameworks
- `marketing-growth` - Go-to-market strategy

## Development

### Running Tests

```bash
# Frontend
cd frontend
npm test

# Backend
cd backend
npm test
```

### Building for Production

```bash
# Frontend
cd frontend
npm run build

# Backend
cd backend
npm run build
```

## Dogfooding Process

This project was designed using SCS skills:

1. `landing/first-principles` - Defined core value proposition
2. `strategic-decision/swot` - Validated market fit
3. `product-builder/spec` - Generated PRD
4. `product-builder/frontend` - Scaffolded React components
5. `product-builder/backend` - Scaffolded Express API

See `docs/case-study.md` for the full walkthrough.

## License

MIT
