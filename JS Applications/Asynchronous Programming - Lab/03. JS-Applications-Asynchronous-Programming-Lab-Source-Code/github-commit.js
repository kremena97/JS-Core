const selectors = {
    usernameInput: '#username',
    repoInput: '#repo-input',
    loadBtn: '#load-btn',
    commitsList: '#commits-list'
};

class GitHubCommits {
    init() {
        this.render();
        this.registerEventHandlers();
    }

    registerEventHandlers = () => {
        this.handleUsernameInput();
        this.handleRepoInput();
        this.handleLoadBtnClick();
    }

    handleUsernameInput = () => {
        const { usernameInput } = selectors;

        $(usernameInput).on('change', (event) => {
            this.username = event.target.value;
        });
    }

    handleRepoInput = () => {
        const { repoInput } = selectors;

        $(repoInput).on('change', (event) => {
            this.repo = event.target.value;
        });
    }

    handleLoadBtnClick = () => {
        const { loadBtn, repoInput } = selectors;

        $(loadBtn).on('click', () => {
            this.loadCommits();
        });
    }

    loadCommits = () => {
        const url = `https://api.github.com/repos/${this.username}/${this.repo}/commits`;
        
        $.get(url)
            .then((commits) => {
                $(selectors.commitsList).empty();
                return commits;
            })
            .then(commits => this.renderCommits(commits))
            .catch(error => console.error(error));

        this.renderLoadingIndicator(selectors.commitsList);
    }

    renderLoadingIndicator = (selector) => {
        $(selector).html('<li>Loading commits....</li>');
    }

    renderCommits = (commits) => {
        const { commitsList } = selectors;
        const $commitsList = $(commitsList);

        commits.forEach(commit => {
            $commitsList.append(`<li>${commit.commit.message}</li>`)
        });
    }

    render = () => {
        $('body').append(`
            <div>
                Username: <input type="text" id="username" />
                <br>
                Repo: <input type="text" id="repo-input" />
                <button id="load-btn">Load Commits</button>
                <ul id="commits-list"></ul>
            </div>
        `);
    }
}

window.GitHubCommits = GitHubCommits;