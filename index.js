import { exec } from 'child_process';
import { svnlookDir, repositoryDir, botusername, botavatarurl } from './DiscordBotConfig.js';
import axios from 'axios';

// Revision number of the commit
const revisionNumber = process.argv[2]
//Name of the repository that was committed to
const repositoryName = process.argv[3]
// URL of webhook to which we'll send our payload
const webhookurl = process.argv[4]
// Assemble the repository's file path
const repopath = `${repositoryDir}\\${repositoryName}`;

exec(`${svnlookDir} author ${repopath}`, async (error, revisionAuthor) => {
    if (error) console.log(error);
exec(`${svnlookDir} log ${repopath}`, async (error, revisionLog) => {
    if (error) console.log(error);
exec(`${svnlookDir} changed ${repopath}`, async (error, changedFiles) => {
    if (error) console.log(error);

    const message = `**${repositoryName}:** Revisão ${revisionNumber}, commit feito por ${revisionAuthor} \`\`\`${revisionLog}\`\`\` \n \`\`\`${changedFiles}\`\`\` `;
    
    const data = {
        'username': botusername,
        'avatar_url': botavatarurl,
        "embeds": [{
            "title": `Revisão ${revisionNumber} feita por ${revisionAuthor}`,
            "color": "65280",
            "description": `\`\`\`${revisionLog}\`\`\` \n \`\`\`${changedFiles}\`\`\``
        }]
    };

    await axios.post(webhookurl, data);
})})});
