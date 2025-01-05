const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function generatePrompts(rootDir) {
  // Get all markdown files in the root directory
  const files = fs.readdirSync(rootDir)
    .filter(file => file.endsWith('.md'));

  // Process each file and extract frontmatter
  const prompts = files.map(file => {
    const content = fs.readFileSync(path.join(rootDir, file), 'utf8');
    const { data } = matter(content);
    
    // Only include files that have both required properties
    if (data['prompt-name'] && data['prompt-desc']) {
      return {
        'prompt-name': data['prompt-name'],
        'prompt-desc': data['prompt-desc']
      };
    }
    return null;
  }).filter(Boolean); // Remove null entries

  // Write the prompts to prompts.json
  fs.writeFileSync(
    path.join(rootDir, 'prompts.json'),
    JSON.stringify(prompts, null, 2)
  );
}

// Execute the script when run directly
if (require.main === module) {
  generatePrompts(process.cwd());
}

module.exports = { generatePrompts }; 