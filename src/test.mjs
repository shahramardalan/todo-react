import { Octokit } from "octokit";
const token = "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"

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: token});

const resualt = await octokit.request('GET /user/repos', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

console.log(resualt)