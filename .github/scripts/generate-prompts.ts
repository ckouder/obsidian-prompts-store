import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import crypto from 'node:crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));

interface Prompt {
  filename: string;
  'prompt-id': string;
  'prompt-name': string;
  'prompt-desc': string;
}

function generateRandomId(): string {
  return crypto.randomBytes(4).toString('hex');
}

function validateFilename(file: string): void {
  if (!file.endsWith('.md')) {
    throw new Error(`Invalid file extension for "${file}". Only .md files are allowed.`);
  }

  const nameWithoutExt = file.replace(/\.md$/, '');
  if (!/^[a-zA-Z0-9-]+$/.test(nameWithoutExt)) {
    throw new Error(
      `Invalid filename "${file}". Only letters, numbers, and hyphens are allowed. ` +
      `Example valid filenames: "my-prompt.md", "prompt123.md", "some-prompt-name.md"`
    );
  }
}

function formatPromptName(filename: string): string {
  // Remove .md extension
  const nameWithoutExt = filename.replace(/\.md$/, '');
  // Replace hyphens with spaces and capitalize first letter
  return nameWithoutExt.charAt(0).toUpperCase() + 
         nameWithoutExt.slice(1).replace(/-/g, ' ');
}

function ensurePromptId(filePath: string): string {
  const content = readFileSync(filePath, 'utf8');
  const { data, content: fileContent } = matter(content);
  
  if (!data['prompt-id']) {
    // Generate new ID if none exists
    const newId = generateRandomId();
    data['prompt-id'] = newId;
    
    // Write back to file with new ID
    const updatedContent = matter.stringify(fileContent, data);
    writeFileSync(filePath, updatedContent);
    return newId;
  }
  
  return data['prompt-id'];
}

function generatePrompts(rootDir: string): void {
  // Get all markdown files in the root directory
  const promptsDir = join(rootDir, 'prompts');
  const files = readdirSync(promptsDir)
    .filter(file => file.endsWith('.md'));

  // Validate all filenames first
  files.forEach(validateFilename);

  // Process each file and extract frontmatter
  const prompts: Prompt[] = files.map(file => {
    const filePath = join(promptsDir, file);
    const content = readFileSync(filePath, 'utf8');
    const { data } = matter(content);
    
    // Ensure the file has a prompt ID
    const promptId = ensurePromptId(filePath);
    
    // Only include files that have prompt-desc
    if (data['prompt-desc']) {
      return {
        filename: file.replace(/\.md$/, ''),
        'prompt-id': promptId,
        'prompt-name': formatPromptName(file),
        'prompt-desc': data['prompt-desc']
      };
    }
    return null;
  }).filter((prompt): prompt is Prompt => prompt !== null);

  // Write the prompts to prompts.json
  writeFileSync(
    join(rootDir, 'prompts.json'),
    JSON.stringify(prompts, null, 2)
  );
}

// Execute the script when run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    // Get the project root directory (two levels up from the script)
    const rootDir = join(__dirname, '..', '..');
    generatePrompts(rootDir);
    console.log('Successfully generated prompts.json');
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error generating prompts.json:', error.message);
    } else {
      console.error('Error generating prompts.json:', error);
    }
    process.exit(1);
  }
}

export { generatePrompts }; 