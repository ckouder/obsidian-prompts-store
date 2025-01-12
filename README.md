# Obsidian Prompts Store

A repository of reusable prompts for Obsidian. Each prompt is stored as a markdown file with frontmatter metadata and can be accessed through raw.githubusercontent.com.

## Disclaimer

### Usage and Responsibility
- This repository contains prompts for Large Language Models (LLMs) that are provided "as is" without any warranties.
- Users are responsible for reviewing and testing prompts before implementation in their applications.
- We do not guarantee the accuracy, reliability, or performance of any prompts in this repository.

### Safety and Ethics
- Users must ensure prompts comply with their LLM provider's terms of service and ethical guidelines.
- Prompts should not be used to generate harmful, malicious, or discriminatory content.
- We reserve the right to remove any prompts that violate ethical AI principles or promote harmful behavior.

### Privacy and Data
- Do not include sensitive or personal information in prompts or examples.
- Be mindful of intellectual property rights when contributing prompts.
- Consider the potential implications of prompt outputs on privacy and security.

### Legal
- This repository is not affiliated with any LLM providers or platforms.
- Contributors retain ownership of their submitted prompts under the repository's license.
- Users assume all responsibility for how they use these prompts and any resulting outputs.

## Structure

```
.
├── prompts/           # Markdown files containing prompts
├── .github/
│   ├── workflows/     # GitHub Actions workflows
│   └── scripts/       # Scripts for generating prompts.json
├── prompts.json       # Auto-generated JSON file of all prompts
```

## Contributing New Prompts

1. Fork this repository and clone it locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/obsidian-prompts-store.git
   cd obsidian-prompts-store
   ```

2. Create a new branch for your prompt:
   ```bash
   git checkout -b add-my-prompt
   ```

3. Create a new markdown file in the `prompts` directory:
   - Filename must only contain letters, numbers, and hyphens (e.g., `my-prompt.md`)
   - Example: `summarize-text.md`, `analyze-data.md`

4. Add frontmatter with required metadata:
   ```yaml
   ---
   prompt-desc: "A clear, concise description of what your prompt does"
   ---
   ```

5. Add your prompt content below the frontmatter

6. Commit your changes:
   ```bash
   git add prompts/your-prompt.md
   git commit -m "Add new prompt: your-prompt"
   ```

7. Push to your fork and create a pull request:
   ```bash
   git push origin add-my-prompt
   ```
   Then go to GitHub and create a pull request from your fork to this repository.

Note: Your pull request will be automatically validated to ensure the filename and frontmatter meet the required format.
