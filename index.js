import { exec } from 'child_process';
import { svnlookDir, repositoryDir, botusername, botavatarurl } from './DiscordBotConfig.js';
import axios from 'axios';

// Revision number of the commit
export const revisionNumber = process.argv[2]
//Name of the repository that was committed to
export const repositoryName = process.argv[3]
// URL of webhook to which we'll send our payload
export const webhookurl = process.argv[4]
// Assemble the repository's file path
export const repopath = `${repositoryDir}\\${repositoryName}`;

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
        'content': message
    };
    
    await axios.post(webhookurl, data);
})})});
