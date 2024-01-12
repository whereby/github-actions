const core = require("@actions/core");
const { LinearClient } = require("@linear/sdk");

async function main({ apiKey, teamId, stateId, title, description }) {
    const linearClient = new LinearClient({ apiKey });

    await linearClient.createIssue({
        teamId,
        stateId,
        title,
        description,
    });
}

async function run() {
    try {
        const apiKey = core.getInput("api-key");
        const teamId = core.getInput("team-id");
        const stateId = core.getInput("state-id");
        const title = core.getInput("title");
        const description = core.getInput("description");

        await main({ apiKey, teamId, stateId, title, description });
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
