# Obsidian Prompts Store

A repository of reusable prompts for Obsidian, served via a simple Express server. Each prompt is stored as a markdown file with frontmatter metadata and can be accessed through a REST API.

## Structure

```
.
├── prompts/           # Markdown files containing prompts
├── .github/
│   ├── workflows/     # GitHub Actions workflows
│   └── scripts/       # Scripts for generating prompts.json
├── prompts.json       # Auto-generated JSON file of all prompts
└── server.js         # Express server for serving prompts
```

## Available Prompts

- **Echo**: Echo Input without changing anything
- **Get Todos and Dones**: Extract and organize tasks from text into done/todo lists
- **Organize and Categorize**: Analyze and categorize text into dynamic categories
- **SWOT Analysis**: Conduct detailed SWOT analysis on provided text
- **Summarize into Paragraphs**: Transform long text into structured, readable format

## Adding New Prompts

1. Create a new markdown file in the `prompts` directory
2. The filename must only contain letters, numbers, and hyphens (e.g., `my-prompt.md`)
3. Add frontmatter with required metadata:
   ```yaml
   ---
   prompt-desc: "Description of what the prompt does"
   ---
   ```
4. Add the prompt content below the frontmatter

## Development

### Prerequisites
- [Bun](https://bun.sh) (latest version)

### Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```

### Running the Server
```bash
bun start
```
The server will start at http://localhost:8081

### API Endpoints
- `GET /prompts.json`: Returns a list of all available prompts

### Scripts
- `bun start`: Start the Express server
- `bun run generate`: Generate prompts.json from markdown files

## Automation

The repository includes a GitHub Action that automatically:
1. Generates `prompts.json` when changes are pushed to main
2. Commits and pushes the updated `prompts.json` if changes are detected

## License

MIT License - See LICENSE file for details 